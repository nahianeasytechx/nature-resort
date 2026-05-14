import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Phone, Mail, ArrowUp
} from 'lucide-react';
import logoImg from '../../assets/logo.png';
import './Footer.css';

const Footer = () => {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer" id="footer">
        <div className="footer__main">
          <div className="container">
            <div className="footer__grid">
              {/* Brand Column */}
              <div className="footer__brand">
                <div className="footer__logo">
                  <img src={logoImg} alt="The Nature of Cox's Bazar" className="footer__logo-img" />
                </div>
                <div className="footer__initiative">
                  <span className="footer__initiative-label">An initiative by</span>
                  <span className="footer__initiative-company">The Premium Homes Ltd.</span>
                </div>
                <p className="footer__brand-text">
                  Creating nature-connected hospitality destinations with trust, transparency, and professionalism.
                </p>
                <div className="footer__socials">
                  <a href="#" className="footer__social-link" aria-label="Facebook">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="#" className="footer__social-link" aria-label="Instagram">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  </a>
                  <a href="#" className="footer__social-link" aria-label="YouTube">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.16 1 12 1 12s0 3.84.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.84 23 12 23 12s0-3.84-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
                  </a>
                  <a href="#" className="footer__social-link" aria-label="LinkedIn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="footer__quick-links">
                <h3 className="footer__column-title">Quick Links</h3>
                <div className="footer__links-grid">
                  <div className="footer__links-col">
                    <Link to="/" className="footer__link">Home</Link>
                    <Link to="/about" className="footer__link">About The Nature</Link>
                    <Link to="/project" className="footer__link">Cox's Bazar Project</Link>
                    <Link to="/ownership" className="footer__link">Ownership Model</Link>
                    <Link to="/financial" className="footer__link">Financial Model</Link>
                  </div>
                  <div className="footer__links-col" style={{ paddingTop: '0' }}>
                    <Link to="/legal" className="footer__link">Legal & Transparency</Link>
                    <Link to="/faq" className="footer__link">FAQ</Link>
                    <Link to="/contact" className="footer__link">Contact</Link>
                  </div>
                </div>
              </div>

              {/* Contact Us */}
              <div className="footer__contact">
                <h3 className="footer__column-title">Contact Us</h3>
                <div className="footer__contact-list">
                  <div className="footer__contact-item">
                    <span className="footer__contact-icon">
                      <MapPin size={16} />
                    </span>
                    <span className="footer__contact-text">
                      Land View Commercial Center, 9th Floor<br />
                      28 Gulshan North C/A, Gulshan Circle-2, Dhaka
                    </span>
                  </div>
                  <div className="footer__contact-item">
                    <span className="footer__contact-icon">
                      <Phone size={16} />
                    </span>
                    <span className="footer__contact-text">
                      +8801958253300
                    </span>
                  </div>
                  <div className="footer__contact-item">
                    <span className="footer__contact-icon">
                      <Mail size={16} />
                    </span>
                    <span className="footer__contact-text">
                      info@dpremiumhomes.com
                    </span>
                  </div>
                </div>
              </div>

              {/* Request a Call Back */}
              <div className="footer__cta-col">
                <h3 className="footer__column-title">Request a Call Back</h3>
                <p className="footer__contact-text" style={{ marginBottom: '1.5rem' }}>
                  Let our team contact you for detailed information.
                </p>
                <Link to="/contact" className="btn--outline-gold footer__btn">Request a Call Back</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="container">
            <div className="footer__bottom-content">
              <p className="footer__copyright">
                © 2024 The Nature. All Rights Reserved.
              </p>
              <div className="footer__bottom-links">
                <a href="#" className="footer__bottom-link">Privacy Policy</a>
                <span className="footer__separator">|</span>
                <a href="#" className="footer__bottom-link">Disclaimer</a>
                <span className="footer__separator">|</span>
                <a href="#" className="footer__bottom-link">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <button
        className={`footer__back-top ${showBackTop ? 'footer__back-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        id="back-to-top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
};

export default Footer;
