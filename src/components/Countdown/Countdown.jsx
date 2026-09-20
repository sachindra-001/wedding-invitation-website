import React, { useState, useEffect, useCallback } from 'react';
import { weddingAssets } from '../../data/weddingData';

function Countdown({ targetDate }) {
  const calculateTimeRemaining = useCallback(() => {
    const targetTimestamp = new Date(targetDate || '2026-10-31T10:45:00').getTime();
    const currentTimestamp = new Date().getTime();
    const timeDifference = targetTimestamp - currentTimestamp;

    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeDifference / 1000 / 60) % 60),
      seconds: Math.floor((timeDifference / 1000) % 60)
    };
  }, [targetDate]);

  const [timeRemaining, setTimeRemaining] = useState(() => calculateTimeRemaining());

  useEffect(() => {
    const intervalTimer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalTimer);
  }, [calculateTimeRemaining]);

  return (
    <section id="countdown-section">
      <div
        className="countdown-floral-corner countdown-floral-corner--top-left"
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-delay="400"
      >
        <img src={weddingAssets.countdownFloralLeft} alt="" />
      </div>
      <div
        className="countdown-floral-corner countdown-floral-corner--bottom-right"
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-delay="400"
      >
        <img src={weddingAssets.countdownFloralRight} alt="" />
      </div>

      <div className="wedding-container">
        <div className="countdown-wrapper">
          <h2
            className="countdown-headline"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Let the countdown begin
          </h2>

          <div className="countdown-timer-grid">
            <div
              className="timer-unit-box"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <span className="timer-digit">{String(timeRemaining.days).padStart(2, '0')}</span>
              <span className="timer-label">Days</span>
            </div>
            <div
              className="timer-unit-box"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
            >
              <span className="timer-digit">{String(timeRemaining.hours).padStart(2, '0')}</span>
              <span className="timer-label">Hours</span>
            </div>
            <div
              className="timer-unit-box"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <span className="timer-digit">{String(timeRemaining.minutes).padStart(2, '0')}</span>
              <span className="timer-label">Mins</span>
            </div>
            <div
              className="timer-unit-box"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="600"
            >
              <span className="timer-digit">{String(timeRemaining.seconds).padStart(2, '0')}</span>
              <span className="timer-label">Secs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Countdown;
