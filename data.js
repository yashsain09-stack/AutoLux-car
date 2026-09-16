/**
 * AutoLux Car Showroom - Vehicle Dataset
 * Realistic luxury & performance car inventory data
 */

const CAR_DATA = [
  {
    id: "porsche-911-gt3",
    name: "Porsche 911 GT3 (992)",
    brand: "Porsche",
    category: "Coupe / Track",
    price: 182900,
    formattedPrice: "$182,900",
    year: 2024,
    fuelType: "Petrol",
    transmission: "Dual-Clutch",
    engine: "4.0L Naturally Aspirated Boxer 6",
    power: "502 hp @ 8,400 RPM",
    horsepower: 502,
    torque: "346 lb-ft @ 6,100 RPM",
    acceleration: "3.2 sec (0-60 mph)",
    topSpeed: "197 mph (317 km/h)",
    mileage: "15 City / 18 Hwy mpg",
    seating: "2 Passengers",
    drivetrain: "Rear-Wheel Drive (RWD)",
    badge: "Track Edition",
    featured: true,
    popular: true,
    heroImage: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The Porsche 911 GT3 represents the pinnacle of naturally aspirated motorsport engineering translated into a road-legal masterpiece. Featuring a high-revving 4.0-liter flat-six engine developed by Porsche Motorsport, a swan-neck rear wing generating monumental downforce, and double-wishbone front suspension derived from the 911 RSR race car. Every millimeter is honed for unfiltered driver engagement.",
    features: [
      {
        category: "Performance & Handling",
        items: [
          "Double-wishbone front suspension with motorsport-derived ball joints",
          "7-speed Porsche Doppelkupplung (PDK) with track-oriented calibration",
          "Porsche Torque Vectoring Plus (PTV+) with electronic rear differential lock",
          "Porsche Ceramic Composite Brakes (PCCB) with yellow calipers"
        ]
      },
      {
        category: "Interior & Comfort",
        items: [
          "Full carbon fiber bucket seats upholstered in Race-Tex with GT silver stitching",
          "GT3 sport steering wheel with mode switch and gearshift paddles",
          "Chrono Package including lap trigger preparation and analog stopwatch",
          "Bose® Surround Sound System with 12 speakers and 570 watts"
        ]
      },
      {
        category: "Technology & Safety",
        items: [
          "Porsche Communication Management (PCM) with 10.9-inch HD touchscreen",
          "Track Precision App integration for real-time telemetry and analysis",
          "LED Matrix headlights with Porsche Dynamic Light System Plus (PDLS+)",
          "ParkAssist (rear) with reversing camera and acoustic warning"
        ]
      }
    ]
  },
  {
    id: "bmw-m4-competition",
    name: "BMW M4 Competition xDrive",
    brand: "BMW",
    category: "Coupe",
    price: 86300,
    formattedPrice: "$86,300",
    year: 2024,
    fuelType: "Petrol",
    transmission: "Automatic",
    engine: "3.0L BMW M TwinPower Turbo Inline-6",
    power: "503 hp @ 6,250 RPM",
    horsepower: 503,
    torque: "479 lb-ft @ 2,750 RPM",
    acceleration: "3.4 sec (0-60 mph)",
    topSpeed: "180 mph (290 km/h)",
    mileage: "16 City / 23 Hwy mpg",
    seating: "4 Passengers",
    drivetrain: "M xDrive Intelligent All-Wheel Drive",
    badge: "Competition",
    featured: true,
    popular: true,
    heroImage: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The BMW M4 Competition Coupe is an uncompromising expression of athletic power and everyday usability. Its 3.0-liter high-revving inline-6 cylinder twin-turbo engine produces 503 horsepower delivered via the rear-biased M xDrive system, allowing you to transition between all-weather stability and pure rear-wheel-drive drift dynamics at the press of a button.",
    features: [
      {
        category: "Performance & Handling",
        items: [
          "M xDrive with configurable 4WD, 4WD Sport, and pure 2WD modes",
          "8-speed M Sport Automatic transmission with Drivelogic",
          "Adaptive M Suspension with electronically controlled dampers",
          "M Compound Brakes with blue calipers and high thermal resilience"
        ]
      },
      {
        category: "Interior & Comfort",
        items: [
          "Extended Merino leather upholstery with illuminated M badges",
          "M Carbon bucket seats with heated element and removable headrest cushions",
          "Harman Kardon® Surround Sound System with 16 speakers",
          "3-Zone Automatic Climate Control with microfilter"
        ]
      },
      {
        category: "Technology & Safety",
        items: [
          "BMW Curved Display combining 12.3-inch cluster and 14.9-inch central screen",
          "BMW iDrive 8.5 with intelligent voice control and wireless Apple CarPlay",
          "Active Driving Assistant including Frontal Collision and Lane Departure Warning",
          "Head-Up Display with M-specific shift lights and rev display"
        ]
      }
    ]
  },
  {
    id: "mercedes-amg-gt",
    name: "Mercedes-AMG GT 63 S E Performance",
    brand: "Mercedes-Benz",
    category: "Supercar / 4-Door",
    price: 194900,
    formattedPrice: "$194,900",
    year: 2025,
    fuelType: "Hybrid",
    transmission: "Automatic",
    engine: "4.0L V8 Biturbo + Permanently Excited Electric Motor",
    power: "831 hp (Combined)",
    horsepower: 831,
    torque: "1,033 lb-ft (Combined)",
    acceleration: "2.9 sec (0-60 mph)",
    topSpeed: "196 mph (316 km/h)",
    mileage: "21 Combined MPGe",
    seating: "4 Passengers",
    drivetrain: "AMG Performance 4MATIC+ All-Wheel Drive",
    badge: "Plug-in Hybrid",
    featured: true,
    popular: true,
    heroImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The Mercedes-AMG GT 63 S E Performance represents the most powerful series-production vehicle ever conceived in Affalterbach. Merging Formula 1 hybrid technology with a handcrafted 4.0-liter AMG biturbo V8, it unleashes a monumental 831 horsepower and over 1,000 lb-ft of torque. It blends four-door grand touring luxury with the devastating velocity of an apex supercar.",
    features: [
      {
        category: "Performance & Handling",
        items: [
          "Handcrafted AMG 4.0L V8 Biturbo with high-performance battery on rear axle",
          "AMG RIDE CONTROL+ air suspension with multi-chamber leveling",
          "Active rear-axle steering up to 2.5 degrees for razor-sharp agility",
          "AMG high-performance ceramic composite braking system"
        ]
      },
      {
        category: "Interior & Comfort",
        items: [
          "Exclusive Nappa leather upholstery with diamond quilting",
          "Burmester® High-End 3D Surround Sound System (1,450 watts, 25 speakers)",
          "Multicontour active front seats with pneumatic massage functions",
          "ENERGIZING Comfort packages with aromatherapy and ambient light themes"
        ]
      },
      {
        category: "Technology & Safety",
        items: [
          "MBUX multimedia system with hybrid-specific displays and augmented reality HUD",
          "DISTRONIC Active Distance Assist with steering and evasive maneuver assist",
          "AMG TRACK PACE integrated virtual race engineer",
          "Digital Light system with projection of warning icons onto the road"
        ]
      }
    ]
  },
  {
    id: "audi-rs-etron-gt",
    name: "Audi RS e-tron GT",
    brand: "Audi",
    category: "Gran Turismo / Electric",
    price: 147100,
    formattedPrice: "$147,100",
    year: 2024,
    fuelType: "Electric",
    transmission: "Automatic",
    engine: "Dual Permanently Synchronous Electric Motors",
    power: "637 hp (Boost Mode)",
    horsepower: 637,
    torque: "612 lb-ft",
    acceleration: "3.1 sec (0-60 mph)",
    topSpeed: "155 mph (250 km/h)",
    mileage: "249 Miles Total Range (EPA)",
    seating: "5 Passengers",
    drivetrain: "electric quattro® All-Wheel Drive",
    badge: "100% Electric",
    featured: true,
    popular: true,
    heroImage: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The Audi RS e-tron GT is a visionary gran turismo that merges breathless electric performance with statuesque German aesthetics. Featuring 800-volt architecture capable of charging from 5% to 80% in just 22.5 minutes, dual synchronous motors outputting 637 hp in boost mode, and an acoustic sound design that creates an authentic, futuristic auditory presence.",
    features: [
      {
        category: "Performance & Handling",
        items: [
          "800-volt battery architecture with ultra-fast 270 kW DC charging capability",
          "Adaptive three-chamber air suspension with continuously variable dampers",
          "Controlled rear differential lock with torque vectoring",
          "Tungsten carbide coated brake rotors with 10-piston front calipers"
        ]
      },
      {
        category: "Interior & Comfort",
        items: [
          "Leather-free interior package crafted from Dinamica® and recycled materials",
          "Sport Seats Pro with 18-way power adjustment, massage, and pneumatic side bolsters",
          "Bang & Olufsen 3D Premium Sound System with 16 speakers and 710 watts",
          "Panoramic fixed glass roof with thermal and UV protection"
        ]
      },
      {
        category: "Technology & Safety",
        items: [
          "Audi virtual cockpit plus with e-tron specific power meter and battery telemetry",
          "Matrix-design LED headlights with Audi laser light technology",
          "Top-view camera system with 360-degree virtual 3D rendering",
          "Audi pre sense front, rear, side, and intersection assist"
        ]
      }
    ]
  },
  {
    id: "range-rover-sv",
    name: "Range Rover SV LWB",
    brand: "Land Rover",
    category: "Luxury SUV",
    price: 234000,
    formattedPrice: "$234,000",
    year: 2024,
    fuelType: "Petrol",
    transmission: "Automatic",
    engine: "4.4L Twin-Turbocharged V8 Mild Hybrid",
    power: "606 hp @ 6,000 RPM",
    horsepower: 606,
    torque: "553 lb-ft @ 1,800 RPM",
    acceleration: "4.3 sec (0-60 mph)",
    topSpeed: "162 mph (261 km/h)",
    mileage: "16 City / 22 Hwy mpg",
    seating: "4 Executive Class",
    drivetrain: "Intelligent All-Wheel Drive (iAWD)",
    badge: "Flagship Luxury",
    featured: false,
    popular: true,
    heroImage: "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The Range Rover SV Long Wheelbase is an exemplary standard of peerless refinement, bespoke personalization, and serene capability. Featuring exquisite ceramic controls, an electrically deployable Club Table in the rear executive suite, and active noise cancellation that isolates the cabin like an acoustic sanctuary on wheels.",
    features: [
      {
        category: "Performance & Handling",
        items: [
          "Dynamic Response Pro electronic active roll control (48-volt system)",
          "All-Wheel Steering delivering tighter turning circle than a compact hatchback",
          "Electronic Air Suspension with Dynamic Response and predictive navigation pre-sets",
          "Terrain Response 2 with automatic terrain sensing and wade sensing up to 900mm"
        ]
      },
      {
        category: "Interior & Comfort",
        items: [
          "SV Signature Suite 4-seat configuration with electrically deployable club table",
          "Meridian™ Signature Sound System with 35 speakers including headrest speakers",
          "Crafted tactile ceramic gear selector and volume controllers",
          "Executive Class Comfort-Plus rear seats with hot stone massage"
        ]
      },
      {
        category: "Technology & Safety",
        items: [
          "13.1-inch curved floating glass touchscreen with Pivi Pro infotainment",
          "Dual 11.4-inch rear entertainment HD touchscreens with HDMI inputs",
          "Cabin Air Purification Pro with PM2.5 filtration and nanoe™ X technology",
          "ClearSight ground view and 3D surround camera with remote park assist"
        ]
      }
    ]
  },
  {
    id: "tesla-model-s-plaid",
    name: "Tesla Model S Plaid",
    brand: "Tesla",
    category: "Sedan / Hyper-Electric",
    price: 89990,
    formattedPrice: "$89,990",
    year: 2024,
    fuelType: "Electric",
    transmission: "Automatic",
    engine: "Tri-Motor All-Wheel Drive with Carbon-Sleeved Rotors",
    power: "1,020 hp",
    horsepower: 1020,
    torque: "1,050 lb-ft",
    acceleration: "1.99 sec (0-60 mph)",
    topSpeed: "200 mph (322 km/h)",
    mileage: "359 Miles Range (EPA)",
    seating: "5 Passengers",
    drivetrain: "Tri-Motor All-Wheel Drive",
    badge: "Hyper-EV",
    featured: true,
    popular: true,
    heroImage: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The Tesla Model S Plaid holds the crown as one of the fastest accelerating production vehicles on Earth. With three electric motors featuring carbon-sleeved rotors producing 1,020 hp, it blasts from 0 to 60 mph in under two seconds flat while accommodating five adults, their luggage, and offering over 350 miles of clean electric range.",
    features: [
      {
        category: "Performance & Handling",
        items: [
          "Tri-Motor AWD with torque vectoring and carbon-sleeved rotors",
          "Track Mode with individual motor bias and battery cooling optimization",
          "Adaptive Air Suspension with intelligent location-based ride height adjustment",
          "Drag coefficient of Cd 0.208 — lowest of any mass production car"
        ]
      },
      {
        category: "Interior & Comfort",
        items: [
          "17-inch cinematic display with left-right tilt and 2200 x 1300 resolution",
          "22-speaker, 960-watt audio system with active road noise reduction",
          "Heated and ventilated front seating with wireless multi-device chargers",
          "Rear 8-inch console display with gaming and movie streaming capabilities"
        ]
      },
      {
        category: "Technology & Safety",
        items: [
          "Full Self-Driving capability hardware suite with 8 external cameras",
          "10 teraflops of processing power enabling console-grade in-car gaming",
          "Sentry mode, dog mode, and remote app climate pre-conditioning",
          "Automatic opening and closing falcon-wing/power liftgate options"
        ]
      }
    ]
  },
  {
    id: "ferrari-roma",
    name: "Ferrari Roma Spider",
    brand: "Ferrari",
    category: "Convertible / Grand Tourer",
    price: 277970,
    formattedPrice: "$277,970",
    year: 2024,
    fuelType: "Petrol",
    transmission: "Dual-Clutch",
    engine: "3.9L Twin-Turbocharged 90° V8",
    power: "612 hp @ 7,500 RPM",
    horsepower: 612,
    torque: "561 lb-ft @ 3,000 RPM",
    acceleration: "3.3 sec (0-60 mph)",
    topSpeed: "199 mph (320 km/h)",
    mileage: "17 City / 22 Hwy mpg",
    seating: "2+2 Seater",
    drivetrain: "Rear-Wheel Drive (RWD)",
    badge: "Italian Masterpiece",
    featured: false,
    popular: true,
    heroImage: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The Ferrari Roma Spider embodies 'La Nuova Dolce Vita'—a contemporary revival of the carefree Italian elegance of 1950s and 60s Rome. With a patented bespoke soft top that deploys in just 13.5 seconds up to 37 mph, Ferrari's award-winning twin-turbo V8, and Side Slip Control 6.0, it marries sculptural harmony with scintillating Maranello performance.",
    features: [
      {
        category: "Performance & Handling",
        items: [
          "Award-winning Ferrari F154 V8 with Variable Boost Management",
          "8-speed dual-clutch transmission derived from the SF90 Stradale",
          "Side Slip Angle Control 6.0 (SSC) with Ferrari Dynamic Enhancer",
          "Active mobile rear spoiler integrated flush into the rear screen"
        ]
      },
      {
        category: "Interior & Comfort",
        items: [
          "Dual-cockpit layout separating driver and passenger in tailored luxury",
          "Poltrona Frau® fine Italian leather combined with Alcantara accents",
          "Patented wind deflector integrated into the rear bench backrest",
          "Neck warmers with 3 intensity levels integrated into front headrests"
        ]
      },
      {
        category: "Technology & Safety",
        items: [
          "16-inch curved HD digital instrument cluster with customizable views",
          "8.4-inch portrait central touchscreen with Apple CarPlay and Android Auto",
          "Steering wheel with touch capacitive HMI controls and legendary Manettino",
          "ADAS suite including Adaptive Cruise, Autonomous Emergency Braking, 360 Camera"
        ]
      }
    ]
  },
  {
    id: "aston-martin-db12",
    name: "Aston Martin DB12 Super Tourer",
    brand: "Aston Martin",
    category: "Super Tourer",
    price: 245000,
    formattedPrice: "$245,000",
    year: 2024,
    fuelType: "Petrol",
    transmission: "Automatic",
    engine: "4.0L Twin-Turbocharged Handcrafted V8",
    power: "671 hp @ 6,000 RPM",
    horsepower: 671,
    torque: "590 lb-ft @ 2,750 RPM",
    acceleration: "3.5 sec (0-60 mph)",
    topSpeed: "202 mph (325 km/h)",
    mileage: "15 City / 22 Hwy mpg",
    seating: "2+2 Seater",
    drivetrain: "Rear-Wheel Drive (RWD)",
    badge: "Super Tourer",
    featured: true,
    popular: false,
    heroImage: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The Aston Martin DB12 announces a new era as the world's first 'Super Tourer'. Blending high-octane performance with ultra-luxurious bespoke craftsmanship, the DB12 boasts 671 hp, an intelligent electronic rear differential, bespoke Michelin Pilot Sport 5S tires, and an entirely new in-house touchscreen operating system.",
    features: [
      {
        category: "Performance & Handling",
        items: [
          "Hand-built 4.0-liter twin-turbo V8 producing an astonishing 671 hp",
          "Electronic Rear Differential (E-Diff) integrated with ESP for supreme stability",
          "Next-generation intelligent adaptive dampers with 500% bandwidth increase",
          "Carbon ceramic braking package saving 27 kg of unsprung mass"
        ]
      },
      {
        category: "Interior & Comfort",
        items: [
          "Hand-stitched Bridge of Weir aromatic leather interior with bespoke broguing",
          "Bowers & Wilkins 1,170-watt 15-speaker audio system with Continuum cones",
          "Ergonomically sculptured carbon performance seats with heating and cooling",
          "Solid metal tactile switchgear crafted with knurled aluminum details"
        ]
      },
      {
        category: "Technology & Safety",
        items: [
          "All-new Aston Martin bespoke 10.25-inch infotainment with capacitive touch",
          "Wireless Apple CarPlay, Android Auto, and connected car app suite",
          "360-degree camera with 3D parking perspective and curb view",
          "Adaptive cruise control with stop-and-go and traffic sign recognition"
        ]
      }
    ]
  },
  {
    id: "lamborghini-urus",
    name: "Lamborghini Urus Performante",
    brand: "Lamborghini",
    category: "Super SUV",
    price: 269885,
    formattedPrice: "$269,885",
    year: 2024,
    fuelType: "Petrol",
    transmission: "Automatic",
    engine: "4.0L Twin-Turbocharged V8",
    power: "657 hp @ 6,000 RPM",
    horsepower: 657,
    torque: "627 lb-ft @ 2,250 RPM",
    acceleration: "3.1 sec (0-60 mph)",
    topSpeed: "190 mph (306 km/h)",
    mileage: "14 City / 19 Hwy mpg",
    seating: "5 Passengers",
    drivetrain: "Permanent All-Wheel Drive with Torsen Differential",
    badge: "Performante",
    featured: false,
    popular: true,
    heroImage: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The Lamborghini Urus Performante elevates the super sport utility vehicle benchmark to stratospheric heights. Lighter, meaner, and armed with a revised aerodynamic package that increases rear downforce by 38%, it features a dedicated RALLY mode designed for high-speed dirt track drifting and unbridled adrenaline.",
    features: [
      {
        category: "Performance & Handling",
        items: [
          "Akrapovič lightweight titanium exhaust system as standard equipment",
          "Dedicated RALLY mode optimized for oversteer on loose dirt surfaces",
          "Carbon fiber hood, bumpers, roof, and rear aerodynamic fin",
          "Specially lowered steel spring suspension with active roll stabilization"
        ]
      },
      {
        category: "Interior & Comfort",
        items: [
          "Nero Cosmus black Alcantara interior with Performante hexagonal stitching",
          "Bang & Olufsen 3D Advanced Sound System with 21 speakers (1,700 watts)",
          "Anodized black aluminum accents and matte carbon fiber trim accents",
          "Sports steering wheel in Alcantara/leather with rosso red contrast stitching"
        ]
      },
      {
        category: "Technology & Safety",
        items: [
          "Lamborghini Infotainment System III with dual high-resolution touchscreens",
          "Tamburo driving mode selector with STRADA, SPORT, CORSA, and RALLY",
          "Night vision camera with pedestrian recognition and thermal imaging",
          "Full ADAS package with lane keep assist, blind spot detection, and HUD"
        ]
      }
    ]
  },
  {
    id: "rolls-royce-ghost",
    name: "Rolls-Royce Ghost Series II",
    brand: "Rolls-Royce",
    category: "Ultra-Luxury Sedan",
    price: 354750,
    formattedPrice: "$354,750",
    year: 2025,
    fuelType: "Petrol",
    transmission: "Automatic",
    engine: "6.75L Twin-Turbocharged V12",
    power: "563 hp @ 5,250 RPM",
    horsepower: 563,
    torque: "627 lb-ft @ 1,600 RPM",
    acceleration: "4.6 sec (0-60 mph)",
    topSpeed: "155 mph (governed)",
    mileage: "12 City / 19 Hwy mpg",
    seating: "5 Passengers",
    drivetrain: "All-Wheel Drive & All-Wheel Steering",
    badge: "The Pinnacle",
    featured: false,
    popular: true,
    heroImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The Rolls-Royce Ghost is the purest expression of Rolls-Royce luxury. Designed under the philosophy of 'Post Opulence'—embracing minimalism and authenticity of materials—it rides on the Planar Suspension System with satellite-aided transmission, guaranteeing a ride quality universally celebrated as the magic carpet ride.",
    features: [
      {
        category: "Performance & Handling",
        items: [
          "Silent 6.75-liter twin-turbo V12 with near-instant maximum torque from 1,600 RPM",
          "Planar Suspension System with upper wishbone damper unit",
          "Satellite-Aided Transmission reading GPS terrain data to pre-select gears",
          "Effortless Doors with power-assisted opening and gentle closure"
        ]
      },
      {
        category: "Interior & Comfort",
        items: [
          "Shooting Star Starlight Headliner with hundreds of hand-placed fiber optics",
          "Illuminated Fascia featuring over 850 stars and glowing Ghost wordmark",
          "Rear champagne cooler with bespoke crystal flutes chilled to optimal temperature",
          "Deep-pile lambswool floor mats and hand-stitched bespoke hides"
        ]
      },
      {
        category: "Technology & Safety",
        items: [
          "Bespoke 18-channel, 1,300-watt Rolls-Royce studio grade audio architecture",
          "Micro-Environment Purification System (MEPS) with impurity sensors",
          "High-resolution Head-Up Display with navigation and wildlife warning",
          "Surround camera with 4-camera panoramic and helicopter top view"
        ]
      }
    ]
  },
  {
    id: "mclaren-artura",
    name: "McLaren Artura Tech",
    brand: "McLaren",
    category: "Supercar / Hybrid",
    price: 237500,
    formattedPrice: "$237,500",
    year: 2024,
    fuelType: "Hybrid",
    transmission: "Dual-Clutch",
    engine: "3.0L Twin-Turbo 120° V6 + Axial Flux E-Motor",
    power: "671 hp (Combined)",
    horsepower: 671,
    torque: "531 lb-ft",
    acceleration: "3.0 sec (0-60 mph)",
    topSpeed: "205 mph (330 km/h)",
    mileage: "39 MPGe Combined",
    seating: "2 Passengers",
    drivetrain: "Rear-Wheel Drive (RWD)",
    badge: "Hybrid Supercar",
    featured: false,
    popular: false,
    heroImage: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The McLaren Artura represents the dawn of McLaren's next-generation hybrid supercar era. Built upon the groundbreaking McLaren Carbon Lightweight Architecture (MCLA), it pairs a wide-angle twin-turbo V6 with a compact axial-flux electric motor, delivering relentless instantaneous throttle response and pure electric emission-free city driving.",
    features: [
      {
        category: "Performance & Handling",
        items: [
          "McLaren Carbon Lightweight Architecture (MCLA) dry weight of just 3,303 lbs",
          "8-speed Seamless Shift Gearbox (SSG) with e-reverse",
          "Proactive Damping Control with input from accelerometer sensors",
          "Pirelli Cyber Tyre® technology with sensors inside each tire"
        ]
      },
      {
        category: "Interior & Comfort",
        items: [
          "ClubSport bucket seats combining bucket agility with adjustable ergonomics",
          "Bowers & Wilkins 12-speaker audio system featuring Continuum midranges",
          "Driver-centric binnacle instrument pod mounted directly to steering column",
          "Ultra-lightweight Alcantara upholstery with stealth black anodized switches"
        ]
      },
      {
        category: "Technology & Safety",
        items: [
          "MIS II infotainment system with high-definition capacitive touchscreen",
          "Over-the-Air (OTA) software updates for continuous performance enhancements",
          "Adaptive Cruise Control, Road Sign Recognition, and Lane Departure Warning",
          "Variable Drift Control (VDC) allowing calibrated traction assistance"
        ]
      }
    ]
  },
  {
    id: "lexus-lc-500",
    name: "Lexus LC 500 Bespoke",
    brand: "Lexus",
    category: "Coupe / V8 GT",
    price: 99800,
    formattedPrice: "$99,800",
    year: 2024,
    fuelType: "Petrol",
    transmission: "Automatic",
    engine: "5.0L Naturally Aspirated V8",
    power: "471 hp @ 7,100 RPM",
    horsepower: 471,
    torque: "398 lb-ft @ 4,800 RPM",
    acceleration: "4.4 sec (0-60 mph)",
    topSpeed: "168 mph (270 km/h)",
    mileage: "16 City / 25 Hwy mpg",
    seating: "4 Passengers (2+2)",
    drivetrain: "Rear-Wheel Drive with Torsen LSD",
    badge: "Naturally Aspirated V8",
    featured: false,
    popular: true,
    heroImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "The Lexus LC 500 is a masterclass in emotional concept-car styling made reality. Powered by a glorious, throaty 5.0-liter naturally aspirated V8 that sings to a 7,300 RPM redline, paired with an ultra-fast 10-speed Direct-Shift transmission and an interior finished with Takumi master artisan craftsmanship.",
    features: [
      {
        category: "Performance & Handling",
        items: [
          "Atmospheric 5.0-liter 32-valve V8 with active sport exhaust valves",
          "10-speed Sport Direct-Shift automatic transmission with magnesium paddle shifters",
          "Yamaha® performance damper and active rear steering (Dynamic Handling Pack)",
          "Torsen® limited-slip rear differential"
        ]
      },
      {
        category: "Interior & Comfort",
        items: [
          "Bespoke semi-aniline leather upholstery hand-finished by Takumi artisans",
          "Mark Levinson® 13-speaker, 915-watt Reference Surround Sound Audio",
          "Alcantara-draped door panels with flowing wave crest origami motif",
          "Heated and ventilated 12-way power sport seats with memory settings"
        ]
      },
      {
        category: "Technology & Safety",
        items: [
          "New 12.3-inch high-resolution touchscreen display with Lexus Interface",
          "Lexus Safety System+ 2.5 including Pre-Collision System with Pedestrian Detection",
          "Color Head-Up Display and digital instrument cluster inspired by the LFA supercar",
          "Panoramic View Monitor with 360-degree overhead vehicle perspective"
        ]
      }
    ]
  }
];

// Helper functions for accessing cars
function getAllCars() {
  return CAR_DATA;
}

function getCarById(id) {
  if (!id) return null;
  return CAR_DATA.find(car => car.id.toLowerCase() === id.toLowerCase()) || null;
}

function getFeaturedCars() {
  return CAR_DATA.filter(car => car.featured);
}

function getPopularBrands() {
  return [...new Set(CAR_DATA.map(c => c.brand))];
}
