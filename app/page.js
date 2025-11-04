// app/page.js
import React from 'react';
import Header from '../components/Header'; 

// 1. Core Component Imports
import HeroSection from "../components/HeroSection"; 
import VisionMissionSection from "../components/VisionMissionSection"; 
import LeadershipSection from "../components/LeadershipSection"; 
import IndustriesSection from "../components/IndustriesSection"; 
import ServicesSection from "../components/ServicesSection"; 
import ContactFooter from '@/components/ContactFooter'; 
import WhyChooseUs from '../components/WhyChooseUs'; 
import Methodology from '../components/Methodology';

// This is the main content component for the homepage (the "/") route
export default function Home() {
    const HEADER_HEIGHT = '90px'; 
    
    return (
        <div id="home-wrapper"> 
            <Header />

            {/* Spacer to prevent content from being hidden under the fixed header */}
            <div style={{ height: HEADER_HEIGHT }}></div>

            {/* The main tag serves as the #home anchor */}
            <main id="home"> 
                
                {/* ------------------- SECTION 1: HERO & CORE PHILOSOPHY ------------------- */}
                <HeroSection />
                <VisionMissionSection />
                
                {/* ------------------- SECTION 2: SERVICES & SOLUTIONS ------------------- */}
                <section id="services"> 
                    <ServicesSection />
                </section>

                {/* ------------------- SECTION 3: INDUSTRIES WE SERVE ------------------- */}
                <section id="industries">
                    <IndustriesSection />
                </section>

                {/* ------------------- SECTION 4: WHY CHOOSE US ------------------- */}
                <WhyChooseUs />

                {/* ------------------- SECTION 5: METHODOLOGY ------------------- */}
                <Methodology />

                {/* ------------------- SECTION 6: LEADERSHIP ------------------- */}
                <section id="leadership">
                    <LeadershipSection />
                </section>
                
                {/* ------------------- PLACEHOLDERS FOR FUTURE CONTENT (Success Stories) ------------------- */}
                <section 
                    id="success-stories"
                    style={{ padding: '80px 5%', textAlign: 'center', backgroundColor: '#e0eaff' }}
                >
                    <h2 style={{ fontSize: '2.5em', color: '#1f3e66' }}>
                        Success Stories & Client Testimonials
                    </h2>
                    <p style={{ fontSize: '1.2em', color: '#555', marginTop: '10px', marginBottom: '30px' }}>
                        This section is reserved for client statements and acknowledgments.
                    </p>
                    
                    {/* ADDED LINK HERE - ASSUMING THIS IS WHERE THE LINK WAS PLACED */}
                    <a 
                        href="#contact-form-anchor" // <-- FIX: Scroll link to footer contact form
                        style={{ 
                            display: 'inline-block',
                            padding: '15px 40px', 
                            backgroundColor: '#ffc107', // Accent Color
                            color: '#1f3e66', // Primary Color
                            textDecoration: 'none',
                            borderRadius: '6px', 
                            fontSize: '1.1em', 
                            fontWeight: 'bold',
                            transition: 'background-color 0.3s'
                        }}
                    >
                        Request a Free Compliance Review {/* <-- ADDED LINK TEXT HERE */}
                    </a>

                </section>
                
                {/* ------------------- PLACEHOLDERS FOR FUTURE CONTENT (Resources) ------------------- */}
                <section 
                    id="resources"
                    style={{ padding: '80px 5%', textAlign: 'center', backgroundColor: '#f9f9f9' }}
                >
                    <h2 style={{ fontSize: '2.5em', color: '#1f3e66' }}>
                        Resources & Knowledge
                    </h2>
                    <p style={{ fontSize: '1.2em', color: '#555', marginTop: '10px' }}>
                        This section will host documents, insights, and knowledge resources.
                    </p>
                </section>
                
                {/* ------------------- SECTION 9: CONTACT & FOOTER ------------------- */}
                <ContactFooter />
            </main>
        </div>
    );
}