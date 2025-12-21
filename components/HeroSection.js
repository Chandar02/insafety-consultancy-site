// components/HeroSection.js
"use client";
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      {/* Background image */}
      <div className="hero-background">
        <Image
          src="/background_safety.jpg"
          alt="InSafety Services - Building safety resilience"
          className="hero-image"
          fill
          priority
        />
        {/* Refined overlay for better text contrast */}
        <div className="hero-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Transforming Safety from Policy to Practice
        </h1>
        
        <div className="hero-subtitle">
          <p>Safety should enable performance.</p>
          <p>Not exist as paperwork.</p>
          <p>
            At <strong>InSafety Services</strong>, we help organisations convert
            intent into execution.
          </p>
          <p>Across design, projects, and operations.</p>
          <p>
            Founded and led by <strong>Chandarsingh Mehta</strong>.
          </p>
          <p>With 34+ years of global experience.</p>
          <p>We deliver practical HSSEF solutions.</p>
          <p>That work on the ground.</p>
        </div>

        <a href="#contact-form-anchor" className="cta-btn">
          Start a Risk Conversation
        </a>
      </div>
    </section>
  );
}