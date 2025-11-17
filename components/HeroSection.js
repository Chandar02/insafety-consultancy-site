// components/HeroSection.js
"use client";

export default function HeroSection() {
    const primaryColor = '#1f3e66'; // Dark primary color for text

    return (
        <section 
            className="hero-section" 
            style={{ 
                padding: '100px 5%',
                textAlign: 'center', 
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url("/background_safety.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '60vh', 
                color: primaryColor 
            }}
        >
            <h1 
                style={{ 
                    fontSize: '3em', 
                    marginBottom: '20px', 
                    color: primaryColor 
                }}
            >
                Transforming Safety from Policy to Practice
            </h1>
            
            <p 
                style={{ 
                    fontSize: '1.2em', 
                    maxWidth: '800px', 
                    margin: '0 auto 40px',
                    lineHeight: '1.6',
                    color: '#555'
                }}
            >
                At InSafety Services, we view safety not as a regulatory burden, but as a core design principle and a driver of operational excellence. Founded and led by Mr. Chandarsingh Mehta, a global safety professional with over 34 years of international experience, we deliver comprehensive and practical solutions through Health, Safety, Security, Environment, Fire, and Risk Management (HSSEF).
            </p>

            {/* CTA BUTTON - Updated to global CTA styling */}
            <a 
                href="#contact-form-anchor"
                className="cta-btn"
            >
                Request a Free Compliance Review
            </a>
            
        </section>
    );
}
