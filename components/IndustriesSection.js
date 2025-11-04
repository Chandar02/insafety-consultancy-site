// components/IndustriesSection.js
"use client"; 

import { useState } from 'react';
// Ensure AccordionItem is available for use here
import AccordionItem from './AccordionItem'; 

export default function IndustriesSection() {
    const [activeIndex, setActiveIndex] = useState(null);
    const primaryColor = '#1f3e66';
    
    // Helper component to format the detailed bullet points (similar to Services)
    const DetailedIndustryList = ({ items }) => (
        <ul style={{ 
            listStyleType: 'disc', 
            paddingLeft: '20px', 
            margin: '0', 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '5px'
        }}>
            {items.map((item, i) => (
                <li key={i} style={{ fontSize: '0.9em', color: '#666' }}>{item}</li>
            ))}
        </ul>
    );

    // Full Content Data Structure - 16 Categories Restored
    const industriesData = [
        { 
            icon: '🛍️', 
            title: '1) Retail', 
            subSectors: [
                'Clothing stores', 'Supermarkets and grocery stores', 'Electronics stores', 'Furniture stores', 
                'Specialty stores (jewelry, sports equipment, toys)', 'Online marketplaces and e-commerce platforms', 
                'Vintage and thrift stores', 'Pet stores', 'Art and craft stores'
            ]
        },
        { 
            icon: '🏢', 
            title: '2) Real Estate', 
            subSectors: [
                'Property development companies', 'Real estate agencies', 'Property management firms', 
                'Commercial and residential construction companies', 'Architecture firms', 'Real estate investment trusts (REITs)', 
                'Vacation home rental companies', 'Co-working spaces and shared office providers', 
                'Property valuation and appraisal services', 'Malls and Commercial Spaces', 'Cooperative housing and residential buildings'
            ]
        },
        { 
            icon: '💻', 
            title: '3) Technology', 
            subSectors: [
                'Software development companies', 'IT consulting firms', 'Telecommunications providers', 
                'Hardware manufacturers', 'Cybersecurity companies', 'Data Centers and Analytics firms', 
                'Artificial intelligence (AI) startups', 'Augmented and virtual reality companies', 'Cloud Infrastructure and Computing'
            ]
        },
        { 
            icon: '🍽️', 
            title: '4) Food and Beverage', 
            subSectors: [
                'Restaurants', 'Cafes and coffee shops', 'Bars and pubs', 'Bakeries and pastry shops', 
                'Ice cream parlors', 'Food delivery services and Cloud Kitchens', 'Catering services', 
                'Specialty food stores', 'Breweries and wineries'
            ]
        },
        { 
            icon: '💵', 
            title: '5) Financial Services', 
            subSectors: [
                'Banks and credit unions', 'Insurance companies', 'Investment firms and brokerages', 'Accounting firms', 
                'Financial technology (Fintech) startups', 'Payment processing companies', 'Credit card companies', 
                'Wealth management firms', 'Crowdfunding platforms'
            ]
        },
        { 
            icon: '🛎️', 
            title: '6) Hospitality and Tourism', 
            subSectors: [
                'Hotels and resorts', 'Travel agencies', 'Tour operators', 'Event management companies', 
                'Theme parks and amusement parks', 'Cruise lines', 'Bed and breakfast establishments', 
                'Vacation Rental Platforms', 'Adventure tourism operators'
            ]
        },
        { 
            icon: '🏭', 
            title: '7) Manufacturing', 
            subSectors: [
                'Automobile manufacturing', 'Electronics manufacturing', 'Textile and clothing manufacturing', 
                'Consumer goods manufacturing', 'Pharmaceutical manufacturing', 'Food processing and packaging', 
                'Furniture manufacturing', 'Chemical manufacturing', 'Metal fabrication and manufacturing'
            ]
        },
        { 
            icon: '🏥', 
            title: '8) Health and Wellness', 
            subSectors: [
                'Hospitals and medical centers', 'Clinics (dental, chiropractic, veterinary)', 'Pharmacies and drugstores', 
                'Fitness centers and gyms', 'Yoga and meditation studios', 'Spas and wellness centers', 
                'Nutritional supplement companies', 'Mental health services', 'Elderly care facilities', 'Telehealth Providers'
            ]
        },
        { 
            icon: '🎓', 
            title: '9) Education and Training', 
            subSectors: [
                'Schools and universities', 'Online education platforms', 'Training institutes and vocational schools', 
                'Tutoring services', 'Language schools', 'Corporate training providers', 
                'Education technology (EdTech) startups', 'E-learning content creators', 'Educational consulting firms'
            ]
        },
        { 
            icon: '🎬', 
            title: '10) Entertainment and Media', 
            subSectors: [
                'Film production companies', 'Television networks and streaming services', 'Music industry', 
                'Publishing companies', 'Advertising agencies', 'Public relations firms', 
                'Social media platforms', 'Gaming industry', 'Influencer marketing agencies'
            ]
        },
        { 
            icon: '🚗', 
            title: '11) Automotive', 
            subSectors: [
                'Automobile dealerships', 'Car rental services', 'Auto repair and maintenance shops', 
                'Auto parts manufacturers', 'Electric vehicle (EV) startups', 'Car-sharing and ride-sharing platforms', 
                'Automotive technology companies', 'Tire manufacturers and retailer', 'Automotive accessories stores'
            ]
        },
        { 
            icon: '⚡', 
            title: '12) Energy & Utilities', 
            subSectors: [
                'Power generation companies', 'Renewable energy providers', 'Water supply companies', 
                'Waste management services', 'Energy consulting firms', 'Smart Grid, Microgrid, and Energy Storage', 
                'Energy storage solutions providers', 'Electric utilities', 'Environmental services companies'
            ]
        },
        { 
            icon: '🤝', 
            title: '13) Consulting', 
            subSectors: [
                'Management consulting firms', 'Human resources (HR) consulting companies', 'Marketing consulting agencies', 
                'Strategy consulting firms', 'Technology consulting firms', 'Sustainability consulting firms', 
                'Financial consulting companies', 'Supply chain consulting firms', 'Healthcare consulting firms'
            ]
        },
        { 
            icon: '🚚', 
            title: '14) Transportation and Logistics', 
            subSectors: [
                'Shipping companies', 'Freight forwarding services', 'Courier and delivery services', 'Logistics providers', 
                'Warehousing and distribution centers', 'Third-party logistics (3PL) companies', 'Supply chain management firms', 
                'Last-mile delivery startups', 'Package tracking and logistics technology companies'
            ]
        },
        { 
            icon: '🌾', 
            title: '15) Agriculture and Farming', 
            subSectors: [
                'Crop farming', 'Livestock production', 'Dairy farms', 'Organic food businesses', 
                'Aquaculture farms', 'Hydroponics and vertical farming', 'Agricultural technology startups', 
                'Seed and fertilizer manufacturers', 'Farm equipment suppliers'
            ]
        },
        { 
            icon: '🚀', 
            title: '16) Emerging Industries', 
            subSectors: [
                'Blockchain technology and cryptocurrencies', 'Clean energy and sustainable technologies', 
                'Space exploration and aerospace industry', '3D printing and additive manufacturing', 
                'Robotics and automation', 'Biotechnology and genetic engineering', 
                'Personalized medicine and health-tech', 'E-commerce and online marketplaces', 
                'Smart home technology and Internet of Things', 'Sustainable Technologies (ESG/Green)'
            ]
        },
    ];

    return (
        <section id="industries" style={{ padding: '80px 5%', textAlign: 'center', backgroundColor: 'white' }}>
            <h2 style={{ fontSize: '2.5em', marginBottom: '10px', color: primaryColor }}>
                Industries We Serve
            </h2>
            <p style={{ fontSize: '1.1em', color: '#555', maxWidth: '900px', margin: '0 auto 10px' }}>
                Safety Expertise That Scales: InSafety Services offers comprehensive Health, Safety, Security, Environment, Fire, and Risk Management (HSSEF) expertise across every major global sector.
            </p>
            <p style={{ fontSize: '1.1em', color: '#555', maxWidth: '900px', margin: '0 auto 10px' }}>
                Our philosophy—that, <strong>safety is built-in, not bolted on</strong>—allows us to seamlessly integrate strategic safety solutions, regardless of your industry's complexity or size.
            </p>
            <p style={{ fontSize: '1.1em', color: '#555', maxWidth: '900px', margin: '0 auto 50px' }}>
                Below is a detailed view of the sectors we serve. If your industry isn't listed, contact us—our principles of risk transformation are universally applicable.
            </p>

            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
                {industriesData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        index={index}
                        title={item.title}
                        icon={item.icon} // Pass the icon/emoji
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        content={
                            <div style={{ padding: '10px 0' }}>
                                <h4 style={{ color: primaryColor, fontSize: '1.1em', marginTop: '0', marginBottom: '10px' }}>Key Sub-Sectors:</h4>
                                <DetailedIndustryList items={item.subSectors} />
                            </div>
                        }
                    />
                ))}
            </div>
        </section>
    );
}