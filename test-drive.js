/**
 * AutoLux Car Showroom - Test Drive Booking Script
 * Form validation, dynamic car selection, slot picker, and confirmation modal
 */

document.addEventListener('DOMContentLoaded', () => {
  initTestDrive();
});

function initTestDrive() {
  const form = document.getElementById('testDriveForm');
  const carSelect = document.getElementById('carModelSelect');
  const dateInput = document.getElementById('preferredDate');
  const slotPills = document.querySelectorAll('.slot-pill');
  const modal = document.getElementById('bookingModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  let selectedSlot = '10:00 AM'; // default selected slot

  // Populate car models dropdown
  if (carSelect) {
    CAR_DATA.forEach(car => {
      const opt = document.createElement('option');
      opt.value = car.id;
      opt.textContent = `${car.brand} - ${car.name} (${car.formattedPrice})`;
      carSelect.appendChild(opt);
    });

    // Check if car was passed via URL (?car=porsche-911-gt3)
    const urlParams = new URLSearchParams(window.location.search);
    const preselectedCar = urlParams.get('car');
    if (preselectedCar) {
      carSelect.value = preselectedCar;
    }
  }

  // Set minimum date to tomorrow
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
    dateInput.value = `${yyyy}-${mm}-${dd}`; // default to tomorrow
  }

  // Slot buttons selection
  slotPills.forEach(pill => {
    pill.addEventListener('click', () => {
      slotPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedSlot = pill.getAttribute('data-time') || pill.textContent.trim();
    });
  });

  // Modal dismiss
  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('open');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  }

  // Form Validation and Submission
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('fullName');
      const emailInput = document.getElementById('emailAddress');
      const phoneInput = document.getElementById('phoneNumber');
      const licenseCheck = document.getElementById('licenseCheck');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
        setInvalid(nameInput, 'Please enter your full legal name (min 3 characters).');
        isValid = false;
      } else {
        setValid(nameInput);
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        setInvalid(emailInput, 'Please provide a valid email address.');
        isValid = false;
      } else {
        setValid(emailInput);
      }

      // Validate Phone (at least 10 digits)
      const phoneClean = phoneInput.value.replace(/\D/g, '');
      if (phoneClean.length < 10) {
        setInvalid(phoneInput, 'Please provide a valid 10-digit phone number.');
        isValid = false;
      } else {
        setValid(phoneInput);
      }

      // Validate Car Selection
      if (!carSelect.value) {
        setInvalid(carSelect, 'Please select a vehicle to test drive.');
        isValid = false;
      } else {
        setValid(carSelect);
      }

      // Validate Date
      if (!dateInput.value) {
        setInvalid(dateInput, 'Please select a valid appointment date.');
        isValid = false;
      } else {
        setValid(dateInput);
      }

      // Validate License Checkbox
      if (!licenseCheck.checked) {
        showToast('Please confirm you hold a valid driver\'s license.', 'danger');
        isValid = false;
      }

      if (!isValid) return;

      // Success: Generate Booking
      const chosenCar = getCarById(carSelect.value) || CAR_DATA[0];
      const bookingCode = `ALX-${Math.floor(100000 + Math.random() * 900000)}`;

      const bookingRecord = {
        id: bookingCode,
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        car: chosenCar.name,
        date: dateInput.value,
        slot: selectedSlot,
        createdAt: new Date().toISOString()
      };

      // Store in localStorage
      try {
        const stored = JSON.parse(localStorage.getItem('autolux_test_drives') || '[]');
        stored.push(bookingRecord);
        localStorage.setItem('autolux_test_drives', JSON.stringify(stored));
      } catch (err) {
        console.warn('Storage error:', err);
      }

      // Populate Modal Content
      document.getElementById('modalRefCode').textContent = bookingCode;
      document.getElementById('modalName').textContent = bookingRecord.name;
      document.getElementById('modalCar').textContent = bookingRecord.car;
      document.getElementById('modalDateTime').textContent = `${bookingRecord.date} at ${bookingRecord.slot}`;

      // Show Modal & Notification
      modal.classList.add('open');
      showToast('Test drive appointment booked successfully!', 'success');

      // Reset Form
      form.reset();
      if (dateInput) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInput.value = tomorrow.toISOString().split('T')[0];
      }
    });
  }

  function setInvalid(inputEl, message) {
    inputEl.classList.add('is-invalid');
    const feedback = inputEl.parentElement.querySelector('.invalid-feedback');
    if (feedback) feedback.textContent = message;
  }

  function setValid(inputEl) {
    inputEl.classList.remove('is-invalid');
  }
}
