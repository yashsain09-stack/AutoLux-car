/**
 * AutoLux Car Showroom - Contact & FAQ Script
 * Contact form validation, FAQ accordion toggles, and interactive map triggers
 */

document.addEventListener('DOMContentLoaded', () => {
  initContact();
  initFAQ();
});

function initContact() {
  const contactForm = document.getElementById('contactForm');
  const getDirectionsBtn = document.getElementById('getDirectionsBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const phoneInput = document.getElementById('contactPhone');
      const subjectInput = document.getElementById('contactSubject');
      const messageInput = document.getElementById('contactMessage');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
        setInvalid(nameInput, 'Please provide your name (at least 3 characters).');
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

      // Validate Subject
      if (!subjectInput.value.trim()) {
        setInvalid(subjectInput, 'Please specify an inquiry subject.');
        isValid = false;
      } else {
        setValid(subjectInput);
      }

      // Validate Message
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        setInvalid(messageInput, 'Message should be at least 10 characters long.');
        isValid = false;
      } else {
        setValid(messageInput);
      }

      if (!isValid) return;

      // Save inquiry to localStorage
      const inquiry = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        subject: subjectInput.value.trim(),
        message: messageInput.value.trim(),
        timestamp: new Date().toISOString()
      };

      try {
        const list = JSON.parse(localStorage.getItem('autolux_inquiries') || '[]');
        list.push(inquiry);
        localStorage.setItem('autolux_inquiries', JSON.stringify(list));
      } catch (err) {
        console.warn('Storage error:', err);
      }

      showToast('Thank you! Your message has been sent to our concierge team.', 'success');
      contactForm.reset();
    });
  }

  // Interactive Map Get Directions Button
  if (getDirectionsBtn) {
    getDirectionsBtn.addEventListener('click', () => {
      showToast('Opening directions to AutoLux Beverly Hills (34.0736° N, 118.4004° W)...', 'success');
      window.open('https://maps.google.com/?q=Beverly+Hills,+CA', '_blank');
    });
  }

  function setInvalid(inputEl, msg) {
    inputEl.classList.add('is-invalid');
    const feedback = inputEl.parentElement.querySelector('.invalid-feedback');
    if (feedback) feedback.textContent = msg;
  }

  function setValid(inputEl) {
    inputEl.classList.remove('is-invalid');
  }
}

/* --------------------------------------------------------------------------
   FAQ Accordion Toggles
   -------------------------------------------------------------------------- */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other open items
      faqItems.forEach(otherItem => otherItem.classList.remove('active'));

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}
