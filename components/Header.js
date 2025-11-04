// components/Header.js
"use client";

import Link from 'next/link';

export default function Header() {
    // --- Define Color Variables and Constants ---
    const primaryTextColor = 'white';
    const accentColor = '#ffc107'; 
    const backgroundColor = '#1f3e66'; 
    const primaryColor = '#1f3e66'; 

    const HEADER_HEIGHT = '90px'; 
    
    // Navigation Items (unchanged)
    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Industries', href: '#industries' },
        { name: 'Why Choose Us', href: '#why-us' }, 
        { name: 'Methodology', href: '#methodology' }, 
        { name: 'Leadership', href: '#leadership' },
        { name: 'Success Stories', href: '#success-stories' },
        { name: 'Resources', href: '#resources' },
    ];

    return (
        <header
            style={{
                backgroundColor: backgroundColor,
                color: primaryTextColor,
                padding: '10px 5%',
                height: HEADER_HEIGHT, 
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            {/* New Text Logo Section (Replaces Image) */}
            <Link 
                href="#home" 
                style={{ 
                    textDecoration: 'none', 
                    display: 'block',
                    lineHeight: '1.2', // IMPROVED: Line height for better spacing
                    padding: '5px 0' 
                }}
            >
                <div style={{ color: primaryTextColor, fontSize: '1.4em', fontWeight: 'bold' }}>
                    InSafety Services
                </div>
                <div style={{ fontSize: '0.65em', color: accentColor, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                    Solutions for Today's Challenges, Assurance for Tomorrow
                </div>
            </Link>

            {/* Navigation Section (Center/Right) */}
            <nav>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', alignItems: 'center' }}>
                    {navItems.map((item) => (
                        <li key={item.name} style={{ marginLeft: '30px' }}>
                            <Link
                                href={item.href}
                                style={{
                                    color: primaryTextColor,
                                    textDecoration: 'none',
                                    fontSize: '1em',
                                    transition: 'color 0.3s',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    {/* Contact Us Button/Link */}
                    <li style={{ marginLeft: '40px' }}>
                        <a 
                            href="#contact" 
                            style={{ 
                                padding: '8px 15px', 
                                backgroundColor: accentColor, 
                                color: primaryColor, 
                                borderRadius: '4px', 
                                textDecoration: 'none', 
                                fontWeight: 'bold',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}