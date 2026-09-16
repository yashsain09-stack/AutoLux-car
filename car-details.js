/**
 * AutoLux Car Showroom - Individual Car Details Script
 * Dynamic car rendering, gallery switcher, loan calculator, similar vehicles
 */

document.addEventListener('DOMContentLoaded', () => {
  initCarDetails();
});

function initCarDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  let carId = urlParams.get('id');

  // If no ID or invalid, fallback to the flagship car
  let car = getCarById(carId);
  if (!car) {
    car = CAR_DATA[0];
  }

  // Update Page Title
  document.title = `${car.name} - AutoLux Showroom`;

  // Render Breadcrumb & Headers
  const breadcrumbCar = document.getElementById('breadcrumbCar');
  if (breadcrumbCar) breadcrumbCar.textContent = car.name;

  const brandEl = document.getElementById('carBrand');
  if (brandEl) brandEl.textContent = car.brand;

  const nameEl = document.getElementById('carName');
  if (nameEl) nameEl.textContent = car.name;

  const badgeEl = document.getElementById('carBadge');
  if (badgeEl) {
    if (car.badge) {
      badgeEl.textContent = car.badge;
      badgeEl.style.display = 'inline-block';
    } else {
      badgeEl.style.display = 'none';
    }
  }

  const priceEl = document.getElementById('carPrice');
  if (priceEl) priceEl.textContent = car.formattedPrice;

  const descEl = document.getElementById('carDesc');
  if (descEl) descEl.textContent = car.description;

  // Book Test Drive Links
  const bookBtns = document.querySelectorAll('.btn-book-this-car');
  bookBtns.forEach(btn => {
    btn.href = `book-test-drive.html?car=${car.id}`;
  });

  // Gallery Setup
  const mainImage = document.getElementById('galleryMainImg');
  const thumbsContainer = document.getElementById('galleryThumbs');

  if (mainImage && thumbsContainer) {
    mainImage.src = car.gallery[0] || car.heroImage;
    mainImage.alt = car.name;

    thumbsContainer.innerHTML = car.gallery.map((imgUrl, index) => `
      <div class="thumb-item ${index === 0 ? 'active' : ''}" data-src="${imgUrl}">
        <img src="${imgUrl}" alt="${car.name} photo ${index + 1}" loading="lazy">
      </div>
    `).join('');

    thumbsContainer.querySelectorAll('.thumb-item').forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbsContainer.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        const newSrc = thumb.getAttribute('data-src');
        mainImage.style.opacity = '0.5';
        setTimeout(() => {
          mainImage.src = newSrc;
          mainImage.style.opacity = '1';
        }, 150);
      });
    });
  }

  // Specifications Matrix (8 spec tiles)
  const specsGrid = document.getElementById('specsGrid');
  if (specsGrid) {
    const specItems = [
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
        label: 'Engine Architecture',
        value: car.engine
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
        label: 'Max Horsepower',
        value: car.power
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
        label: 'Acceleration (0-60)',
        value: car.acceleration
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14v8M7.8 8.8l-4.2-4.2M16.2 8.8l4.2-4.2M2 14h4M18 14h4M4 14a8 8 0 0 1 16 0"></path></svg>`,
        label: 'Top Speed',
        value: car.topSpeed
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
        label: 'Transmission',
        value: car.transmission
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 22v-8.5a2.5 2.5 0 0 1 5 0V22M13 22v-4a2 2 0 0 1 4 0v4M18 10a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v12h14V10z"></path></svg>`,
        label: 'Fuel & Efficiency',
        value: `${car.fuelType} (${car.mileage})`
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
        label: 'Seating Capacity',
        value: car.seating
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>`,
        label: 'Drivetrain Platform',
        value: car.drivetrain
      }
    ];

    specsGrid.innerHTML = specItems.map(item => `
      <div class="spec-tile">
        <div class="spec-tile-icon">${item.icon}</div>
        <div class="spec-tile-content">
          <h4>${item.label}</h4>
          <p>${item.value}</p>
        </div>
      </div>
    `).join('');
  }

  // Features List
  const featuresContainer = document.getElementById('featuresContainer');
  if (featuresContainer && car.features) {
    featuresContainer.innerHTML = car.features.map(grp => `
      <div class="feature-group-card">
        <h3>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          ${grp.category}
        </h3>
        <ul class="feature-list-items">
          ${grp.items.map(item => `
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>${item}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');
  }

  // Interactive Loan / EMI Calculator
  initEMICalculator(car.price);

  // Similar Cars
  const similarContainer = document.getElementById('similarCarsGrid');
  if (similarContainer) {
    const similar = CAR_DATA.filter(c => c.id !== car.id).slice(0, 3);
    similarContainer.innerHTML = similar.map(c => createCarCardHTML(c)).join('');
  }
}

/* --------------------------------------------------------------------------
   Interactive EMI Calculator
   -------------------------------------------------------------------------- */
function initEMICalculator(carPrice) {
  const downPaymentSlider = document.getElementById('calcDownPayment');
  const downPaymentDisplay = document.getElementById('downPaymentDisplay');
  const downPaymentAmount = document.getElementById('downPaymentAmount');

  const tenureSlider = document.getElementById('calcTenure');
  const tenureDisplay = document.getElementById('tenureDisplay');

  const rateSlider = document.getElementById('calcRate');
  const rateDisplay = document.getElementById('rateDisplay');

  const monthlyPaymentEl = document.getElementById('calcMonthlyPayment');
  const totalLoanEl = document.getElementById('calcTotalLoan');
  const totalInterestEl = document.getElementById('calcTotalInterest');

  if (!downPaymentSlider || !tenureSlider || !rateSlider || !monthlyPaymentEl) return;

  function recalculate() {
    const downPct = Number(downPaymentSlider.value);
    const tenureYears = Number(tenureSlider.value);
    const annualRate = Number(rateSlider.value);

    // Update labels
    downPaymentDisplay.textContent = `${downPct}%`;
    const downAmountVal = (carPrice * downPct) / 100;
    downPaymentAmount.textContent = `$${Math.round(downAmountVal).toLocaleString()}`;

    tenureDisplay.textContent = `${tenureYears} Years (${tenureYears * 12} Mos)`;
    rateDisplay.textContent = `${annualRate.toFixed(1)}% APR`;

    const principal = carPrice - downAmountVal;
    const monthlyRate = (annualRate / 100) / 12;
    const totalMonths = tenureYears * 12;

    let monthlyPayment = 0;
    if (monthlyRate > 0) {
      monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    } else {
      monthlyPayment = principal / totalMonths;
    }

    const totalCost = (monthlyPayment * totalMonths) + downAmountVal;
    const totalInterest = (monthlyPayment * totalMonths) - principal;

    monthlyPaymentEl.textContent = `$${Math.round(monthlyPayment).toLocaleString()}`;
    if (totalLoanEl) totalLoanEl.textContent = `$${Math.round(principal).toLocaleString()}`;
    if (totalInterestEl) totalInterestEl.textContent = `$${Math.round(totalInterest).toLocaleString()}`;
  }

  downPaymentSlider.addEventListener('input', recalculate);
  tenureSlider.addEventListener('input', recalculate);
  rateSlider.addEventListener('input', recalculate);

  recalculate();
}
