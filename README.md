# AutoLux Car Showroom - Web Application

A modern, responsive, multi-page luxury automotive showroom website built as a **B.Tech College Web Development Capstone Project**.

![AutoLux Showroom](https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80)

---

## 🌟 Key Highlights & Project Features

- **Modern Automotive Dark Aesthetic**: Deep midnight palette (`#070a12`, `#0c111d`), glassmorphism cards (`backdrop-filter: blur(16px)`), luminous electric sapphire accents (`#2563eb`, `#38bdf8`), and typography powered by `Outfit` and `Plus Jakarta Sans`.
- **6 Complete Pages**:
  1. `index.html` - **Home Page** (Hero with cinematic backdrop, key stats counters, brand tiles, featured car collection, why choose us cards, client testimonials, footer).
  2. `inventory.html` - **Cars / Inventory** (Live keyword search, brand dropdown, dynamic max budget price slider, fuel/powertrain filter, transmission filter, sorting, live vehicle count, and empty state handler).
  3. `car-details.html` - **Individual Car Details** (Dynamic page driven by `?id=...` URL parameter, high-resolution interactive thumbnail gallery, 8-card technical specification matrix, categorized features list, interactive Loan & EMI calculator, similar vehicles).
  4. `about.html` - **About Us** (Heritage story, milestone statistics, 4 core showroom pillars, executive and diagnostic team profile cards).
  5. `book-test-drive.html` - **Book a Test Drive** (Client-side validated appointment booking form, car pre-selection from URL, tomorrow+ date validation, interactive time slot selector, license confirmation, and modal confirmation receipt with unique `ALX-2024-XXXX` booking reference).
  6. `contact.html` - **Contact & Directions** (Showroom coordinates cards, contact inquiry form with feedback, custom interactive dark map mockup with animated pin, and expandable FAQ accordion).
- **Interactive EMI / Loan Calculator**: Dynamically computes monthly payment, principal financed, and total interest in real-time as users adjust down payment, loan tenure, and APR sliders.
- **Client-Side Data Persistence**: Test drive bookings and contact inquiries persist across sessions using browser `localStorage`.
- **Zero External Backend Dependencies**: Runs reliably offline or online via standard HTML5/CSS3/JavaScript.

---

## 📁 Project Architecture

```
autolux-car-showroom/
├── index.html              # Home page
├── inventory.html          # Inventory & search/filter page
├── car-details.html        # Dynamic individual car details & EMI calculator
├── about.html              # Heritage, metrics & leadership team
├── book-test-drive.html    # VIP test drive reservation & confirmation modal
├── contact.html            # Concierge info, inquiry form & map mockup
├── README.md               # Project documentation
├── css/
│   ├── style.css           # Global tokens, typography, utilities & animations
│   ├── components.css      # Header, cards, filters, modal, gallery & footer
│   └── responsive.css      # Breakpoints for desktop, tablet & mobile viewports
└── js/
    ├── data.js             # 12-car realistic luxury dataset with complete specs
    ├── main.js             # Sticky header, mobile hamburger drawer, toast alerts
    ├── inventory.js        # Live search, multi-filter, sorting & count logic
    ├── car-details.js      # Dynamic car reader, gallery switcher & EMI math
    ├── test-drive.js       # Form validation, slot selector & booking modal
    └── contact.js          # Inquiry submission & FAQ accordion logic
```

---

## 🚀 How to Run Locally

### Option 1: Direct File Opening (Easiest)
1. Navigate to the project directory:
   `C:\Users\PRAGATI\.gemini\antigravity\scratch\autolux-car-showroom`
2. Double-click `index.html` to open it in any web browser (Google Chrome, Microsoft Edge, Firefox, Safari).

### Option 2: Local Python Server (Recommended)
1. Open terminal or PowerShell in the project directory:
   ```powershell
   cd C:\Users\PRAGATI\.gemini\antigravity\scratch\autolux-car-showroom
   ```
2. Start Python's built-in HTTP server:
   ```powershell
   python -m http.server 8000
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:8000
   ```

---

## 🚗 Sample Car Fleet (12 Realistic Models)
- **Porsche 911 GT3 (992)** - 502 HP, Naturally Aspirated Flat-6, 0-60 in 3.2s ($182,900)
- **BMW M4 Competition xDrive** - 503 HP, TwinPower Turbo Inline-6, 0-60 in 3.4s ($86,300)
- **Mercedes-AMG GT 63 S E Performance** - 831 HP, V8 Biturbo Hybrid, 0-60 in 2.9s ($194,900)
- **Audi RS e-tron GT** - 637 HP, Electric Quattro, 0-60 in 3.1s ($147,100)
- **Range Rover SV LWB** - 606 HP, Twin-Turbo V8 Mild-Hybrid, 0-60 in 4.3s ($234,000)
- **Tesla Model S Plaid** - 1,020 HP, Tri-Motor AWD, 0-60 in 1.99s ($89,990)
- **Ferrari Roma Spider** - 612 HP, 3.9L Twin-Turbo V8, 0-60 in 3.3s ($277,970)
- **Aston Martin DB12 Super Tourer** - 671 HP, Handcrafted V8, 0-60 in 3.5s ($245,000)
- **Lamborghini Urus Performante** - 657 HP, 4.0L Twin-Turbo V8, 0-60 in 3.1s ($269,885)
- **Rolls-Royce Ghost Series II** - 563 HP, 6.75L Twin-Turbo V12 ($354,750)
- **McLaren Artura Tech** - 671 HP, Twin-Turbo V6 Hybrid, 0-60 in 3.0s ($237,500)
- **Lexus LC 500 Bespoke** - 471 HP, Naturally Aspirated 5.0L V8 ($99,800)

---

## 🛠️ Technologies Used
- **HTML5**: Semantic tags, clean accessible structure, custom data attributes
- **CSS3**: Flexbox, CSS Grid, CSS Custom Properties (Variables), Glassmorphism, Keyframes
- **JavaScript (ES6+)**: Modular code, DOM manipulation, URLSearchParams, Event Delegation, LocalStorage
