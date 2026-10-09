'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useQuote } from '../../context/QuoteContext';

function CounterNumber({ target, suffix = '+' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;
          const duration = 2000;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentCount = Math.floor(easeProgress * target);
            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function About() {
  const { openModal } = useQuote();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ==========================================================================
           PAGE BANNER
           ========================================================================== */}
      <section className="page-banner" aria-label="About us page introduction">
        <div className="container">
          <h1>About LEOAQUA WATER FILTER SYSTEM</h1>
          <p>A look into our history, values, and commitment to distributing clean water and premium wellness across Kozhikode since 2001.</p>
        </div>
        
        {/* Banner Wave SVG */}
        <svg className="banner-wave" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 32L60 48C120 64 240 96 360 101.3C480 107 600 85 720 69.3C840 53 960 43 1080 42.7C1200 43 1320 53 1380 58.7L1440 64V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V32Z" fill="#F4F9F9"/>
        </svg>

        <div className="banner-decorations">
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
        </div>
      </section>

      {/* ==========================================================================
           COMPANY PROFILE / PIONEERS IN CLEAN WATER TECHNOLOGY
           ========================================================================== */}
      <section className="section section-bg" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
        <div className="container">
          <div className="pioneers-wrapper">
            
            {/* Mobile Title (Shown 1st on mobile) */}
            <h2 className="pioneers-title pioneers-title-mobile animate-on-scroll">
              Pioneers in Clean Water Technology
            </h2>

            <div className="pioneers-grid">
              
              {/* Image (Desktop Left Column / Mobile 2nd) */}
              <div className="pioneers-image-column animate-on-scroll">
                <img src="/about_iso_seal.jpg" alt="ISO 9001:2015 Certified Company Seal" className="pioneers-img" />
              </div>

              {/* Text Column (Desktop Right Column / Mobile 3rd) */}
              <div className="pioneers-text-column animate-on-scroll">
                <h2 className="pioneers-title pioneers-title-desktop">
                  Pioneers in Clean Water Technology
                </h2>
                <p className="pioneers-desc">
                  LEOAQUA WATER FILTER SYSTEM was established with the vision of solving the water safety crises in Kozhikode and surrounding districts in Kerala. Recognising that municipal supply and groundwater have distinct chemical differences, we set out to build custom-engineered water purification products.
                </p>
                <p className="pioneers-desc">
                  Today, our ISO 9001:2015 certified assemblies filter harmful microbes, heavy minerals, and organic contamination in thousands of residential villas, apartment complexes, medical clinics, and commercial spaces.
                </p>
                <p className="pioneers-desc">
                  We believe in the science of purification. We don't just supply filters; we analyze your water chemistry and curate customized membranes and sand components to match your exact water quality footprint.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
           OUR VISION & MISSION
           ========================================================================== */}
      <section className="section" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="vision-mission-grid animate-on-scroll">
            
            {/* Our Vision Card */}
            <div className="vm-card vm-card-vision">
              <div className="vm-header">
                <div className="vm-icon-circle">
                  <svg viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3.5"></circle>
                    <path d="M12 5v-1.5M12 20.5v-1.5M4.93 4.93l-1.06-1.06M20.13 20.13l-1.06-1.06M19.07 4.93l1.06-1.06M3.87 20.13l1.06-1.06"></path>
                  </svg>
                </div>
                <div className="vm-title-wrap">
                  <h3 className="vm-title">OUR VISION</h3>
                  <div className="vm-underline"></div>
                </div>
              </div>
              <p className="vm-desc">
                To be a trusted leader in water treatment solutions, recognized for excellence, innovation and commitment to a sustainable tomorrow.
              </p>
              
              {/* Background Watermark SVG */}
              <svg className="vm-watermark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>

            {/* Our Mission Card */}
            <div className="vm-card vm-card-mission">
              <div className="vm-header">
                <div className="vm-icon-circle">
                  <svg viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9"></circle>
                    <circle cx="12" cy="12" r="5"></circle>
                    <circle cx="12" cy="12" r="1.8" fill="#00b4d8"></circle>
                    <path d="M22 2l-6.5 6.5M17.5 2H22v4.5"></path>
                  </svg>
                </div>
                <div className="vm-title-wrap">
                  <h3 className="vm-title">OUR MISSION</h3>
                  <div className="vm-underline"></div>
                </div>
              </div>
              <p className="vm-desc">
                To deliver reliable, cost-effective and environmentally responsible water treatment solutions that ensure clean water, regulatory compliance and long-term value for our clients.
              </p>

              {/* Background Watermark SVG */}
              <svg className="vm-watermark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================================================
           PROVEN TRACK RECORD - TRUSTED WATER SOLUTIONS ACROSS KERALA
           ========================================================================== */}
      <section className="section stats-numbers-section animate-on-scroll">
        <div className="container">
          <div className="stats-track-header">
            <span className="stats-track-pill">PROVEN TRACK RECORD</span>
            <h2 className="stats-track-title">Trusted Water Solutions Across Kerala</h2>
            <div className="stats-track-bar"></div>
          </div>

          <div className="stats-numbers-grid">
            {/* Stat 1 - Commercial Projects */}
            <div className="stat-number-card">
              <div className="stat-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
                  <path d="M10 6h4"/>
                  <path d="M10 10h4"/>
                  <path d="M10 14h4"/>
                  <path d="M10 18h4"/>
                </svg>
              </div>
              <div className="stat-number"><CounterNumber target={300} /></div>
              <div className="stat-title-label">Commercial Projects</div>
              <div className="stat-sub-label">Hotels, Hospitals & Offices</div>
            </div>

            {/* Stat 2 - Residential Projects */}
            <div className="stat-number-card">
              <div className="stat-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div className="stat-number"><CounterNumber target={700} /></div>
              <div className="stat-title-label">Residential Projects</div>
              <div className="stat-sub-label">Villas & Apartments</div>
            </div>

            {/* Stat 3 - Happy Customers */}
            <div className="stat-number-card">
              <div className="stat-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="stat-number"><CounterNumber target={1000} /></div>
              <div className="stat-title-label">Happy Customers</div>
              <div className="stat-sub-label">Trusted Across Kerala</div>
            </div>

            {/* Stat 4 - Purity Guaranteed */}
            <div className="stat-number-card">
              <div className="stat-icon-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <polyline points="9 12 11 14 15 10"/>
                </svg>
              </div>
              <div className="stat-number">99.9%</div>
              <div className="stat-title-label">Purity Guaranteed</div>
              <div className="stat-sub-label">Certified Water Standards</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           OUR CERTIFICATIONS
           ========================================================================== */}
      <section className="section certifications-section animate-on-scroll">
        <div className="container">
          <div className="stats-numbers-header" style={{ marginBottom: '2.5rem' }}>
            <span className="stats-numbers-dash" style={{ color: 'var(--primary-color)', fontSize: '0.5rem' }}>&#9679;</span>
            <h2 className="certifications-title">OUR CERTIFICATIONS</h2>
            <span className="stats-numbers-dash" style={{ color: 'var(--primary-color)', fontSize: '0.5rem' }}>&#9679;</span>
          </div>

          <div className="certifications-grid">
            {/* ISO 9001:2015 */}
            <div className="cert-card">
              <div className="cert-logo">
                <img src="/cert-iso.png" alt="ISO Certification Logo" className="cert-img" />
              </div>
              <div className="cert-number">9001:2015</div>
              <div className="cert-label">Quality Management</div>
            </div>

            {/* ISO 14001:2015 */}
            <div className="cert-card">
              <div className="cert-logo">
                <img src="/cert-iso.png" alt="ISO Certification Logo" className="cert-img" />
              </div>
              <div className="cert-number">14001:2015</div>
              <div className="cert-label">Environmental<br/>Management</div>
            </div>

            {/* MSME */}
            <div className="cert-card">
              <div className="cert-logo">
                <img src="/cert-msme.png" alt="MSME Registered Enterprise Logo" className="cert-img" />
              </div>
              <div className="cert-number" style={{ visibility: 'hidden' }}>&nbsp;</div>
              <div className="cert-label">Registered<br/>Enterprise</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
           OUR CORE VALUES (GRID)
           ========================================================================== */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          
          <div className="why-choose-section-box animate-on-scroll">
            
            {/* Top Banner Header */}
            <div className="why-choose-banner-header">
              <h3>&middot; OUR CORE VALUES &middot;</h3>
            </div>

            <div className="why-choose-grid">
              
              {/* 1. INTEGRITY */}
              <div className="why-choose-card">
                <div className="wc-icon-circle wc-circle-teal">
                  <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9"></circle>
                    <circle cx="12" cy="12" r="5"></circle>
                    <circle cx="12" cy="12" r="1.8" fill="#ffffff"></circle>
                    <path d="M22 2l-6.5 6.5M17.5 2H22v4.5"></path>
                  </svg>
                </div>
                <div className="wc-content">
                  <h4>INTEGRITY</h4>
                  <p>We believe in honest communication and ethical business practices.</p>
                </div>
              </div>

              {/* 2. COMMITMENT */}
              <div className="why-choose-card">
                <div className="wc-icon-circle wc-circle-blue">
                  <svg viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="wc-content">
                  <h4>COMMITMENT</h4>
                  <p>We are committed to delivering quality in every project we undertake.</p>
                </div>
              </div>

              {/* 3. INNOVATION */}
              <div className="why-choose-card">
                <div className="wc-icon-circle wc-circle-teal">
                  <svg viewBox="0 0 24 24">
                    <path d="M9 18h6M10 22h4M15 9A3 3 0 0 0 9 9c0 2 2 3 2 4h2c0-1 2-2 2-4z"></path>
                    <line x1="12" y1="2" x2="12" y2="4"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                </div>
                <div className="wc-content">
                  <h4>INNOVATION</h4>
                  <p>We continuously innovate to provide better, smarter and sustainable solutions.</p>
                </div>
              </div>

              {/* 4. TEAMWORK */}
              <div className="why-choose-card">
                <div className="wc-icon-circle wc-circle-blue">
                  <svg viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C5.34 5 3 7.34 3 10s2.34 5 5 5 5-2.34 5-5zm8 3c-2.33 0-7 1.17-7 3.5V20h14v-2.5c0-2.33-4.67-3.5-7-3.5z"></path>
                  </svg>
                </div>
                <div className="wc-content">
                  <h4>TEAMWORK</h4>
                  <p>We work together to achieve excellence and build lasting relationships.</p>
                </div>
              </div>

              {/* 5. RESPONSIBILITY */}
              <div className="why-choose-card why-choose-full-width">
                <div className="wc-icon-circle wc-circle-teal">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="M9 12l2 2 4-4"></path>
                  </svg>
                </div>
                <div className="wc-content">
                  <h4>RESPONSIBILITY</h4>
                  <p>We take responsibility towards our customers, society and environment.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ==========================================================================
           CALL TO ACTION
           ========================================================================== */}
      <section className="cta-banner">
        <div className="container animate-on-scroll">
          <h2>Experience the LEOAQUA WATER FILTER SYSTEM Difference</h2>
          <p>Get in touch with our team in Kozhikode to discuss your household scaling issues or business filtration requirements.</p>
          <button className="btn btn-primary" onClick={() => openModal('About Us Consultation')} style={{ background: 'var(--bg-white)', color: 'var(--primary-color)', boxShadow: 'none' }}>
            Request Free Assessment
          </button>
        </div>
      </section>
    </>
  );
}
