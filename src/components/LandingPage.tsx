import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // Mobile Menu Toggle
    const toggleMenu = () => {
      const navLinks = document.getElementById('navLinks');
      navLinks?.classList.toggle('active');
    };

    // Intersection Observer for Fade Up Animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => {
      observer.observe(el);
    });

    // Number Counter Animation
    const statsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('h3');
          counters.forEach(counter => {
            const target = +counter.getAttribute('data-target')!;
            const prefix = counter.getAttribute('data-prefix') || '';
            const suffix = counter.getAttribute('data-suffix') || '';
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps

            let current = 0;
            const updateCounter = () => {
              current += increment;
              if (current < target) {
                counter.innerText = prefix + Math.ceil(current).toLocaleString() + suffix;
                requestAnimationFrame(updateCounter);
              } else {
                counter.innerText = prefix + target.toLocaleString() + suffix;
              }
            };
            updateCounter();
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      statsObserver.observe(statsSection);
    }

    // Steps Line Animation
    const stepsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.getElementById('stepsLineFill')!.style.width = '100%';
          document.querySelectorAll('.step').forEach((step, index) => {
            setTimeout(() => {
              step.classList.add('active');
            }, index * 500 + 500); // Staggered activation
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      stepsObserver.observe(howItWorksSection);
    }

    // Navbar Blur on Scroll
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar!.style.backgroundColor = 'rgba(5, 5, 5, 0.9)';
        navbar!.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
      } else {
        navbar!.style.backgroundColor = 'rgba(5, 5, 5, 0.7)';
        navbar!.style.borderBottomColor = 'rgba(255, 255, 255, 0.05)';
      }
    });

    return () => {
      // Cleanup observers if needed
      observer.disconnect();
      statsObserver.disconnect();
      stepsObserver.disconnect();
    };
  }, []);

  return (
    <div className="landing-page">
      {/* Scanlines */}
      <div className="scanlines"></div>

      {/* Navbar */}
      <nav className="navbar" id="navbar">
        <div className="container nav-container">
          <a href="#" className="logo">
            <video autoPlay loop muted playsInline style={{ width: '36px', height: '36px', objectFit: 'contain' }}>
              <source src="/shrink_logo.webm" type="video/webm" />
            </video>
          </a>
          <button className="mobile-menu-btn" onClick={() => {
            const navLinks = document.getElementById('navLinks');
            navLinks?.classList.toggle('active');
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <div className="nav-links" id="navLinks">
            <a href="#features" className="nav-link">Features</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <Link to="/app" className="nav-link">Demo</Link>
          <Link to="/login" className="btn btn-demo-nav">Try Demo</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container hero-content fade-up">
          <video autoPlay loop muted playsInline style={{ width: '160px', height: '160px', objectFit: 'contain', marginBottom: '1.5rem' }}>
            <source src="/shrink_logo.webm" type="video/webm" />
          </video>
          <div className="live-indicator">
            <div className="pulsing-dot"></div>
            LIVE DATA
          </div>
          <h1>One Control Room For<br /><span>Your Entire Store</span></h1>
          <p>Real-time inventory, shrink tracking, deli freshness, security, and AI — built for independent convenience stores.</p>
          <div className="hero-btns">
            <Link to="/login" className="btn btn-primary">Try Demo</Link>
            <a href="tel:878-777-3778" className="btn btn-outline">Book a 30-Min Call</a>
          </div>
          <div className="social-proof">
            Trusted by independent c-store owners. No contract required.
          </div>
        </div>
      </section>

      {/* Problem Bar */}
      <section className="problem-bar" id="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item fade-up">
              <h3 className="text-danger" data-target="12000" data-prefix="$" data-suffix="+">0</h3>
              <p>lost to shrink per store, per year</p>
            </div>
            <div className="stat-item fade-up">
              <h3 className="text-danger" data-target="3" data-suffix=" Hours">0</h3>
              <p>of lost sales daily due to stockouts</p>
            </div>
            <div className="stat-item fade-up">
              <h3 className="text-danger" data-target="85" data-suffix="%">0</h3>
              <p>of stores still track inventory on paper</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section-padding">
        <div className="container">
          <div className="section-header fade-up">
            <h2>Everything You Need To Win</h2>
            <p>Replace 5 different tools with one integrated platform.</p>
          </div>
          <div className="features-grid">
            {/* Card 1 */}
            <div className="feature-card fade-up">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h3>Tobacco Wall</h3>
              <p>Interactive planogram with live stock levels and restock alerts for every slot.</p>
            </div>
            {/* Card 2 */}
            <div className="feature-card fade-up">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <h3>Deli & Hot Foods</h3>
              <p>Real-time freshness timers on every hot case item with one-click pull logging.</p>
            </div>
            {/* Card 3 */}
            <div className="feature-card fade-up">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
              </div>
              <h3>Security Command</h3>
              <p>Multi-camera grid, zone-by-zone alarm control, and full incident log.</p>
            </div>
            {/* Card 4 */}
            <div className="feature-card fade-up">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Traders Guild</h3>
              <p>Post surplus inventory and trade with nearby stores instead of taking the loss.</p>
            </div>
            {/* Card 5 */}
            <div className="feature-card fade-up">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h3>Shrink AI Advisor</h3>
              <p>20 specialized AI tools that diagnose problems and generate action plans on demand.</p>
            </div>
            {/* Card 6 */}
            <div className="feature-card fade-up">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              </div>
              <h3>Full Inventory View</h3>
              <p>Search every SKU across every department in one live, filterable table.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding" style={{ backgroundColor: '#080808' }} id="how-it-works">
        <div className="container">
          <div className="section-header fade-up">
            <h2>How It Works</h2>
          </div>
          <div className="steps-container">
            <div className="steps-line">
              <div className="steps-line-fill" id="stepsLineFill"></div>
            </div>
            <div className="step fade-up">
              <div className="step-number">1</div>
              <h3>Connect Your POS</h3>
              <p>Upload a CSV or connect via API. We map it to your live dashboard in under 48 hours.</p>
            </div>
            <div className="step fade-up">
              <div className="step-number">2</div>
              <h3>See Everything</h3>
              <p>Your store health, alerts, and department status update in real time.</p>
            </div>
            <div className="step fade-up">
              <div className="step-number">3</div>
              <h3>Stop The Bleed</h3>
              <p>Act on AI-generated insights, eliminate waste, and watch your shrink number drop.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-padding">
        <div className="container">
          <div className="section-header fade-up">
            <h2>Simple Pricing</h2>
            <p>Choose the plan that fits your store size.</p>
          </div>
          <div className="pricing-grid">
            {/* Card 1: Founding Partner */}
            <div className="pricing-card featured fade-up">
              <div className="pricing-badge">ONLY 25 EVER</div>
              <div className="pricing-title text-amber">Founding Partner</div>
              <div className="pricing-price">$99<span>/mo</span></div>
              <div className="pricing-setup">$499 setup</div>
              <ul className="pricing-features">
                <li><span className="check-icon">✓</span> Only 25 ever available</li>
                <li><span className="check-icon">✓</span> Rate locked for life</li>
                <li><span className="check-icon">✓</span> Full platform access</li>
                <li><span className="check-icon">✓</span> Priority support</li>
              </ul>
              <a href="https://shrink.itsai.store" className="btn btn-primary">Get Started</a>
            </div>
            {/* Card 2: Solo Store */}
            <div className="pricing-card fade-up">
              <div className="pricing-title">Solo Store</div>
              <div className="pricing-price">$199<span>/mo</span></div>
              <div className="pricing-setup">$999 setup</div>
              <ul className="pricing-features">
                <li><span className="check-icon">✓</span> Full platform access</li>
                <li><span className="check-icon">✓</span> AI Advisor included</li>
                <li><span className="check-icon">✓</span> POS integration</li>
              </ul>
              <a href="https://shrink.itsai.store" className="btn btn-outline">Get Started</a>
            </div>
            {/* Card 3: Guild Member */}
            <div className="pricing-card fade-up">
              <div className="pricing-title">Guild Member</div>
              <div className="pricing-price">$149<span>/mo</span></div>
              <div className="pricing-setup">$999 setup</div>
              <ul className="pricing-features">
                <li><span className="check-icon">✓</span> For 3+ locations</li>
                <li><span className="check-icon">✓</span> Trade Board access</li>
                <li><span className="check-icon">✓</span> Multi-store view</li>
              </ul>
              <a href="https://shrink.itsai.store" className="btn btn-outline">Get Started</a>
            </div>
            {/* Card 4: Shrink Station */}
            <div className="pricing-card fade-up">
              <div className="pricing-title">Shrink Station</div>
              <div className="pricing-price">$249<span>/mo</span></div>
              <div className="pricing-setup">$1,499 setup</div>
              <ul className="pricing-features">
                <li><span className="check-icon">✓</span> Full hardware kit</li>
                <li><span className="check-icon">✓</span> Pre-configured tablet</li>
                <li><span className="check-icon">✓</span> Wall mount included</li>
                <li><span className="check-icon">✓</span> White glove setup</li>
              </ul>
              <a href="https://shrink.itsai.store" className="btn btn-outline">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding final-cta">
        <div className="cta-glow"></div>
        <div className="container fade-up">
          <h2>Ready to <span className="text-danger">Stop The Bleed?</span></h2>
          <p>Join the first stores running on real-time shrink intelligence.</p>
          <div className="hero-btns">
            <a href="https://shrink.itsai.store" className="btn btn-primary">Try the Live Demo</a>
            <a href="#" className="btn btn-outline">Book a 30-Min Setup Call</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="logo">
              SHRINK <span>STOP THE BLEED</span>
            </div>
            <div className="footer-links">
              <a href="https://shrink.itsai.store">Demo</a>
              <a href="#pricing">Pricing</a>
              <a href="#features">Features</a>
            </div>
          </div>
          <div className="copyright text-center">
            &copy; 2026 Shrink. Built for independent retailers.
          </div>
        </div>
      </footer>

      <style>
        {`
          /* CSS Variables */
          :root {
            --bg: #050505;
            --bg-card: #0a0a0a;
            --bg-card-hover: #111;
            --primary: #10b981;
            --primary-glow: rgba(16, 185, 129, 0.4);
            --danger: #dc2626;
            --danger-dark: #450a0a;
            --warning: #f59e0b;
            --text-main: #ffffff;
            --text-muted: #9ca3af;
            --border: #262626;
            --font-heading: 'Space Grotesk', sans-serif;
            --font-body: 'Inter', sans-serif;
          }

          /* Reset & Base */
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            font-family: var(--font-body);
            background-color: var(--bg);
            color: var(--text-main);
            line-height: 1.6;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-heading);
            font-weight: 700;
            letter-spacing: -0.02em;
          }

          a {
            text-decoration: none;
            color: inherit;
            transition: color 0.2s;
          }

          ul {
            list-style: none;
          }

          img, svg {
            display: block;
            max-width: 100%;
          }

          /* Utility Classes */
          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
          }

          .text-green { color: var(--primary); }
          .text-amber { color: var(--warning); }
          .text-danger { color: var(--danger); }
          .text-muted { color: var(--text-muted); }

          .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 14px 28px;
            border-radius: 4px;
            font-family: var(--font-heading);
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid transparent;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            position: relative;
            overflow: hidden;
          }

          .btn-primary {
            background-color: var(--primary);
            color: #000;
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
          }

          .btn-primary:hover {
            background-color: #059669;
            box-shadow: 0 0 30px rgba(16, 185, 129, 0.4);
            transform: translateY(-2px);
          }
          
          /* Aggressive Demo Button Style */
          .btn-demo-nav {
            background-color: transparent;
            color: var(--text-main);
            border: 1px solid var(--border);
            border-left: 3px solid var(--danger);
          }
          
          .btn-demo-nav:hover {
            background-color: rgba(255, 255, 255, 0.05);
            border-color: var(--text-main);
            box-shadow: -5px 0 15px rgba(220, 38, 38, 0.2);
          }

          .btn-outline {
            background-color: transparent;
            border-color: var(--border);
            color: var(--text-main);
          }

          .btn-outline:hover {
            border-color: var(--text-main);
            background-color: rgba(255,255,255,0.05);
          }

          .section-padding {
            padding: 100px 0;
          }

          /* Scroll Animations */
          .fade-up {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }

          .fade-up.visible {
            opacity: 1;
            transform: translateY(0);
          }

          /* Scanline Texture */
          .scanlines {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              to bottom,
              rgba(255,255,255,0),
              rgba(255,255,255,0) 50%,
              rgba(0,0,0,0.05) 50%,
              rgba(0,0,0,0.05)
            );
            background-size: 100% 4px;
            pointer-events: none;
            z-index: 9999;
            opacity: 0.4;
          }

          /* Navbar */
          .navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background-color: rgba(5, 5, 5, 0.7);
            backdrop-filter: blur(16px);
            border-bottom: 1px solid rgba(255,255,255,0.05);
            transition: background-color 0.3s;
          }

          .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 80px;
          }

          .logo {
            display: flex;
            align-items: center;
            gap: 12px;
            font-family: var(--font-heading);
            font-weight: 700;
            font-size: 1.75rem;
            letter-spacing: -0.03em;
            color: #fff;
          }

          .logo span {
            font-size: 0.7rem;
            color: var(--primary);
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            border: 1px solid rgba(16, 185, 129, 0.3);
            padding: 4px 8px;
            border-radius: 2px;
            background: rgba(16, 185, 129, 0.05);
          }

          .nav-links {
            display: flex;
            gap: 40px;
            align-items: center;
          }

          .nav-link {
            font-size: 0.9rem;
            color: var(--text-muted);
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-family: var(--font-heading);
          }

          .nav-link:hover {
            color: var(--text-main);
          }

          .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
          }

          /* Hero Section */
          .hero {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            overflow: hidden;
            padding-top: 80px;
          }

          /* Animated Bleed Background */
          .hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 50% 50%, #2a0a0a 0%, #050505 70%);
            background-size: 200% 200%;
            animation: bleed 15s ease infinite;
            z-index: -1;
          }

          @keyframes bleed {
            0% { background-position: 50% 0%; }
            50% { background-position: 50% 100%; }
            100% { background-position: 50% 0%; }
          }

          .hero-content {
            position: relative;
            z-index: 10;
            max-width: 1000px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .live-indicator {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-family: var(--font-heading);
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.1em;
            color: var(--primary);
            margin-bottom: 24px;
            border: 1px solid rgba(16, 185, 129, 0.2);
            padding: 6px 12px;
            border-radius: 100px;
            background: rgba(16, 185, 129, 0.05);
          }

          .pulsing-dot {
            width: 8px;
            height: 8px;
            background-color: var(--primary);
            border-radius: 50%;
            box-shadow: 0 0 0 rgba(16, 185, 129, 0.4);
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
            100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
          }

          .hero h1 {
            font-size: 5.5rem; /* 88px */
            line-height: 0.95;
            font-weight: 700;
            margin-bottom: 32px;
            text-transform: uppercase;
            letter-spacing: -0.04em;
          }

          .hero h1 span {
            color: var(--primary);
            display: block;
          }

          .hero p {
            font-size: 1.5rem;
            color: var(--text-muted);
            margin-bottom: 48px;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
            font-weight: 400;
          }

          .hero-btns {
            display: flex;
            gap: 20px;
            justify-content: center;
            margin-bottom: 40px;
          }

          .social-proof {
            font-family: var(--font-heading);
            font-size: 0.8rem;
            color: var(--text-muted);
            opacity: 0.6;
            text-transform: uppercase;
            letter-spacing: 0.1em;
          }

          /* Stats Bar (Danger Zone) */
          .problem-bar {
            background-color: #1a0505;
            border-top: 1px solid var(--danger);
            border-bottom: 1px solid var(--border);
            padding: 60px 0;
            position: relative;
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
            text-align: center;
          }

          .stat-item h3 {
            font-size: 3.5rem;
            font-weight: 700;
            color: var(--text-main);
            margin-bottom: 8px;
            font-family: var(--font-heading);
            line-height: 1;
          }

          .stat-item p {
            color: var(--text-muted);
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: 500;
          }

          /* Features Section */
          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 32px;
            margin-top: 80px;
          }

          .feature-card {
            background-color: var(--bg-card);
            border: 1px solid var(--border);
            padding: 40px;
            border-radius: 2px;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
          }

          .feature-card::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 2px;
            background-color: var(--primary);
            transition: width 0.4s ease;
          }

          .feature-card:hover {
            transform: translateY(-5px);
            background-color: var(--bg-card-hover);
          }

          .feature-card:hover::after {
            width: 100%;
          }

          /* Scanline overlay for cards */
          .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
            background-size: 100% 2px, 3px 100%;
            pointer-events: none;
            opacity: 0.3;
          }

          .feature-icon {
            width: 64px;
            height: 64px;
            background: radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
            margin-bottom: 24px;
            border: 1px solid rgba(16, 185, 129, 0.1);
          }

          .feature-card h3 {
            font-size: 1.5rem;
            margin-bottom: 16px;
            color: #fff;
          }

          .feature-card p {
            color: var(--text-muted);
            font-size: 1rem;
            line-height: 1.7;
          }

          /* How It Works */
          .steps-container {
            display: flex;
            justify-content: space-between;
            gap: 40px;
            margin-top: 80px;
            position: relative;
          }
          
          /* Animated Connecting line */
          .steps-line {
            position: absolute;
            top: 30px;
            left: 60px;
            right: 60px;
            height: 2px;
            background: var(--border);
            z-index: 0;
          }

          .steps-line-fill {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background: var(--primary);
            width: 0%;
            transition: width 1.5s ease-out;
          }

          .step {
            position: relative;
            z-index: 1;
            flex: 1;
            text-align: center;
          }

          .step-number {
            width: 60px;
            height: 60px;
            background-color: var(--bg);
            border: 2px solid var(--border);
            color: var(--text-muted);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            margin: 0 auto 32px;
            font-size: 1.5rem;
            font-family: var(--font-heading);
            transition: all 0.5s ease;
          }

          .step.active .step-number {
            border-color: var(--primary);
            color: var(--primary);
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.2);
          }

          .step h3 {
            margin-bottom: 16px;
            font-size: 1.5rem;
          }

          .step p {
            color: var(--text-muted);
            font-size: 1rem;
            max-width: 300px;
            margin: 0 auto;
          }

          /* Pricing */
          .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 32px;
            margin-top: 80px;
          }

          .pricing-card {
            background-color: var(--bg-card);
            border: 1px solid var(--border);
            padding: 40px 32px;
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            position: relative;
            transition: transform 0.3s ease;
          }

          .pricing-card:hover {
            transform: translateY(-8px);
            border-color: rgba(255,255,255,0.2);
          }

          .pricing-card.featured {
            border-color: var(--warning);
            box-shadow: 0 0 30px rgba(245, 158, 11, 0.1);
            animation: border-pulse 3s infinite;
          }

          @keyframes border-pulse {
            0% { border-color: rgba(245, 158, 11, 0.5); }
            50% { border-color: rgba(245, 158, 11, 1); }
            100% { border-color: rgba(245, 158, 11, 0.5); }
          }

          .pricing-badge {
            position: absolute;
            top: -16px;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--danger);
            color: #fff;
            font-size: 0.8rem;
            font-weight: 700;
            padding: 6px 16px;
            border-radius: 2px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            box-shadow: 0 4px 10px rgba(220, 38, 38, 0.4);
            white-space: nowrap;
            font-family: var(--font-heading);
          }

          .pricing-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 16px;
            font-family: var(--font-heading);
            text-transform: uppercase;
          }

          .pricing-price {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 4px;
            color: var(--text-main);
            font-family: var(--font-heading);
            line-height: 1;
          }

          .pricing-price span {
            font-size: 1rem;
            color: var(--text-muted);
            font-weight: 400;
            font-family: var(--font-body);
          }

          .pricing-setup {
            font-size: 0.9rem;
            color: var(--text-muted);
            margin-bottom: 32px;
            padding-bottom: 24px;
            border-bottom: 1px solid var(--border);
          }

          .pricing-features {
            margin-bottom: 40px;
            flex-grow: 1;
          }

          .pricing-features li {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 16px;
            font-size: 0.95rem;
            color: var(--text-muted);
            line-height: 1.4;
          }

          .check-icon {
            color: var(--primary);
            font-weight: bold;
            flex-shrink: 0;
          }

          .pricing-card .btn {
            width: 100%;
          }

          /* Final CTA */
          .final-cta {
            text-align: center;
            position: relative;
            border-top: 1px solid var(--danger);
            overflow: hidden;
            background: #080808;
          }

          .cta-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%);
            pointer-events: none;
            z-index: 0;
          }

          .final-cta .container {
            position: relative;
            z-index: 1;
          }

          .final-cta h2 {
            font-size: 4rem;
            margin-bottom: 24px;
            text-transform: uppercase;
          }

          .final-cta p {
            font-size: 1.5rem;
            color: var(--text-muted);
            margin-bottom: 48px;
          }

          /* Footer */
          footer {
            padding: 80px 0;
            border-top: 1px solid var(--border);
            background-color: #020202;
          }

          .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .footer-links {
            display: flex;
            gap: 32px;
          }

          .footer-links a {
            color: var(--text-muted);
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-weight: 500;
          }

          .footer-links a:hover {
            color: var(--primary);
          }

          .copyright {
            color: #444;
            font-size: 0.8rem;
            margin-top: 32px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          /* Section Headers */
          .section-header {
            text-align: center;
            margin-bottom: 40px;
          }
          
          .section-header h2 {
            font-size: 3.5rem; /* 56px */
            font-weight: 700;
            margin-bottom: 16px;
            text-transform: uppercase;
          }

          .section-header p {
            color: var(--text-muted);
            max-width: 600px;
            margin: 0 auto;
            font-size: 1.1rem;
          }

          /* Mobile Responsive */
          @media (max-width: 768px) {
            .hero h1 {
              font-size: 3rem;
            }
            
            .stats-grid {
              grid-template-columns: 1fr;
              gap: 40px;
            }

            .stat-item h3 {
              font-size: 3rem;
            }
            
            .steps-container {
              flex-direction: column;
              gap: 40px;
            }
            
            .steps-line {
              display: none;
            }

            .step-number {
              margin-bottom: 16px;
            }

            .mobile-menu-btn {
              display: block;
            }

            .nav-links {
              position: fixed;
              top: 80px;
              left: 0;
              width: 100%;
              background-color: #050505;
              flex-direction: column;
              padding: 40px 20px;
              border-bottom: 1px solid var(--border);
              transform: translateY(-150%);
              transition: transform 0.3s ease;
              gap: 24px;
            }

            .nav-links.active {
              transform: translateY(0);
            }

            .nav-links .btn {
              width: 100%;
            }
            
            .footer-content {
              flex-direction: column;
              gap: 40px;
              text-align: center;
            }
            
            .footer-links {
              flex-direction: column;
              gap: 20px;
            }

            .section-header h2 {
              font-size: 2.5rem;
            }

            .final-cta h2 {
              font-size: 2.5rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LandingPage;