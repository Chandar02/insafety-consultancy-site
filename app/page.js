// app/page.js
import React from 'react';

// 1. Core Component Imports
import HeroSection from "../components/HeroSection"; 
import VisionMissionSection from "../components/VisionMissionSection"; 
import LeadershipSection from "../components/LeadershipSection"; 
import IndustriesSection from "../components/IndustriesSection"; 
import ServicesSection from "../components/ServicesSection"; 
import ContactFooter from '@/components/ContactFooter'; 
import WhyChooseUs from '../components/WhyChooseUs'; 
import Methodology from '../components/Methodology';

export default function Home() {

    return (
        <div id="home-wrapper">
            <main id="home">

                {/* SECTION 1 */}
                <HeroSection />
                <VisionMissionSection />

                {/* SECTION 2 */}
                <section id="services">
                    <ServicesSection />
                </section>

                {/* SECTION 3 */}
                <section id="industries">
                    <IndustriesSection />
                </section>

                {/* SECTION 4 */}
                <WhyChooseUs />

                {/* SECTION 5 */}
                <Methodology />

                {/* SECTION 6 */}
                <section id="leadership">
                    <LeadershipSection />
                </section>

                {/* SUCCESS STORIES */}
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

                    <a href="#contact-form-anchor" className="cta-btn">
                        Request a Free Compliance Review
                    </a>
                </section>

                {/* RESOURCES */}
                <section 
                    id="resources"
                    style={{ padding: '80px 5%', textAlign: 'center', backgroundColor: '#f9f9f9' }}
                >
                    <h2 style={{ fontSize: '2.5em', color: '#1f3e66' }}>
                        Resources & Knowledge
                    </h2>
                    <p style={{ fontSize: '1.2em', color: '#555', marginTop: '10px', marginBottom: '30px' }}>
                        Explore our brochures, publications, and technical resources.
                    </p>

                    <a 
                        href="/e-brochure InSafety Services.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn"
                    >
                        📘 Download Our E-Brochure
                    </a>
                </section>

                <ContactFooter />
            </main>
        </div>
    );
}
