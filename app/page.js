// app/page.js
import React from 'react';
import Header from '../components/Header'; // Assuming Header is used elsewhere (if not, add it back)

// 1. Core Component Imports (Standardized and Cleaned)
import HeroSection from "../components/HeroSection"; 
import VisionMissionSection from "../components/VisionMissionSection"; 
import LeadershipSection from "../components/LeadershipSection"; 
import IndustriesSection from "../components/IndustriesSection"; 
import ServicesSection from "../components/ServicesSection"; 
import ContactFooter from '@/components/ContactFooter'; 

// Use the external component name for Why Choose Us (based on our earlier steps)
import WhyChooseUs from '../components/WhyChooseUs'; 

// Use the external component name for Methodology (based on our earlier steps)
import Methodology from '../components/Methodology';


// --- NOTE: The large, internal MethodologySection function and data 
// --- from your original file have been REMOVED here because they now 
// --- live fully in the external component: 'components/Methodology.js'. 


// This is the main content component for the homepage (the "/") route
export default function Home() {
    // Assuming the Header component handles its own height/padding logic.
    // If you use a fixed header, ensure you have a spacer element or padding on the main tag.
    const HEADER_HEIGHT = '90px'; 
    
    return (
        <div id="home-wrapper"> {/* Use a div wrapper for the whole page */}
            <Header />

            {/* Spacer to prevent content from being hidden under the fixed header */}
            <div style={{ height: HEADER_HEIGHT }}></div>

            {/* The main tag serves as the #home anchor */}
            <main id="home"> 
                
                {/* ------------------- SECTION 1: HERO & CORE PHILOSOPHY ------------------- */}
                <HeroSection />
                <VisionMissionSection />
                
                {/* ------------------- SECTION 2: SERVICES & SOLUTIONS ------------------- */}
                {/* ID wrapper added here as per previous practice, even if the component might contain the ID */}
                <section id="services"> 
                    <ServicesSection />
                </section>

                {/* ------------------- SECTION 3: INDUSTRIES WE SERVE ------------------- */}
                <section id="industries">
                    <IndustriesSection />
                </section>

                {/* ------------------- SECTION 4: WHY CHOOSE US (NEW) ------------------- */}
                {/* This uses the new external component file we prepared */}
                <WhyChooseUs />

                {/* ------------------- SECTION 5: METHODOLOGY (NEW) ------------------- */}
                {/* This uses the new external component file we prepared */}
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
                    <p style={{ fontSize: '1.2em', color: '#555', marginTop: '10px' }}>
                        This section is reserved for client statements and acknowledgments.
                    </p>
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