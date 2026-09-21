import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles } from 'lucide-react';
import { weddingAssets } from '../../data/weddingData';

const SAMPLE_AI_BLESSINGS = [
  "Wishing Ananya & Aarav a lifetime filled with love, laughter, and endless happiness! So thrilled to celebrate this special milestone with you both.",
  "May your engagement be the start of a wonderful chapter woven with joy, understanding, and sweet memories. Congratulations!",
  "To the most radiant couple, Ananya & Aarav! May your bond grow deeper and stronger with every passing sunrise. Best wishes always!",
  "Heartfelt congratulations on your engagement! Wishing you both endless warmth, adventures, and blessings on this beautiful path.",
  "Sending you both immense love and blessings! May your together-forever be sweeter than you ever dreamed."
];

function WishForm({ onAddWish, brideName, groomName }) {
  const [guestName, setGuestName] = useState('');
  const [guestMessage, setGuestMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [suggestionIndex, setSuggestionIndex] = useState(0);

  const handleGenerateWishAI = () => {
    setGuestMessage(SAMPLE_AI_BLESSINGS[suggestionIndex % SAMPLE_AI_BLESSINGS.length]);
    setSuggestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!guestName.trim() || !guestMessage.trim()) return;

    // Trigger celebration confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#9e5a61', '#697358', '#977B45', '#D9CCB7']
    });

    onAddWish({
      id: Date.now(),
      author: guestName.trim(),
      message: guestMessage.trim()
    });

    setIsSubmitted(true);
    setGuestName('');
    setGuestMessage('');

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4500);
  };

  return (
    <section id="send-wishes-section">
      <img
        src={weddingAssets.paperTexture}
        alt=""
        className="send-wishes-texture-bg"
      />

      <div className="wedding-container">
        <div className="send-wishes-layout">
          <div className="send-wishes-callout-column">
            <img
              src={weddingAssets.quoteEmblem}
              alt=""
              className="send-wishes-quote-icon"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="200"
            />
            <h2
              className="send-wishes-headline"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              Send your wishes
            </h2>
            <p
              className="send-wishes-quote-caption"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              “Leave your blessings and spread a little more love”
            </p>
          </div>

          <div className="send-wishes-card-column">
            <div
              className="send-wishes-framed-card"
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="framed-card-border framed-card-border--top">
                <img src={weddingAssets.sendWishesBorderTop} alt="" />
              </div>
              <div className="framed-card-border framed-card-border--right">
                <img src={weddingAssets.sendWishesBorderSide} alt="" />
              </div>
              <div className="framed-card-border framed-card-border--bottom">
                <img src={weddingAssets.sendWishesBorderTop} alt="" />
              </div>
              <div className="framed-card-border framed-card-border--left">
                <img src={weddingAssets.sendWishesBorderSide} alt="" />
              </div>

              <form className="send-wishes-form" onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  className="guest-form-input"
                  placeholder="Your Name"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="500"
                  required
                />
                <div className="guest-form-textarea-wrapper">
                  <textarea
                    className="guest-form-textarea"
                    placeholder="Your Wishes"
                    value={guestMessage}
                    onChange={(e) => setGuestMessage(e.target.value)}
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="550"
                    required
                  />
                  <button
                    type="button"
                    className="ai-generate-sparkle-btn"
                    onClick={handleGenerateWishAI}
                    title="Generate wish with AI"
                    aria-label="Generate wish with AI"
                  >
                    <Sparkles size={16} />
                  </button>
                </div>

                {isSubmitted && (
                  <p className="wish-submitted-alert">
                    ✨ Thank you! Your blessings have been sent to the couple!
                  </p>
                )}

                <button
                  type="submit"
                  className="submit-wish-action-btn"
                  disabled={!guestName.trim() || !guestMessage.trim()}
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="650"
                >
                  Submit
                </button>
              </form>

              <img
                src={weddingAssets.lotusFlower}
                alt=""
                className="send-wishes-lotus-flower"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WishForm;
