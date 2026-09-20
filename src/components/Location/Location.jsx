import React from 'react';
import { MapPin } from 'lucide-react';
import { weddingAssets } from '../../data/weddingData';

function Location({ venue, date }) {
  const formatLocationDate = (dateString) => {
    if (!dateString) return '31st October, 2026';
    const parsedDate = new Date(dateString);
    const day = parsedDate.getDate();
    const month = parsedDate.toLocaleString('en-US', { month: 'long' });
    const year = parsedDate.getFullYear();

    const getOrdinal = (n) => {
      if (n > 3 && n < 21) return 'th';
      switch (n % 10) {
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

    return `${day}${getOrdinal(day)} ${month}, ${year}`;
  };

  const venueTitle = venue?.name || venue?.venue_name || 'Hall Complex';
  const venueAddressText =
    venue?.address ||
    venue?.venue_description ||
    'Hall Complex, 1st B Cross Road, 7th Block, Koramangala, Bengaluru, Karnataka, India';
  const directionsUrl =
    venue?.mapsUrl ||
    venue?.venue_location_link ||
    `https://maps.google.com/?q=${encodeURIComponent(venueTitle + ' ' + venueAddressText)}`;

  return (
    <section id="location-section">
      <div
        className="location-floral-flourish location-floral-flourish--top-left"
        data-aos="fade-down-right"
        data-aos-duration="1200"
      >
        <img src={weddingAssets.floralTopLeft} alt="" />
      </div>
      <div
        className="location-floral-flourish location-floral-flourish--bottom-right"
        data-aos="fade-up-left"
        data-aos-duration="1200"
      >
        <img src={weddingAssets.floralBottomRight} alt="" />
      </div>
      <div
        className="location-floral-flourish location-floral-flourish--top-right"
        data-aos="fade-down-left"
        data-aos-duration="1200"
      >
        <img src={weddingAssets.floralTopLeft} alt="" />
      </div>
      <div
        className="location-floral-flourish location-floral-flourish--bottom-left"
        data-aos="fade-up-right"
        data-aos-duration="1200"
      >
        <img src={weddingAssets.floralBottomRight} alt="" />
      </div>

      <div className="wedding-container">
        <h2
          className="location-headline"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Location
        </h2>

        <div className="location-content-grid">
          {/* Embedded Google Maps Viewport */}
          <div
            className="location-map-frame-box"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <iframe
              title="venue-location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                venueTitle + ', Koramangala, Bengaluru'
              )}&output=embed`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="location-map-embed"
            />
          </div>

          {/* Venue Information Card */}
          <div
            className="location-details-card"
            data-aos="fade-left"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <p className="location-event-date">{formatLocationDate(date)}</p>
            <h3 className="location-venue-headline">{venueTitle}</h3>
            <p className="location-venue-address">{venueAddressText}</p>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="location-directions-pill-btn"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <div className="location-btn-icon-bubble">
                <MapPin size={22} />
              </div>
              <p className="location-btn-label">Open in Maps</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
