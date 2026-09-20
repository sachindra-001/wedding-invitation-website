import React from 'react';
import { UtensilsCrossed } from 'lucide-react';
import { weddingAssets } from '../../data/weddingData';

function Events({ schedule }) {
  const renderCategoryIcon = (iconType) => {
    switch (iconType) {
      case 'ring':
        return (
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="14" r="7" />
            <polygon points="12,2 14,7 10,7" />
            <line x1="8.5" y1="4.5" x2="10" y2="7" />
            <line x1="15.5" y1="4.5" x2="14" y2="7" />
          </svg>
        );
      case 'cake':
        return (
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
            <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
            <path d="M2 21h20" />
            <path d="M7 8v3" />
            <path d="M12 8v3" />
            <path d="M17 8v3" />
            <path d="M7 4h.01" />
            <path d="M12 4h.01" />
            <path d="M17 4h.01" />
          </svg>
        );
      case 'restaurant':
      default:
        return <UtensilsCrossed size={34} />;
    }
  };

  return (
    <section id="schedule-section">
      <div className="wedding-container">
        <header
          className="schedule-title-banner"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <img
            src={weddingAssets.groomLeaf}
            alt=""
            className="schedule-accent-leaf schedule-accent-leaf--left"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          />
          <h2 className="schedule-headline">Engagement celebration begins</h2>
          <img
            src={weddingAssets.brideLeaf}
            alt=""
            className="schedule-accent-leaf schedule-accent-leaf--right"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          />
        </header>

        <div className="schedule-timeline-grid">
          {schedule?.map((eventItem, index) => (
            <div
              key={eventItem.id || eventItem.title || eventItem.eventName}
              className="timeline-event-card"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={200 + index * 200}
            >
              <div className="event-card-floral-accent">
                <img src={weddingAssets.countdownFloralLeft} alt="" />
              </div>

              <div className="event-card-body">
                <div
                  className="event-card-icon-bubble"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay={300 + index * 200}
                >
                  {renderCategoryIcon(eventItem.iconType)}
                </div>

                <div className="event-card-text-block">
                  <h3 className="event-card-title">{eventItem.title || eventItem.eventName}</h3>
                  <p className="event-card-time">{eventItem.time || eventItem.eventTime}</p>
                  {eventItem.description && (
                    <p className="event-card-summary">{eventItem.description}</p>
                  )}
                </div>

                <div className="event-card-lotus-accent">
                  <img src={weddingAssets.lotusFlower} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
