import React from 'react';
import logo from './TextUtils.jpg';
import './About.css';  // Import the CSS file

export default function About() {
  return (
    <div className="about-container">
      <img src={logo} alt="Logo" className="about-image" />
    </div>
  );
}

