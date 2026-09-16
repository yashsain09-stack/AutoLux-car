/**
 * AutoLux Car Showroom - Inventory Page Script
 * Multi-criteria search, filtering, and sorting
 */

document.addEventListener('DOMContentLoaded', () => {
  initInventory();
});

function initInventory() {
  const gridContainer = document.getElementById('inventoryGrid');
  if (!gridContainer) return;

  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearch');
  const brandFilter = document.getElementById('brandFilter');
  const fuelFilter = document.getElementById('fuelFilter');
  const transmissionFilter = document.getElementById('transmissionFilter');
  const priceRange = document.getElementById('priceRange');
  const priceDisplay = document.getElementById('priceDisplay');
  const sortSelect = document.getElementById('sortSelect');
  const resultsCount = document.getElementById('resultsCount');
  const resetBtn = document.getElementById('resetFiltersBtn');
  const emptyState = document.getElementById('emptyState');
  const emptyResetBtn = document.getElementById('emptyResetBtn');

  // Populate brand filter options
  if (brandFilter) {
    const brands = getPopularBrands();
    brands.forEach(brand => {
      const opt = document.createElement('option');
      opt.value = brand;
      opt.textContent = brand;
      brandFilter.appendChild(opt);
    });
  }

  // Check URL parameters (e.g., inventory.html?brand=Porsche or ?search=GT3)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('brand') && brandFilter) {
    brandFilter.value = urlParams.get('brand');
  }
  if (urlParams.has('fuel') && fuelFilter) {
    fuelFilter.value = urlParams.get('fuel');
  }
  if (urlParams.has('search') && searchInput) {
    searchInput.value = urlParams.get('search');
    if (clearSearchBtn) clearSearchBtn.style.display = 'flex';
  }

  // Update live price range text
  if (priceRange && priceDisplay) {
    priceRange.addEventListener('input', (e) => {
      const val = Number(e.target.value);
      priceDisplay.textContent = `$${val.toLocaleString()}`;
      applyFilters();
    });
  }

  // Filter and Sort Function
  function applyFilters() {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const selectedBrand = brandFilter ? brandFilter.value : 'all';
    const selectedFuel = fuelFilter ? fuelFilter.value : 'all';
    const selectedTrans = transmissionFilter ? transmissionFilter.value : 'all';
    const maxPrice = priceRange ? Number(priceRange.value) : 400000;
    const sortVal = sortSelect ? sortSelect.value : 'default';

    // Show or hide clear search button
    if (clearSearchBtn) {
      clearSearchBtn.style.display = query.length > 0 ? 'flex' : 'none';
    }

    let filtered = CAR_DATA.filter(car => {
      // Search match
      const matchSearch = !query || 
        car.name.toLowerCase().includes(query) || 
        car.brand.toLowerCase().includes(query) || 
        car.category.toLowerCase().includes(query) ||
        car.description.toLowerCase().includes(query);

      // Brand match
      const matchBrand = selectedBrand === 'all' || car.brand.toLowerCase() === selectedBrand.toLowerCase();

      // Fuel match
      const matchFuel = selectedFuel === 'all' || car.fuelType.toLowerCase() === selectedFuel.toLowerCase();

      // Transmission match
      const matchTrans = selectedTrans === 'all' || car.transmission.toLowerCase() === selectedTrans.toLowerCase();

      // Price match
      const matchPrice = car.price <= maxPrice;

      return matchSearch && matchBrand && matchFuel && matchTrans && matchPrice;
    });

    // Sorting
    if (sortVal === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortVal === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortVal === 'hp-desc') {
      filtered.sort((a, b) => b.horsepower - a.horsepower);
    } else if (sortVal === 'year-desc') {
      filtered.sort((a, b) => b.year - a.year);
    }

    // Render cards
    if (filtered.length === 0) {
      gridContainer.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
    } else {
      if (emptyState) emptyState.style.display = 'none';
      gridContainer.innerHTML = filtered.map(car => createCarCardHTML(car)).join('');
    }

    // Update count display
    if (resultsCount) {
      resultsCount.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${CAR_DATA.length}</strong> luxury vehicles`;
    }
  }

  // Reset Filters handler
  function resetAllFilters() {
    if (searchInput) searchInput.value = '';
    if (brandFilter) brandFilter.value = 'all';
    if (fuelFilter) fuelFilter.value = 'all';
    if (transmissionFilter) transmissionFilter.value = 'all';
    if (priceRange) {
      priceRange.value = 400000;
      if (priceDisplay) priceDisplay.textContent = '$400,000';
    }
    if (sortSelect) sortSelect.value = 'default';
    if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    applyFilters();
  }

  // Attach event listeners
  if (searchInput) searchInput.addEventListener('input', applyFilters);
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearSearchBtn.style.display = 'none';
      applyFilters();
    });
  }
  if (brandFilter) brandFilter.addEventListener('change', applyFilters);
  if (fuelFilter) fuelFilter.addEventListener('change', applyFilters);
  if (transmissionFilter) transmissionFilter.addEventListener('change', applyFilters);
  if (sortSelect) sortSelect.addEventListener('change', applyFilters);
  if (resetBtn) resetBtn.addEventListener('click', resetAllFilters);
  if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAllFilters);

  // Initial render
  applyFilters();
}
