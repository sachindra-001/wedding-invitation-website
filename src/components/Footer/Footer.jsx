import React from 'react';
import { AlertCircle, Mail, Shield } from 'lucide-react';

function Footer({ brideName, groomName }) {
  return (
    <footer className="wedding-site-footer">
      <div
        className="wedding-container"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <h3 className="footer-couple-signature">
          {brideName || 'Ananya'} &amp; {groomName || 'Aarav'}
        </h3>
        <p className="footer-blessing-text">
          Together with their families, looking forward to celebrating with you!
        </p>
      </div>

      <div className="invitation-nation-brand-footer">
        <h4 className="brand-footer-headline">
          Engagement Invitation website by <span>INVITATIONNATION</span>
        </h4>

        <div className="brand-logo-circle">
          <svg width="42" height="42" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" fill="#4B2840" />
            <path
              d="M30 68V32L50 52L70 32V68"
              stroke="#ffffff"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="brand-footer-links">
          <a href="#report" onClick={(e) => e.preventDefault()} className="brand-link-item">
            <AlertCircle size={15} /> Report a Problem
          </a>
          <a href="#support" onClick={(e) => e.preventDefault()} className="brand-link-item">
            <Mail size={15} /> Contact Support
          </a>
          <a href="#privacy" onClick={(e) => e.preventDefault()} className="brand-link-item">
            <Shield size={15} /> Privacy Policy
          </a>
        </div>

        <p className="brand-powered-by">
          POWERED BY <a href="https://invitationnation.in" target="_blank" rel="noopener noreferrer">INVITATION NATION</a>
        </p>

        <p className="brand-copyright">
          &copy; 2026 Invitation Nation. All rights reserved. Crafted with care for your forever.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
