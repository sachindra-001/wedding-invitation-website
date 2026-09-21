import React, { useState, useEffect } from 'react';

function Navbar() {
  const [activeTab, setActiveTab] = useState('home');

  const navigationTabs = [
    { id: 'home', label: 'Home', targetId: 'hero-section' },
    { id: 'about', label: 'About', targetId: 'couple-section' },
    { id: 'gallery', label: 'Gallery', targetId: 'wishes-section' }
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab.id);
    const targetEl = document.getElementById(tab.targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    } else if (tab.id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const coupleSection = document.getElementById('couple-section');
      const wishesSection = document.getElementById('wishes-section');

      if (wishesSection && scrollY >= wishesSection.offsetTop - 300) {
        setActiveTab('gallery');
      } else if (coupleSection && scrollY >= coupleSection.offsetTop - 300) {
        setActiveTab('about');
      } else {
        setActiveTab('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="wedding-navbar-wrapper">
      <nav className="wedding-navbar" aria-label="Main Navigation">
        {navigationTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`nav-link-btn ${activeTab === tab.id ? 'nav-link-btn--active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            <span className="nav-link-text">{tab.label}</span>
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
