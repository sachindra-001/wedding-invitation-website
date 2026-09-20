import React, { useState } from 'react';

function Navbar() {
  const [activeTab, setActiveTab] = useState('home');

  const navigationTabs = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="wedding-navbar-wrapper">
      <nav className="wedding-navbar" aria-label="Main Navigation">
        {navigationTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`nav-link-btn ${activeTab === tab.id ? 'nav-link-btn--active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            <span className="nav-link-text">{tab.label}</span>
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
