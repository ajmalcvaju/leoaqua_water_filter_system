'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useQuote } from '../context/QuoteContext';

// Animated stats counter component
const StatsCounter = ({ target, duration = 2000, suffix = "", decimals = 0 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    let currentRef = null;
    if (elementRef.current) {
      currentRef = elementRef.current;
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = parseFloat(target);
    if (start === end) return;

    const totalMiliseconds = duration;
    const incrementTime = 30;
    const totalSteps = totalMiliseconds / incrementTime;
    const increment = (end - start) / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  const formattedCount = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toLocaleString();

  return (
    <span ref={elementRef}>
      {formattedCount}{suffix}
    </span>
  );
};

export default function Home() {
  const { openModal } = useQuote();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [testimonialTransition, setTestimonialTransition] = useState(true);

  const heroSlides = [
    {
      title: <>Pure Water for<br />Healthy Living</>,
      sub: "Experience 100% pure, crystal-clear, and mineral-rich drinking water with LEOAQUA's advanced multi-stage RO, UV & alkaline water purifiers.",
      bullets: [
        "Advanced multi-stage RO + UV + Alkaline filtration",
        "Removes 99.9% heavy metals, dissolved solids & bacteria",
        "Retains essential natural minerals with active taste enhancement"
      ],
      ctaText: "Request Quote",
      ctaProduct: "Hero Pure Water Inquiry",
      imageSrc: "/hero_slide_family.jpg",
      visual: (
        <div className="water-droplets-visual">
          <div className="droplet-circle dc-1"></div>
          <div className="droplet-circle dc-2"></div>
          <div className="droplet-circle dc-3"></div>
        </div>
      ),
      label: "Mother Pouring Pure Filtered Water For Child"
    },

    {
      title: <>Advanced Water Testing<br />&amp; Custom Filtration</>,
      sub: "Scientifically analyze your groundwater, borewell, or tap supply to deploy the perfect custom-engineered filtration system for your home or business.",
      bullets: [
        "Accurate TDS, pH, chlorine & iron hardness testing",
        "Custom whole-house softeners & media filtration plants",
        "Certified on-site water analysis specialists in Kozhikode"
      ],
      ctaText: "Talk to Expert",
      ctaProduct: "Water Test Consultation",
      imageSrc: "/hero_slide_lab.png",
      visual: (
        <svg className="placeholder-illustration" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
      ),
      label: "Laboratory Testing Setup & Analysis"
    }
  ];

  const testimonials = [
    {
      text: "The experience with the LEOAQUA WATER FILTER SYSTEM team is superior. We had them install a Gov. school purification system and the water laboratory report shows pristine results. Their dedication to schedule execution is remarkable.",
      author: "Mr. Prasanth IAS",
      role: "Kozhikode Regional Advisor"
    },
    {
      text: "To provide sustainable solutions with enduring commitment requires expert execution. LEOAQUA WATER FILTER SYSTEM designs outstanding custom RO plants. They maintain high-quality parameters and fast replacement support.",
      author: "Dr. Manoj",
      role: "Chief Clinical Director, Calicut"
    },
    {
      text: "Our home groundwater had massive scaling and iron particles. The HydroSoft Softener from LEOAQUA WATER FILTER SYSTEM completely transformed the hardness. Outstanding plumbing team, neat work, and no more scaling!",
      author: "Mrs. Anjali K.",
      role: "Homeowner, Eranhipaalam"
    },
    {
      text: "Thank you for the quick response. Your pre- and post-sales customer service has been incredibly good. Fast, polite, very informative.",
      author: "Ajay",
      role: "Businessman"
    },
    {
      text: "Thank you for the quick response. I want to let you know that I really appreciate the great customer assistance at LEOAQUA WATER FILTER SYSTEM.",
      author: "Salman",
      role: "Doctor"
    },
    {
      text: "We installed their commercial RO filtration plant in our campus. Excellent water flow, prompt filter replacement services, and absolute purity certified by labs.",
      author: "Mrs. Rema Devi",
      role: "School Principal"
    }
  ];

  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  // Auto Scroll Sliders & Setup Observers
  useEffect(() => {
    let heroTimer = null;
    if (!isPaused) {
      heroTimer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 6000);
    }

    const testimonialTimer = setInterval(() => {
      setTestimonialTransition(true);
      setTestimonialIndex((prev) => {
        if (prev === 6) {
          return 1;
        }
        return prev + 1;
      });
    }, 5000);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    return () => {
      if (heroTimer) clearInterval(heroTimer);
      clearInterval(testimonialTimer);
      observer.disconnect();
    };
  }, [isPaused, heroSlides.length]);

  // Touch Swipe Handlers for Hero Slider
  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    setIsPaused(false);
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        // Swiped Left -> Next Slide
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      } else {
        // Swiped Right -> Prev Slide
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      }
    }
    touchStartX.current = null;
  };


  // Handle snap-back for testimonials loop
  useEffect(() => {
    if (testimonialIndex === 6) {
      const snapTimer = setTimeout(() => {
        setTestimonialTransition(false);
        setTestimonialIndex(0);
      }, 600); // matches CSS transition speed (0.6s)
      return () => clearTimeout(snapTimer);
    }
  }, [testimonialIndex]);

  return (
    <>
      {/* ==========================================================================
           HERO SLIDER
           ========================================================================== */}
      <section 
        className="hero-slider-container" 
        aria-label="Hero Slide Showcase"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="slider-wrapper">
          {heroSlides.map((slide, index) => (
            <div key={index} className={`slide ${currentSlide === index ? 'active' : ''}`}>
              <div className="container">
                <div className="slide-content-grid">
                  <div className="slide-text">
                    {currentSlide === index && (
                      <>
                        {index === 0 ? <h1>{slide.title}</h1> : <h2>{slide.title}</h2>}
                        <p className="slide-sub">{slide.sub}</p>
                        <ul className="slide-bullets">
                          {slide.bullets.map((bullet, idx) => (
                            <li key={idx}>
                              <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                              {bullet}
                            </li>
                          ))}
                        </ul>
                        <div className="slide-buttons">
                          <button className="btn btn-primary" onClick={() => openModal(slide.ctaProduct)}>
                            {slide.ctaText}
                          </button>
                          {index === 0 ? (
                            <Link href="/products" className="btn btn-secondary">Explore Products</Link>
                          ) : (
                            <Link href="/services" className="btn btn-secondary">Book Lab Test</Link>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="slide-visual">
                    {slide.imageSrc ? (
                      <img src={slide.imageSrc} alt={slide.label} className="slide-image" />
                    ) : (
                      <div className="image-placeholder image-placeholder-large" aria-label={slide.label}>
                        {slide.visual}
                        <div className="placeholder-label">{slide.label}</div>
                        <div className="placeholder-dimensions">SVG / CSS Responsive Vector</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <button 
          className="slider-control slider-prev" 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          aria-label="Previous slide"
        >
          <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </button>
        <button 
          className="slider-control slider-next" 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          aria-label="Next slide"
        >
          <svg viewBox="0 0 24 24"><path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
        </button>

      </section>



      {/* ==========================================================================
           ABOUT PREVIEW (SPLASH)
           ========================================================================== */}
      <section className="section section-bg">
        <div className="container">
          <div className="about-preview-wrapper">
            
            {/* Mobile Header (Shown 1st on mobile) */}
            <h2 className="about-preview-title about-title-mobile animate-on-scroll">
              About LEOAQUA WATER FILTER SYSTEM
            </h2>

            <div className="about-preview-grid">
              
              {/* Text & Button (Desktop Left Column / Mobile 3rd & 4th) */}
              <div className="about-text-column animate-on-scroll">
                <h2 className="about-preview-title about-title-desktop">
                  About LEOAQUA WATER FILTER SYSTEM
                </h2>
                <p className="about-preview-desc-1">
                  LEOAQUA WATER FILTER SYSTEM, based in Kozhikode, is a leading Water Treatment Company in Kerala. We specialize in engineering and executing high-standard water solutions for domestic, commercial, and industrial requirements.
                </p>
                <p className="about-preview-desc-2">
                  Our product line includes top-tier Aqua Gold water purifiers, reverse osmosis plants, wastewater treatment utilities, softeners, and iron removal structures. With a team of highly-trained chemical engineers and service specialists, we maintain quality standards across installation and after-sales service.
                </p>
                <div className="about-btn-wrap">
                  <Link href="/about" className="btn btn-primary">More Details</Link>
                </div>
              </div>

              {/* Image (Desktop Right Column / Mobile 2nd) */}
              <div className="about-image-column animate-on-scroll">
                <img src="/about_splash_water.jpg" alt="Fresh Splashing Glasses of Water" className="about-preview-img" />
              </div>

            </div>

          </div>
        </div>
      </section>



      {/* ==========================================================================
           FEATURED PRODUCTS
           ========================================================================== */}
      <section className="section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2>Our Featured Products</h2>
            <p>Explore our premium domestic filters and heavy-duty filtration setups designed for Kerala's water conditions.</p>
          </div>

          <div className="products-grid">
            {/* Product 1: Nexus Brio RO + UV + UF + Copper + Zinc + Alkaline Purifier */}
            <div className="product-card animate-on-scroll">
              <Link href="/products/106" className="product-image-area" style={{ display: 'block', textDecoration: 'none' }}>
                <span className="product-tag" style={{ background: '#b45309' }}>Copper + Zinc + Alkaline</span>
                <img src="/product_nexus_brio_ro.png" alt="Nexus Brio RO + UV + UF + Copper + Zinc + Alkaline Purifier" className="product-image" />
              </Link>
              <div className="product-info">
                <h3>
                  <Link href="/products/106" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Nexus Brio RO + UV + UF + Copper + Zinc + Alkaline Purifier
                  </Link>
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '0.6rem' }}>Premium 12L RO + UV + UF water purifier enriched with Active Copper, Zinc &amp; Alkaline minerals with smart LED digital display.</p>
                <ul className="product-specs">
                  <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Storage: 12 Litres Large Storage Tank</li>
                  <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Technology: RO + UV + UF + Active Copper &amp; Zinc</li>
                </ul>
                <div className="product-footer">
                  <div className="product-price-block">
                    <span className="product-price-val">₹16,000</span>
                  </div>
                  <a 
                    href={`https://wa.me/916282222390?text=${encodeURIComponent(
`Hi LEOAQUA WATER FILTER SYSTEM, I would like to enquire about:

*Product:* Nexus Brio RO + UV + UF + Copper + Zinc + Alkaline Purifier
*Price:* ₹16,000
*Key Specifications:*
• Storage: 12 Litres Large Storage Tank
• Technology: RO + UV + UF + Active Copper & Zinc + Alkaline minerals
• Display: Smart LED Digital Display

Please provide more details, availability, and best price quote.`)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-card"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>

            {/* Product 2: Prolife Touch New Fiesta RO + UV + UF + Copper Purifier */}
            <div className="product-card animate-on-scroll">
              <Link href="/products/118" className="product-image-area" style={{ display: 'block', textDecoration: 'none' }}>
                <span className="product-tag" style={{ background: '#1e40af' }}>Touch &amp; Transparent Series</span>
                <img src="/product_prolife_touch_blue.png" alt="Prolife Touch New Fiesta RO + UV + UF + Copper Purifier" className="product-image" />
              </Link>
              <div className="product-info">
                <h3>
                  <Link href="/products/118" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Prolife Touch New Fiesta RO + UV + UF + Copper Purifier
                  </Link>
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '0.6rem' }}>Advanced 7-stage RO + UV + UF + Copper Charge purifier with 12L capacity, capacitive touch display &amp; transparent showcase canopy.</p>
                <ul className="product-specs">
                  <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Storage: 12 Litres High Capacity Tank</li>
                  <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Controls: Capacitive Touch Screen Display</li>
                </ul>
                <div className="product-footer">
                  <div className="product-price-block">
                    <span className="product-price-val">₹15,500</span>
                  </div>
                  <a 
                    href={`https://wa.me/916282222390?text=${encodeURIComponent(
`Hi LEOAQUA WATER FILTER SYSTEM, I would like to enquire about:

*Product:* Prolife Touch New Fiesta RO + UV + UF + Copper Purifier
*Price:* ₹15,500
*Key Specifications:*
• Storage: 12 Litres High Capacity Tank
• Technology: Advanced 7-Stage RO + UV + UF + Active Copper Charge
• Controls: Capacitive Touch Screen Display & Transparent Canopy

Please provide more details, availability, and best price quote.`)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-card"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>

            {/* Product 3: Kainet 100 GPD Smart RO Water Purifier */}
            <div className="product-card animate-on-scroll">
              <Link href="/products/110" className="product-image-area" style={{ display: 'block', textDecoration: 'none' }}>
                <span className="product-tag" style={{ background: '#0284c7' }}>100 GPD High TDS</span>
                <img src="/product_kainet_white.png" alt="Kainet 100 GPD Smart RO Water Purifier" className="product-image" />
              </Link>
              <div className="product-info">
                <h3>
                  <Link href="/products/110" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Kainet 100 GPD Smart RO Water Purifier
                  </Link>
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '0.6rem' }}>High-performance 100 GPD RO purifier treating TDS up to 3000 ppm with 8L storage, 18 LPH flow rate &amp; digital smart display.</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.8rem', background: '#f1f5f9', padding: '4px 10px', borderRadius: '20px', width: 'fit-content' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#ffffff', border: '1.5px solid #0284c7', display: 'inline-block' }} title="Alpine White" />
                    <span style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#111827', border: '1.5px solid #0284c7', display: 'inline-block' }} title="Midnight Black" />
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#475569', fontWeight: 600 }}>Alpine White &amp; Midnight Black</span>
                </div>
                <ul className="product-specs">
                  <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Membrane: 100 GPD (Handles up to 3000 PPM)</li>
                  <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Flow Rate: 18 Litres / Hour Fast Flow</li>
                </ul>
                <div className="product-footer">
                  <div className="product-price-block">
                    <span className="product-price-val">₹12,000</span>
                  </div>
                  <a 
                    href={`https://wa.me/916282222390?text=${encodeURIComponent(
`Hi LEOAQUA WATER FILTER SYSTEM, I would like to enquire about:

*Product:* Kainet 100 GPD Smart RO Water Purifier
*Price:* ₹12,000
*Key Specifications:*
• Membrane: 100 GPD (Handles up to 3000 PPM TDS)
• Flow Rate: 18 Litres / Hour Fast Flow
• Storage: 8 Litres Tank
• Available Models: Alpine White & Midnight Black
• Features: Digital Smart Display

Please provide more details, availability, and best price quote.`)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-card"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>

            {/* Product 4: Aqua Strom RO Water Purifier System */}
            <div className="product-card animate-on-scroll">
              <Link href="/products/101" className="product-image-area" style={{ display: 'block', textDecoration: 'none' }}>
                <span className="product-tag" style={{ background: '#0284c7' }}>5-Stage RO System</span>
                <img src="/product_aqua_strom_ro.png" alt="Aqua Strom RO Water Purifier System" className="product-image" />
              </Link>
              <div className="product-info">
                <h3>
                  <Link href="/products/101" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Aqua Strom RO Water Purifier System
                  </Link>
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-light)', marginBottom: '0.6rem' }}>5-Stage Reverse Osmosis water purifier with 9L storage, 15 LPH flow rate, LED indicators, and power-saving auto cut-off.</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.8rem', background: '#f1f5f9', padding: '4px 10px', borderRadius: '20px', width: 'fit-content' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#ffffff', border: '1.5px solid #0284c7', display: 'inline-block' }} title="Classic White" />
                    <span style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#1f2937', border: '1.5px solid #f97316', display: 'inline-block' }} title="Obsidian Black" />
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#475569', fontWeight: 600 }}>Classic White &amp; Obsidian Black</span>
                </div>
                <ul className="product-specs">
                  <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Storage: 9 Litres Capacity</li>
                  <li><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Technology: 5-Stage RO Filtration</li>
                </ul>
                <div className="product-footer">
                  <div className="product-price-block">
                    <span className="product-price-val">₹10,000</span>
                  </div>
                  <a 
                    href={`https://wa.me/916282222390?text=${encodeURIComponent(
`Hi LEOAQUA WATER FILTER SYSTEM, I would like to enquire about:

*Product:* Aqua Strom RO Water Purifier System
*Price:* ₹10,000
*Key Specifications:*
• Storage: 9 Litres Capacity
• Technology: 5-Stage RO Filtration
• Flow Rate: 15 Litres / Hour
• Available Models: Classic White & Obsidian Black
• Features: LED Indicators & Auto Cut-off

Please provide more details, availability, and best price quote.`)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-card"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }} className="animate-on-scroll">
            <Link href="/products" className="btn btn-secondary">Explore All Products</Link>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           KEY INDUSTRIES
           ========================================================================== */}
      <section className="section key-industries-section" aria-label="Key Industries Served">
        <div className="container">
          <div className="section-header animate-on-scroll text-center">
            <div className="title-with-lines">
              <span className="bullet">•</span>
              <h2>KEY INDUSTRIES</h2>
              <span className="bullet">•</span>
            </div>
            <p style={{ maxWidth: '650px', margin: '0.5rem auto 0 auto' }}>Providing custom water treatment plants, RO filtration systems, and softeners for various sectors.</p>
          </div>

          <div className="industries-grid">
            {/* Industry 1 */}
            <div className="industry-card animate-on-scroll">
              <div className="industry-header">
                <div className="industry-icon-circle">
                  <svg viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>
                </div>
                <h3>HOTELS & RESORTS</h3>
                <p>Reliable water treatment for luxury stays, kitchens, laundry and recreational facilities.</p>
              </div>
              <div className="industry-image-wrapper">
                <img src="/industry_hotel.png" alt="Hotels & Resorts" />
              </div>
            </div>

            {/* Industry 2 */}
            <div className="industry-card animate-on-scroll">
              <div className="industry-header">
                <div className="industry-icon-circle">
                  <svg viewBox="0 0 24 24"><path d="M19 10.5h-5.5V5h-3v5.5H5v3h5.5V19h3v-5.5H19v-3z"/></svg>
                </div>
                <h3>HOSPITALS & CLINICS</h3>
                <p>Safe, clean and hygienic water for critical applications and infection control.</p>
              </div>
              <div className="industry-image-wrapper">
                <img src="/industry_hospital.png" alt="Hospitals & Clinics" />
              </div>
            </div>

            {/* Industry 3 */}
            <div className="industry-card animate-on-scroll">
              <div className="industry-header">
                <div className="industry-icon-circle">
                  <svg viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zm-6 12H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm14 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v-2h2v-2z"/></svg>
                </div>
                <h3>APARTMENTS & BUILDINGS</h3>
                <p>Sustainable water solutions for daily needs, domestic use and facility management.</p>
              </div>
              <div className="industry-image-wrapper">
                <img src="/industry_apartment.png" alt="Apartments & Commercial Buildings" />
              </div>
            </div>

            {/* Industry 4 */}
            <div className="industry-card animate-on-scroll">
              <div className="industry-header">
                <div className="industry-icon-circle">
                  <svg viewBox="0 0 24 24"><path d="M22 10l-6 4V9l-6 4V9L2 14v6h20V10z"/></svg>
                </div>
                <h3>INDUSTRIES & FACTORIES</h3>
                <p>Efficient water treatment for process requirements, reuse and regulatory compliance.</p>
              </div>
              <div className="industry-image-wrapper">
                <img src="/industry_factory.png" alt="Industries & Factories" />
              </div>
            </div>

            {/* Industry 5 */}
            <div className="industry-card animate-on-scroll">
              <div className="industry-header">
                <div className="industry-icon-circle">
                  <svg viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
                </div>
                <h3>SCHOOLS & COLLEGES</h3>
                <p>Ensuring safe drinking water and a healthy environment for students and staff.</p>
              </div>
              <div className="industry-image-wrapper">
                <img src="/industry_school.png" alt="Schools & Colleges" />
              </div>
            </div>

            {/* Industry 6 */}
            <div className="industry-card animate-on-scroll">
              <div className="industry-header">
                <div className="industry-icon-circle">
                  <svg viewBox="0 0 24 24"><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v-2zm0-4h-2v-2h2v-2zm0-4h-2v-2h2v-2zm0-4h-2V5h2v2zm6 12h-2v-2h2v-2zm0-4h-2v-2h2v-2z"/></svg>
                </div>
                <h3>IT PARKS & OFFICES</h3>
                <p>High-quality water solutions for large facilities, cooling systems and pantries.</p>
              </div>
              <div className="industry-image-wrapper">
                <img src="/industry_office.png" alt="IT Parks & Offices" />
              </div>
            </div>

            {/* Industry 7 */}
            <div className="industry-card animate-on-scroll">
              <div className="industry-header">
                <div className="industry-icon-circle">
                  <svg viewBox="0 0 24 24"><path d="M12 2L2 7v2h20V7L12 2zm-7 9h2v8H5v-8zm5 0h2v8h-2v-8zm5 0h2v8h-2v-8zm5 0h2v8h-2v-8zM2 21h20v2H2v-2z"/></svg>
                </div>
                <h3>GOVERNMENT ORGANIZATIONS</h3>
                <p>Compliant and dependable systems for public utilities, institutions and civic needs.</p>
              </div>
              <div className="industry-image-wrapper">
                <img src="/industry_government.png" alt="Government Organizations" />
              </div>
            </div>

            {/* Industry 8 */}
            <div className="industry-card animate-on-scroll">
              <div className="industry-header">
                <div className="industry-icon-circle">
                  <svg viewBox="0 0 24 24"><path d="M13 19h-2v-5.69c-2.35-.42-4-2.48-4-4.81 0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.33-1.65 4.39-4 4.81V19zm-1-12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                </div>
                <h3>RESORTS & LEISURE SPACES</h3>
                <p>Tailored solutions for swimming pools, landscaping, and guest comfort needs.</p>
              </div>
              <div className="industry-image-wrapper">
                <img src="/industry_leisure.png" alt="Resorts & Leisure Spaces" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           TESTIMONIALS
           ========================================================================== */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2>Testimonials</h2>
            <p>Read opinions and feedback from clients who trust LEOAQUA WATER FILTER SYSTEM for their hydration safety.</p>
          </div>

          <div 
            className="testimonials-carousel-viewport animate-on-scroll"
            style={{
              '--test-index': testimonialIndex,
              '--test-speed': testimonialTransition ? '0.6s' : '0s'
            }}
          >
            <div className="testimonials-carousel-track">
              {[
                ...testimonials,
                testimonials[0],
                testimonials[1],
                testimonials[2]
              ].map((test, index) => (
                <div key={index} className="testimonials-carousel-item">
                  <div className="testimonial-card">
                    <div className="testimonial-card-quote-bg">
                      <span className="testimonial-card-quote-text">99</span>
                    </div>
                    <h3 className="testimonial-card-author">{test.author}</h3>
                    <span className="testimonial-card-role">{test.role}</span>
                    <div className="testimonial-card-stars">
                      <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    </div>
                    <p className="testimonial-card-text">"{test.text}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* ==========================================================================
           CTA MID BANNER
           ========================================================================== */}
      <section className="cta-banner">
        <div className="container animate-on-scroll">
          <h2>Is your water completely safe for drinking?</h2>
          <p>Schedule a professional testing visit by our Kozhikode laboratory technicians today. Ensure maximum wellness for your family or staff members.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/services" className="btn btn-primary" style={{ background: 'var(--bg-white)', color: 'var(--primary-color)', boxShadow: 'none' }}>
              Book Laboratory Check
            </Link>
            <Link href="/contact" className="btn btn-secondary" style={{ borderColor: 'var(--bg-white)', color: 'var(--bg-white)' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
