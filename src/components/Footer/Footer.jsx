import React from 'react';

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
    </footer>
  );
}

export default Footer;
