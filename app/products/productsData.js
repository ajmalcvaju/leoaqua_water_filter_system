// ==============================================================================
// LEOAQUA WATER FILTER SYSTEM - PRODUCT DATA
// ==============================================================================

// ACTIVE PRODUCTS (READY FOR NEW PRODUCTS)
export const productsData = {
  '101': {
    id: '101',
    slug: 'aqua-strom-ro-water-purifier',
    title: 'Aqua Strom RO Water Purifier System',
    category: 'domestic',
    tag: '5-Stage RO System',
    price: '₹10,000',
    desc: '5-Stage Reverse Osmosis (RO) water purifier with 9L storage, 15 LPH capacity, LED indicators, and auto cut-off power saver.',
    fullDesc: 'Aqua Strom Water Purifier with Reverse Osmosis (RO) Filtration delivers safe and pure drinking water through an advanced 5-Stage Purification system. Designed with a transparent 9-litre storage tank, high-efficiency purification capacity of 15 litres per hour, intuitive LED status indicators, and an intelligent electricity power saver auto cut-off system.',
    specs: [
      { label: 'Purification Technology', val: '5-Stage Reverse Osmosis (RO) System' },
      { label: 'Storage Capacity', val: 'Storage Capacity up to 9 Litres' },
      { label: 'Purification Rate', val: '15 Litres Per Hour (Model Dependent)' },
      { label: 'Status Display', val: 'Built-in LED Indicator' },
      { label: 'Power Management', val: 'Electricity Power Saver with Auto Cut-off' },
      { label: 'Cabinet Design', val: 'Transparent Smoked Tank with Premium Dual-Tone Body' }
    ],
    features: [
      'Advanced 5-Stage Reverse Osmosis (RO) filtration removes dissolved impurities, heavy metals & microbes',
      'Food-grade transparent storage tank with up to 9 Litres holding capacity',
      'High-speed purification capacity delivering up to 15 Litres per hour',
      'Intuitive multi-color LED indicators for live purification and tank level monitoring',
      'Smart electricity power saver technology with automatic cut-off when the tank is full'
    ],
    applications: ['Home Kitchens', 'Residential Apartments', 'Villas', 'Small Offices'],
    imageSrc: '/product_aqua_strom_ro.png',
    variants: [
      { id: 'white', name: 'Classic White', color: '#ffffff', border: '#0284c7', imageSrc: '/product_aqua_strom_ro.png' },
      { id: 'black', name: 'Obsidian Black', color: '#1f2937', border: '#f97316', imageSrc: '/product_aqua_strom_black.png' }
    ]
  },
  '102': {
    id: '102',
    slug: '100-lph-commercial-ro-water-plant',
    title: 'LeoAqua 100 LPH Commercial RO Water Plant',
    category: 'plants',
    tag: '100 LPH Commercial',
    price: '₹56,000',
    desc: 'Heavy-duty 100 LPH multi-stage RO + UV/UF commercial water plant built with food-grade SS skid frame, high-pressure pump, and TDS controller.',
    fullDesc: 'LeoAqua 100 LPH Commercial RO Water Plant is engineered for commercial institutions and establishments requiring high-volume purified water (300 to 2,000+ Litres per day). Features heavy-duty multi-stage Reverse Osmosis filtration coupled with UV/UF disinfection, triple 20-inch jumbo pre-filter housings, high-pressure commercial booster pump, integrated TDS adjuster/controller, auto shut-off, and a corrosion-resistant Food-Grade Stainless Steel (SS) / FRP skid frame.',
    specs: [
      { label: 'Purification Capacity', val: '100 Litres / Hour (100 LPH)' },
      { label: 'Duty Cycle', val: '300 to 2,000+ Litres per Day' },
      { label: 'Purification Technology', val: 'Multi-Stage RO + UV / UF' },
      { label: 'Body Material', val: 'Food-Grade Stainless Steel (SS) / FRP' },
      { label: 'Pre-Filter System', val: 'Triple 20-Inch Heavy Duty Blue Jumbo Housings' },
      { label: 'Booster Pump', val: 'High-Pressure Commercial Booster Pump' },
      { label: 'Key Automation', val: 'TDS Adjuster Controller & Auto Shut-Off' }
    ],
    features: [
      'Delivers high-capacity 100 LPH continuous pure water output for commercial usage',
      'Engineered duty cycle comfortably handles 300 to 2,000+ litres of water per day',
      'Advanced multi-stage RO + UV/UF eliminates 99.9% dissolved salts, heavy metals & pathogens',
      'Heavy-duty Food-Grade Stainless Steel (SS) skid structure ensures lifelong corrosion resistance',
      'Integrated TDS controller allows fine-tuning water mineral content & taste',
      'Built-in high-pressure commercial pump and reliable automatic shut-off mechanism'
    ],
    applications: ['Schools & Colleges', 'Hotels & Restaurants', 'Commercial Offices', 'Hospitals & Clinics', 'Hostels & Canteens'],
    imageSrc: '/product_100_lph_commercial_ro.png'
  },
  '103': {
    id: '103',
    slug: '50-lph-commercial-ro-water-plant',
    title: 'LeoAqua 50 LPH Commercial RO Water Plant',
    category: 'plants',
    tag: '50 LPH Commercial',
    price: '₹36,000',
    desc: 'Compact 50 LPH multi-stage commercial RO plant suitable for 300-400 L/day, handles up to 3000 ppm TDS with SS skid frame.',
    fullDesc: 'LeoAqua 50 LPH Commercial RO Water Plant delivers robust, high-purity drinking water for clinics, offices, hostels, and small establishments (suitable for 300 - 400 litres per day). Engineered with multi-stage Sediment, Carbon, and high-rejection RO membrane filtration capable of purifying raw water with TDS up to 2000 - 3000 ppm. Mounted on a heavy-duty stainless steel skid frame with high-performance booster pumps and reliable SMPS power supplies for durability and low-maintenance servicing.',
    specs: [
      { label: 'Purification Capacity', val: '50 Litres / Hour (50 LPH)' },
      { label: 'Daily Output', val: '300 to 400 Litres / Day' },
      { label: 'Input Water TDS', val: 'Up to 2000 - 3000 PPM' },
      { label: 'Filtration Stages', val: 'Sediment, Carbon & High-Rejection RO Membrane' },
      { label: 'Power Supply', val: '230V AC, 50 Hz with Heavy-Duty SMPS' },
      { label: 'Dimensions (W×D×H)', val: '470 mm × 490 mm × 860 mm' },
      { label: 'Frame Structure', val: 'Sturdy Skid Frame (Wall-Mounted / Floor-Standing)' }
    ],
    features: [
      '50 LPH continuous purification capacity comfortably serves small offices, schools & clinics',
      'High TDS rejection treats borewell and municipal water up to 2000-3000 ppm with ease',
      'Multi-stage filtration strips suspended solids, heavy chlorine, dissolved minerals & pathogens',
      'Sturdy SS skid frame supports wall-mounting or floor-standing installation with easy servicing',
      'Equipped with high-performance commercial booster pumps and durable SMPS power supplies'
    ],
    applications: ['Small Offices & Workplaces', 'Clinics & Diagnostic Centers', 'Hostels & Mess Halls', 'Small Cafes & Bakeries', 'Gyms & Salons'],
    imageSrc: '/product_50_lph_commercial_ro.png'
  },
  '104': {
    id: '104',
    slug: '25-lph-commercial-ro-water-plant',
    title: 'LeoAqua 25 LPH Commercial RO Water Plant',
    category: 'plants',
    tag: '25 LPH Commercial',
    price: '₹23,000',
    desc: 'Compact 25-30 LPH multi-stage commercial RO plant with dual high-TDS membranes, heavy-duty booster pump, and TDS controller.',
    fullDesc: 'LeoAqua 25 LPH Commercial RO Water Plant is a versatile, compact water purification solution engineered for small offices, clinics, tuition centers, cafes, and large residences (150 - 250 Litres per day). Built with multi-stage Sediment, Activated Carbon, dual high-rejection 75-100 GPD RO membranes, and an integrated TDS controller. Powered by a heavy-duty 150-200 GPD booster pump on a durable stainless steel skid frame.',
    specs: [
      { label: 'Flow Rate', val: '25 to 30 Litres / Hour (150 - 250 LPD)' },
      { label: 'Purification Stages', val: 'Multi-Stage (Sediment, Activated Carbon, Dual RO & TDS Minimizer)' },
      { label: 'Booster Pump', val: 'Heavy-Duty 150 GPD to 200 GPD (24V / 48V DC)' },
      { label: 'RO Membranes', val: 'Dual 75 to 100 GPD High-TDS Membranes' },
      { label: 'Operating Voltage', val: '230V AC (50 Hz) Input / 24V-48V DC Output' },
      { label: 'Dimensions', val: '~45 cm × 30 cm × 60 cm' },
      { label: 'Net Weight', val: '12 kg to 16 kg (Approx)' }
    ],
    features: [
      '25-30 LPH continuous purification capacity efficiently satisfies daily drinking needs up to 250 LPD',
      'Dual high-rejection RO membranes eliminate dissolved salts, heavy metals & pathogens',
      'Heavy-duty 150-200 GPD commercial booster pump ensures strong, steady filtration pressure',
      'Integrated TDS controller allows fine-tuning water taste and mineral content',
      'Compact footprint fits easily under countertops or on designated platforms'
    ],
    applications: ['Small Offices & Clinics', 'Tuition & Study Centers', 'Cafes & Small Eateries', 'Villas & Large Households', 'Gyms & Salons'],
    imageSrc: '/product_25_lph_commercial_ro.png'
  },
  '105': {
    id: '105',
    slug: 'aqua-roma-ro-water-purifier',
    title: 'Aqua Roma RO Water Purifier System',
    category: 'domestic',
    tag: 'Compact RO Design',
    price: '₹10,500',
    desc: 'Modern compact RO water purifier with 8-10L storage tank, high-speed booster pump, food-grade ABS build, and smart LED indicators.',
    fullDesc: 'Aqua Roma RO Water Purifier System brings contemporary styling and dependable Reverse Osmosis purification to modern kitchens. Equipped with multi-stage RO filtration (with Copper/Alkaline mineral infusion capability), smart dual LED operational indicators, and food-grade non-toxic ABS construction. Driven by a high-grade booster pump that fills the 8-10 Litre internal tank in approximately 1 hour with energy-efficient operation.',
    specs: [
      { label: 'Storage Capacity', val: '8 to 10 Litres Pure Water Tank' },
      { label: 'Purification Technology', val: 'Reverse Osmosis (RO) with Copper/Alkaline Options' },
      { label: 'Filling Speed', val: 'Fast Fill (~1 Hour for Full Tank)' },
      { label: 'Booster Pump', val: 'High-Quality Low-Noise Booster Pump' },
      { label: 'Indicators', val: 'Smart Dual LED Status Indicators' },
      { label: 'Cabinet Build', val: 'Food-Grade Antibacterial ABS Body' },
      { label: 'Color Options', val: 'Metallic Silver Grey & Piano Black' }
    ],
    features: [
      'Multi-stage Reverse Osmosis removes dissolved salts, bacteria, heavy metals & impurities',
      'High-performance booster pump fills the 8-10 Litre storage tank rapidly in around 1 hour',
      'Smart dual LED indicators clearly show real-time power and purification status',
      'Compact ergonomic form factor engineered specifically for space-conscious modern kitchens',
      'Food-grade antibacterial ABS tank prevents recontamination and ensures 100% clean taste'
    ],
    applications: ['Modern Modular Kitchens', 'Residential Apartments', 'Villas', 'Small Pantries & Offices'],
    imageSrc: '/product_aqua_roma_grey.png',
    variants: [
      { id: 'grey', name: 'Metallic Silver Grey', color: '#94a3b8', border: '#475569', imageSrc: '/product_aqua_roma_grey.png' },
      { id: 'black', name: 'Piano Black', color: '#111827', border: '#0284c7', imageSrc: '/product_aqua_roma_black.png' }
    ]
  },
  '106': {
    id: '106',
    slug: 'nexus-brio-ro-uv-uf-copper-zinc-alkaline',
    title: 'Nexus Brio RO + UV + UF + Copper + Zinc + Alkaline Purifier',
    category: 'domestic',
    tag: 'Copper + Zinc + Alkaline',
    price: '₹16,000',
    desc: 'Premium 12L RO + UV + UF water purifier enriched with Active Copper, Zinc, and Alkaline minerals with smart LED digital display.',
    fullDesc: 'Nexus Brio Water Purifier delivers peak health and mineral enrichment through advanced multi-stage RO + UV + UF filtration infused with Active Copper, Zinc, and Alkaline minerals. Features a generous 12-litre food-grade ABS storage tank, handles high salinity up to 1500 - 2000 ppm TDS, and includes a smart LED digital status panel, water level viewing window, and smooth push-and-pull chrome tap.',
    specs: [
      { label: 'Storage Capacity', val: '12 Litres Large Storage Tank' },
      { label: 'Purification Technology', val: 'RO Membrane + UV + UF Multi-Stage' },
      { label: 'Mineral Enhancements', val: 'Active Copper, Zinc & Alkaline Minerals' },
      { label: 'Input Water TDS', val: 'Handles TDS up to 1500 to 2000 PPM' },
      { label: 'Display & Alerts', val: 'Smart LED Indicator & Digital Display Panel' },
      { label: 'Cabinet Build', val: 'Food-Grade Antibacterial ABS Plastic Body' },
      { label: 'Dispenser Tap', val: 'Heavy-Duty Metallic Push-and-Pull Tap' },
      { label: 'Water Level Window', val: 'Integrated Vertical Level Gauge Window' }
    ],
    features: [
      'Multi-stage RO+UV+UF eliminates dissolved salts, micro-pollutants, bacteria & viruses',
      'Copper, Zinc & Alkaline infusion boosts immunity, provides anti-oxidants, and balances water pH',
      'Generous 12-litre storage tank guarantees continuous pure water supply for medium to large families',
      'Handles high hardness and salinity borewell water up to 2000 PPM TDS with ease',
      'Smart LED digital indicators show live operation status, purification mode & tank capacity',
      'Ergonomic push-and-pull dispensing tap prevents drip and offers smooth water flow'
    ],
    applications: ['Modern Modular Kitchens', 'Residential Villas & Apartments', 'Offices & Corporate Cabins', 'Clinics & Healthcare Units'],
    imageSrc: '/product_nexus_brio_ro.png'
  },
  '107': {
    id: '107',
    slug: 'aqua-mars-ro-water-purifier',
    title: 'Aqua Mars RO Water Purifier System',
    category: 'domestic',
    tag: '5-Stage Auto Cut-Off',
    price: '₹10,000',
    desc: '5-Stage Reverse Osmosis water purifier with 9L transparent tank, 15 LPH flow rate, smart LED indicators, and power-saving auto cut-off.',
    fullDesc: 'Aqua Mars RO Water Purifier System combines efficient 5-Stage Reverse Osmosis filtration with modern aesthetic styling. Features a transparent 9-litre storage container, 15 Litres/Hour purification capacity, smart LED operational indicators, and an intelligent electricity-saving auto cut-off mechanism that protects against dry running and prevents overflow. Available in Classic White with Ocean Blue Tank and Slate Grey with Smoked Tank.',
    specs: [
      { label: 'Storage Capacity', val: '9 Litres Storage Capacity' },
      { label: 'Purification Technology', val: '5-Stage Reverse Osmosis (RO)' },
      { label: 'Purification Capacity', val: '15 Litres / Hour' },
      { label: 'Indicators', val: 'LED Status Indicators' },
      { label: 'Power Saving', val: 'Electricity Saver with Auto Cut-Off' },
      { label: 'Color Options', val: 'Classic White & Slate Grey' },
      { label: 'Tank Build', val: 'Food-Grade Antibacterial Transparent Tank' }
    ],
    features: [
      'Advanced 5-stage Reverse Osmosis filtration strips away dissolved salts, heavy metals, pesticides & microbes',
      'Transparent 9-litre storage tank allows clear visibility of purified water level at all times',
      'High-speed 15 LPH filtration output easily keeps up with daily family drinking requirements',
      'Smart LED indicators provide instant visibility into power and purification statuses',
      'Energy-efficient auto cut-off system conserves electricity and extends pump lifespan'
    ],
    applications: ['Home Kitchens', 'Residential Apartments', 'Villas', 'Small Pantries & Offices'],
    imageSrc: '/product_aqua_mars_white.png',
    variants: [
      { id: 'white', name: 'Classic White (Blue Tank)', color: '#ffffff', border: '#0284c7', imageSrc: '/product_aqua_mars_white.png' },
      { id: 'grey', name: 'Slate Grey (Smoked Tank)', color: '#64748b', border: '#1e293b', imageSrc: '/product_aqua_mars_grey.png' }
    ]
  },
  '108': {
    id: '108',
    slug: 'avenger-imigy-smart-ro-water-purifier',
    title: 'Avenger Imigy Smart RO Water Purifier',
    category: 'domestic',
    tag: '3-in-1 Zinc Copper Alkaline',
    price: '₹11,000',
    desc: 'Smart RO water purifier with 8L storage, 3-in-1 Zinc + Copper + Alkaline mineral technology, Digital Smart Display, and heavy-duty ABS body.',
    fullDesc: 'Avenger Imigy Smart RO Water Purifier is engineered for contemporary kitchens seeking premium water quality and health benefits. Powered by multi-stage Reverse Osmosis with 3-in-1 Zinc, Copper & Alkaline mineral infusion to boost immunity and balance water pH. Features a top Digital Smart Display with real-time indicators, 8-litre food-grade storage capacity, easy wall mounting, and a metallic dispensing tap. Available in multiple finish options including Matte Black, White, Blue, and Pista Green.',
    specs: [
      { label: 'Storage Capacity', val: '8 Litres Storage Capacity' },
      { label: 'Purification Technology', val: 'Reverse Osmosis (RO) + Multi-Stage' },
      { label: 'Mineral Infusion', val: '3-in-1 Active Zinc + Copper + Alkaline' },
      { label: 'Display Panel', val: 'Digital Smart Display with LED Indicators' },
      { label: 'Cabinet Build', val: 'Food-Grade Antibacterial ABS Body' },
      { label: 'Dispensing Tap', val: 'Heavy-Duty Metallic Lever Tap' },
      { label: 'Color Options', val: 'Matte Black (Available in White, Blue & Pista Green)' },
      { label: 'Installation', val: 'Compact Wall-Mountable / Countertop' }
    ],
    features: [
      '3-in-1 Zinc, Copper & Alkaline technology enriches water with essential minerals for maximum vitality',
      'Digital Smart Display panel provides live operational status, purification alerts & tank indicator',
      'Multi-stage Reverse Osmosis removes 99.9% dissolved salts, pesticides, heavy metals & microbes',
      '8-litre food-grade ABS storage tank prevents secondary contamination and keeps water fresh',
      'Futuristic aerodynamic front fascia with metallic accents enhances modern kitchen décor'
    ],
    applications: ['Modern Modular Kitchens', 'Residential Apartments', 'Villas', 'Small Pantries & Offices'],
    imageSrc: '/product_avenger_imigy_ro.png'
  },
  '109': {
    id: '109',
    slug: 'aqua-2090-ro-water-purifier',
    title: 'Aqua 2090 RO Water Purifier System',
    category: 'domestic',
    tag: 'Compact Modern RO',
    price: '₹10,000',
    desc: 'Sleek compact Reverse Osmosis purifier with 5-7L tank, smart LED alerts, energy-efficient operation, and dual wall-mount/countertop design.',
    fullDesc: 'Aqua 2090 RO Water Purifier System (Shapure Next Technology) is designed for modern, space-conscious homes. Equipped with high-rejection Reverse Osmosis purification, a 5 to 7 Litre food-grade transparent water storage section, multi-color smart LED indicators, and energy-efficient auto cut-off. Flexible installation allows either secure wall mounting or elegant countertop placement. Available in Polar White (Cyan Tank) and Obsidian Black (Smoked Tank).',
    specs: [
      { label: 'Storage Capacity', val: '5 to 7 Litres Pure Water Storage' },
      { label: 'Purification Technology', val: 'Reverse Osmosis (RO) + Multi-Stage' },
      { label: 'Technology Platform', val: 'Shapure Next Energy-Efficient Tech' },
      { label: 'Indicators', val: 'Smart Multi-Color LED Indicator Strip' },
      { label: 'Installation', val: 'Wall-Mountable & Countertop Placement' },
      { label: 'Dispenser Tap', val: 'Ergonomic Push Dispenser Lever' },
      { label: 'Color Options', val: 'Polar White (Cyan Tank) & Obsidian Black' }
    ],
    features: [
      'Multi-stage Reverse Osmosis removes dissolved salts, bacteria, heavy metals & impurities',
      'Compact 5-7 Litre tank footprint fits neatly in compact kitchens and small apartments',
      'Smart LED indicators provide instant status on power, purification, and tank capacity',
      'Versatile dual installation options: convenient wall-mount or sleek countertop display',
      'Food-grade antibacterial tank with high-efficiency energy-saving auto shut-off mechanism'
    ],
    applications: ['Compact Kitchens', 'Studio Apartments', 'Villas', 'Doctor Clinics & Pantries'],
    imageSrc: '/product_aqua_2090_white.png',
    variants: [
      { id: 'white', name: 'Polar White (Cyan Tank)', color: '#ffffff', border: '#0284c7', imageSrc: '/product_aqua_2090_white.png' },
      { id: 'black', name: 'Obsidian Black (Smoked Tank)', color: '#111827', border: '#f97316', imageSrc: '/product_aqua_2090_black.png' }
    ]
  },
  '110': {
    id: '110',
    slug: 'kainet-100gpd-smart-ro-water-purifier',
    title: 'Kainet 100 GPD Smart RO Water Purifier',
    category: 'domestic',
    tag: '100 GPD High TDS',
    price: '₹12,000',
    desc: 'High-performance 100 GPD RO purifier treating TDS up to 3000 ppm with 8L storage, 18 LPH flow rate, and digital smart display.',
    fullDesc: 'Kainet Smart RO Water Purifier is engineered for heavy TDS borewell and tap water conditions up to 3000 ppm. Powered by a high-rejection 100 GPD RO membrane delivering up to 18 Litres per hour purification rate. Features an 8-litre food-grade storage capacity with a distinctive smoked fluted glass viewing column, Digital Smart Display with real-time status indicators (Purification, Power, Tank Full), automatic power-saving cut-off, and an ergonomic chrome push dispenser lever. Available in Alpine White and Midnight Black.',
    specs: [
      { label: 'Storage Capacity', val: '8 Litres Storage Capacity' },
      { label: 'Purification Technology', val: 'Reverse Osmosis (RO) Filtration' },
      { label: 'RO Membrane', val: '100 GPD High-Rejection Membrane' },
      { label: 'Input Water TDS', val: 'Purifies Water up to 3000 PPM TDS' },
      { label: 'Flow Rate', val: 'Max 18 Litres / Hour' },
      { label: 'Display Panel', val: 'Digital Display with LED Smart Indicators' },
      { label: 'Automation & Safety', val: 'Auto Cut-Off, Auto Shut-Off & Power Saver' },
      { label: 'Cabinet Build', val: 'Food-Grade Antibacterial ABS Body' },
      { label: 'Color Options', val: 'Alpine White & Midnight Black' }
    ],
    features: [
      'Heavy-duty 100 GPD RO membrane effortlessly treats extreme borewell water hardness up to 3000 ppm',
      'Fast 18 Litres/Hour flow capacity quickly replenishes the 8L food-grade storage reservoir',
      'Digital Smart Display strip ("Refresh yourself") monitors purification, power & tank full status',
      'Intelligent auto shut-off and power saver mechanism prevents pump dry runs and cuts electricity cost',
      'Sleek architectural cabinet with ribbed smoked glass dispenser column elevates modular kitchen spaces'
    ],
    applications: ['Modern Modular Kitchens', 'Residential Apartments', 'Luxury Villas', 'Executive Pantries & Clinics'],
    imageSrc: '/product_kainet_white.png',
    variants: [
      { id: 'white', name: 'Alpine White', color: '#ffffff', border: '#0284c7', imageSrc: '/product_kainet_white.png' },
      { id: 'black', name: 'Midnight Black', color: '#111827', border: '#f97316', imageSrc: '/product_kainet_black.png' }
    ]
  },
  '111': {
    id: '111',
    slug: 'curvv-organic-series-ro-uv-water-purifier',
    title: 'Curvv (Organic Series) RO + UV Water Purifier',
    category: 'domestic',
    tag: '6-Stage RO + UV Organic',
    price: '₹12,000',
    desc: 'Premium 6-stage RO + UV water purifier with 12L capacity, Zinc + Copper + Alkaline mineral infusion, and Rose Gold digital display.',
    fullDesc: 'Curvv (Organic Series) RO + UV Water Purifier brings 6-stage advanced water purification to health-conscious households. Removes hardness, heavy metals, micro-contaminants, and pathogens through high-rejection Reverse Osmosis paired with Ultraviolet (UV) disinfection. Preserves essential alkalinity and pH balance while enriching water with Active Zinc, Copper Charge, and Alkaline minerals. Features a generous 12-litre storage tank, smart digital display with LED status alerts, auto cut-off, and an elegant chrome dispenser tap. Available in Matte Black, Pure White, and Slate Grey.',
    specs: [
      { label: 'Storage Capacity', val: '12 Litres Large Storage Tank' },
      { label: 'Purification Technology', val: '6-Stage RO + UV Disinfection' },
      { label: 'Mineral Enhancements', val: 'Active Zinc, Copper Charge & Alkaline Infusion' },
      { label: 'Water Balance', val: 'Natural Alkaline pH Balance with Essential Minerals' },
      { label: 'Display Panel', val: 'Smart Digital Display with Multi-Color LED Alerts' },
      { label: 'Energy & Automation', val: 'Auto Cut-Off, Auto Shut-Off & Power Saver' },
      { label: 'Dispenser Tap', val: 'Heavy-Duty Metallic Chrome Faucet Tap' },
      { label: 'Color Options', val: 'Matte Black, Pure White & Slate Grey' }
    ],
    features: [
      '6-stage multi-stage RO+UV strips dissolved impurities, heavy metals, cysts, bacteria & viruses',
      'UV sterilization kills 99.9% microbial pathogens without using chemicals',
      'Active Zinc, Copper Charge & Alkaline minerals restore water taste, boost immunity & balance body pH',
      'Expansive 12-litre food-grade storage reservoir ensures round-the-clock water availability',
      'Smart digital display with rose gold / chrome accents and real-time status indicators',
      'Energy-efficient automatic cut-off and power-saver mechanism preserves pump and membrane lifespan'
    ],
    applications: ['Luxury Modular Kitchens', 'Residential Apartments', 'Executive Villas', 'Modern Clinics & Pantries'],
    imageSrc: '/product_curvv_black.png',
    variants: [
      { id: 'black', name: 'Matte Black', color: '#111827', border: '#f59e0b', imageSrc: '/product_curvv_black.png' },
      { id: 'white', name: 'Pure White', color: '#ffffff', border: '#0284c7', imageSrc: '/product_curvv_white.png' },
      { id: 'grey', name: 'Slate Grey', color: '#475569', border: '#f59e0b', imageSrc: '/product_curvv_grey.png' }
    ]
  },
  '112': {
    id: '112',
    slug: 'aqua-nine-100gpd-smart-ro-water-purifier',
    title: 'Aqua Nine 100 GPD Smart RO Water Purifier',
    category: 'domestic',
    tag: 'Art Edition 100 GPD',
    price: '₹10,000',
    desc: 'Designer RO water purifier with 100 GPD membrane treating up to 3000 ppm TDS, 8L storage, 18 LPH flow rate, and smart LED status display.',
    fullDesc: 'Aqua Nine Smart RO Water Purifier marries exquisite designer aesthetics with heavy-duty water purification. Built with a 100 GPD high-rejection RO membrane capable of tackling tough borewell water with TDS up to 3000 ppm. Offers an 8-litre food-grade storage capacity, 18 LPH maximum flow rate, digital status display with smart LED icons, automatic power-saving cut-off, and an ergonomic push dispenser lever. Available in Piano Black (Silver Mandala Art) and Pearl White (Nature Art).',
    specs: [
      { label: 'Storage Capacity', val: '8 Litres Food-Grade Tank' },
      { label: 'Purification Technology', val: 'Reverse Osmosis (RO) Multi-Stage' },
      { label: 'RO Membrane', val: '100 GPD High-Rejection Membrane' },
      { label: 'Input Water TDS', val: 'Purifies Water up to 3000 PPM TDS' },
      { label: 'Flow Rate', val: 'Max 18 Litres / Hour' },
      { label: 'Indicators & Display', val: 'Smart LED Display with Status Icons' },
      { label: 'Automation & Safety', val: 'Auto Cut-Off, Auto Shut-Off & Power Saver' },
      { label: 'Cabinet Design', val: 'Designer Front Glass Facia on ABS Body' },
      { label: 'Color Options', val: 'Piano Black (Mandala Art) & Pearl White (Nature Art)' }
    ],
    features: [
      'Powerful 100 GPD RO membrane effortlessly treats hard salinity up to 3000 ppm TDS',
      'Generous 8-litre food-grade storage tank provides continuous fresh drinking water',
      'High 18 LPH flow rate ensures rapid tank refills without waiting',
      'Smart LED indicators monitor power, purification state, and full tank levels',
      'Intelligent auto shut-off prevents dry runs, conserves electricity, and safeguards the booster pump',
      'Stunning designer artistic front panel adds an elegant statement to kitchen countertops and walls'
    ],
    applications: ['Designer Kitchens', 'Residential Apartments', 'Luxury Villas', 'Offices & Executive Cabins'],
    imageSrc: '/product_aqua_nine_black.png',
    variants: [
      { id: 'black', name: 'Piano Black (Mandala Art)', color: '#111827', border: '#cbd5e1', imageSrc: '/product_aqua_nine_black.png' },
      { id: 'white', name: 'Pearl White (Nature Art)', color: '#ffffff', border: '#10b981', imageSrc: '/product_aqua_nine_white.png' }
    ]
  },
  '113': {
    id: '113',
    slug: 'ai-qua-organic-series-ro-uv-alkaline-purifier',
    title: 'AI QUA (Organic Series) RO + UV + Alkaline Purifier',
    category: 'domestic',
    tag: 'RO+UV+UF+ALK+Cu+Zn',
    price: '₹13,000',
    desc: 'Advanced 12L RO + UV + UF water purifier enriched with Alkaline, Copper, Zinc & TDS control, smart digital display and auto cut-off.',
    fullDesc: 'AI QUA (Organic Series) Water Purifier is a state-of-the-art multi-stage purification system delivering 100% pure, mineralized alkaline drinking water. Combines Reverse Osmosis (RO), Ultraviolet (UV) disinfection, Ultrafiltration (UF), Active Alkaline balancer, Copper charge, Zinc infusion, and precision TDS control. Built with a 12-litre heavy-duty food-grade tank, digital LED status panel, vertical water gauge, energy-efficient auto cut-off, and rose gold detailing. Available in Matte Black, Pure White, and Transparent Showcase Edition.',
    specs: [
      { label: 'Storage Capacity', val: '12 Litres Large Storage Tank' },
      { label: 'Purification Technology', val: 'RO + UV + UF + Alkaline + Copper + Zinc + TDS' },
      { label: 'Filtration Stages', val: '6-Stage Enhanced Organic Filtration' },
      { label: 'Mineral Enrichment', val: 'Copper Charge, Zinc & Alkaline pH Balancer' },
      { label: 'Display Panel', val: 'Smart Digital Display with Operational LED Icons' },
      { label: 'Energy & Automation', val: 'Auto Cut-Off, Auto Shut-Off & Power Saver' },
      { label: 'Cabinet Build', val: 'Food-Grade ABS Body with Hex Geometric Art' },
      { label: 'Color / Edition Options', val: 'Matte Black, Pure White & Transparent Showcase' }
    ],
    features: [
      'Comprehensive RO+UV+UF+Alkaline+Cu+Zn+TDS technology eliminates all impurities while boosting immunity',
      'Active Alkaline & Mineral Guard preserves natural alkaline balance without acidic or metallic aftertaste',
      'Generous 12-litre food-grade storage capacity ensures uninterrupted supply for homes and offices',
      'Smart digital display with real-time indicators for purification, power & tank full',
      'Auto cut-off and power-saver mechanism prevents energy waste and protects the booster pump',
      'Available in elegant solid body colors and a Transparent Showcase canopy revealing internal cartridges'
    ],
    applications: ['Luxury Modular Kitchens', 'Residential Apartments', 'Executive Villas', 'Modern Pantries & Clinics'],
    imageSrc: '/product_ai_qua_black.png',
    variants: [
      { id: 'black', name: 'Matte Black', color: '#111827', border: '#f59e0b', imageSrc: '/product_ai_qua_black.png' },
      { id: 'white', name: 'Pure White', color: '#ffffff', border: '#0284c7', imageSrc: '/product_ai_qua_white.png' },
      { id: 'transparent', name: 'Transparent Showcase', color: '#334155', border: '#f97316', imageSrc: '/product_ai_qua_transparent.png' }
    ]
  },
  '114': {
    id: '114',
    slug: 'xpria-smart-ro-alkaline-purifier',
    title: 'Xpria Smart RO + Alkaline Water Purifier',
    category: 'domestic',
    tag: 'Triple Layer Zinc Cu ALK',
    price: '₹10,000',
    desc: '9L panoramic transparent tank RO purifier with Triple Layer Protection (Zinc, Copper, Alkaline), TDS controller, and Smart LED display.',
    fullDesc: 'Xpria Smart RO + Alkaline Water Purifier (Imigo Technology) offers pristine hydration with triple-layer mineral enrichment. Powered by multi-stage Reverse Osmosis filtration paired with an integrated TDS controller, Zinc, Copper, and Active Alkaline mineralizers to eliminate dissolved impurities, bacteria, and viruses while balancing water pH. Encased in a premium food-grade ABS body featuring a panoramic 9-litre transparent aqua canopy with bubble art, heavy-duty chrome faucet, and bottom Smart LED digital status display.',
    specs: [
      { label: 'Storage Capacity', val: '9 Litres Panoramic Transparent Tank' },
      { label: 'Purification Technology', val: 'RO + Triple Layer Protection (Zinc, Copper, Alkaline)' },
      { label: 'TDS Management', val: 'Integrated TDS Controller' },
      { label: 'Display Panel', val: 'Digital Smart LED Display (Multi-Stage Alerts)' },
      { label: 'Dispenser Faucet', val: 'Heavy-Duty Metallic Push Tap' },
      { label: 'Cabinet Build', val: 'Food-Grade Antibacterial ABS Body' },
      { label: 'Color Schemes', val: 'White & Aqua Cyan Combo (Also in Black)' }
    ],
    features: [
      'Triple-layer protection with Active Zinc, Copper & Alkaline restores health minerals and vital electrolytes',
      'High-rejection Reverse Osmosis eliminates heavy metals, pesticides, fluoride, and microbial pathogens',
      'Panoramic 9-litre transparent aqua canopy with bubble art offers clear 360-degree water level visibility',
      'Front-mounted Smart LED digital display monitors operating health and purification cycle',
      'Integrated TDS controller enables custom tuning of water taste and mineral richness'
    ],
    applications: ['Modern Modular Kitchens', 'Residential Apartments', 'Villas', 'Small Pantries & Offices'],
    imageSrc: '/product_xpria_ro.png'
  },
  '115': {
    id: '115',
    slug: 'olix-copper-zinc-ro-water-purifier',
    title: 'Olix Copper & Zinc RO Water Purifier',
    category: 'domestic',
    tag: 'Copper-Zinc Enriched',
    price: '₹10,000',
    desc: 'Modern RO purifier enriched with Copper-Zinc immunity booster, top LED indicator panel, and leak-proof unbreakable tank.',
    fullDesc: 'Olix Copper & Zinc RO Water Purifier brings luxurious aesthetics and health-enhancing hydration together. Features multi-stage Reverse Osmosis filtration coupled with Active Copper and Zinc mineral enrichment to boost immunity and significantly enhance water taste. Encased in a premium antibacterial ABS body with vertical fluting, a golden-accented LED indicator panel (Purification, Power, Tank Full), leak-proof unbreakable tank, and a matching rose-gold dispenser tap. Available in Maroon/Burgundy, White, Black, and Grey.',
    specs: [
      { label: 'Storage Capacity', val: 'Leak-Proof Unbreakable Tank' },
      { label: 'Purification Technology', val: 'Reverse Osmosis (RO) + Multi-Stage' },
      { label: 'Mineral Enrichment', val: 'Active Copper & Zinc Immunity Booster' },
      { label: 'Indicators', val: 'Top Golden Panel with 3-LED Status Indicators' },
      { label: 'Dispenser Faucet', val: 'Rose Gold / Copper Metallic Lever Tap' },
      { label: 'Cabinet Build', val: 'Food-Grade Antibacterial Unbreakable ABS' },
      { label: 'Color Options', val: 'Royal Burgundy Maroon (Also in White, Black, Grey)' },
      { label: 'Installation', val: 'Compact Wall-Mountable' }
    ],
    features: [
      'Active Copper-Zinc enrichment charges purified water with natural immunity-boosting trace minerals',
      'Multi-stage Reverse Osmosis removes dissolved hard salts, chemicals, heavy metals & microbes',
      'Golden top fascia features intuitive LED status indicators for purification, power & tank full alerts',
      'Leak-proof, unbreakable internal storage tank ensures 100% hygienic water containment',
      'Distinctive vertical fluted cabinet design with rose-gold metallic accents complements designer interiors'
    ],
    applications: ['Designer Home Kitchens', 'Residential Apartments', 'Luxury Villas', 'Boutique Offices'],
    imageSrc: '/product_olix_ro.png'
  },
  '116': {
    id: '116',
    slug: 'canix-mineral-ro-smart-water-purifier',
    title: 'Canix Mineral RO Smart Water Purifier',
    category: 'domestic',
    tag: 'Essential Minerals RO',
    price: 'Starting from ₹11,000',
    desc: 'Modern RO purifier with 6-9L tank, essential mineral reinfusion, smart LED panel with filter life alerts, and single-lever dispenser.',
    fullDesc: 'Canix Mineral RO Smart Water Purifier ("Freshness in Every-Drop") delivers advanced Reverse Osmosis purification combined with an essential remineralization cartridge that restores healthy minerals back into drinking water. Equipped with an intelligent LED status panel showing real-time power, active purification, and tank full alerts, 6 to 9 Litres of 100% food-grade storage, smooth single-touch push dispenser tap, and easy installation. Available in Metallic Ice Blue, Brushed Silver, and Royal Plum Purple.',
    specs: [
      { label: 'Storage Capacity', val: '6 to 9 Litres Food-Grade Tank' },
      { label: 'Purification Technology', val: 'Reverse Osmosis (RO) + Mineral Restorer' },
      { label: 'Mineral Infusion', val: 'Natural Essential Mineral Re-infusion' },
      { label: 'Display & Alerts', val: 'Smart LED Panel (Power, Purifying, Tank Full)' },
      { label: 'Dispenser Tap', val: 'Smooth Single-Touch Dispenser Lever' },
      { label: 'Cabinet Build', val: '100% Food-Grade Virgin Plastic' },
      { label: 'Color Options', val: 'Ice Blue, Brushed Silver & Plum Purple' },
      { label: 'Installation', val: 'Easy Wall-Mountable / Countertop' }
    ],
    features: [
      'Multi-stage Reverse Osmosis removes dissolved hard salts, chemicals, heavy metals & microbes',
      'Mineral reinfusion restores natural electrolytes, calcium & magnesium for optimal health and taste',
      'Smart LED indicator visor gives real-time updates on purification mode and maintenance needs',
      '6-9L non-toxic antibacterial storage tank maintains water freshness in every drop',
      'Smooth single-touch push dispensing lever prevents splashing and drips',
      'Contemporary matte metallic body design available in 3 premium luxury colors'
    ],
    applications: ['Modern Modular Kitchens', 'Residential Apartments', 'Luxury Villas', 'Offices & Doctor Cabins'],
    imageSrc: '/product_canix_blue.png',
    variants: [
      { id: 'blue', name: 'Metallic Ice Blue', color: '#60a5fa', border: '#1e3a8a', imageSrc: '/product_canix_blue.png' },
      { id: 'silver', name: 'Brushed Silver', color: '#e2e8f0', border: '#475569', imageSrc: '/product_canix_silver.png' },
      { id: 'purple', name: 'Royal Plum Purple', color: '#701a75', border: '#a21caf', imageSrc: '/product_canix_purple.png' }
    ]
  },
  '117': {
    id: '117',
    slug: 'chrome-classic-plus-ro-uv-alkaline-purifier',
    title: 'Chrome Classic+ RO + UV + UF + Alkaline Water Purifier',
    category: 'domestic',
    tag: 'Alkaline Mineral Guard',
    price: '₹14,000',
    desc: 'Premium RO + UV + UF + Alkaline water purifier with 8-10L storage, Copper infusion, TDS controller, and luxury chrome finish.',
    fullDesc: 'Chrome Classic+ RO Water Purifier ("Chrome RO Systems") delivers peak purification performance for challenging borewell, brackish, tanker, and municipal water sources. Features multi-stage RO + UV + UF filtration paired with an integrated TDS controller and Copper/Alkaline mineralizer that re-infuses vital calcium, magnesium, and copper ions for alkaline immunity benefits. Encased in an unbreakable glossy ABS cabinet with a central black piano stripe, deep blue transparent water level window, status LEDs (On, Filter, Tank Full), and an all-metal chrome dispenser faucet.',
    specs: [
      { label: 'Storage Capacity', val: '8 to 10 Litres Pure Water Tank' },
      { label: 'Purification Technology', val: 'RO + UV + UF + TDS Controller + Alkaline & Copper' },
      { label: 'Mineral Infusion', val: 'Active Copper, Calcium, Magnesium & Alkaline pH Balancer' },
      { label: 'Water Sources', val: 'Suitable for Borewell, Tanker, Brackish & Tap Water' },
      { label: 'Display & Alerts', val: 'LED Status Lights (Power ON, Purifying, Filter Change)' },
      { label: 'Dispenser Faucet', val: 'All-Metal Luxury Chrome Dispensing Tap' },
      { label: 'Cabinet Build', val: 'Unbreakable Food-Grade ABS with Piano Black Stripe' },
      { label: 'Power Consumption', val: 'Low Power Consumption Energy Saver' }
    ],
    features: [
      'Multi-stage RO+UV+UF with TDS controller eliminates 99.9% dissolved salts, heavy metals & pathogens',
      'Infuses purified water with vital alkaline minerals (Calcium, Magnesium) and Copper for immunity',
      'Effectively purifies challenging Kerala water including brackish borewell and tanker supply',
      'Deep blue transparent vertical water level column provides instant tank volume monitoring',
      'Low power consumption with smart LED indicators for power, purification, and filter maintenance',
      'Luxurious chrome finish body adds high-end refinement to kitchen countertops or wall mounts'
    ],
    applications: ['Luxury Modular Kitchens', 'Residential Apartments', 'Executive Villas', 'Modern Clinics & Pantries'],
    imageSrc: '/product_chrome_classic_ro.png'
  },
  '118': {
    id: '118',
    slug: 'prolife-touch-transparent-blue-water-purifier',
    title: 'Prolife Touch New Fiesta RO + UV + UF + Copper Purifier',
    category: 'domestic',
    tag: 'Touch & Transparent Series',
    price: '₹15,500',
    desc: 'Advanced 7-stage RO + UV + UF + Copper Charge purifier with 12L capacity, smart touch digital display, and transparent showcase canopy.',
    fullDesc: 'Prolife New Fiesta Touch Water Purifier ("Prolife Drinking Water System") combines cutting-edge 7-stage purification with a futuristic transparent showcase canopy and capacitive smart touch digital panel. Engineered with RO + UV + UF + TDS control paired with Copper Charge & Mineral Guard technologies to eliminate heavy metals, dissolved hardness, bacteria, and viruses while balancing natural pH and infusing essential minerals. Features a high-capacity 12-litre tank, metallic royal blue textured lower cabinet with chevron detailing, self-suction booster pump, and anodized blue dispensing tap.',
    specs: [
      { label: 'Storage Capacity', val: '12 Litres High Capacity Antibacterial Tank' },
      { label: 'Purification Technology', val: '7-Stage RO + UV + UF + TDS Controller + Copper Charge' },
      { label: 'Display & Controls', val: 'Capacitive Touch Screen & Smart Digital Status Panel' },
      { label: 'Mineral & Immunity', val: 'Copper Charge Technology + Bio Alkaline pH Balancer' },
      { label: 'Booster Pump', val: 'Heavy-Duty Self-Suction Booster Pump' },
      { label: 'Showcase Design', val: 'Crystal Clear Transparent Top Canopy with Royal Blue Body' },
      { label: 'Dispenser Faucet', val: 'Premium Metallic Anodized Blue Dispenser Tap' },
      { label: 'Compatibility', val: 'Ideal for High TDS Borewell, Tanker & Municipal Water' }
    ],
    features: [
      'Enhanced 7-stage RO + UV + UF filtration purifies high TDS water while retaining vital minerals and pH balance',
      'Intelligent capacitive touch display with live diagnostic indicators for tank full, UV life, and purification',
      'Active Copper Charge technology enriches water with essential copper ions for improved digestion and immunity',
      'Generous 12-litre food-grade storage capacity ensures uninterrupted supply for large households',
      'Transparent top showcase highlights precision engineering, dual bio-cartridges, and ultra-filtration membrane',
      'Equipped with a self-suction booster pump suitable for low water pressure and direct overhead tank sources'
    ],
    applications: ['Modern Designer Kitchens', 'Large Households & Joint Families', 'Executive Apartments', 'Offices & Staff Pantries'],
    imageSrc: '/product_prolife_touch_blue.png'
  },
  '119': {
    id: '119',
    slug: 'prolife-viber-copper-ro-uv-uf-purifier',
    title: 'Prolife Viber Copper RO + UV + UF Water Purifier',
    category: 'domestic',
    tag: 'Copper Mineral Series',
    price: '₹14,000',
    desc: 'Full-cover matte black owl-shape purifier with 7-stage RO + UV + UF purification, 12L capacity, Copper Mineral technology, and vertical level window.',
    fullDesc: 'Prolife Viber Copper RO Water Purifier ("Live Life with Prolife") combines an aerodynamic owl-shaped full-cover matte black cabinet with advanced 7-stage RO + UV + UF + TDS filtration. Features proprietary Copper Mineral Technology that infuses essential copper and vital minerals back into purified water without disturbing natural pH or alkaline balance. Boasts a generous 12-litre food-grade storage capacity with a transparent illuminated water level gauge, smart LED indicators (Purification, Tank Full, Filter Alert), and an ergonomic push-down tap.',
    specs: [
      { label: 'Storage Capacity', val: '12 Litres Large Storage Tank' },
      { label: 'Purification Technology', val: '7-Stage RO + UV + UF + TDS Controller + Copper Technology' },
      { label: 'Mineral & Immunity', val: 'Active Copper Mineral Enrichment & Alkaline Guard' },
      { label: 'Body & Cabinet', val: 'Full Covered Aerodynamic Owl-Shape Matte Black ABS' },
      { label: 'Display & Alerts', val: 'Brushed Silver Center Panel with Smart LED Diagnostic Icons' },
      { label: 'Water Level', val: 'Transparent Front Window with Water Level Gauge' },
      { label: 'Dispenser Faucet', val: 'Heavy-Duty Prolife Push-to-Dispense Tap' },
      { label: 'Compatibility', val: 'Suitable for Borewell, Tanker, Municipal & Hard Water' }
    ],
    features: [
      'Comprehensive 7-stage RO + UV + UF process effectively eliminates dissolved salts, heavy metals, cysts, and bacteria',
      'Infuses purified drinking water with essential copper ions for enhanced digestion and wellness',
      'Maintains optimal pH and alkaline equilibrium without leaving artificial odour or taste',
      'Large 12-litre food-grade antimicrobial storage tank supports high daily household consumption',
      'Modern aerodynamic owl-contour full cover matte black body shields internal components from dust',
      'Smart brushed silver LED display provides real-time alerts for system status, tank capacity, and filter servicing'
    ],
    applications: ['Modern Modular Kitchens', 'Residential Apartments', 'Villas & Independent Houses', 'Office Pantries'],
    imageSrc: '/product_prolife_viber_black.png'
  },
  '120': {
    id: '120',
    slug: 'prolife-fiesta-copper-ro-uv-uf-purifier',
    title: 'Prolife Fiesta Copper RO + UV + UF Water Purifier',
    category: 'domestic',
    tag: 'Copper Charge Series',
    price: '₹13,000',
    desc: 'Advanced 7-stage RO + UV + UF + Copper Charge purifier with 12L capacity, rose gold digital LED display, available in Transparent Showcase & Full Covered styles.',
    fullDesc: 'Prolife Fiesta Copper RO Water Purifier ("Prolife Certified Water System") offers comprehensive 7-stage purification including RO + UV + UF + TDS control paired with Copper Charge & Mineral Guard technologies. It effectively purifies borewell and municipal water, neutralizing contaminants and bacteria while replenishing essential alkaline minerals. Styled with luxury rose gold accents, an illuminated LED diagnostic visor, and a 12-litre tank with chevron detailing. Available in two switchable editions: a Transparent Showcase model displaying internal cartridges and a Full Covered solid matte cabinet.',
    specs: [
      { label: 'Storage Capacity', val: '12 Litres Large Storage Tank' },
      { label: 'Purification Technology', val: '7-Stage RO + UV + UF + TDS Controller + Copper Charge' },
      { label: 'Display & Alerts', val: 'Rose Gold Metallic Visor with Smart LED Diagnostic Indicators' },
      { label: 'Mineral & Immunity', val: 'Active Copper Charge Technology + Mineral Guard' },
      { label: 'Cabinet Options', val: 'Transparent Showcase Canopy OR Full Covered Solid Cabinet' },
      { label: 'Color & Accent', val: 'Obsidian Black with Rose Gold Metallic Accents (White also available)' },
      { label: 'Dispenser Faucet', val: 'Heavy-Duty Prolife Push-Down Tap' },
      { label: 'Compatibility', val: 'Ideal for High TDS Borewell, Tanker & Municipal Water' }
    ],
    features: [
      'Advanced 7-stage RO + UV + UF purification removes hardness, cysts, dissolved salts, and pathogens',
      'Infuses drinking water with beneficial copper ions and alkaline minerals to support natural immunity',
      'Retains natural mineral balance and pH to deliver sweet, odour-free mountain-pure drinking water',
      '12-litre heavy-duty antimicrobial storage tank keeps clean water readily available',
      'Smart rose gold LED display panel provides real-time alerts for purification status, tank full, and power',
      'Available in Transparent Showcase edition revealing internal filtration stages or Full Covered solid body'
    ],
    applications: ['Modern Designer Kitchens', 'Residential Apartments', 'Luxury Villas', 'Offices & Corporate Pantries'],
    imageSrc: '/product_prolife_fiesta_transparent.png',
    variants: [
      { id: 'transparent', name: 'Transparent Showcase (Black & Rose Gold)', color: '#18181b', border: '#f59e0b', imageSrc: '/product_prolife_fiesta_transparent.png' },
      { id: 'fullcover', name: 'Full Covered Cabinet (Black & Rose Gold)', color: '#09090b', border: '#b45309', imageSrc: '/product_prolife_fiesta_fullcover.png' }
    ]
  },
  '121': {
    id: '121',
    slug: 'butterfly-imigo-ro-uv-water-purifier',
    title: 'Butterfly Imigo RO + UV + Mineral Water Purifier',
    category: 'domestic',
    tag: 'Butterfly Wing Design',
    price: '₹12,000',
    desc: 'Striking geometric butterfly-wing aesthetic with multi-stage RO + UV + Mineral filtration, 10L tank, smart LED display visor, and food-grade ABS body.',
    fullDesc: 'Butterfly Imigo RO Water Purifier ("Imigo RO Water Purifier System") features a dramatic aerodynamic butterfly-wing silhouette and contemporary dual-tone styling. Powered by multi-stage RO + UV + Mineral purification technology that eradicates harmful chemicals, dissolved solids, bacteria, and viruses while infusing natural minerals for optimum taste. Boasts a spacious 10-litre antibacterial water tank, round digital LED indicator console, side water gauge column, and easy wall-mount or countertop installation.',
    specs: [
      { label: 'Storage Capacity', val: '10 Litres Pure Water Tank' },
      { label: 'Purification Technology', val: 'Multi-Stage RO + UV + UF + Mineral Cartridge' },
      { label: 'Display & Alerts', val: 'Circular Digital Console with LED Status Indicators' },
      { label: 'Body & Cabinet', val: 'Premium Food-Grade ABS with Butterfly-Wing Geometry' },
      { label: 'Water Level', val: 'Vertical Side Viewing Window' },
      { label: 'Dispenser Faucet', val: 'Chrome Finish Dispenser Tap with Ergonomic Lever' },
      { label: 'Color Options', val: 'Black-Orange (Featured), White-Blue & Grey-Orange' },
      { label: 'Installation', val: 'Wall-Mountable / Countertop Ready' }
    ],
    features: [
      'Multi-stage RO + UV filtration neutralizes microbes, viruses, and removes high TDS dissolved impurities',
      'Mineral cartridge restores essential electrolytes and minerals for fresh, mountain-sweet hydration',
      'Dynamic butterfly-wing angular geometric cabinet gives kitchens an ultra-modern artistic flair',
      'Round central digital LED console provides immediate alerts on purification, tank level, and power',
      '10-litre food-grade antimicrobial storage tank keeps pure water readily on tap for the whole family',
      'Durable food-grade ABS construction with simple installation and convenient filter servicing access'
    ],
    applications: ['Contemporary Modular Kitchens', 'Urban Apartments', 'Executive Residences', 'Clinics & Private Studios'],
    imageSrc: '/product_butterfly_imigo_black_orange.png'
  },
  '122': {
    id: '122',
    slug: 'aqua-jade-100-gpd-smart-ro-purifier',
    title: 'Aqua Jade 100 GPD Smart RO Water Purifier',
    category: 'domestic',
    tag: 'High TDS 3000 PPM Guard',
    price: '₹10,000',
    desc: 'High-capacity 100 GPD RO purifier handling TDS up to 3000 ppm, 9L storage tank, 18 LPH flow rate, smart auto shut-off, available in Cyan White & Midnight Black.',
    fullDesc: 'Aqua Jade RO Water Purifier System ("Safe & Healthy - 100% Pure Water") is engineered with a high-performance 100 GPD reverse osmosis membrane capable of treating demanding water with TDS levels up to 3000 ppm. Delivers a rapid purification flow rate of up to 18 litres per hour into a 9-litre transparent antibacterial storage tank. Built with an automatic shut-off system, energy-efficient electrical circuit, durable food-grade ABS cabinet, and an ergonomic dispenser tap.',
    specs: [
      { label: 'Storage Capacity', val: '9 Litres Transparent Food-Grade Tank' },
      { label: 'Membrane Capacity', val: '100 GPD High-Rejection RO Membrane' },
      { label: 'TDS Compatibility', val: 'Treats High TDS Levels up to 3000 PPM' },
      { label: 'Flow Rate', val: 'Fast Flow Rate of up to 18 Litres / Hour' },
      { label: 'Auto Operation', val: 'Smart Auto Shut-Off & Power Cut-Off' },
      { label: 'Body & Cabinet', val: 'Heavy-Duty 100% Food-Grade ABS Plastic' },
      { label: 'Color Variants', val: 'Pure White & Aqua Cyan / Midnight Matte Black' },
      { label: 'Installation', val: 'Wall-Mountable / Countertop Ready' }
    ],
    features: [
      'Heavy-duty 100 GPD membrane effortlessly handles extremely hard water sources up to 3000 ppm TDS',
      'Rapid purification delivery rate of up to 18 litres per hour ensures tank fills rapidly after heavy use',
      '9-litre transparent panoramic water storage reservoir provides instant visual level awareness',
      'Automatic shut-off mechanism prevents overflow and minimizes power wastage',
      'Durable food-grade non-breakable ABS body guarantees long-term hygienic drinking water',
      'Available in two aesthetic finishes: Crisp White with Turquoise Cyan tank, and Sleek Midnight Matte Black'
    ],
    applications: ['High-TDS Borewell Households', 'Modern Kitchens', 'Apartments & Villas', 'Small Offices & Clinics'],
    imageSrc: '/product_aqua_jade_white.png',
    variants: [
      { id: 'white', name: 'Pure White & Aqua Cyan', color: '#06b6d4', border: '#0891b2', imageSrc: '/product_aqua_jade_white.png' },
      { id: 'black', name: 'Midnight Matte Black', color: '#18181b', border: '#27272a', imageSrc: '/product_aqua_jade_black.png' }
    ]
  },
  '123': {
    id: '123',
    slug: 'prolife-touch-fiesta-copper-ro-uv-uf-purifier',
    title: 'Prolife Touch Fiesta Copper RO + UV + UF Water Purifier',
    category: 'domestic',
    tag: 'Touch & Copper Series',
    price: '₹14,900',
    desc: 'Capacitive touch edition with 7-stage RO + UV + UF + Copper Charge filtration, 12L capacity, self-suction pump, available in Full Covered & Transparent Showcase editions.',
    fullDesc: 'Prolife Touch Fiesta Water Purifier ("Live Life with Prolife") elevates home water filtration with responsive capacitive touch control and advanced 7-stage RO + UV + UF + TDS filtration. Features Copper Charge and Mineral Guard technologies to eliminate heavy metals, microbes, and suspended solids while maintaining natural alkaline mineral balance. Equipped with a high-capacity 12-litre tank with chevron detailing, self-suction booster pump, and luxury rose-gold accents. Available in two switchable body styles: Full Covered matte black cabinet and Transparent Showcase canopy.',
    specs: [
      { label: 'Storage Capacity', val: '12 Litres High Capacity Antibacterial Tank' },
      { label: 'Purification Technology', val: '7-Stage RO + UV + UF + TDS Controller + Copper Charge' },
      { label: 'Control Interface', val: 'Capacitive Smart Touch Digital Panel' },
      { label: 'Mineral & Immunity', val: 'Active Copper Charge + Mineral Guard Alkaline Balancer' },
      { label: 'Booster Pump', val: 'Heavy-Duty Self-Suction Booster Pump' },
      { label: 'Cabinet Options', val: 'Full Covered Cabinet OR Transparent Showcase Canopy' },
      { label: 'Color & Accent', val: 'Obsidian Black with Rose Gold Metallic Accents' },
      { label: 'Dispenser Faucet', val: 'Heavy-Duty Prolife Push-Down Tap' }
    ],
    features: [
      'Capacitive smart touch interface allows effortless operation and instant status visibility',
      '7-stage RO + UV + UF purification eradicates water hardness, bacteria, viruses, and dissolved chemicals',
      'Infuses purified water with beneficial copper and mineral ions without altering natural pH balance',
      'Large 12-litre food-grade storage capacity caters to high water demand across families and workspaces',
      'Integrated self-suction pump ensures robust flow even with low water pressure or overhead tank feeds',
      'Available in two signature models: Full Covered dust-shielded cabinet and Transparent Showcase design'
    ],
    applications: ['Premium Modular Kitchens', 'Modern Apartments', 'Luxury Villas', 'Executive Offices & Pantries'],
    imageSrc: '/product_prolife_touch_fiesta_fullcover.png',
    variants: [
      { id: 'fullcover', name: 'Full Covered Cabinet (Black & Rose Gold)', color: '#09090b', border: '#b45309', imageSrc: '/product_prolife_touch_fiesta_fullcover.png' },
      { id: 'transparent', name: 'Transparent Showcase (Black & Rose Gold)', color: '#18181b', border: '#f59e0b', imageSrc: '/product_prolife_touch_fiesta_transparent.png' }
    ]
  },
  '124': {
    id: '124',
    slug: 'aquaguard-titanium-ro-water-purifier',
    title: 'Aquaguard Titanium RO + NanoPore Water Purifier',
    category: 'domestic',
    tag: 'NanoPore Microplastics Guard',
    price: '₹13,000',
    desc: 'Minimalist curved graphite body with high-pressure RO + NanoPore filtration, 7L internal tank, 20-min boiling equivalent purity, and recessed glass-filler paddle tap.',
    fullDesc: 'Aquaguard Titanium RO Water Purifier brings iconic purification engineering into an ultra-modern curved titanium graphite silhouette. Utilizes high-pressure Reverse Osmosis filtration paired with advanced NanoPore microplastics filtration to eliminate up to 99% of heavy metals, dissolved salts, microplastics, and VOCs up to 2000 ppm TDS. Delivers water purity equivalent to boiling for over 20 minutes. Equipped with an ergonomic recessed dispensing bay featuring a touch-free push paddle, a 7-litre internal reservoir, and vertical smart LED service alerts.',
    specs: [
      { label: 'Storage Capacity', val: '7 Litres Internal Food-Grade Storage Tank' },
      { label: 'Purification Technology', val: 'High-Pressure RO + NanoPore Filtration' },
      { label: 'TDS Compatibility', val: 'Effective for TDS Levels up to 2000 PPM' },
      { label: 'Microbial Purity', val: 'Equivalent to Boiling Water for 20+ Minutes' },
      { label: 'Dispenser', val: 'Recessed Bay with Smooth Glass-Push Dispensing Paddle' },
      { label: 'Alerts & Indicators', val: 'Vertical LED Icons for Status & Service Alerts' },
      { label: 'Body & Finish', val: 'Ergonomic Curved Matte Titanium Graphite Body' },
      { label: 'Installation', val: 'Compact Wall-Mountable / Countertop Placement' }
    ],
    features: [
      'Advanced high-pressure RO membrane eliminates up to 99% of dissolved impurities, toxic lead, and chemicals',
      'Cutting-edge NanoPore filtration traps microscopic plastics and unseen particulate pollutants',
      'Provides microbiological safety and sterilization matching over 20 minutes of active boiling',
      'Recessed single-paddle dispensing niche accommodates tall tumblers, bottles, and cooking vessels'
    ],
    applications: ['Urban High-Rise Apartments', 'Contemporary Modular Kitchens', 'Executive Villas', 'Modern Office Pantries'],
    imageSrc: '/product_aquaguard_graphite_ro.png'
  },
  '125': {
    id: '125',
    slug: 'aquaguard-regal-copper-ro-uv-uf-purifier',
    title: 'Aquaguard Regal Copper RO + UV + UF Water Purifier',
    category: 'domestic',
    tag: 'Active Copper & Mineral Guard',
    price: '₹16,000',
    desc: 'Flagship multi-stage RO + UV + UF purifier with Active Copper infusion, Mineral Guard™, UV e-Boiling, and NanoPore technology, available in Regal Silver and Copper Rose Gold editions.',
    fullDesc: 'Aquaguard Regal Copper RO + UV + UF Water Purifier combines Eureka Forbes hallmark multi-stage purification with proprietary Mineral Guard™ technology and Active Copper infusion. Delivers germ-free drinking water with safety comparable to boiling for over 20 minutes through advanced UV e-Boiling. NanoPore filtration removes invisible microplastics and contaminants up to 2000 ppm TDS while enriching water with vital copper ions. Features a 7-litre internal food-grade reservoir, smart LED diagnostic alerts, and a smooth one-touch dispenser. Available in Regal Chrome Black and Copper Rose Gold editions.',
    specs: [
      { label: 'Storage Capacity', val: '7 Litres Internal Pure Water Tank' },
      { label: 'Purification Technology', val: 'Multi-Stage RO + UV + UF + NanoPore Filtration' },
      { label: 'Mineral Enrichment', val: 'Active Copper Infusion & Mineral Guard™ Technology' },
      { label: 'Germicidal Protection', val: 'UV e-Boiling (Equivalent to 20+ Mins Active Boiling)' },
      { label: 'TDS Compatibility', val: 'Suitable for Water Sources up to 2000 PPM TDS' },
      { label: 'Alerts & Indicators', val: 'Smart LED Visor for Power, Purification & Service Alerts' },
      { label: 'Edition Styles', val: 'Regal Silver Chrome Edition / Copper Rose Gold Edition' },
      { label: 'Dispenser', val: 'Ergonomic Front Paddle Dispenser' }
    ],
    features: [
      'Advanced RO + UV + UF multi-tier filtration eliminates up to 99% of dissolved chemicals, heavy metals, and microbes',
      'Active Copper infusion enriches water with essential copper ions known to boost immunity and metabolic vitality',
      'Patented Mineral Guard™ retains natural minerals like Calcium and Magnesium that standard RO filters strip away',
      'UV e-Boiling delivers microbial purity matching 20 minutes of continuous rolling boil',
      'NanoPore technology captures microscopic particles and microplastics for crystalline water clarity',
      'Offered in two luxury finishes: Regal Chrome Black pillar design and modern Copper Rose Gold visor edition'
    ],
    applications: ['Luxury Modular Kitchens', 'Executive Residential Apartments', 'Modern Family Homes', 'Private Doctor Clinics'],
    imageSrc: '/product_aquaguard_regal_black.png',
    variants: [
      { id: 'regal', name: 'Regal Silver Pillar Edition', color: '#18181b', border: '#94a3b8', imageSrc: '/product_aquaguard_regal_black.png' },
      { id: 'copper', name: 'Copper Rose Gold Edition', color: '#09090b', border: '#fb923c', imageSrc: '/product_aquaguard_copper_black.png' }
    ]
  },
  '126': {
    id: '126',
    slug: 'jumbo-sediment-pre-filter-housing',
    title: 'Jumbo Pre-Filter Sediment Housing System',
    category: 'filters',
    tag: 'Sediment & Sand Pre-Filter',
    price: '₹5,000',
    desc: 'Heavy-duty whole-house and commercial pre-filter housing designed to remove sediments, silt, and sand. Accommodates 10" & 20" cartridges with pressure relief valve and double O-ring seal.',
    fullDesc: 'Jumbo Pre-Filter Sediment Housing System is specially engineered for high-flow particulate, sediment, rust, and sand removal to safeguard domestic water purifiers, overhead tanks, and whole-house plumbing lines. Manufactured from high-impact food-grade polypropylene and polycarbonate with UV stabilization. Features a reinforced high-pressure blue cap with dual plumbing ports, built-in red pressure relief button for effortless cartridge changeovers, and double O-ring sealing to prevent leaks under continuous pressure. Compatible with standard 10-inch and 20-inch x 4.5-inch jumbo spun/pleated sediment filter cartridges.',
    specs: [
      { label: 'Function', val: 'High-Efficiency Pre-Filter for Sediment, Sand & Silt Removal' },
      { label: 'Cartridge Capacity', val: 'Supports 20" x 4.5" Jumbo / 10" Standard Cartridges' },
      { label: 'Material Construction', val: 'High-Impact Food-Grade Polypropylene / Polycarbonate' },
      { label: 'Port Connections', val: 'Reinforced In/Out Plumbing Ports with Pressure Relief Button' },
      { label: 'Sealing Mechanism', val: 'Heavy-Duty Double O-Ring Leak-Proof Watertight Seal' },
      { label: 'Installation', val: 'Heavy-Duty Wall Mounting Bracket & Hardware Included' },
      { label: 'Maintenance', val: 'Quick-Twist Housing with Depressurizing Valve' }
    ],
    features: [
      'Effectively traps suspended solids, mud, silt, and sand to prevent clogging of RO membranes and plumbing fixtures',
      'Constructed from food-grade, impact-resistant polypropylene suitable for indoor and outdoor installations',
      'Equipped with an integrated pressure relief valve to safely release system pressure during cartridge replacement',
      'Reinforced double O-ring sealing ensures 100% watertight performance under high water line pressure',
      'Versatile configurations available including 20-inch Jumbo Big Blue/White, 10-inch Compact, and 20-inch Slim Blue',
      'Protects household appliances, geysers, washing machines, and drinking water purifiers from abrasive grit'
    ],
    applications: ['Whole-House Main Line Pre-Filtration', 'Commercial RO Plant Pre-Treatment', 'Villa Overhead Tank Lines', 'Apartments & Agricultural Setups'],
    imageSrc: '/product_jumbo_filter_20inch.png',
    variants: [
      { id: 'jumbo20', name: '20" Jumbo Big Blue/White (Main Line)', color: '#2563eb', border: '#1d4ed8', imageSrc: '/product_jumbo_filter_20inch.png' },
      { id: 'compact10', name: '10" Compact Pre-Filter (Point of Use)', color: '#60a5fa', border: '#3b82f6', imageSrc: '/product_jumbo_filter_10inch.png' },
      { id: 'slim20', name: '20" Slim Whole House Housing', color: '#1e40af', border: '#172554', imageSrc: '/product_jumbo_filter_slim_blue.png' }
    ]
  },
  '127': {
    id: '127',
    slug: 'leoaqua-4-stage-gravity-water-purifier',
    title: 'LeoAqua 4-Stage Non-Electric Gravity Water Filter',
    category: 'filters',
    tag: 'Non-Electric & Mineral Retaining',
    price: '₹2,800',
    desc: 'Non-electric 4-stage gravity filter using Positive Charge Technology, sediment filtration, and carbon block. Flow rate of 20-25 LPH, retains all natural minerals, suitable up to 350 TDS.',
    fullDesc: 'LeoAqua 4-Stage Non-Electric Gravity Water Filter provides clean, safe, and mineral-rich drinking water without requiring any electricity or running motor. Features an advanced 4-stage filtration architecture combining Positive Charge Technology, micron particulate filter, spun sediment filter, and an activated carbon block. Effectively purifies tap, municipal, and overhead tank water up to 350 TDS at an impressive flow rate of 20 to 25 litres per hour while naturally preserving 100% of essential healthy minerals. Built with twin heavy-duty white filter bowls, an inline polishing cartridge, front dispensing faucet, and auto shut-off mechanism.',
    specs: [
      { label: 'Operation', val: '100% Non-Electric (Operates on Gravity & Natural Flow)' },
      { label: 'Purification Technology', val: '4-Stage: Positive Charge + Particulate + Sediment + Carbon Block' },
      { label: 'Flow Rate', val: 'High Flow Rate of 20 to 25 Litres / Hour' },
      { label: 'TDS Suitability', val: 'Ideal for Municipal & Low TDS Water up to 350 PPM' },
      { label: 'Mineral Retention', val: 'Maintains 100% of Natural Essential Minerals' },
      { label: 'Storage & Dispensing', val: 'Direct-Flow with Push/Turn Faucet & Auto Shut-Off' },
      { label: 'Body & Housing', val: 'Food-Grade Dual Polypropylene Filter Housings' },
      { label: 'Installation', val: 'Compact Wall Mountable / Direct Line Connection' }
    ],
    features: [
      'Zero electricity consumption — continues delivering pure drinking water even during power outages',
      'Positive Charge and activated carbon filtration remove suspended particles, chlorine, bad odour, and organic impurities',
      'Retains natural calcium, magnesium, and essential mineral balance without altering healthy alkaline pH',
      'Rapid gravity flow rate purifying 20 to 25 litres per hour for immediate kitchen and drinking needs',
      'Durable food-grade ABS/PP twin cylinder construction with accessible quick-twist replacement cartridges',
      'Compact wall-mounted configuration with front dispensing tap and automatic cut-off mechanism'
    ],
    applications: ['Municipal / Corporation Water Homes', 'Low-TDS Well Water Households', 'Budget-Conscious Families', 'Rented Apartments & Hostels'],
    imageSrc: '/product_leoaqua_4stage_gravity_filter.png',
    variants: [
      { id: 'branded', name: 'LeoAqua Factory Dual-Housing Unit', color: '#0284c7', border: '#0369a1', imageSrc: '/product_leoaqua_4stage_gravity_filter.png' },
      { id: 'clean', name: 'Wall-Mount Streamline Setup', color: '#e2e8f0', border: '#94a3b8', imageSrc: '/product_leoaqua_4stage_gravity_clean.png' }
    ]
  },
  '128': {
    id: '128',
    slug: 'universal-pre-filter-housing-unit',
    title: 'Universal RO Pre-Filter Housing Unit',
    category: 'filters',
    tag: 'First Line of Defense',
    price: '₹600',
    desc: 'First line of defense against dirt, sand, rust, and silt. Heavy-duty polypropylene leak-proof construction with brass/PP inlet-outlet ports. Available in Black, White, and Transparent models.',
    fullDesc: 'Universal RO Pre-Filter Housing Unit serves as the primary external shield for all domestic RO, UV, and gravity water purifiers. Engineered to arrest physical sediment, sand grit, algae, pipe rust, and suspended debris before water reaches delicate RO membranes and carbon block filters. Manufactured from heavy-duty impact-resistant polypropylene and polycarbonate with a leak-proof O-ring seal. Standard 10-inch cartridge housing compatible with all spun PP, wound, and pleated pre-filter candles. Includes standard plumbing fittings (installation service charges vary by location).',
    specs: [
      { label: 'Function', val: 'Primary External Pre-Filter for Dirt, Mud, Sand & Rust' },
      { label: 'Compatibility', val: 'Compatible with All Domestic RO, UV & Gravity Systems' },
      { label: 'Cartridge Size', val: 'Standard 10-Inch Spun PP / Wound Filter Cartridge' },
      { label: 'Material Build', val: 'Impact-Resistant Food-Grade Polypropylene & Polycarbonate' },
      { label: 'Leak Protection', val: 'Double Ribbed Leak-Proof O-Ring Pressure Seal' },
      { label: 'Included Accessories', val: 'Plumbing Connector Fittings Included' },
      { label: 'Color Variants', val: 'Obsidian Black, Pure White & Crystal Transparent' },
      { label: 'Service', val: 'Installation & service available across Kerala locations' }
    ],
    features: [
      'Serves as the crucial first line of defense to dramatically extend internal RO membrane lifespan',
      'Removes coarse particles, suspended sediment, dirt, rust flakes, and silt down to 5 microns',
      'Durable food-grade polypropylene and clear polycarbonate withstand line surges and high pressure',
      'Simple twist-off housing collar allows fast, tool-free replacement of internal spun cartridges',
      'Supplied with essential connector fittings; transparent model allows instant visual dirt check',
      'Universally adaptable to all RO brands including LeoAqua, Kent, Aquaguard, Pureit, and Livpure'
    ],
    applications: ['Domestic RO Water Purifiers', 'Inline Pre-Filtration', 'Apartment Kitchen Plumbing', 'Washing Machine Inlet Line'],
    imageSrc: '/product_prefilter_housing_black.png',
    variants: [
      { id: 'black', name: 'Obsidian Black Housing', color: '#18181b', border: '#27272a', imageSrc: '/product_prefilter_housing_black.png' },
      { id: 'white', name: 'Pure Alpine White Housing', color: '#f8fafc', border: '#cbd5e1', imageSrc: '/product_prefilter_housing_white.png' },
      { id: 'transparent', name: 'Crystal Clear Transparent Housing', color: '#e0f2fe', border: '#38bdf8', imageSrc: '/product_prefilter_housing_transparent.png' }
    ]
  },
  '129': {
    id: '129',
    slug: 'gseries-vogue-ro-water-purifier',
    title: 'G-Series Vogue RO + In-Tank UV + UF + Copper + Alkaline Purifier',
    category: 'domestic',
    tag: 'In-Tank UV + Alkaline',
    price: '₹13,000',
    originalPrice: '₹17,500',
    desc: 'Advanced Signature Collection RO purifier with In-Tank UV, UF, Copper, Alkaline minerals & TDS Control. 12L/14L tank options, handling input TDS up to 2,000 PPM.',
    fullDesc: 'G-Series Vogue Signature Collection RO Water Purifier is a premium, high-efficiency domestic purification system engineered for modern households, apartments, and villas. Built with an advanced multi-stage purification sequence combining Reverse Osmosis (RO), continuous In-Tank UV sterilization, Ultrafiltration (UF), Active Copper Charge, Alkaline mineral fortification, and intelligent TDS Control. Designed to handle challenging raw water TDS up to 2,000 PPM, it delivers 10 to 15 Litres per hour of safe, sweet, and mineral-balanced drinking water. Available in 12-litre and 14-litre tank capacities with a food-grade Stainless Steel dispenser tap, smart digital display panel, and 4 premium color finishes: Midnight Black, Slate Grey, Pearl White, and Royal Gold.',
    specs: [
      { label: 'Purification Technology', val: 'RO + In-Tank UV + UF + Active Copper + Alkaline + TDS Control' },
      { label: 'Storage Tank Capacity', val: 'Available in 12 Litres & 14 Litres Tank Options' },
      { label: 'Input TDS Handling', val: 'Built to Manage High Input TDS up to 2,000 PPM' },
      { label: 'Purification Flow Rate', val: '10 to 15 Litres / Hour' },
      { label: 'Dispenser Tap', val: 'Heavy-Duty Food-Grade Stainless Steel (SS) Tap' },
      { label: 'Available Colors', val: 'Midnight Black, Slate Grey, Pearl White, and Royal Gold' },
      { label: 'Display & Control', val: 'Smart Digital Indicator Panel with Water Drop Status Glow' },
      { label: 'Mineral & pH Balance', val: 'Alkaline Mineral Cartridge (Optimal pH 7.5 - 8.5)' }
    ],
    features: [
      'Multi-Stage Purification combining RO, In-Tank UV LED, UF, Active Copper, Alkaline, and essential minerals',
      'Continuous In-Tank UV sterilization keeps purified water 100% germ-free 24/7 inside the storage tank',
      'Robust RO membrane handles severe borewell and municipal water with TDS levels up to 2,000 PPM',
      'Available in generous 12-Litre and 14-Litre storage capacities for medium to large families',
      'Active Copper Charge & Alkaline filter infuse vital immunity-boosting minerals and maintain balanced pH',
      'Rapid purification throughput of 10 to 15 Litres per hour with intelligent power-saving auto cut-off',
      'Designer Signature Collection cabinet with metallic accents, digital touch panel, and stainless steel tap',
      'Available in 4 luxurious designer finishes: Midnight Black, Slate Grey, Pearl White, and Royal Gold'
    ],
    applications: ['Modern Home Kitchens', 'Residential Apartments', 'Luxury Villas', 'Offices & Executive Cabins'],
    imageSrc: '/product_vogue_black.png',
    variants: [
      { id: 'black', name: 'Midnight Black', color: '#18181b', border: '#f59e0b', imageSrc: '/product_vogue_black.png' },
      { id: 'grey', name: 'Slate Grey', color: '#64748b', border: '#0284c7', imageSrc: '/product_vogue_grey.png' },
      { id: 'white', name: 'Pearl White', color: '#f8fafc', border: '#cbd5e1', imageSrc: '/product_vogue_grey.png' },
      { id: 'gold', name: 'Royal Gold', color: '#d97706', border: '#b45309', imageSrc: '/product_vogue_black.png' }
    ]
  },
  '130': {
    id: '130',
    slug: 'i-pure-water-purifier-ro-system',
    title: 'i-Pure 5-Stage RO Water Purifier System',
    category: 'domestic',
    tag: '5-Stage RO System',
    price: '₹11,000',
    originalPrice: '₹15,000',
    desc: 'Advanced 5-Stage Reverse Osmosis (RO) water purifier with 9L transparent storage tank, 15 LPH capacity, LED indicator, and auto cut-off power saver.',
    fullDesc: 'i-Pure Water Purifier with Reverse Osmosis (RO) Filtration delivers pure, crystal-clear drinking water through an advanced 5-Stage Purification system. Engineered with an eye-catching royal blue transparent 9-litre storage tank, high-efficiency purification throughput of 15 litres per hour, intuitive LED status indicators, and an intelligent electricity power saver auto cut-off system with a heavy-duty chrome dispensing tap.',
    specs: [
      { label: 'Purification Technology', val: '5-Stage Reverse Osmosis (RO) System' },
      { label: 'Storage Capacity', val: 'Food-Grade Tank Capacity up to 9 Litres' },
      { label: 'Purification Rate', val: '15 Litres Per Hour (Model Dependent)' },
      { label: 'Status Display', val: 'Built-in LED Indicator' },
      { label: 'Power Management', val: 'Electricity Power Saver with Auto Cut-off' },
      { label: 'Cabinet Design', val: 'Electric Blue Transparent Tank with Alpine White Body' },
      { label: 'Dispenser Tap', val: 'Heavy-Duty Chrome Finish Dispensing Tap' }
    ],
    features: [
      'Advanced 5-Stage Reverse Osmosis (RO) technology eliminates dissolved salts, micro-impurities & microbes',
      'Vibrant transparent food-grade storage container with 9-Litre holding capacity for easy water level check',
      'Fast filtration flow delivering up to 15 Litres per hour (model dependent)',
      'Multi-color LED status indicators for real-time operation and tank monitoring',
      'Intelligent electricity power saver function with automatic cut-off when the tank is full',
      'Modern, compact wall-mountable and countertop-friendly cabinet design'
    ],
    applications: ['Home Kitchens', 'Residential Apartments', 'Villas & Homestays', 'Offices & Pantries'],
    imageSrc: '/product_ipure_ro.png',
    variants: [
      { id: 'blue-white', name: 'Royal Blue & White', color: '#1d4ed8', border: '#cbd5e1', imageSrc: '/product_ipure_ro.png' }
    ]
  },
  '131': {
    id: '131',
    slug: 'cloud-one-8-premium-black-ro-system',
    title: 'Cloud One 8 Premium Black RO Water Purifier System',
    category: 'domestic',
    tag: '5-Stage RO System',
    price: '₹12,000',
    originalPrice: '₹16,500',
    desc: 'Cloud One 8 Water Purifier with 5-Stage Reverse Osmosis (RO) filtration, 9L storage, 15 LPH capacity, smart LED indicators, and auto cut-off power saver.',
    fullDesc: 'Cloud One 8 Premium Black Water Purifier with Reverse Osmosis (RO) Filtration delivers pure, crisp drinking water through an advanced 5-Stage Purification system. Encased in a luxurious obsidian black cabinet featuring a top showcase filter window, 9-litre food-grade storage capacity, 15 litres per hour purification throughput, smart LED status indicator panel, water level sight window, and an intelligent electricity power saver auto cut-off system.',
    specs: [
      { label: 'Purification Technology', val: '5-Stage Reverse Osmosis (RO) System' },
      { label: 'Storage Capacity', val: 'Food-Grade Tank Capacity up to 9 Litres' },
      { label: 'Purification Rate', val: '15 Litres Per Hour (Model Dependent)' },
      { label: 'Status Display', val: 'Smart Central LED Indicator Panel' },
      { label: 'Power Management', val: 'Electricity Power Saver with Auto Cut-off' },
      { label: 'Cabinet Design', val: 'Premium Obsidian Black with Top Showcase Filter Window' },
      { label: 'Dispenser Tap', val: 'Heavy-Duty Chrome Dispenser Tap with Water Gauge Window' }
    ],
    features: [
      '5-Stage Reverse Osmosis (RO) filtration removes heavy dissolved solids, chlorine & microbiological pathogens',
      'Premium architectural black chassis with top transparent cartridge showcase window',
      'Generous 9-Litre food-grade storage container with front vertical water level viewing window',
      'High-capacity purification flow of up to 15 Litres per hour (model dependent)',
      'Smart central LED indicators for live system power and purification process status',
      'Energy-saving automatic cut-off mechanism prevents overflow and minimizes power consumption'
    ],
    applications: ['Modern Home Kitchens', 'Residential Apartments', 'Luxury Villas', 'Offices & Pantries'],
    imageSrc: '/product_cloud_one8_black.png',
    variants: [
      { id: 'black', name: 'Premium Obsidian Black', color: '#18181b', border: '#f59e0b', imageSrc: '/product_cloud_one8_black.png' },
      { id: 'grey', name: 'Premium Matte Grey', color: '#64748b', border: '#0284c7', imageSrc: '/product_cloud_one8_grey.png' }
    ]
  },
  '132': {
    id: '132',
    slug: 'cloud-one-8-premium-grey-ro-system',
    title: 'Cloud One 8 Premium Grey RO Water Purifier System',
    category: 'domestic',
    tag: '5-Stage RO System',
    price: '₹12,000',
    originalPrice: '₹16,500',
    desc: 'Cloud One 8 Water Purifier in stylish Matte Grey finish with 5-Stage RO filtration, 9L storage, 15 LPH flow rate, smart LED indicator, and auto cut-off.',
    fullDesc: 'Cloud One 8 Premium Grey Water Purifier with Reverse Osmosis (RO) Filtration delivers pure, crisp drinking water through an advanced 5-Stage Purification system. Finished in an elegant contemporary matte grey chassis featuring a top showcase filter window, 9-litre food-grade storage capacity, 15 litres per hour purification throughput, smart central LED status indicator panel, water level sight window, and an intelligent electricity power saver auto cut-off system.',
    specs: [
      { label: 'Purification Technology', val: '5-Stage Reverse Osmosis (RO) System' },
      { label: 'Storage Capacity', val: 'Food-Grade Tank Capacity up to 9 Litres' },
      { label: 'Purification Rate', val: '15 Litres Per Hour (Model Dependent)' },
      { label: 'Status Display', val: 'Smart Central LED Indicator Panel' },
      { label: 'Power Management', val: 'Electricity Power Saver with Auto Cut-off' },
      { label: 'Cabinet Design', val: 'Contemporary Matte Grey with Top Showcase Filter Window' },
      { label: 'Dispenser Tap', val: 'Heavy-Duty Black Dispenser Tap with Water Gauge Window' }
    ],
    features: [
      '5-Stage Reverse Osmosis (RO) filtration removes heavy dissolved solids, chlorine & microbiological pathogens',
      'Contemporary matte grey cabinet with top transparent cartridge showcase window',
      'Generous 9-Litre food-grade storage container with front vertical water level viewing window',
      'High-capacity purification flow of up to 15 Litres per hour (model dependent)',
      'Smart central LED indicators for live system power and purification process status',
      'Energy-saving automatic cut-off mechanism prevents overflow and minimizes power consumption'
    ],
    applications: ['Modern Home Kitchens', 'Residential Apartments', 'Luxury Villas', 'Offices & Pantries'],
    imageSrc: '/product_cloud_one8_grey.png',
    variants: [
      { id: 'grey', name: 'Premium Matte Grey', color: '#64748b', border: '#0284c7', imageSrc: '/product_cloud_one8_grey.png' },
      { id: 'black', name: 'Premium Obsidian Black', color: '#18181b', border: '#f59e0b', imageSrc: '/product_cloud_one8_black.png' }
    ]
  },
  '133': {
    id: '133',
    slug: 'olivar-s1-smart-water-purifier-wifi-iot',
    title: 'OLIVAR S1 Smart Water Purifier (Wi-Fi & Mobile App)',
    category: 'domestic',
    tag: 'Smart Wi-Fi Purifier',
    price: '₹18,900',
    originalPrice: '₹24,900',
    desc: 'Next-gen smart IoT RO water purifier with Wi-Fi connectivity, mobile app filter life tracking, circular halo LED display & auto cut-off.',
    fullDesc: 'OLIVAR S1 Smart Water Purifier ("Always Pure. Always Connected.") by Olivar International combines cutting-edge water purification science with smart IoT technology. Featuring built-in Wi-Fi connectivity with real-time smartphone app monitoring for cartridge health, TDS levels, and filter replacement alerts. Equipped with an iconic illuminated circular halo LED diagnostic dashboard ("S1"), auto power-saver cut-off, heavy-duty leak-proof dispenser faucet, and available in three designer luxury finishes: Panther Black, Stealth Grey, and Cosmic Orange.',
    specs: [
      { label: 'Smart Connectivity', val: 'Built-in Wi-Fi & Real-Time Mobile App Integration' },
      { label: 'Smart App Features', val: 'Filter Life Tracking, Water Quality Metrics, Service Alerts' },
      { label: 'Display Panel', val: 'Interactive Circular Halo Neon Blue LED Diagnostic Ring (S1)' },
      { label: 'Purification Technology', val: 'Advanced Multi-Stage RO + UV/UF + Mineral Enrichment' },
      { label: 'Power Management', val: 'Smart Electricity Power Saver with Auto Cut-off' },
      { label: 'Color Editions', val: 'Panther Black, Stealth Grey & Cosmic Orange' },
      { label: 'Dispenser Faucet', val: 'Front Heavy-Duty Push Dispensing Tap' },
      { label: 'Compatibility', val: 'Handles High TDS Borewell, Tanker & Municipal Water' }
    ],
    features: [
      'Smart Wi-Fi connectivity connects directly to your iOS / Android phone for 24/7 water quality & cartridge status tracking',
      'Dedicated mobile app displays live filter health percentages, water purity metrics, and maintenance schedules',
      'Futuristic circular halo LED display with glowing blue ambient status ring and intuitive system diagnostics',
      'Advanced multi-stage RO filtration removes heavy dissolved solids, chemical pesticides, bacteria & viruses',
      'Intelligent power-saver auto cut-off saves electricity and prevents tank overflow',
      'Available in 3 stunning architectural finishes: Panther Black, Stealth Grey, and Cosmic Orange'
    ],
    applications: ['Smart Homes & Connected Kitchens', 'Luxury Apartments', 'Modern Designer Villas', 'Corporate Pantries'],
    imageSrc: '/product_olivar_s1_banner.png',
    variants: [
      { id: 'black', name: 'Panther Black', color: '#18181b', border: '#38bdf8', imageSrc: '/product_olivar_s1_black.png' },
      { id: 'orange', name: 'Cosmic Orange', color: '#c2410c', border: '#f97316', imageSrc: '/product_olivar_s1_orange.png' },
      { id: 'grey', name: 'Stealth Grey', color: '#475569', border: '#94a3b8', imageSrc: '/product_olivar_s1_stealth_grey.png' },
      { id: 'banner', name: 'All Editions Showcase', color: '#0f172a', border: '#38bdf8', imageSrc: '/product_olivar_s1_banner.png' }
    ]
  },
  '134': {
    id: '134',
    slug: 'clyde-acquetta-undersink-ro-uf-alkaline-purifier',
    title: 'Clyde Acquetta Under Sink RO + UF + Alkaline Water Purifier',
    category: 'domestic',
    tag: 'Under Sink Concealed',
    price: '₹16,000',
    originalPrice: '₹21,000',
    desc: 'Premium Under Sink RO purifier by Acquetta with Pre-Filter + RO + UF + Alkaline stages, 10L pressure tank, screw-less cabinet & TDS adjuster.',
    fullDesc: 'Clyde Acquetta Under Sink Water Purifier (a product of ABH RO) is engineered for modern, clutter-free kitchens. Built with a sleek, completely screw-less cabinet design that fits discreetly beneath kitchen countertops. Features comprehensive Pre-Filter / RO / UF / ALKALINE multi-stage purification, a high-capacity 10-Litre hydro-pneumatic pressurized storage tank, normal inline filter & membrane housing, digital Power ON & Tank Full indication, unique TDS adjuster, and an elegant countertop goose-neck faucet.',
    specs: [
      { label: 'Installation Type', val: 'Under-The-Sink (Concealed Countertop Mounting)' },
      { label: 'Purification Technology', val: 'Pre-Filter + RO + UF + Alkaline Multi-Stage Purification' },
      { label: 'Storage Tank', val: '10 Litres Hydro-Pneumatic Pressure Tank' },
      { label: 'Cabinet Design', val: 'Completely Screw-Less Compact Cabinet' },
      { label: 'TDS Management', val: 'Unique Built-in TDS Adjuster' },
      { label: 'Indicators', val: 'Digital Power On & Tank Full Indication' },
      { label: 'Housing System', val: 'Normal Inline Filter & Membrane Housing' },
      { label: 'Faucet Type', val: 'Goose-neck Countertop Dispenser Tap' }
    ],
    features: [
      'Concealed under-sink installation maintains clean countertops and modern kitchen aesthetics',
      'Advanced Pre-Filter + RO + UF + Alkaline multi-stage purification delivers pure, mineral-rich, alkaline water',
      'High-capacity 10-Litre hydro-pneumatic pressurized storage tank guarantees steady, high-velocity water flow',
      'Unique built-in TDS Adjuster allows precise control over essential mineral retention',
      'Completely screw-less aesthetic cabinet ensures durability, easy servicing, and a clean finish',
      'Digital LED indicators for live Power On and Tank Full status monitoring'
    ],
    applications: ['Modern Modular Kitchens', 'Island Counters & Sinks', 'Luxury Villas & Apartments', 'Executive Pantries'],
    imageSrc: '/product_clyde_acquetta_undersink_banner.png',
    variants: [
      { id: 'banner', name: 'Specification Overview', color: '#c2410c', border: '#ea580c', imageSrc: '/product_clyde_acquetta_undersink_banner.png' },
      { id: 'cabinet', name: 'Cabinet & Tank Setup', color: '#18181b', border: '#38bdf8', imageSrc: '/product_clyde_acquetta_undersink.png' }
    ]
  },
  '135': {
    id: '135',
    slug: 'nexus-dispense-pro-hot-normal-water-purifier-vegetable-fruits',
    title: 'Nexus Dispense Pro Hot & Normal Purifier + Vegetable & Fruit Cleaner',
    category: 'domestic',
    tag: 'Hot & Normal + Ozone Detox',
    price: '₹29,000',
    originalPrice: '₹35,900',
    desc: 'Dual-temp (Hot & Normal) RO water dispenser with built-in Ozone vegetable & fruit detoxifier, smart LED panel & stainless steel drip tray.',
    fullDesc: 'Nexus Series Dispense Pro is a multi-functional culinary water dispensing powerhouse. Combines Instant Hot & Ambient Normal purified drinking water with a specialized built-in Vegetable & Fruit Ozone Purifier. Uses cutting-edge Ozone Technology to sterilize, oxidize chemicals, remove pesticides, and clean fresh produce without requiring any consumables. Features dual push dispensing taps (Red for Hot, Blue for Normal), smart illuminated LED status indicators (Hot, Power, Normal), side master toggle switch, and a heavy-duty stainless steel perforated drip tray.',
    specs: [
      { label: 'Water Dispensing', val: 'Dual Temperature: Instant Hot Water & Ambient Normal Water' },
      { label: 'Detox Technology', val: 'Built-in Ozone Technology for Vegetables & Fruits Purification' },
      { label: 'Consumables Required', val: 'Zero Consumables / Chemical-Free Ozone Sterilization' },
      { label: 'Status Display', val: 'Smart LED Indicators (Hot, Power, Normal)' },
      { label: 'Dispenser Taps', val: 'Twin Ergonomic Push-Down Taps (Color-Coded Red & Blue)' },
      { label: 'Drip Tray', val: 'Perforated Stainless Steel Detachable Drip Tray' },
      { label: 'Cabinet Finish', val: 'Glossy Piano Black Front Visor with Arctic White Body' },
      { label: 'Certification', val: 'ISI Certified Component Architecture' }
    ],
    features: [
      'Twin-temperature dispenser provides instant steaming hot water for teas/infusions and normal ambient water on demand',
      'Integrated Ozone detoxifier purifies fruits & vegetables by breaking down insecticides, bacteria, and surface toxins',
      'No consumables required — utilizes pure dissolved ozone gas to sterilize foods and eliminate odor naturally',
      'Smart LED display shows real-time Power, Hot Water heating, and Normal purification readiness',
      'Includes premium perforated stainless steel drip tray for easy cleaning and cup placement',
      'Dual safety-engineered push taps prevent accidental boiling water burns in family homes'
    ],
    applications: ['Modern Modular Kitchens', 'Health-Conscious Homes', 'Chef Pantries & Cafes', 'Executive Corporate Dining'],
    imageSrc: '/product_nexus_dispense_pro_banner.png',
    variants: [
      { id: 'banner', name: 'Product Banner & Specs', color: '#0284c7', border: '#38bdf8', imageSrc: '/product_nexus_dispense_pro_banner.png' },
      { id: 'device', name: 'Dispenser View', color: '#18181b', border: '#ef4444', imageSrc: '/product_nexus_dispense_pro.png' }
    ]
  },
  '136': {
    id: '136',
    slug: 'krystal-wave-digital-25l-ro-uv-uf-alkaline-purifier',
    title: 'Krystal Wave Digital 25 Litres RO + UV + UF + Alkaline Purifier',
    category: 'domestic',
    tag: '25L Jumbo Storage',
    price: '₹14,500',
    originalPrice: '₹19,500',
    desc: 'Heavy-capacity 25L transparent water purifier with RO + UV + UF + Alkaline multi-stage purification, Krystal Digital display & copper cartridges.',
    fullDesc: 'Krystal Wave Digital (Model SH0594) delivers an exceptional 25-Litre jumbo multi-stage storage capacity, tailored for large families, commercial pantries, and residences with high hydration demands. Features full transparent showcase housing revealing internal inline filters, dual copper/mineral cartridges, and high-efficiency RO booster pump. Equipped with RO + UV + UF + ALKALINE advanced purification stages, a star-crested central illuminated digital diagnostic dashboard, chrome dispenser tap, and ISI quality certification.',
    specs: [
      { label: 'Storage Capacity', val: '25 Litres Jumbo Multi-Stage Tank' },
      { label: 'Purification Technology', val: 'RO + UV + UF + Alkaline Advanced Purification' },
      { label: 'Digital Display', val: 'Krystal Digital Smart Display Visor with LED Diagnostics' },
      { label: 'Mineral Enrichment', val: 'Alkaline Mineral & Dual Copper Cartridge Infusion' },
      { label: 'Cabinet Design', val: 'Full Transparent Dual-Compartment Showcase Hood' },
      { label: 'Dispenser Faucet', val: 'Heavy-Duty Metallic Chrome Tap' },
      { label: 'Quality Certification', val: 'ISI Certified & 25 Years Manufacturing Excellence' },
      { label: 'Source Compatibility', val: 'Handles High TDS Borewell, Tanker & Municipal Water' }
    ],
    features: [
      'Massive 25-Litre food-grade storage tank eliminates water shortages for large families and offices',
      'Advanced 4-in-1 RO + UV + UF + Alkaline purification neutralizes dissolved solids, cysts, microbes & chemicals',
      'Dual copper and alkaline mineralization restores healthy alkaline pH and vital micro-nutrients',
      'Full transparent hood offers complete visual transparency of internal filtration cartridges',
      'Krystal Digital star-crested center LED display provides live operational and process monitoring',
      'Premium heavy chrome metallic faucet for smooth, high-flow dispensing'
    ],
    applications: ['Large Joint Families', 'Villas & Bungalows', 'Small Commercial Offices', 'Hostels & Clinic Pantries'],
    imageSrc: '/product_krystal_wave_25l.png',
    variants: [
      { id: 'appliance', name: '25L Purifier Showcase', color: '#18181b', border: '#f59e0b', imageSrc: '/product_krystal_wave_25l.png' },
      { id: 'features', name: 'Certified Specifications', color: '#0284c7', border: '#38bdf8', imageSrc: '/product_krystal_wave_25l_features.png' }
    ]
  },
  '137': {
    id: '137',
    slug: 'krrystal-wave-ro-uv-uf-alk-water-purifier-white',
    title: 'Krrystal Wave RO + UV + UF + ALK Water Purifier (White)',
    category: 'domestic',
    tag: 'RO UV UF ALK Series',
    price: '₹14,500',
    originalPrice: '₹19,500',
    desc: 'Crisp Arctic White aesthetic with transparent blue hood, RO + UV + UF + Alkaline purification, copper mineralization & 25 years trusted excellence.',
    fullDesc: 'Krrystal Wave ("Always Pure Water") delivers comprehensive RO + UV + UF + ALK (Alkaline) multi-stage purification encased in a modern Arctic White body paired with an ocean blue transparent cartridge canopy. Engineered with advanced Reverse Osmosis, in-line UV sterilizer, ultrafiltration, and dual copper/alkaline mineralization. Built with a smart circular central process badge, vertical status indicator panel, heavy-duty chrome dispenser tap with blue accent lever, and ISI certification backed by 25 years of manufacturing excellence.',
    specs: [
      { label: 'Purification Technology', val: 'RO + UV + UF + ALK (Alkaline & Mineral Enrichment)' },
      { label: 'Mineralization', val: 'Active Copper & Alkaline Mineral Balance' },
      { label: 'Cabinet Design', val: 'Arctic White Solid Tank with Ocean Blue Transparent Top Canopy' },
      { label: 'Display & Operation', val: 'Smart Central Circular Badge & Vertical LED Status Panel' },
      { label: 'Dispenser Faucet', val: 'Heavy-Duty Metallic Chrome Tap with Blue Accent Lever' },
      { label: 'Certification', val: 'ISI Certified & 25 Years Manufacturing Excellence' },
      { label: 'Source Compatibility', val: 'Borewell, Tanker & Municipal Water (Up to 2,000+ PPM TDS)' }
    ],
    features: [
      'Comprehensive RO + UV + UF + ALK process eliminates dissolved chemical salts, heavy metals & biological pathogens',
      'Infuses water with active copper and alkaline minerals to balance pH and boost immune wellness',
      'Dual design: Arctic White lower storage cabinet with ocean-tinted transparent upper cartridge showcase',
      'Smart central circular badge and vertical LED diagnostics display system readiness',
      'Heavy-duty metallic chrome tap ensures high flow rate and long leak-free service life',
      '25 Years Trusted Quality hallmark ensures industrial-grade components and durability'
    ],
    applications: ['Modern Modular Kitchens', 'Residential Apartments', 'Independent Houses & Villas', 'Office Pantries'],
    imageSrc: '/product_krrystal_wave_white.png',
    variants: [
      { id: 'white', name: 'Krrystal Wave White & Blue', color: '#0284c7', border: '#38bdf8', imageSrc: '/product_krrystal_wave_white.png' },
      { id: 'features', name: 'Certified Specifications', color: '#1e3a8a', border: '#60a5fa', imageSrc: '/product_krystal_wave_25l_features.png' }
    ]
  },
  '138': {
    id: '138',
    slug: 'krystal-auto-tds-25l-ro-uv-uf-alkaline-purifier',
    title: 'Krystal Auto TDS 25 Litres RO + UV + UF + Alkaline Purifier',
    category: 'domestic',
    tag: 'Auto TDS + Digital Monitor',
    price: '₹14,500',
    originalPrice: '₹19,500',
    desc: '25L jumbo capacity purifier with Auto TDS controller, smart digital LED display screen, full transparent ocean blue body & copper mineralization.',
    fullDesc: 'Krystal Auto TDS 25 Litres Purifier delivers advanced automated TDS management alongside high-capacity drinking water purification. Encased in a stunning ocean blue full transparent showcase body with 25L multi-stage storage. Equipped with intelligent Auto TDS balancing, digital LED screen with numeric TDS & operational readouts, multi-stage RO + UV + UF + Alkaline filtration, dual copper cartridges, and heavy chrome dispensing faucet. Built to ISI quality standards with 25 years of proven reliability.',
    specs: [
      { label: 'Storage Capacity', val: '25 Litres Jumbo Multi-Stage Storage Tank' },
      { label: 'TDS Management', val: 'Intelligent Krystal Auto TDS System' },
      { label: 'Digital Display', val: 'Smart Digital LED Screen with Live Diagnostic Readouts' },
      { label: 'Purification Stages', val: 'RO + UV + UF + Alkaline Advanced Purification' },
      { label: 'Mineral Infusion', val: 'Active Copper Cartridges & Alkaline Guard' },
      { label: 'Cabinet Design', val: 'Full Ocean Blue Transparent Showcase Hood & Tank' },
      { label: 'Dispenser Tap', val: 'Heavy-Duty Metallic Chrome Faucet' },
      { label: 'Quality Certification', val: 'ISI Certified & 25 Years Manufacturing Excellence' }
    ],
    features: [
      'Automatic TDS Controller dynamically balances natural essential minerals for optimal taste and health',
      'Smart Digital LED Display shows live operational status and numeric TDS diagnostic readings',
      'Massive 25-Litre jumbo food-grade tank meets high-volume hydration demands without running out',
      'Full transparent ocean blue body provides complete visibility of internal purification cartridges and components',
      'Dual copper and alkaline mineralization raises drinking water pH and boosts natural immunity',
      'Heavy-duty metallic chrome tap engineered for continuous high-flow dispensing'
    ],
    applications: ['Large Families & Residences', 'Corporate Pantries & Clinics', 'Hostels & Mess Halls', 'High TDS Well & Tanker Water'],
    imageSrc: '/product_krystal_auto_tds_25l_blue.png',
    variants: [
      { id: 'blue', name: 'Ocean Blue Transparent 25L', color: '#0284c7', border: '#38bdf8', imageSrc: '/product_krystal_auto_tds_25l_blue.png' },
      { id: 'features', name: 'Certified Specifications', color: '#1e3a8a', border: '#60a5fa', imageSrc: '/product_krystal_wave_25l_features.png' }
    ]
  },
  '139': {
    id: '139',
    slug: 'sarwans-wave-next-gen-kraft-hot-normal-water-purifier',
    title: "Sarwan's Wave Next Gen Kraft Hot & Normal Water Purifier",
    category: 'domestic',
    tag: 'Hot & Normal + Inbuilt Pre-Filter',
    price: '₹18,000',
    originalPrice: '₹24,500',
    desc: 'Next Gen Kraft purifier with instant Hot & Normal dispensing, RO + UV + UF + Alkaline purification, 10L tank & revolutionary inbuilt pre-filter concept.',
    fullDesc: "Sarwan's Wave Next Gen Kraft Water Purifier (\"Pure Innovation. Perfect Purity.\") by Abhi RO brings advanced multi-temperature water purification to modern homes. Features dual dispensing taps for Instant Hot Water (ideal for green tea, coffee & baby formula) and ambient Normal Water. Powered by 100% genuine RO + UV + UF + ALKALINE multi-stage purification, a 10-Litre food-grade storage tank, smart digital display with advanced process indicators, illuminated neon blue water level sight window, and an innovative concealed Inbuilt Pre-Filter Concept that eliminates clumsy external hanging bowls.",
    specs: [
      { label: 'Water Dispensing', val: 'Dual Temperature: Instant Hot Water & Ambient Normal Water' },
      { label: 'Purification Technology', val: 'Advanced RO + UV + UF + Alkaline Multi-Stage Purification' },
      { label: 'Pre-Filter System', val: 'Revolutionary Inbuilt Pre-Filter Concept (Hidden inside lower base)' },
      { label: 'Storage Capacity', val: '10 Litres Food-Grade Antibacterial Storage Tank' },
      { label: 'Digital System', val: 'Smart Top LED Display with Advanced Process Indicators (RO, Alkaline, UV)' },
      { label: 'Hot Water Safety', val: 'Dedicated Red Push Button with Safety Hot Dispense Nozzle' },
      { label: 'Normal Dispenser', val: 'Rose Gold & Glossy Black Push-Down Paddle Lever' },
      { label: 'Cabinet Finish', val: 'Sculpted Arctic White with Krafting Perfection Blue Window' }
    ],
    features: [
      'Dual hot and normal dispensing gives instant boiling hot water on demand with a safe push button',
      'Revolutionary Inbuilt Pre-Filter concept houses the spun candle inside the unit — zero external wall hanging bowls required',
      'Complete multi-stage RO + UV + UF + Alkaline system ensures 99.9% removal of dissolved salts, microbes & chemical impurities',
      'Active Alkaline mineral cartridge balances pH and enhances hydration and water sweetness',
      'Smart digital panel displays live system diagnostics for RO membrane, Alkaline infusion, and UV sterilization',
      'High-grade 10-Litre internal tank with glowing blue water level visibility window'
    ],
    applications: ['Modern Modular Kitchens', 'Smart Homes & Luxury Apartments', 'Executive Pantries', 'Doctor Clinics & Boardrooms'],
    imageSrc: '/product_sarwans_kraft_hot_normal_banner.png',
    variants: [
      { id: 'banner', name: 'Product Banner & Specs', color: '#0284c7', border: '#38bdf8', imageSrc: '/product_sarwans_kraft_hot_normal_banner.png' },
      { id: 'appliance', name: 'Appliance Front View', color: '#18181b', border: '#b45309', imageSrc: '/product_sarwans_kraft_hot_normal.png' }
    ]
  },
  '140': {
    id: '140',
    slug: 'leoaqua-frp-sediment-filter-system',
    title: 'LeoAqua Whole-House FRP Sediment Sand & Multi-Media Filter',
    category: 'filters',
    tag: 'Whole-House Filtration',
    price: '₹25,000',
    originalPrice: '₹32,000',
    desc: 'Heavy-duty whole-house FRP multi-media sand & sediment filter vessel with top multiport valve for complete suspended solids, mud & turbidity removal.',
    fullDesc: 'LeoAqua Whole-House FRP Sediment Filter System is engineered to protect complete residential homes, villas, and commercial properties from heavy suspended solids, mud, silt, algae, and turbidity. Built with an industrial-grade structural composite FRP pressure vessel, high-purity graded quartz sand & multi-media filtration bed, and a top-mounted manual multiport control valve with bypass arrangement for effortless backwashing, rinsing, and daily service filtration.',
    specs: [
      { label: 'Filter Media', val: 'Graded Quartz Sand & High-Density Multi-Media Bed' },
      { label: 'Pressure Vessel', val: 'Industrial Structural FRP (Fiber Reinforced Polymer) Tank' },
      { label: 'Control Valve', val: 'Top-Mounted Heavy Multiport Valve (Filter, Backwash, Rinse)' },
      { label: 'Flow Rate', val: '1,500 - 2,500 LPH High-Flow Whole-House Continuous Delivery' },
      { label: 'Target Impurities', val: 'Mud, Silt, Algae, Rust Flakes & Suspended Particulates' },
      { label: 'Plumbing Integration', val: 'Heavy-Duty UPVC Bypass Pipe Line Assembly' },
      { label: 'Application Scale', val: 'Complete Villa / Apartment Overhead Tank Main Line' },
      { label: 'Maintenance Routine', val: 'Quick 5-Minute Periodic Manual Backwash Cycle' }
    ],
    features: [
      'Protects entire plumbing network, overhead storage tanks, geysers, washing machines & sanitary fittings from mud build-up',
      'High-capacity graded silica sand & multi-media bed traps fine suspended dirt down to micro levels',
      'Heavy-duty composite FRP structural vessel is 100% rust-proof and weather-resistant for outdoor installations',
      'Top-mounted multiport valve allows quick manual backwash to flush out accumulated dirt in minutes',
      'Ensures crystal-clear water for bathing, washing clothes, kitchen chores, and household usage'
    ],
    applications: ['Independent Villas & Bungalows', 'Residential Apartments', 'Borewell & Well Water Supply Lines', 'Commercial Kitchens & Laundries'],
    imageSrc: '/product_frp_sediment_filter.png'
  },
  '141': {
    id: '141',
    slug: 'leoaqua-frp-iron-removal-filter-system',
    title: 'LeoAqua Whole-House FRP Iron Removal Filter System',
    category: 'filters',
    tag: 'Iron & Manganese Removal',
    price: '₹25,000',
    originalPrice: '₹32,000',
    desc: 'Heavy-duty FRP iron removal filter with catalytic manganese dioxide media for red/yellow water, metallic taste & rust stain elimination.',
    fullDesc: 'LeoAqua Whole-House FRP Iron Removal Filter System is specifically engineered to treat high dissolved iron and manganese content commonly found in deep borewell and open well water across Kerala. Utilizing specialized catalytic manganese dioxide oxidization media bed inside a corrosion-proof composite FRP pressure tank. Equipped with a top-mounted 3-way multiport valve for regular backwash and rinse, completely eliminating yellowish water, metallic odors, and reddish rust stains on tiles, bathroom fixtures, and clothes.',
    specs: [
      { label: 'Filter Media', val: 'Catalytic Manganese Dioxide & Iron Oxidation Media Bed' },
      { label: 'Pressure Vessel', val: 'High-Strength Corrosion-Proof FRP Pressure Tank' },
      { label: 'Control Valve', val: 'Top-Mounted Multiport Valve (Filter, Backwash, Fast Rinse)' },
      { label: 'Flow Rate', val: '1,500 - 2,500 LPH High-Flow Whole-House Output' },
      { label: 'Target Contaminants', val: 'Dissolved Ferrous Iron, Yellow Water, Manganese & Rust' },
      { label: 'Stain Prevention', val: 'Eliminates Yellow Staining on Sanitaryware & Clothes' },
      { label: 'Installation', val: 'Outdoor / Motor Pump Discharge Line with UPVC Bypass' },
      { label: 'Maintenance', val: 'Regular Backwash to Flush Oxidized Iron Precipitate' }
    ],
    features: [
      'Eliminates dissolved iron, yellow-tinted water, and foul metallic odor right at the main intake line',
      'Prevents persistent yellow/brown rust stains on bathroom tiles, sanitary fixtures, and white clothes',
      'Protects piping lines, solar water heaters, geysers, and appliances from internal iron scaling',
      'High-grade catalytic manganese dioxide media bed provides durable and long-lasting iron oxidation',
      'Simple lever operation on multiport valve for quick, effortless backwash and rinse routines'
    ],
    applications: ['High Iron Borewells & Open Wells', 'Homes & Villas with Yellow Water', 'Hotels, Resorts & Homestays', 'Commercial Laundries'],
    imageSrc: '/product_frp_iron_remover.png'
  },
  '142': {
    id: '142',
    slug: 'leoaqua-frp-activated-carbon-filter-system',
    title: 'LeoAqua Whole-House FRP Activated Carbon Filter System',
    category: 'filters',
    tag: 'Odor & Chemical Removal',
    price: '₹25,000',
    originalPrice: '₹32,000',
    desc: 'Whole-house FRP activated carbon filter vessel for complete adsorption of foul odor, organic pesticides, excess chlorine & bad taste.',
    fullDesc: 'LeoAqua Whole-House FRP Activated Carbon Filter System provides whole-property adsorption of free chlorine, dissolved organic matter, unpleasant odors, foul well smells, and pesticides. Constructed with high-iodine premium granular activated carbon (GAC) inside a high-strength composite FRP cylinder. Features an easy-to-use top multiport control valve with UPVC bypass piping, delivering fresh, sweet-smelling, chemical-free crystal water to every tap in your house.',
    specs: [
      { label: 'Filter Media', val: 'High-Iodine Premium Granular Activated Carbon (GAC)' },
      { label: 'Pressure Vessel', val: 'Heavy-Duty Structural FRP Cylinder with Base Stand' },
      { label: 'Control Valve', val: 'Top-Mounted Multiport Valve (Filter, Backwash, Rinse)' },
      { label: 'Flow Rate', val: '1,500 - 2,500 LPH Whole-Property Flow' },
      { label: 'Target Impurities', val: 'Foul Well Odors, Chlorine, Organic Chemicals & Off-Taste' },
      { label: 'Water Quality', val: 'Delivers Fresh, Neutral, Odorless & Clear Water' },
      { label: 'Plumbing Setup', val: 'UPVC Piping with Bypass & Isolation Valves' },
      { label: 'Maintenance', val: 'Periodic Backwash for Bed Decompaction' }
    ],
    features: [
      'Adsorbs unpleasant foul well smell, sewage gas contamination, chlorine & volatile organic chemicals',
      'Restores fresh, pleasant taste and crystal clarity to municipal, borewell & lake supply water',
      'Prevents skin and eye irritation caused by excessive chemical treatment and organic decay',
      'High-iodine activated carbon offers immense porous surface area for superior chemical capture',
      'Rugged outdoor-rated FRP composite vessel built to withstand tropical weather and pressure surges'
    ],
    applications: ['Wells & Borewells with Foul Odor', 'Chlorinated Municipal Supply Lines', 'Apartments & Gated Communities', 'Hotels & Food Services'],
    imageSrc: '/product_frp_carbon_filter.png'
  },
  '143': {
    id: '143',
    slug: 'nexus-series-25-lph-commercial-ro-plant',
    title: 'Nexus Series 25 LPH Compact Commercial RO Plant',
    category: 'plants',
    tag: '25 LPH Commercial Skid',
    price: '₹22,000',
    originalPrice: '₹28,500',
    desc: 'Heavy-duty 25 Litres/Hour commercial RO plant on powder-coated skid frame with pressure gauge, dual ON/OFF controls & triple jumbo pre-filters.',
    fullDesc: 'Nexus Series 25 LPH Commercial RO Plant is a robust, space-saving water purification system engineered for high daily consumption in offices, cafes, clinics, hostels, and restaurants. Built on a heavy-duty powder-coated steel skid frame, featuring a high-pressure commercial booster pump, analog liquid-filled pump pressure gauge, dual industrial ON/OFF toggle push buttons, high-rejection 100/150 GPD commercial RO membrane housings, and a triple 10-inch jumbo pre-filter array (CTO Carbon Block, GAC Granular Activated Carbon, and PPF Polypropylene Spun Sediment Filter). Fully ISI certified for continuous commercial operation.',
    specs: [
      { label: 'Purification Flow Rate', val: '25 Litres Per Hour (25 LPH Output)' },
      { label: 'Pre-Filter Array', val: 'Triple Heavy Housing: CTO (Carbon Block) + GAC (Activated Carbon) + PPF (Spun Sediment)' },
      { label: 'Pressure Monitoring', val: 'Analog High-Precision Liquid-Filled Pump Pressure Gauge' },
      { label: 'Control Panel', val: 'Dual Industrial Master Push Buttons (Green ON / Red OFF)' },
      { label: 'Frame Structure', val: 'Heavy-Duty Powder-Coated Metal Skid Stand with Rubber Feet' },
      { label: 'Certification', val: 'ISI Certified Commercial Component Architecture' },
      { label: 'Membrane System', val: 'High-Rejection Commercial Grade RO Membranes' },
      { label: 'Suitability', val: 'Handles High TDS Borewell, Municipal & Tanker Water' }
    ],
    features: [
      'Delivers reliable 25 Litres per hour purified output for continuous commercial drinking water supply',
      'Integrated analog pressure gauge provides live monitoring of membrane booster pump operating pressure',
      'Triple-stage pre-filtration with PPF, GAC, and CTO cartridges intercepts mud, rust, chlorine, odors & chemicals',
      'Heavy-duty industrial ON/OFF push-button switches for convenient, safe operator control',
      'Free-standing skid frame design allows effortless placement on countertops, utility slabs, or wall brackets',
      'ISI certified components engineered for long operating hours and minimal maintenance downtime'
    ],
    applications: ['Offices & Corporate Pantries', 'Cafes, Restaurants & Juice Bars', 'Hospitals, Clinics & Labs', 'Hostels, Schools & Daycares'],
    imageSrc: '/product_nexus_commercial_ro_25lph.png'
  },
  '144': {
    id: '144',
    slug: 'alupro-active-copper-ro-uv-water-purifier',
    title: 'Alupro Active Copper RO + UV + TDS Water Purifier',
    category: 'domestic',
    tag: 'Active Copper + UV Filter',
    price: '₹13,900',
    originalPrice: '₹18,500',
    desc: 'Designer Arctic White & Snowflake Blue RO purifier with 3-in-1 Active Copper technology, in-line UV sterilizer, TDS controller, pH balancer & LED panel.',
    fullDesc: 'Alupro Active Copper Water Purifier ("Blue Filtration Waterfall System") is engineered with modern aesthetics and advanced hydration science. Encased in an eye-catching Arctic White cabinet adorned with frosty snowflake decals, a transparent upper canopy with futuristic chevron accents, and clear cartridge visibility. Features 3-in-1 Active Copper technology, in-line UV disinfection, multi-stage RO membrane filtration, built-in TDS Controller, pH balancer, vertical LED indicator cluster, and a chrome dispenser tap with water-level sight glass.',
    specs: [
      { label: 'Purification Technology', val: 'Multi-Stage RO + In-Line UV + TDS Controller' },
      { label: 'Copper Enrichment', val: '3-in-1 Active Copper Cartridge Technology' },
      { label: 'pH Balance', val: 'Alkaline Mineral & pH Balancer Cartridge' },
      { label: 'Display & Alerts', val: 'Vertical LED Status Cluster (Power, Purification, Tank Full)' },
      { label: 'Storage Tank', val: '10 Litres Food-Grade Antibacterial Tank with Level Sight' },
      { label: 'Cabinet Design', val: 'Arctic White with Snowflake Motifs & Transparent Chevron Canopy' },
      { label: 'Dispenser Faucet', val: 'Heavy Chrome Metallic Tap with Blue Accent Ring' },
      { label: 'Source Compatibility', val: 'Borewell, Tanker & Municipal Water (Up to 2,000 PPM TDS)' }
    ],
    features: [
      'Active Copper Technology enriches purified drinking water with essential copper ions for improved digestion and immunity',
      'In-line UV disinfection chamber sterilizes 99.9% of harmful bacteria, viruses, and microbial cysts',
      'Integrated TDS Controller allows precise adjustment of natural essential minerals for sweet-tasting water',
      'pH balancer maintains optimal alkaline equilibrium for daily household health and hydration',
      'Stunning transparent upper hood with chrome chevron styling reveals genuine high-grade internal filter cartridges',
      'Large food-grade tank with front vertical sight glass lets you view stored water volume at a glance'
    ],
    applications: ['Modern Modular Kitchens', 'Residential Apartments', 'Villas & Bungalows', 'Home Pantries'],
    imageSrc: '/product_alupro_active_copper_ro.png'
  }
};

// ==============================================================================
// PREVIOUS / ARCHIVED PRODUCTS (COMMENTED OUT)
// ==============================================================================
/*
export const archivedProductsData = {
  '101': {
    id: '101',
    slug: 'aqua-phoenix-gold-ro',
    title: 'Aqua Phoenix Gold Mineral RO Water Purifier',
    category: 'domestic',
    tag: 'Active Copper',
    price: '₹10,999',
    originalPrice: '₹14,500',
    desc: '10 Litres Pure Mineral Water Storage with RO + UV + UF + Active Copper Infusion & Smoked Canopy with Water Gauge.',
    fullDesc: 'Aqua Phoenix Gold Mineral RO Water Purifier features state-of-the-art 10-stage purification with Active Copper infusion. It effectively eliminates dissolved salts, heavy metals, and micro-organisms while enriching drinking water with essential minerals and copper ions for optimal health.',
    specs: [
      { label: 'Storage Capacity', val: '10 Litres Pure Mineral Water Storage' },
      { label: 'Purification Technology', val: 'RO + UV + UF + Active Copper Infusion' },
      { label: 'Design Canopy', val: 'Transparent Smoked Canopy with Water Gauge' },
      { label: 'Purification Capacity', val: '15 Litres / Hour' },
      { label: 'TDS Controller', val: 'Adjustable TDS Mineral Controller' },
      { label: 'Tank Material', val: 'Food-Grade Antibacterial ABS' }
    ],
    features: [
      'Active Copper technology infuses health-boosting copper ions into purified water',
      'Transparent smoked front canopy with built-in water level indicator',
      'Removes dissolved salts (TDS), pesticides, heavy metals, bacteria & viruses',
      'Automatic low-pressure shut-off and auto-tank full stop'
    ],
    applications: ['Home Kitchens', 'Residential Villas', 'Apartments', 'Small Offices'],
    imageSrc: '/product_aqua_phoenix_gold_ro.png'
  },
  '102': {
    id: '102',
    slug: 'wave-deluxe-ro-uv-uf',
    title: 'Wave Deluxe RO + UV + UF Water Purifier',
    category: 'domestic',
    tag: 'Deluxe Edition',
    price: '₹11,499',
    originalPrice: '₹15,000',
    desc: 'Multi-stage RO + UV + UF purification featuring 10L storage tank, stainless steel UV chamber, and LED status alerts.',
    fullDesc: 'Wave Deluxe RO + UV + UF Water Purifier delivers dual safety with advanced Reverse Osmosis and a heavy-duty Stainless Steel UV disinfection chamber. Equipped with multi-stage pre and post filters to purify well and corporation water.',
    specs: [
      { label: 'Storage Tank', val: '10 Litres Storage Tank' },
      { label: 'Filtration Stages', val: 'Multi-Stage RO+UV+UF Filtration' },
      { label: 'UV Disinfection', val: 'Stainless Steel UV Chamber & LED Alerts' },
      { label: 'Flow Rate', val: '15 Litres / Hour' },
      { label: 'Membrane Type', val: 'High-Rejection 80 GPD RO Membrane' }
    ],
    features: [
      'Stainless steel UV fail-safe chamber ensures 100% germ-free water',
      'Multi-stage filtration strips off mud, chlorine, bad taste & odor',
      'LED indicator panel for power, purification, and tank full status',
      'Food-grade non-toxic storage tank with easy dispensing tap'
    ],
    applications: ['Kitchen Countertops', 'Apartment Homes', 'Offices', 'Clinics'],
    imageSrc: '/product_wave_deluxe_ro.png'
  },
  '103': {
    id: '103',
    slug: 'wave-krystal-12l-ro',
    title: 'Wave Krystal 12 Litres RO Water Purifier',
    category: 'domestic',
    tag: 'Mineral Guard',
    price: '₹12,999',
    originalPrice: '₹16,500',
    desc: '12 Litres high-capacity RO water purifier with integrated mineral controller and transparent display canopy.',
    fullDesc: 'Wave Krystal 12L RO Water Purifier is designed for medium to large families needing continuous pure water. Includes an advanced mineral guard controller that preserves essential natural minerals while removing toxic salts and pathogens.',
    specs: [
      { label: 'Storage Capacity', val: '12 Litres Pure Water Storage' },
      { label: 'Technology', val: 'Reverse Osmosis + Mineral Controller' },
      { label: 'Front Display', val: 'Transparent Filtration Display Canopy' },
      { label: 'Purification Rate', val: '15-18 Litres / Hour' }
    ],
    features: [
      'Generous 12-litre storage tank capacity prevents water shortages',
      'Mineral Guard controller retains essential natural calcium & magnesium',
      'Transparent canopy allows clear viewing of internal filter cartridges',
      'High efficiency booster pump for low incoming water pressure'
    ],
    applications: ['Large Families', 'Villas', 'Cafeterias', 'Staff Kitchens'],
    imageSrc: '/product_wave_krystal_ro.png'
  },
  '104': {
    id: '104',
    slug: 'wave-krystal-digital-ro',
    title: 'Wave Krystal Digital RO Water Purifier',
    category: 'domestic',
    tag: 'Digital Display',
    price: '₹18,500',
    originalPrice: '₹22,500',
    desc: 'Smart digital RO water purifier with real-time TDS display, water gauge, temperature indicator, and auto flush technology.',
    fullDesc: 'Wave Krystal Digital RO is a high-tech smart purifier featuring a real-time digital display panel showing live TDS levels, temperature, and filter status. Includes RO + UV + UF + Alkaline 7-stage purification.',
    specs: [
      { label: 'Storage Tank', val: '12 Litres Storage with Smart Water Gauge' },
      { label: 'Purification Tech', val: 'Multi-Stage RO + UV + UF + Alkaline Filtration' },
      { label: 'Digital Panel', val: 'Real-Time Digital Display (TDS, Temp, Auto Flush)' },
      { label: 'Alkaline Filter', val: 'Active pH Balancer (pH 7.5 - 8.5)' }
    ],
    features: [
      'Real-time digital screen monitors water TDS and operating health',
      'Alkaline cartridge balances pH levels for enhanced energy and digestion',
      'Auto-flush technology cleans RO membrane automatically to extend life',
      '12L heavy storage tank with electronic water level sensor'
    ],
    applications: ['Executive Homes', 'Modern Kitchens', 'Corporate Cabins', 'Dental Clinics'],
    imageSrc: '/product_wave_krystal_digital_ro.png'
  },
  '105': {
    id: '105',
    slug: 'prolife-viber-advanced-12l-ro',
    title: 'Prolife Viber Advanced Water Purifier',
    category: 'domestic',
    tag: '12L Capacity',
    price: '₹13,999',
    originalPrice: '₹18,500',
    desc: 'Advanced 12L capacity RO+UV+UF water purifier with Viber Copper mineral technology and TDS controller.',
    fullDesc: 'Prolife Viber Advanced features Viber Copper Mineral infusion combined with multi-stage RO, UV, and UF filtration. Ideal for borewell water with high hardness and suspended solids.',
    specs: [
      { label: 'Storage Tank', val: '12L Large Storage Capacity' },
      { label: 'Purification System', val: 'RO + UV + UF + TDS Adjuster/Controller' },
      { label: 'Mineral Infusion', val: 'Viber Copper Mineral Technology' },
      { label: 'Power Consumption', val: '36W Low Power' }
    ],
    features: [
      'Viber Copper technology charges drinking water with antimicrobial copper ions',
      'High-rejection RO membrane eliminates fluoride, arsenic, lead & nitrates',
      'Built-in TDS adjuster allows custom tuning of water taste',
      'Durable ABS cabinet with sleek metallic finish'
    ],
    applications: ['Residences', 'Rental Apartments', 'Commercial Offices', 'Schools'],
    imageSrc: '/product_prolife_viber_ro.png'
  },
  '106': {
    id: '106',
    slug: 'prolife-aqua-9l-ro',
    title: 'ProLife Aqua 9 L RO Water Purifier',
    category: 'domestic',
    tag: 'Popular Choice',
    price: '₹9,000',
    originalPrice: '₹12,500',
    desc: 'Compact 9L multi-stage RO+UV drinking water purifier built with food-grade natural tank and leak-proof tap.',
    fullDesc: 'ProLife Aqua 9L RO Purifier provides reliable, affordable household water purification. Engineered with multi-stage RO+UV filtration to remove dissolved impurities, bacteria, and virus.',
    specs: [
      { label: 'Storage Capacity', val: '9 Litres Storage Capacity' },
      { label: 'Filtration', val: 'Multi-Stage RO+UV Purification' },
      { label: 'Tank Build', val: 'Food-Grade Natural Tank & Tap' },
      { label: 'Purification Output', val: '12-15 Litres / Hour' }
    ],
    features: [
      'Compact wall-mountable or countertop design saves kitchen space',
      'Food-grade non-toxic storage tank ensures 100% safe storage',
      'Efficient multi-stage purification removes hardness and bad taste',
      'Affordable maintenance and easy filter replacements'
    ],
    applications: ['Small Apartments', 'Budget Homes', 'Student Hostels', 'Retail Shops'],
    imageSrc: '/product_prolife_aqua_9l.png'
  },
  '107': {
    id: '107',
    slug: 'prolife-fiesta-ro-uv-uf',
    title: 'Prolife Fiesta RO + UV + UF Water Purifier',
    category: 'domestic',
    tag: 'Copper Charge',
    price: '₹17,990',
    originalPrice: '₹22,500',
    desc: 'Premium RO + UV + UF water purifier equipped with Active Copper Charge technology and self-suction booster pump.',
    fullDesc: 'Prolife Fiesta is a premium home water purifier with integrated Active Copper Charge technology, self-suction booster pump for low pressure areas, and digital status display.',
    specs: [
      { label: 'Purification System', val: 'RO + UV + UF Multi-Stage Purification' },
      { label: 'Copper Feature', val: 'Active Copper Charge Technology' },
      { label: 'Pump Type', val: 'Self Suction Booster Pump & Display' },
      { label: 'Capacity', val: '10 Litres Storage' }
    ],
    features: [
      'Self-suction booster pump draws water even from low pressure overhead tanks',
      'Active Copper Charge technology for anti-inflammatory immunity benefits',
      'Multi-stage RO+UV+UF filtration eliminates 99.9% waterborne contaminants',
      'Elegant glossy front body with smart indicator LEDs'
    ],
    applications: ['Luxury Villas', 'Modern Homes', 'Boutique Clinics', 'Executive Suites'],
    imageSrc: '/product_prolife_fiesta_ro.png'
  },
  '108': {
    id: '108',
    slug: 'pure-drops-sediment-filter-frp-vessel',
    title: 'LeoAqua Sediment Filter',
    category: 'filters',
    tag: 'Sand & Sediment Media',
    price: 'Starting from ₹18,000',
    originalPrice: '₹24,000',
    desc: 'Premium heavy-duty sand and sediment media filter vessel. Removes dust, silt, clay, mud, and all suspended particles from incoming water supply.',
    fullDesc: 'LeoAqua Sediment Filter is a premium heavy-duty sand and sediment media filter vessel designed to strain out dust, silt, clay, mud, and suspended solids right at your main water inlet. Built with a high-strength FRP pressure vessel, top-mounted multiport valve for easy manual backwashing, and high-purity turbid sand media, guaranteeing clean water throughout your home or facility.',
    specs: [
      { label: 'Flow Capacity', val: '1,000 - 10,000 LPH Flow Rate' },
      { label: 'Filter Media', val: 'Turbid / Muddy Sand Media Bed' },
      { label: 'Pressure Vessel', val: 'High Strength FRP Pressure Vessel Tank' },
      { label: 'Control Valve', val: 'Top-Mounted Multiport Valve (Backwash, Rinse, Filter)' },
      { label: 'Ideal For', val: 'Turbid / Muddy Well Water & Borewell Water' },
      { label: 'Maintenance', val: 'Easy Manual Backwash in 5 Minutes' },
      { label: 'Warranty', val: '2 Years Official Warranty' }
    ],
    features: [
      'Removes dust, silt, clay, mud, and all suspended particles from incoming water supply',
      'Filters water for the entire house including storage tanks, showers, washing machines & heaters',
      'Heavy-duty FRP pressure vessel withstands high line pressure and outdoor weather',
      'Manual multiport valve allows effortless regular backwashing to keep filter media clean & long-lasting'
    ],
    applications: ['Whole House / Villas', 'Apartment Complexes', 'Homestays', 'Hostels & Commercial Buildings'],
    imageSrc: '/product_puredrops_sediment_filter.png'
  },
  '125': {
    id: '125',
    slug: 'pa-fighter-series-uv-uf-purifier',
    title: 'P&A Fighter Series UV + UF Water Purifier',
    category: 'domestic',
    tag: 'E-Booster 5-Stage',
    price: '₹9,500',
    originalPrice: '₹13,500',
    desc: '5-Stage E-Booster System UV + UF Purifier with 9 Litres storage, 1100 IV Carbon, and 1.0 Fighter Digital Display.',
    fullDesc: 'P&A Fighter Series UV + UF Purifier features advanced 5-stage filtration (Pre-Filter, Sediment, 1100 IV Carbon, UV LED Strip, 10" UF). Built with an integrated E-Booster system, 9 Litres food-grade storage tank, Yongchaung SV, and 1.0 Fighter digital display panel.',
    specs: [
      { label: 'Filtration System', val: '5 Stage (Pre-Filter, Sediment, 1100 IV Carbon, UV LED Strip, 10" UF)' },
      { label: 'Storage Tank', val: '9 Litres Food-Grade Tank' },
      { label: 'UV System', val: 'Plastic Barrel with UV LED Strip' },
      { label: 'UF Membrane', val: '10 Inch Ultra Filtration' },
      { label: 'Digital Display', val: '1.0 Fighter Digital Display Panel' },
      { label: 'Solenoid & SMPS', val: 'Yongchaung SV & 2.5 Amp SMPS' }
    ],
    features: [
      '5-Stage filtration (Pre-Filter, Sediment, Carbon, UV LED & UF) for 100% germ-free water',
      'E-Booster System ensures smooth water flow even in low pressure supply lines',
      'Smart 1.0 Fighter digital display panel with real-time status monitors',
      'High iodine 1100 IV activated carbon removes chlorine, pesticides & foul odor'
    ],
    applications: ['Home Kitchens', 'Residential Apartments', 'Clinics', 'Small Offices'],
    imageSrc: '/product_pa_fighter_series_uv_uf.png'
  },
  '126': {
    id: '126',
    slug: 'pa-fighter-3-0-aqua-reverse-purifier',
    title: 'P&A Fighter 3.0 Aqua Reverse Water Purifier',
    category: 'domestic',
    tag: 'Fighter 3.0 RO',
    price: '₹12,500',
    originalPrice: '₹16,000',
    desc: 'Premium 100% Pure Water Fighter 3.0 Series RO + UV + UF + Alkaline Water Purifier in obsidian black cabinet with pre-filter.',
    fullDesc: 'P&A Fighter 3.0 Aqua Reverse Water Purifier features state-of-the-art multi-stage RO, UV, UF, and Alkaline mineral purification. Built in a heavy-duty obsidian black cabinet with central digital indicator, pre-filter emblem, and high-flow booster pump.',
    specs: [
      { label: 'Purification Technology', val: 'RO + UV + UF + Alkaline Mineralizer' },
      { label: 'Cabinet Design', val: 'Heavy-Duty Obsidian Black with Digital Screen' },
      { label: 'Storage Tank', val: '10 Litres Food-Grade Antibacterial Tank' },
      { label: 'Pre-Filter Unit', val: 'External Pre-Filter Housing Included' },
      { label: 'Quality Certification', val: '100% Pure Water Fighter 3.0 Series Certified' }
    ],
    features: [
      'Multi-stage RO+UV+UF+Alkaline filtration eliminates 99.9% dissolved salts & heavy metals',
      'Integrated digital status monitor displays operational health and tank status',
      'Heavy-duty obsidian black cabinet resists scratching and environmental wear',
      'Pre-filter unit blocks coarse mud, rust, and heavy sediments'
    ],
    applications: ['Modern Kitchens', 'Villas', 'Corporate Offices', 'Doctor Clinics'],
    imageSrc: '/product_pa_fighter_3_0_aqua_reverse.png'
  },
  '127': {
    id: '127',
    slug: 'k100-pure-safe-active-copper-ro',
    title: 'K100 Pure & Safe Active Copper Mineral RO Purifier',
    category: 'domestic',
    tag: 'Active Copper K100',
    price: '₹11,500',
    originalPrice: '₹15,000',
    desc: '10 Stage RO + UV + UF + Post Carbon with Active Copper Mineral Purifier featuring K100 transparent canopy & water gauge.',
    fullDesc: 'K100 Pure & Safe Mineral RO Purifier features 10-stage advanced filtration including Sediment Filter, Pre-Carbon, High-Rejection RO Membrane, UF Membrane, and Post Carbon with Active Copper Infusion. Built with transparent canopy and water level indicator gauge.',
    specs: [
      { label: 'Mineral Infusion', val: 'Post Carbon with Active Copper Infusion' },
      { label: 'Filtration Stages', val: '10 Stage (Sediment, Pre-Carbon, RO, UF, Active Copper)' },
      { label: 'Water Gauge', val: 'Transparent Smoked Canopy with Water Level Gauge' },
      { label: 'Purification Indicators', val: 'RO, UV, UF & Copper LED Status Panel' },
      { label: 'Storage Capacity', val: '10 Litres Food-Grade Tank' }
    ],
    features: [
      'Active Copper post-carbon cartridge infuses essential copper ions for health & immunity',
      'Multi-stage RO+UV+UF filtration eliminates heavy metals, pesticides & micro-organisms',
      'Smoked transparent top canopy provides clear visibility of internal filter cartridges',
      'Water level indicator column prevents dry runs and short supply'
    ],
    applications: ['Home Kitchens', 'Residential Apartments', 'Villas', 'Staff Pantries'],
    imageSrc: '/product_k100_pure_safe_active_copper_ro.png'
  },
  '128': {
    id: '128',
    slug: 'pa-p90-monsoon-ready-champion-ro',
    title: 'P&A P90 Monsoon Ready Champion RO+UV+UF+Alkaline Purifier',
    category: 'domestic',
    tag: 'ISI Certified IS 16240',
    price: '₹14,000',
    originalPrice: '₹18,500',
    desc: 'ISI Certified 7-Stage RO + UV + UF + Alkaline Water Purifier with Auto Flush, Nano Tech, and Mineral Controller.',
    fullDesc: 'P&A P90 Monsoon Ready Champion is an ISI Certified (IS 16240:2023) high-grade domestic water purifier engineered for heavy monsoon turbidity and well water hardness in Kerala. Featuring 7-stage RO + UV + UF + Alkaline mineral technology, Nano Tech filtration, Auto Flush membrane protection, and tank status LEDs.',
    specs: [
      { label: 'Certification', val: 'Official ISI Certified (IS 16240:2023, CM/L: 7100109513)' },
      { label: 'Purification Stages', val: '7 Stage (RO + UV + UF + Alkaline + Nano Tech)' },
      { label: 'Membrane Protection', val: 'Auto Flush System & Mineral Controller' },
      { label: 'Display Panel', val: 'Smart LED Panel (Tank Empty, Tank Full, Purifying)' },
      { label: 'Water Gauge', val: 'Vertical Central Transparent Water Level Indicator' },
      { label: 'Storage Tank', val: '10 Litres Food-Grade Antibacterial Tank' }
    ],
    features: [
      'Official ISI Certification (IS 16240:2023) guarantees highest safety & quality standards',
      'Monsoon Ready design handles extreme turbidity, mud, and seasonal bacteria surges',
      'Auto-flush technology cleans RO membrane automatically to extend filter lifespan',
      'Alkaline mineralizer enhances water pH (7.5-8.5) and infuses essential natural minerals'
    ],
    applications: ['Home Kitchens', 'Villas', 'Apartment Communities', 'Executive Offices'],
    imageSrc: '/product_pa_p90_monsoon_champion.png'
  },
  '129': {
    id: '129',
    slug: 'pa-fighter-2-0-ro-uv-uf-tds-purifier',
    title: 'P&A Fighter 2.0 RO + UV + UF + TDS Water Purifier',
    category: 'domestic',
    tag: 'Fighter 2.0 RO',
    price: '₹12,000',
    originalPrice: '₹15,500',
    desc: 'Multi-stage RO + UV + UF + TDS Controller Water Purifier featuring Fighter 2.0 obsidian black cabinet with central digital monitor.',
    fullDesc: 'P&A Fighter 2.0 Water Purifier (Fighter Series) delivers high-performance 6-stage purification (RO, UV, UF, TDS Controller). Built in an elegant obsidian black cabinet with central digital indicator panel and high-rejection RO membrane.',
    specs: [
      { label: 'Purification Technology', val: 'RO + UV + UF + TDS Controller' },
      { label: 'Cabinet Finish', val: 'Glossy Obsidian Black Fighter 2.0 Frame' },
      { label: 'Display Panel', val: 'Central Digital Status Indicator Screen' },
      { label: 'TDS Adjustment', val: 'Manual TDS Modulator Controller' },
      { label: 'Storage Tank', val: '10 Litres Food-Grade Antibacterial Tank' }
    ],
    features: [
      'Multi-stage RO+UV+UF filtration strips off dissolved salts, chlorine & heavy metals',
      'Integrated TDS Controller allows fine-tuning water mineral levels & taste',
      'Central digital status indicator panel monitors operating health',
      'High durability obsidian black cabinet design with smooth drip tray'
    ],
    applications: ['Home Kitchens', 'Residential Apartments', 'Villas', 'Offices'],
    imageSrc: '/product_pa_fighter_2_0_ro.png'
  },
  '130': {
    id: '130',
    slug: 'pa-fighter-series-utc-model-ro',
    title: 'P&A Fighter Series UTC Model Under-Sink RO Purifier',
    category: 'domestic',
    tag: 'Under-Counter 3000 TDS',
    price: '₹16,500',
    originalPrice: '₹21,000',
    desc: 'Under-The-Counter (UTC) RO Purifier with Axeon HT 3000 TDS Membrane, 4 Gallon Pressure Tank & Heavy Quality Faucet.',
    fullDesc: 'P&A Fighter Series UTC (Under-The-Counter) Model is engineered for sleek concealed under-sink installation. Built to handle up to 3000 TDS high salinity water, featuring Axeon HT 3000 TDS Membrane, 6-stage filtration (Pre Filter, Sediment, Carbon, Membrane, Alkaline, UF), 4-Gallon Hydro-Pneumatic Storage Tank, High Quality LEFOO Pump, Yongchuang SV, TDS Controller, and heavy-grade stainless steel countertop goose-neck faucet.',
    specs: [
      { label: 'Installation Type', val: 'UTC / Under-The-Counter Concealed Sink Mounting' },
      { label: 'Purification Stages', val: '6 Stage (Pre-Filter - Sediment - Carbon - Membrane - Alkaline - UF)' },
      { label: 'RO Membrane', val: 'Axeon HT 3000 TDS Membrane (Works up to 3000 TDS)' },
      { label: 'Storage Tank', val: '4 Gallon Hydro-Pneumatic Pressure Tank' },
      { label: 'Countertop Faucet', val: 'Heavy Duty Stainless Steel Goose-neck Faucet' },
      { label: 'Booster Pump & SV', val: 'High Quality LEFOO Pump & Yongchuang Solenoid Valve' },
      { label: 'TDS Adjustment', val: 'Integrated TDS Controller' }
    ],
    features: [
      'Under-sink space-saving concealed design keeps kitchen countertops clutter-free',
      'Axeon HT high-rejection membrane treats extreme raw water salinity up to 3000 TDS',
      'Hydro-pneumatic 4 Gallon pressurized storage tank ensures continuous fast water flow',
      'Includes premium chrome/stainless steel goose-neck faucet for countertop dispensing',
      'Heavy-duty LEFOO booster pump and Yongchuang solenoid valve ensure reliable pressure & auto-shutoff'
    ],
    applications: ['Modern Modular Kitchens', 'Luxury Villas', 'Apartment Islands', 'Cafes & Pantries'],
    imageSrc: '/product_pa_fighter_utc_model.png'
  },
  '131': {
    id: '131',
    slug: 'pa-fighter-1-0-ro-uv-uf-active-copper-purifier',
    title: 'P&A Fighter 1.0 RO + UV + UF + Active Copper Purifier',
    category: 'domestic',
    tag: 'Fighter 1.0 Active Copper',
    price: '₹12,500',
    originalPrice: '₹16,000',
    desc: 'Multi-stage RO + UV + UF + Active Copper Water Purifier featuring Fighter 1.0 obsidian black cabinet with central digital LED screen.',
    fullDesc: 'P&A Fighter 1.0 Water Purifier (Fighter Series) combines advanced RO + UV + UF purification with Active Copper (CU) infusion. Features an elegant obsidian black cabinet with silver separator accent, central LED status screen, and dedicated RO/UV/UF/CU process indicators.',
    specs: [
      { label: 'Purification Technology', val: 'RO + UV + UF + Active Copper (CU Infusion)' },
      { label: 'Cabinet Finish', val: 'Glossy Obsidian Black Fighter 1.0 Cabinet with Silver Accent' },
      { label: 'Display Panel', val: 'Central Digital Status Screen & RO/UV/UF/CU LED Indicators' },
      { label: 'Mineral Infusion', val: 'Active Copper (CU) Cartridge for Immunity & Wellness' },
      { label: 'Storage Tank', val: '10 Litres Food-Grade Antibacterial Tank' }
    ],
    features: [
      'Active Copper (CU) cartridge infuses vital minerals and copper ions into purified water',
      'Multi-stage RO+UV+UF purification removes 99.9% dissolved impurities, microbes & heavy metals',
      'Fighter 1.0 glossy black cabinet design with silver accent bar and central LED display',
      'High-grade food-safe internal tank with anti-bacterial protection'
    ],
    applications: ['Home Kitchens', 'Residential Apartments', 'Villas', 'Offices'],
    imageSrc: '/product_pa_fighter_1_0_ro.png'
  },
  '132': {
    id: '132',
    slug: 'bright-automatic-water-level-controller',
    title: 'BRIGHT Automatic Water Level Controller',
    category: 'domestic',
    tag: 'Auto Tank Control',
    price: '₹1,500',
    originalPrice: '₹2,200',
    desc: 'Automatic & reliable water level controller for overhead tank management. Prevents overflow, saves water & electricity.',
    fullDesc: 'BRIGHT Automatic Water Level Controller is a smart solution for water tank management. Engineered for automatic motor pump control (Auto ON/OFF) and overflow protection. Features a compact wall socket unit with Power, Motor ON (M.ON), and Motor OFF (M.OFF) status indicators, durable float sensor stem assembly, and easy plug-and-play wiring.',
    specs: [
      { label: 'Control Function', val: 'Automatic Motor Pump ON / OFF Control' },
      { label: 'Protection', val: 'Overflow Protection & Dry Run Prevention' },
      { label: 'Indicators', val: 'LED Status Indicators (Power, M.ON, M.OFF)' },
      { label: 'Installation', val: 'Compact Socket Unit with Plug-and-Play Sensor Stem' },
      { label: 'Efficiency', val: 'Saves Water, Energy & Extends Pump Lifespan' }
    ],
    features: [
      'AUTO ON/OFF system automatically turns water pump motor on when water level drops and off when tank is full',
      'Overflow protection prevents water spillage, protecting roof slabs and saving water & electricity',
      'Avoids unnecessary pump operation to save power and prevent motor overheating',
      'Simple, compact, user-friendly plug-in design for easy residential and commercial installation'
    ],
    applications: ['Overhead Water Tanks', 'Home Water Pumps', 'Apartment Buildings', 'Hostels & Commercial Buildings'],
    imageSrc: '/product_bright_water_level_controller.png'
  },
  '133': {
    id: '133',
    slug: 'aqua-pure-250-lph-ro-uv-commercial-plant-with-tank',
    title: 'Aqua Pure 250 LPH RO + UV Commercial Plant with Tank',
    category: 'plants',
    tag: '250 LPH Commercial',
    price: '₹30,000',
    originalPrice: '₹42,000',
    desc: 'Heavy-duty 250 LPH Commercial RO + UV Water Purification Plant built on stainless steel skid frame with storage tank.',
    fullDesc: 'Aqua Pure 250 LPH Commercial RO + UV Water Plant is designed for heavy-duty commercial operations requiring up to 250 Litres per Hour purified water output. Built on a premium grade 304 Stainless Steel open skid frame, featuring 3 x 20-inch Jumbo Pre-filter housings, high-rejection industrial RO membranes, high-capacity dual booster pumps, high-intensity UV disinfection chamber, and external storage tank compatibility.',
    specs: [
      { label: 'Purification Capacity', val: '250 Litres / Hour (250 LPH)' },
      { label: 'Purification Technology', val: 'Commercial RO + UV + Multi-Stage Jumbo Filtration' },
      { label: 'Frame Structure', val: '304 Grade Stainless Steel Heavy Open Skid Frame' },
      { label: 'Pre-Filter Housings', val: 'Triple 20-inch Heavy Duty Blue Jumbo Housings' },
      { label: 'Booster Pumps', val: 'Dual Heavy-Duty High Pressure Commercial Pumps' },
      { label: 'Storage Compatibility', val: 'Includes Commercial Grade Storage Tank' },
      { label: 'TDS Handling', val: 'Handles TDS Levels up to 3000 PPM' }
    ],
    features: [
      'Delivers massive 250 LPH purified water flow for high demand commercial establishments',
      'Corrosion-resistant heavy-duty stainless steel skid structure ensures long-term industrial durability',
      'Triple 20" jumbo sediment and carbon filters remove heavy suspended solids, mud & chlorine',
      'High-pressure dual commercial pumps ensure optimal membrane pressure and high water recovery',
      'Includes high-intensity UV chamber for 100% microbiological sterilization'
    ],
    applications: ['Schools & Colleges', 'Restaurants & Hotels', 'Factories & Workplaces', 'Hospitals & Apartments'],
    imageSrc: '/product_aqua_pure_250lph_ro_uv.png'
  },
  '134': {
    id: '134',
    slug: 'aqua-grand-under-sink-ro-uv-copper-purifier',
    title: 'Aqua Grand UnderSink RO + UV + TDS + Copper Purifier',
    category: 'domestic',
    tag: 'UnderSink Active Copper',
    price: '₹17,000',
    originalPrice: '₹22,500',
    desc: 'Under-the-sink RO + UV + TDS Controller + Active Copper Water Purifier with hydro-pneumatic tank & heavy goose-neck faucet.',
    fullDesc: 'Aqua Grand UnderSink RO Water Purifier brings high-performance purification neatly hidden under your kitchen counter. Featuring multi-stage RO, UV disinfection, TDS Controller, and Active Copper Mineral Cartridge. Comes complete with a high-capacity hydro-pneumatic pressurized storage tank, external pre-filter housing, and heavy-duty stainless steel countertop goose-neck faucet.',
    specs: [
      { label: 'Installation Type', val: 'Under-The-Sink / Concealed UTC Mounting' },
      { label: 'Purification Technology', val: 'RO + UV + TDS Controller + Active Copper (CU)' },
      { label: 'Mineral Enrichment', val: 'Active Copper Cartridge for Immunity & Taste' },
      { label: 'Storage Tank', val: 'Hydro-Pneumatic Pressurized Storage Tank' },
      { label: 'Dispensing Faucet', val: 'Heavy-Duty Stainless Steel Goose-neck Countertop Faucet' },
      { label: 'Pre-Filtration', val: 'External High-Flow Pre-Filter Assembly' }
    ],
    features: [
      'Concealed under-sink installation maintains clean aesthetic and clutter-free kitchen counters',
      'Active Copper filter cartridge infuses natural health benefits and anti-bacterial copper ions',
      'Stainless steel UV chamber eliminates 99.9% harmful bacteria, viruses, and microbial contaminants',
      'Integrated TDS controller allows precise tuning of essential mineral balance and water taste',
      'Pressurized hydro-pneumatic tank delivers continuous fast flow water directly to countertop faucet'
    ],
    applications: ['Modular Kitchens', 'Apartment Islands', 'Luxury Villas', 'Executive Pantries'],
    imageSrc: '/product_aqua_grand_undersink_ro.png'
  },
  '135': {
    id: '135',
    slug: 'sarwans-wave-under-sink-ro-uv-uf-alkaline-purifier',
    title: "Sarwan's Wave Under Sink RO + UV + UF + Alkaline Purifier",
    category: 'domestic',
    tag: 'Under Sink Alkaline 4G',
    price: '₹18,500',
    originalPrice: '₹24,000',
    desc: 'Under-the-sink RO + UV + UF + Alkaline Purifier with 4 Gallon Hydro-Pneumatic Tank & Stainless Steel Faucet.',
    fullDesc: "Sarwan's Wave Under Sink Water Purifier is a premium concealed purification system engineered for modern kitchens. Features 6-stage RO + UV + UF + Alkaline mineral technology, clear protective inline housing, high-rejection RO membrane, 4-Gallon Hydro-Pneumatic pressurized storage tank, and heavy-duty stainless steel countertop goose-neck faucet.",
    specs: [
      { label: 'Installation Type', val: 'Under Sink Concealed Cabinet Mounting' },
      { label: 'Purification Technology', val: 'RO + UV + UF + Alkaline Mineral Bio Filter' },
      { label: 'Storage Tank', val: '4 Gallon Hydro-Pneumatic Pressurized Tank' },
      { label: 'Countertop Faucet', val: 'Heavy Duty Stainless Steel (SS) Goose-neck Faucet' },
      { label: 'Inline Cartridges', val: "Sarwan's Wave High-Capacity Sediment, Carbon & Alkaline Cartridges" },
      { label: 'pH Balance', val: 'Alkaline Filter Balances Water pH (7.5 - 8.5)' }
    ],
    features: [
      'Sleek under-sink design leaves kitchen countertops clear and clutter-free',
      'Alkaline cartridge infuses essential health minerals and balances water pH for enhanced hydration',
      'High-pressure 4 Gallon hydro-pneumatic storage tank delivers high-velocity pure water dispensing',
      'Heavy-duty stainless steel goose-neck faucet ensures long-lasting, rust-free dispensing',
      'Multi-stage RO+UV+UF filtration removes dissolved salts, heavy metals, chlorine, and pathogens'
    ],
    applications: ['Modern Modular Kitchens', 'Luxury Villas', 'Apartment Islands', 'Corporate Executive Pantries'],
    imageSrc: '/product_wave_undersink_ro.png'
  },
  '136': {
    id: '136',
    slug: 'mountain-water-uv-base-model-purifier',
    title: 'Mountain Water UV Base Model Purifier',
    category: 'domestic',
    tag: 'Base Model UV',
    price: '₹7,800',
    originalPrice: '₹10,500',
    desc: 'Affordable UV + UF base model water purifier with transparent blue container & external pre-filter.',
    fullDesc: 'Mountain Water UV Base Model Purifier is an economical wall-mountable drinking water purification unit. Designed with a transparent blue water storage container, float valve, high-intensity UV disinfection chamber, and external heavy-duty pre-filter housing to block sediments.',
    specs: [
      { label: 'Purification System', val: 'UV Disinfection + UF Ultra Filtration' },
      { label: 'Storage Tank', val: 'Transparent Blue Food-Grade Storage Container' },
      { label: 'Pre-Filter', val: 'External White Pre-Filter Housing & Cartridge' },
      { label: 'Dispensing Tap', val: 'Push-Type Smooth Flow Water Tap' }
    ],
    features: [
      'Economical base model UV purifier ideal for municipal corporation water supply',
      'High-intensity UV lamp sterilizes 99.9% bacteria and waterborne viruses',
      'Transparent blue container allows clear visibility of purified water storage',
      'External pre-filter blocks mud, rust particles, and suspended solids'
    ],
    applications: ['Home Kitchens', 'Small Apartments', 'Rental Homes', 'Shops'],
    imageSrc: '/product_mountain_water_uv_base.png'
  },
  '137': {
    id: '137',
    slug: 'pure-drops-crystal-10l-ro-uv-purifier',
    title: 'LeoAqua Crystal 10L RO + UV Mineral Purifier',
    category: 'domestic',
    tag: '10L RO+UV',
    price: '₹13,000',
    originalPrice: '₹17,000',
    desc: 'Multi-stage RO + UV + Mineral water purifier with 10 Litres storage and vertical blue transparent water gauge.',
    fullDesc: 'LeoAqua Crystal 10L RO + UV Purifier features a sleek white cabinet with a vertical blue transparent water level window. Engineered with 6-stage RO, UV, and mineral cartridge to remove heavy dissolved salts while retaining essential minerals. Includes metallic push tap and external pre-filter housing.',
    specs: [
      { label: 'Storage Capacity', val: '10 Litres Storage Tank with Vertical Blue Window' },
      { label: 'Purification Technology', val: 'RO + UV + Mineralizer + Pre-Filter' },
      { label: 'Display & Indicators', val: 'LED Power & System Health Panel' },
      { label: 'Tap Assembly', val: 'Chrome & Blue Metallic Heavy Push Tap' }
    ],
    features: [
      'Multi-stage RO+UV filtration strips dissolved impurities and microbial pathogens',
      'Vertical transparent blue gauge provides live tracking of stored water volume',
      'Essential mineralizer cartridge restores optimal taste and electrolyte balance',
      'Dust-proof enclosed cabinet with heavy external pre-filter bowl'
    ],
    applications: ['Home Kitchens', 'Residential Apartments', 'Villas', 'Offices'],
    imageSrc: '/product_pure_drops_10l_ro_uv.png'
  },
  '138': {
    id: '138',
    slug: 'purosis-puraqua-8l-ro-alkaline-purifier',
    title: 'Purosis Puraqua 8L RO + Alkaline Purifier',
    category: 'domestic',
    tag: '8L RO+Alkaline',
    price: '₹13,000',
    originalPrice: '₹17,500',
    desc: 'Purosis Puraqua 8L RO + Alkaline Technology Purifier with dual-tone cabinet & single-lever tap.',
    fullDesc: 'Purosis Puraqua RO + ALK Water Purifier ("Redefining Purity") combines high-rejection RO purification with active Alkaline technology. Encased in a dual-tone white and dark grey cabinet with 8 Litres food-grade storage tank, process indicator icons, and ergonomic single-lever dispenser tap.',
    specs: [
      { label: 'Storage Capacity', val: '8 Litres Storage Tank' },
      { label: 'Purification Technology', val: 'RO + Active Alkaline (RO+ALK Technology)' },
      { label: 'Cabinet Design', val: 'Glossy White & Charcoal Grey Dual-Tone Frame' },
      { label: 'Process Indicators', val: 'Purification, Tank Full & Power Status Icons' }
    ],
    features: [
      'Puraqua RO + ALK technology elevates water pH and infuses natural bio-minerals',
      'Eliminates heavy metals, toxic chemicals, fluoride, and dissolved hard salts',
      'Ergonomic single-lever dispenser lever prevents drip and leakage',
      'Sleek modern cabinet aesthetic enhances kitchen décor'
    ],
    applications: ['Modern Kitchens', 'Flats & Apartments', 'Offices', 'Clinics'],
    imageSrc: '/product_purosis_8l_ro_alkaline.png'
  },
  '139': {
    id: '139',
    slug: 'sarwans-wave-kraft-digital-ro-uv-uf-alkaline-purifier',
    title: "Sarwan's Wave Kraft Digital RO + UV + UF + Alkaline Purifier",
    category: 'domestic',
    tag: 'Kraft Digital 10L',
    price: '₹18,500',
    originalPrice: '₹24,500',
    desc: 'Smart digital RO + UV + UF + Alkaline water purifier with 10L storage tank & inbuilt pre-filter concept.',
    fullDesc: "Sarwan's Wave Kraft Digital Water Purifier is a premium high-tech drinking water system featuring digital touch screen controls (Hot & Normal water options), 10 Litre storage tank, RO + UV + UF + Alkaline multi-stage purification, and an innovative Inbuilt Pre-Filter concept. Compact dimensions (H-20\", D-9\", W-15\") fit seamlessly on walls or countertops.",
    specs: [
      { label: 'Storage Capacity', val: '10 Litres Storage Tank' },
      { label: 'Purification System', val: 'RO + UV + UF + Alkaline Multistage Purification' },
      { label: 'Digital Control', val: 'Smart Digital Screen Panel with Touch Selection' },
      { label: 'Pre-Filter Design', val: 'Inbuilt Pre-Filter Concept' },
      { label: 'Dimensions', val: 'Height: 20", Depth: 9", Width: 15"' }
    ],
    features: [
      'Smart digital panel provides intuitive monitoring and touch controls',
      'Alkaline mineralizer balances water pH and infuses essential natural minerals',
      'Inbuilt pre-filter concept eliminates external hanging bowl for a cleaner installation',
      'Multi-stage RO+UV+UF filtration eliminates 99.9% dissolved salts, microbes & heavy metals'
    ],
    applications: ['Executive Homes', 'Modern Kitchens', 'Luxury Apartments', 'Corporate Offices'],
    imageSrc: '/product_wave_kraft_digital_ro.png'
  },
  '140': {
    id: '140',
    slug: 'wave-touch-hot-cold-normal-alkaline-ro-purifier',
    title: 'Wave Touch Hot, Cold & Normal Alkaline RO Purifier',
    category: 'domestic',
    tag: '3 Temp Dispenser',
    price: '₹22,000',
    originalPrice: '₹28,500',
    desc: 'Luxury 3-temperature (Hot, Cold & Normal) Alkaline RO + UV + UF water dispenser with digital touch screen & live pH display.',
    fullDesc: 'Wave Touch Hot, Cold & Normal Alkaline RO Purifier represents peak luxury drinking water technology. Features 3-temperature water dispensing (Instant Hot Water, Chilled Cold Water, and Ambient Normal Water), a circular smart digital touch display showing real-time pH value (pH 9.0), TDS readout, ORP level, filter life indicator, and child lock protection.',
    specs: [
      { label: 'Water Dispensing', val: '3 Temperature Options: Instant Hot, Chilled Cold & Ambient Normal Water' },
      { label: 'Display Panel', val: 'Circular Smart Touch Screen (Live pH, TDS, ORP & Filter Life Display)' },
      { label: 'Purification Technology', val: 'RO + UV + UF + Active Alkaline + Hydrogen & ORP Mineralizer' },
      { label: 'Child Safety Lock', val: 'Integrated Hot Water Child Lock System' },
      { label: 'Color Options', val: 'Piano Black, Metallic Blue, Burgundy Maroon & Pearl White Finishes' },
      { label: 'Drip Tray', val: 'Detachable Magnetic Drip Tray with Glass Rest' }
    ],
    features: [
      '3-in-1 Temperature Dispenser provides instant hot water for tea/coffee, chilled water for summer, and ambient normal water',
      'Smart circular touch screen displays real-time pH level, live TDS PPM, and filter cartridge replacement countdown',
      'Active Alkaline & Hydrogen ORP mineralizer balances water pH to 8.5-9.5 for maximum hydration & immunity',
      'Child-lock button prevents accidental hot water discharge for home and child safety',
      'Ultra-sleek mirror glass front panel adds a luxurious, futuristic vibe to modern kitchens'
    ],
    applications: ['Luxury Kitchens', 'Modern Apartments', 'Executive Boardrooms', 'Doctor Offices & Clinics'],
    imageSrc: '/product_wave_touch_black.png',
    variants: [
      { id: 'black', name: 'Piano Black', color: '#111827', border: '#38bdf8', imageSrc: '/product_wave_touch_black.png' },
      { id: 'blue', name: 'Metallic Blue', color: '#0284c7', border: '#0284c7', imageSrc: '/product_wave_touch_blue.png' },
      { id: 'maroon', name: 'Burgundy Maroon', color: '#881337', border: '#9f1239', imageSrc: '/product_wave_touch_maroon.png' },
      { id: 'white', name: 'Pearl White', color: '#ffffff', border: '#0284c7', imageSrc: '/product_wave_touch_white.png' }
    ]
  },
  '141': {
    id: '141',
    slug: 'evermac-neo-10-ss304-commercial-water-cooler',
    title: 'EVERMAC NEO 10 SS 304 Commercial Water Cooler (10L Cold)',
    category: 'cooler',
    tag: 'NEO 10 (10L Cold)',
    price: '₹17,500',
    originalPrice: '₹23,000',
    desc: 'Compact SS 304 Food Grade Commercial Water Cooler with 10L Cold storage, Tecumseh compressor & 2 taps.',
    fullDesc: 'EVERMAC NEO 10 Commercial Stainless Steel Water Cooler is built from premium SS 304 Food Grade stainless steel. Powered by a high-efficiency Tecumseh compressor for fast chilling. Features 10 Litre chilled storage tank, online continuous normal water flow, 2 heavy chrome taps, and inline spun filtration.',
    specs: [
      { label: 'Model', val: 'NEO 10' },
      { label: 'Storage Capacity', val: 'Cold: 10 Litres | Normal: Online Continuous Flow' },
      { label: 'Dispensing Taps', val: '2 Heavy Chrome Taps (1 Normal + 1 Cold)' },
      { label: 'Body Material', val: '100% SS 304 Food Grade Stainless Steel' },
      { label: 'Compressor Make', val: 'Tecumseh High-Efficiency Commercial Compressor' },
      { label: 'Filtration System', val: 'Inline Spun Sediment Filtration' },
      { label: 'Dimensions (L×W×H)', val: '330 mm × 290 mm × 685 mm' }
    ],
    features: [
      'SS 304 Food Grade body and tank ensure 100% rust-free, hygienic water storage',
      'High-performance Tecumseh cooling compressor delivers rapid ice-cold water dispensing',
      '2 heavy-duty chrome taps provide simultaneous normal ambient and chilled water flow',
      'Compact footprint fits easily on countertops or elevated stands in offices and shops'
    ],
    applications: ['Small Offices', 'Retail Shops', 'Doctor Clinics', 'Staff Pantries'],
    imageSrc: '/product_evermac_neo_10.jpg'
  },
  '142': {
    id: '142',
    slug: 'evermac-neo-15-ss304-commercial-water-cooler',
    title: 'EVERMAC NEO 15 SS 304 Commercial Floor Water Cooler (15L Cold)',
    category: 'cooler',
    tag: 'NEO 15 (15L Cold)',
    price: '₹23,750',
    originalPrice: '₹31,000',
    desc: 'Floor-standing SS 304 Commercial Water Cooler with 15L Cold storage, Tecumseh compressor & 2 taps.',
    fullDesc: 'EVERMAC NEO 15 Commercial Floor-Standing Water Cooler delivers reliable cold drinking water for medium commercial spaces. Engineered with SS 304 Food Grade stainless steel body, Tecumseh compressor, 15L chilled water tank, online normal water, 2 chrome taps, and spun sediment filtration. Height: 1210 mm.',
    specs: [
      { label: 'Model', val: 'NEO 15' },
      { label: 'Storage Capacity', val: 'Cold: 15 Litres | Normal: Online Continuous Flow' },
      { label: 'Dispensing Taps', val: '2 Heavy Chrome Taps (1 Normal + 1 Cold)' },
      { label: 'Body Material', val: '100% SS 304 Food Grade Stainless Steel' },
      { label: 'Compressor Make', val: 'Tecumseh High-Efficiency Commercial Compressor' },
      { label: 'Filtration System', val: 'Inline Spun Sediment Filtration' },
      { label: 'Dimensions (L×W×H)', val: '335 mm × 290 mm × 1210 mm' }
    ],
    features: [
      'Full floor-standing SS 304 stainless steel cabinet with ergonomic drip tray',
      'Tecumseh compressor technology maintains constant cold water cooling efficiency',
      'Spun sediment filter removes rust, sand, and suspended impurities',
      'Heavy-grade stainless steel feet provide solid stability on any floor surface'
    ],
    applications: ['Commercial Offices', 'Schools', 'Showrooms', 'Bank Branches'],
    imageSrc: '/product_evermac_neo_15.jpg'
  },
  '143': {
    id: '143',
    slug: 'evermac-neo-20-ss304-commercial-water-cooler',
    title: 'EVERMAC NEO 20 SS 304 Commercial Floor Water Cooler (20L Cold)',
    category: 'cooler',
    tag: 'NEO 20 (20L Cold)',
    price: '₹28,750',
    originalPrice: '₹37,500',
    desc: 'Heavy-duty SS 304 Floor-standing Water Cooler with 20L Cold storage & Tecumseh compressor.',
    fullDesc: 'EVERMAC NEO 20 Commercial Water Cooler features a robust SS 304 Food Grade stainless steel construction with 20 Litres chilled storage capacity. Powered by a heavy-duty Tecumseh compressor, 2 heavy chrome dispensing taps (Normal + Cold), and inline spun filtration. Dimensions: 365×330×1215 mm.',
    specs: [
      { label: 'Model', val: 'NEO 20' },
      { label: 'Storage Capacity', val: 'Cold: 20 Litres | Normal: Online Continuous Flow' },
      { label: 'Dispensing Taps', val: '2 Heavy Chrome Taps (1 Normal + 1 Cold)' },
      { label: 'Body Material', val: '100% SS 304 Food Grade Stainless Steel' },
      { label: 'Compressor Make', val: 'Tecumseh High-Efficiency Commercial Compressor' },
      { label: 'Filtration System', val: 'Inline Spun Sediment Filtration' },
      { label: 'Dimensions (L×W×H)', val: '365 mm × 330 mm × 1215 mm' }
    ],
    features: [
      '20 Litre cold storage tank handles high peak hour water demand effortlessly',
      'Corrosion-resistant SS 304 food grade chassis withstands heavy daily usage',
      'Tecumseh compressor ensures fast cooling recovery and low power consumption',
      'Dual tap layout provides independent access to online normal and chilled water'
    ],
    applications: ['Factories', 'Educational Institutes', 'Gyms & Sports Clubs', 'Hospitals'],
    imageSrc: '/product_evermac_neo_20.jpg'
  },
  '144': {
    id: '144',
    slug: 'evermac-neo-30-ss304-commercial-water-cooler',
    title: 'EVERMAC NEO 30 SS 304 Commercial Floor Water Cooler (30L Cold)',
    category: 'cooler',
    tag: 'NEO 30 (30L Cold)',
    price: '₹31,875',
    originalPrice: '₹41,000',
    desc: 'High-capacity SS 304 Commercial Water Cooler with 30L Cold storage & Tecumseh compressor.',
    fullDesc: 'EVERMAC NEO 30 Commercial Water Cooler provides 30 Litres of chilled water storage for high-density public and commercial venues. Constructed with SS 304 Food Grade stainless steel, Tecumseh cooling compressor, 2 heavy chrome taps, and spun sediment filtration. Dimensions: 410×350×1215 mm.',
    specs: [
      { label: 'Model', val: 'NEO 30' },
      { label: 'Storage Capacity', val: 'Cold: 30 Litres | Normal: Online Continuous Flow' },
      { label: 'Dispensing Taps', val: '2 Heavy Chrome Taps (1 Normal + 1 Cold)' },
      { label: 'Body Material', val: '100% SS 304 Food Grade Stainless Steel' },
      { label: 'Compressor Make', val: 'Tecumseh High-Efficiency Commercial Compressor' },
      { label: 'Filtration System', val: 'Inline Spun Sediment Filtration' },
      { label: 'Dimensions (L×W×H)', val: '410 mm × 350 mm × 1215 mm' }
    ],
    features: [
      'Generous 30L cold storage capacity serves large crowds during peak hours',
      'SS 304 food-grade construction ensures durability and water purity',
      'Heavy-duty Tecumseh compressor designed for continuous commercial duty',
      'Ergonomic splash-proof drain tray prevents water pooling on floors'
    ],
    applications: ['Colleges & Schools', 'Factory Mess Halls', 'Religious Centers', 'Public Transit Hubs'],
    imageSrc: '/product_evermac_neo_30.jpg'
  },
  '145': {
    id: '145',
    slug: 'evermac-neo-40-ss304-commercial-water-cooler',
    title: 'EVERMAC NEO 20/40 SS 304 Commercial Water Cooler (40L Cold)',
    category: 'cooler',
    tag: 'NEO 20/40 (40L Cold)',
    price: '₹33,750',
    originalPrice: '₹44,000',
    desc: 'Heavy commercial SS 304 Water Cooler with 40L Cold storage, Tecumseh compressor & 2 taps.',
    fullDesc: 'EVERMAC NEO 20/40 Commercial Water Cooler is engineered for demanding industrial and institutional facilities. Features 40 Litres chilled water storage tank, SS 304 Food Grade body, high-capacity Tecumseh compressor, 2 heavy chrome taps, and inline spun filtration. Dimensions: 435×380×1215 mm.',
    specs: [
      { label: 'Model', val: 'NEO 20/40' },
      { label: 'Storage Capacity', val: 'Cold: 40 Litres | Normal: Online Continuous Flow' },
      { label: 'Dispensing Taps', val: '2 Heavy Chrome Taps (1 Normal + 1 Cold)' },
      { label: 'Body Material', val: '100% SS 304 Food Grade Stainless Steel' },
      { label: 'Compressor Make', val: 'Tecumseh High-Efficiency Commercial Compressor' },
      { label: 'Filtration System', val: 'Inline Spun Sediment Filtration' },
      { label: 'Dimensions (L×W×H)', val: '435 mm × 380 mm × 1215 mm' }
    ],
    features: [
      'Massive 40 Litre cold water storage capacity supports high-volume continuous usage',
      'Built with thick SS 304 Food Grade stainless steel panels for maximum ruggedness',
      'Commercial Tecumseh cooling unit provides rapid pull-down chilling time',
      'Dual chrome tap dispensing ensures smooth, high-velocity water discharge'
    ],
    applications: ['Large Industrial Plants', 'University Cafeterias', 'Hospitals & Medical Centers', 'Auditoriums'],
    imageSrc: '/product_evermac_neo_40.jpg'
  },
  '146': {
    id: '146',
    slug: 'evermac-neo-60-ss304-commercial-water-cooler',
    title: 'EVERMAC NEO 30/60 SS 304 Commercial Water Cooler (60L Cold)',
    category: 'cooler',
    tag: 'NEO 30/60 (60L Cold)',
    price: '₹38,125',
    originalPrice: '₹49,500',
    desc: 'Ultra high-capacity SS 304 Water Cooler with 60L Cold storage, Tecumseh compressor & 2 taps.',
    fullDesc: 'EVERMAC NEO 30/60 Commercial Water Cooler provides an expansive 60 Litres chilled water storage capacity. Designed for major commercial hubs, featuring SS 304 Food Grade stainless steel construction, Tecumseh heavy commercial compressor, 2 heavy chrome taps, and spun sediment filtration. Dimensions: 500×420×1215 mm.',
    specs: [
      { label: 'Model', val: 'NEO 30/60' },
      { label: 'Storage Capacity', val: 'Cold: 60 Litres | Normal: Online Continuous Flow' },
      { label: 'Dispensing Taps', val: '2 Heavy Chrome Taps (1 Normal + 1 Cold)' },
      { label: 'Body Material', val: '100% SS 304 Food Grade Stainless Steel' },
      { label: 'Compressor Make', val: 'Tecumseh High-Efficiency Commercial Compressor' },
      { label: 'Filtration System', val: 'Inline Spun Sediment Filtration' },
      { label: 'Dimensions (L×W×H)', val: '500 mm × 420 mm × 1215 mm' }
    ],
    features: [
      '60 Litre heavy cold storage tank satisfies massive shift worker drinking demand',
      'Fully insulated SS 304 food-grade tank keeps water chilled for extended periods',
      'Industrial Tecumseh compressor unit handles ambient temperatures with ease',
      'Spacious drip tray with wide drain port prevents overflow spillages'
    ],
    applications: ['Manufacturing Plants', 'Tech Parks', 'Convention Centers', 'Railway & Bus Terminals'],
    imageSrc: '/product_evermac_neo_60.jpg'
  },
  '147': {
    id: '147',
    slug: 'evermac-neo-80-ss304-commercial-water-cooler',
    title: 'EVERMAC NEO 40/80 SS 304 Commercial Water Cooler (80L Cold, 3 Taps)',
    category: 'cooler',
    tag: 'NEO 40/80 (80L 3-Tap)',
    price: '₹40,000',
    originalPrice: '₹52,000',
    desc: 'Flagship SS 304 Commercial Water Cooler with 80L Cold storage, 3 Taps & Tecumseh compressor.',
    fullDesc: 'EVERMAC NEO 40/80 Commercial Water Cooler is the flagship high-capacity model featuring 80 Litres chilled water storage tank and 3 heavy chrome dispensing taps. Constructed with SS 304 Food Grade stainless steel, industrial Tecumseh compressor, online normal water, and spun sediment filtration. Dimensions: 535×525×1215 mm.',
    specs: [
      { label: 'Model', val: 'NEO 40/80' },
      { label: 'Storage Capacity', val: 'Cold: 80 Litres | Normal: Online Continuous Flow' },
      { label: 'Dispensing Taps', val: '3 Heavy Chrome Taps for Multi-User Dispensing' },
      { label: 'Body Material', val: '100% SS 304 Food Grade Stainless Steel' },
      { label: 'Compressor Make', val: 'Tecumseh High-Efficiency Commercial Compressor' },
      { label: 'Filtration System', val: 'Inline Spun Sediment Filtration' },
      { label: 'Dimensions (L×W×H)', val: '535 mm × 525 mm × 1215 mm' }
    ],
    features: [
      '3 Heavy Chrome Taps allow 3 people to fill water simultaneously without waiting',
      'Extremely large 80 Litre cold storage tank ideal for large workforces and public facilities',
      'SS 304 food-grade heavy chassis ensures lifelong corrosion protection and hygiene',
      'Heavy-duty industrial Tecumseh compressor provides maximum chilling throughput'
    ],
    applications: ['Large Factories & Mills', 'Stadiums & Sports Complexes', 'Super-Specialty Hospitals', 'University Campuses'],
    imageSrc: '/product_evermac_neo_80.jpg'
  },
  '148': {
    id: '148',
    slug: 'pure-drops-industrial-ro-plant-1000-lph-skid',
    title: 'LeoAqua Industrial RO Plant 1000 LPH Skid',
    category: 'plants',
    tag: '1000 LPH Industrial RO',
    price: '₹1,25,000',
    originalPrice: '₹1,65,000',
    desc: 'Heavy industrial 1000 LPH Commercial RO Treatment Plant on SS 304 skid with dual FRP vessels & multistage pump.',
    fullDesc: 'LeoAqua Industrial RO Plant 1000 LPH Skid is a high-capacity commercial reverse osmosis water purification system engineered for severe industrial water purification needs. Mounted on a heavy-duty 304 Grade Stainless Steel open skid frame, it features dual 1354/1465 FRP pre-treatment vessels (Sand & Carbon), twin 20" jumbo pre-filters, 4 high-rejection 4040 industrial RO membrane pressure vessels, vertical multistage high-pressure pump, dual rotameter flow meters, pressure gauges, and Sarwan automatic electrical control panel.',
    specs: [
      { label: 'Purification Capacity', val: '1000 Litres / Hour (1000 LPH)' },
      { label: 'Pre-Treatment Vessels', val: 'Dual Heavy FRP Vessels (Sand Filter & Activated Carbon Filter)' },
      { label: 'RO Membranes', val: '4 x 4040 High-Rejection Industrial RO Membranes' },
      { label: 'High Pressure Pump', val: 'Vertical Multistage Commercial High-Pressure Pump' },
      { label: 'Control Automation', val: 'Sarwan Automatic Electrical Panel with Voltage & Amp Meters' },
      { label: 'Frame Structure', val: 'Heavy Duty 304 Grade Stainless Steel Open Skid' },
      { label: 'Flow & Pressure Monitoring', val: 'Dual Rotameter Flow Meters & Stainless Steel Pressure Gauges' },
      { label: 'Raw Water TDS Limit', val: 'Handles High Raw Water TDS up to 3000 PPM' }
    ],
    features: [
      'Massive 1000 Litres per Hour continuous output satisfies large commercial & industrial water demands',
      'Dual FRP multi-media pre-treatment vessels remove heavy suspended solids, mud, turbidity, chlorine & odor',
      'Quad 4040 industrial RO membranes eliminate 99% of dissolved salts, heavy metals, arsenic & silica',
      'Stainless steel 304 skid layout offers compact footprint, easy transport, and corrosion resistance',
      'Comprehensive monitoring panel with live pressure gauges, flow rotameters, and auto-shutoff safety'
    ],
    applications: ['Bottling Plants', 'Hospitals & Dialysis Units', 'Large Hotels & Resorts', 'Factories & Manufacturing Hubs'],
    imageSrc: '/product_industrial_ro_plant_1000lph.png'
  },
  '149': {
    id: '149',
    slug: 'pure-drops-iron-remover-filter-frp-vessel',
    title: 'LeoAqua Iron Remover Filter',
    category: 'filters',
    tag: 'Iron Removal Media',
    price: 'Starting from ₹18,000',
    originalPrice: '₹24,000',
    desc: 'Specialized catalytic manganese dioxide media filter for removing high dissolved iron content, yellow stains, and metallic odor.',
    fullDesc: 'LeoAqua Iron Remover Filter is a specialized catalytic manganese dioxide media filter vessel designed for removing high dissolved iron content, yellow stains, and metallic odor from incoming well and borewell water. Built with a heavy-duty FRP pressure vessel, top-mounted multiport valve for regular backwash & rinse, and catalytic manganese dioxide media bed.',
    specs: [
      { label: 'Storage Tank / Flow', val: '1,000 - 10,000 LPH Storage Tank' },
      { label: 'Filter Media', val: 'Catalytic Manganese Dioxide' },
      { label: 'Pressure Vessel', val: 'High Strength FRP Pressure Tank' },
      { label: 'Control Valve', val: 'Top-Mounted Multiport Valve (Backwash, Rinse, Filter)' },
      { label: 'Ideal For', val: 'Reddish / High Iron Well Water' },
      { label: 'Maintenance', val: 'Periodic Backwash & Rinse' },
      { label: 'Warranty', val: '2 Years Warranty' }
    ],
    features: [
      'Removes high dissolved iron content, yellow pipe stains, and metallic odor',
      'Catalytic Manganese Dioxide media oxidizes and filters soluble iron efficiently',
      'Prevents staining of sanitaryware, tiles, laundry & water storage tanks',
      'High-strength FRP vessel with multiport valve for simple manual backwash & rinse'
    ],
    applications: ['Reddish / High Iron Borewells', 'Residential Homes & Villas', 'Hotels & Homestays', 'Commercial Laundries & Facilities'],
    imageSrc: '/product_puredrops_iron_remover_filter.png'
  },
  '150': {
    id: '150',
    slug: 'pure-drops-carbon-filter-frp-vessel',
    title: 'LeoAqua Carbon Filter',
    category: 'filters',
    tag: 'Activated Carbon Media',
    price: 'Starting from ₹18,000',
    originalPrice: '₹24,000',
    desc: 'High-grade activated carbon filter. Adsorbs chlorine, organic pesticides, bad taste, odor, and dissolved iron impurities from supply water.',
    fullDesc: 'LeoAqua Carbon Filter is a high-grade activated carbon filter vessel engineered to adsorb chlorine, organic pesticides, bad taste, foul odor, and dissolved organic impurities from supply water. Built with a high-strength FRP pressure vessel, top-mounted multiport valve for simple backwash routines, and premium high-grade activated carbon media.',
    specs: [
      { label: 'Storage Tank / Flow', val: '1,000 - 10,000 LPH Storage Tank' },
      { label: 'Filter Media', val: 'High Grade Activated Carbon' },
      { label: 'Pressure Vessel', val: 'High Strength FRP Pressure Tank' },
      { label: 'Control Valve', val: 'Top-Mounted Multiport Valve (Backwash, Rinse, Filter)' },
      { label: 'Ideal For', val: 'Foul Odor & Chlorine Water' },
      { label: 'Maintenance', val: 'Simple Backwash Routine' },
      { label: 'Warranty', val: '2 Years Warranty' }
    ],
    features: [
      'Adsorbs free chlorine, organic pesticides, foul odor, bad taste & organic contaminants',
      'High-grade activated carbon media delivers exceptional surface adsorption capability',
      'Protects downstream plumbing, water heaters, and domestic RO purifiers',
      'Heavy-duty FRP pressure vessel with multiport valve for quick, effortless backwashing'
    ],
    applications: ['Whole House / Villas', 'Apartment Complexes', 'Hotels & Restaurants', 'Commercial Plants & Cafeterias'],
    imageSrc: '/product_puredrops_carbon_filter.png'
  }
};
*/
