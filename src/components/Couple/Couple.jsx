import React from 'react';
import { weddingAssets } from '../../data/weddingData';

function Couple({ bride, groom }) {
  return (
    <section id="couple-section">
      <img
        src={weddingAssets.paperTexture}
        alt=""
        className="couple-texture-bg"
      />
      <div
        className="couple-corner-floral couple-corner-floral--left"
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <img src={weddingAssets.aboutCornerLeft} alt="" />
      </div>
      <div
        className="couple-corner-floral couple-corner-floral--right"
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-delay="200"
      >
        <img src={weddingAssets.aboutCornerRight} alt="" />
      </div>

      <div className="wedding-container">
        <div className="couple-cards-wrapper">
          {/* Bride Card */}
          <div className="couple-profile-row couple-profile-row--bride">
            <div
              className="couple-portrait-frame"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <img
                src={bride?.photoUrl || bride?.bride_photo}
                alt={bride?.name || 'Bride'}
                className="couple-portrait-img"
              />
              <img
                src={weddingAssets.brideOrnament}
                alt=""
                className="couple-portrait-ornament"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              />
            </div>
            <div
              className="couple-info-card"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <h3 className="couple-display-name">{bride?.name || 'Ananya Sharma'}</h3>
              <p className="couple-parents-line">{bride?.parents}</p>
              <p className="couple-biography">{bride?.bio || bride?.bride_description}</p>
              <img
                src={weddingAssets.brideLeaf}
                alt=""
                className="couple-leaf-flourish"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="500"
              />
            </div>
          </div>

          {/* Groom Card */}
          <div className="couple-profile-row couple-profile-row--groom">
            <div
              className="couple-info-card"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="300"
            >
              <h3 className="couple-display-name">{groom?.name || 'Aarav Verma'}</h3>
              <p className="couple-parents-line">{groom?.parents}</p>
              <p className="couple-biography">{groom?.bio || groom?.groom_description}</p>
              <img
                src={weddingAssets.groomLeaf}
                alt=""
                className="couple-leaf-flourish"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="500"
              />
            </div>
            <div
              className="couple-portrait-frame"
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <img
                src={groom?.photoUrl || groom?.groom_photo}
                alt={groom?.name || 'Groom'}
                className="couple-portrait-img"
              />
              <img
                src={weddingAssets.groomOrnament}
                alt=""
                className="couple-portrait-ornament"
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Couple;
