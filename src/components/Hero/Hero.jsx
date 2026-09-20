import React from 'react';
import { weddingAssets } from '../../data/weddingData';

function Hero({ invitation, bride, groom, venue, details, data }) {
  const inviteData = invitation || details?.invitation || data?.invitation;
  const brideData = bride || details?.bride || data?.bride;
  const groomData = groom || details?.groom || data?.groom;
  const venueData = venue || details?.venue || data?.venue;

  const formatEventDate = (dateString) => {
    if (!dateString) return 'Saturday | 31st Oct | 2026';
    const parsedDate = new Date(dateString);
    const dayNumber = parsedDate.getDate();
    const monthAbbr = parsedDate.toLocaleString('en-US', { month: 'short' });
    const weekdayName = parsedDate.toLocaleString('en-US', { weekday: 'long' });
    const fullYear = parsedDate.getFullYear();

    const getDayOrdinal = (day) => {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    };

    return `${weekdayName} | ${dayNumber}${getDayOrdinal(dayNumber)} ${monthAbbr} | ${fullYear}`;
  };

  return (
    <section id="hero-section">
      <div className="hero-border-tilt" />

      {/* Decorative Corner Florals with AOS & Continuous Sway */}
      <div
        className="hero-floral-corner hero-floral-corner--top-left"
        data-aos="fade-down-right"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <img src={weddingAssets.floralTopLeft} alt="" />
      </div>
      <div
        className="hero-floral-corner hero-floral-corner--top-right"
        data-aos="fade-down-left"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <img src={weddingAssets.floralTopRight} alt="" />
      </div>
      <div
        className="hero-floral-corner hero-floral-corner--bottom-left"
        data-aos="fade-up-right"
        data-aos-duration="1200"
        data-aos-delay="400"
      >
        <img src={weddingAssets.floralBottomLeft} alt="" />
      </div>
      <div
        className="hero-floral-corner hero-floral-corner--bottom-right"
        data-aos="fade-up-left"
        data-aos-duration="1200"
        data-aos-delay="400"
      >
        <img src={weddingAssets.floralBottomRight} alt="" />
      </div>

      <div className="wedding-container">
        <div className="hero-content-layout">
          <div className="hero-text-column">
            <div
              className="hero-save-block"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <p className="hero-subtitle">Save the date</p>
              <div
                className="hero-couple-names"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <span>{brideData?.name || 'Ananya Sharma'}</span>
                <span className="ampersand">&amp;</span>
                <span>{groomData?.name || 'Aarav Verma'}</span>
              </div>
            </div>

            <div
              className="hero-engaged-block"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <p className="hero-subtitle">are getting engaged on</p>
              <p className="hero-event-date">{formatEventDate(inviteData?.eventDateTime)}</p>
            </div>

            <div
              className="hero-venue-block"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <p className="hero-venue-title">{venueData?.name || 'Hall Complex'}</p>
              <a
                href={venueData?.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-maps-action-btn"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="900"
              >
                Open in Maps
              </a>
            </div>
          </div>

          <div
            className="hero-artwork-column"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <img src={weddingAssets.coupleArtwork} alt="Engagement Couple Portrait" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
