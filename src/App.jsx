import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { weddingDetails } from './data/weddingData';
import {
  Navbar,
  Hero,
  Countdown,
  Couple,
  Wishes,
  WishForm,
  Events,
  Location,
  Footer,
  FloatingActions
} from './components';

function App() {
  const [wishesList, setWishesList] = useState(weddingDetails.wishes);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 80,
      mirror: false
    });

    // Refresh AOS once DOM and images finish initial layout
    const refreshTimer = setTimeout(() => {
      AOS.refresh();
    }, 300);

    return () => clearTimeout(refreshTimer);
  }, []);

  const handleAddWish = (newWish) => {
    setWishesList((previousWishes) => [newWish, ...previousWishes]);
    setTimeout(() => {
      AOS.refresh();
    }, 150);
  };

  return (
    <div className="wedding-app">
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero
          invitation={weddingDetails.invitation}
          bride={weddingDetails.bride}
          groom={weddingDetails.groom}
          venue={weddingDetails.venue}
        />

        {/* Live Ticking Countdown */}
        <Countdown targetDate={weddingDetails.invitation.eventDateTime} />

        {/* About the Couple (Bride & Groom) */}
        <Couple
          bride={weddingDetails.bride}
          groom={weddingDetails.groom}
        />

        {/* Wishes for the Couple Carousel */}
        <Wishes wishes={wishesList} />

        {/* Send Your Wishes Form with AI Wish Generator */}
        <WishForm
          onAddWish={handleAddWish}
          brideName={weddingDetails.bride.name}
          groomName={weddingDetails.groom.name}
        />

        {/* Engagement Celebration Schedule (Event Cards) */}
        <Events schedule={weddingDetails.schedule} />

        {/* Venue & Location with Embedded Google Map */}
        <Location
          venue={weddingDetails.venue}
          date={weddingDetails.invitation.eventDateTime}
        />
      </main>

      {/* Footer */}
      <Footer
        brideName={weddingDetails.bride.name}
        groomName={weddingDetails.groom.name}
      />

      {/* Floating Celebration Music Player & Direct Phone Contact */}
      <FloatingActions
        contactNumber={weddingDetails.invitation.rsvpContact}
        audioTrackUrl={weddingDetails.music.trackUrl}
      />
    </div>
  );
}

export default App;
