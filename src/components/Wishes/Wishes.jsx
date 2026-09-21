import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { weddingAssets } from '../../data/weddingData';

function Wishes({ wishes }) {
  const [currentWishIndex, setCurrentWishIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const totalWishesCount = wishes?.length || 1;

  const currentWishItem = wishes?.[currentWishIndex] || {
    message: 'May your journey together be full of love, happiness, and unforgettable moments.',
    author: 'Well Wisher'
  };

  const changeWishWithAnimation = (newIndex) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentWishIndex(newIndex);
      setIsFading(false);
    }, 250);
  };

  const handlePreviousWish = () => {
    const nextIndex = currentWishIndex === 0 ? totalWishesCount - 1 : currentWishIndex - 1;
    changeWishWithAnimation(nextIndex);
  };

  const handleNextWish = () => {
    const nextIndex = currentWishIndex === totalWishesCount - 1 ? 0 : currentWishIndex + 1;
    changeWishWithAnimation(nextIndex);
  };

  return (
    <section id="wishes-section">
      <img
        src={weddingAssets.wishesBorderLeft}
        alt=""
        className="wishes-framing-border wishes-framing-border--left"
        data-aos="fade-right"
        data-aos-duration="1200"
      />
      <img
        src={weddingAssets.wishesBorderRight}
        alt=""
        className="wishes-framing-border wishes-framing-border--right"
        data-aos="fade-left"
        data-aos-duration="1200"
      />
      <img
        src={weddingAssets.wishesBorderTop}
        alt=""
        className="wishes-framing-border wishes-framing-border--top"
        data-aos="fade-down"
        data-aos-duration="1200"
      />
      <img
        src={weddingAssets.wishesBorderBottom}
        alt=""
        className="wishes-framing-border wishes-framing-border--bottom"
        data-aos="fade-up"
        data-aos-duration="1200"
      />

      <div className="wedding-container">
        <div className="wishes-inner-container">
          <div className="wishes-header-group">
            <img
              src={weddingAssets.quoteEmblem}
              alt=""
              className="wishes-quote-emblem"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="200"
            />
            <h2
              className="wishes-main-title"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Wishes For The Couple
            </h2>
          </div>

          <div className="wishes-slider-shell">
            <div
              className={`wishes-message-viewport ${isFading ? 'fade-out' : 'fade-in'}`}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <p className="wishes-quote-text">"{currentWishItem.message}"</p>
              <p className="wishes-author-name">— {currentWishItem.author || currentWishItem.authorName}</p>
            </div>

            <div
              className="wishes-controls-row"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <button
                type="button"
                className="wishes-nav-arrow-btn"
                onClick={handlePreviousWish}
                aria-label="Previous wish"
              >
                <ChevronLeft size={24} />
              </button>
              <span className="wishes-counter-display">
                {currentWishIndex + 1} / {totalWishesCount}
              </span>
              <button
                type="button"
                className="wishes-nav-arrow-btn"
                onClick={handleNextWish}
                aria-label="Next wish"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div
            className="wishes-lotus-wrapper"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <img
              src={weddingAssets.lotusFlower}
              alt=""
              className="wishes-lotus-art"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wishes;
