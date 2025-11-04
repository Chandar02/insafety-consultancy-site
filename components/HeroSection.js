// components/HeroSection.js
"use client"; 

export default function HeroSection() {
    const primaryColor = '#1f3e66'; // Dark primary color for text
    const accentColor = '#ffc107'; // Yellow accent for high-priority CTA
    
    // Using the blue color from your images for the button background
    const buttonBlue = '#007bff'; 

    return (
        <section 
            className="hero-section" 
            style={{ 
                padding: '100px 5%',
                textAlign: 'center', 
                // --- VISUAL ENHANCEMENT: Background Image with Overlay ---
                // Added a semi-transparent white gradient over the image for text clarity
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url("/background_safety.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // --------------------------------------------------------
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

            {/* CTA Button: Yellow accent color for consistency (matching the footer) */}
            <a href="#contact" style={{ 
    // existing button styling...
    display: 'inline-block', // Crucial for button styling on anchor tag
    padding: '15px 30px',
    backgroundColor: '#007bff', // Assuming this is the blue color
    color: 'white',
    textDecoration: 'none',
    borderRadius: '6px',
    fontSize: '1.1em',
    fontWeight: 'bold',
    transition: 'background-color 0.3s'
}}>
    Request a Free Compliance Review
</a>
            
        </section>
    );
}