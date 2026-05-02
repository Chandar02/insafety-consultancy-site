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
            <div className="hero-content" style={{ paddingTop: '80px' }}>
                <h1 className="hero-title">
                    Transforming Safety from Policy to Practice
                </h1>
                <div className="hero-subtitle">
                    <p>
                        At <strong>InSafety Services</strong>, we help you translate intent into
                        execution across the entire lifecycle of design, projects, and operations.
                    </p>
                    <p>
                        Led by industry veteran{" "}
                        <strong>Chandarsingh Mehta (35+ years of global experience)</strong>, we
                        deliver pragmatic{" "}
                        <strong>
                            HSE (Health, Safety and Environment)
                        </strong>{" "}
                        solutions designed to meet the unique challenges of any landscape.
                    </p>
                    <p style={{ fontWeight: 600 }}>
                        We bring safety solutions that actually work on the ground.
                    </p>
                </div>
                
                {/* DUAL CTA BUTTONS */}
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '15px' }}>
                    <a href="#contact-form-anchor" className="cta-btn">
                        Start a Risk Conversation
                    </a>
                    <a 
                        href="/e-brochure InSafety Services RS.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="cta-btn"
                        style={{ 
                            backgroundColor: '#ffffff', 
                            color: 'var(--primary-blue)', 
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)' 
                        }}
                    >
                        Download E-Brochure
                    </a>
                </div>
            </div>
        </section>
    );
}