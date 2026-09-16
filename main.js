/**
 * AutoLux Car Showroom - Main Shared Script
 * Handles navigation, mobile drawer, toast notifications, and common utilities
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  highlightActiveNavLink();
  initScrollEffects();
});

/* --------------------------------------------------------------------------
   Navigation & Mobile Menu
   -------------------------------------------------------------------------- */
function initNavigation() {
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileNav.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
      }
    });

    // Close when a link inside mobile nav is clicked
    mobileNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   Sticky Header on Scroll
   -------------------------------------------------------------------------- */
function initScrollEffects() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* --------------------------------------------------------------------------
   Active Navigation Link
   -------------------------------------------------------------------------- */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* --------------------------------------------------------------------------
   Reusable Car Card HTML Generator
   -------------------------------------------------------------------------- */
function createCarCardHTML(car) {
  return `
    <div class="car-card" data-id="${car.id}">
      <div class="car-card-image-wrap">
        <img src="${car.heroImage}" alt="${car.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'">
        ${car.badge ? `<span class="car-card-badge">${car.badge}</span>` : ''}
        <span class="car-card-category">${car.category}</span>
      </div>
      <div class="car-card-body">
        <span class="car-card-brand">${car.brand}</span>
        <h3 class="car-card-title">${car.name}</h3>
        <div class="car-card-price-box">
          <span class="car-card-price">${car.formattedPrice}</span>
          <span class="car-card-price-label">MSRP</span>
        </div>
        
        <div class="car-card-specs">
          <div class="spec-item">
            <span class="spec-label">Power</span>
            <span class="spec-value">${car.power.split('@')[0]}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Fuel</span>
            <span class="spec-value">${car.fuelType}</span>
          </div>
          <div class="spec-item">
            <span class="spec-label">Trans</span>
            <span class="spec-value">${car.transmission}</span>
          </div>
        </div>

        <div class="car-card-actions">
          <a href="car-details.html?id=${car.id}" class="btn btn-secondary btn-sm">
            Details
          </a>
          <a href="book-test-drive.html?car=${car.id}" class="btn btn-primary btn-sm">
            Test Drive
          </a>
        </div>
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   Toast Notifications
   -------------------------------------------------------------------------- */
function showToast(message, type = 'success', duration = 4000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconSvg = type === 'success' 
    ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;

  toast.innerHTML = `
    <span>${iconSvg}</span>
    <span style="flex: 1;">${message}</span>
    <button style="color: var(--text-muted); padding: 4px; font-size: 1.1rem; line-height: 1;" onclick="this.parentElement.remove()">&times;</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
