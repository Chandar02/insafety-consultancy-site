// components/Header.js

"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    // --- Define Color Variables and Constants ---
    const primaryTextColor = 'white';
    const accentColor = '#ffc107'; 
    const primaryColor = '#1f3e66'; 
    
    // State to manage the mobile menu open/close status
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
        <header className="main-header">
            {/* Logo and Tagline */}
            <Link 
                href="#home" 
                className="header-logo-link"
                style={{ textDecoration: 'none' }}
            >
                <div className="site-title" style={{ color: primaryTextColor, fontWeight: 'bold' }}>
                    InSafety Services
                </div>
                <div className="site-tagline" style={{ color: accentColor }}>
                    Solutions for Today's Challenges, Assurance for Tomorrow
                </div>
            </Link>

            {/* Mobile Menu Button - CRITICAL for triggering the menu */}
            <button 
                onClick={toggleMenu} 
                className="mobile-menu-button"
                aria-expanded={isMenuOpen}
                style={{ color: primaryTextColor }}
            >
                {isMenuOpen ? '✕' : '☰'} 
            </button>

            {/* Navigation Section */}
            <nav className={`main-nav ${isMenuOpen ? 'nav-open' : ''}`}>
                <ul className="nav-list">
                    {navItems.map((item) => (
                        <li key={item.name} className="nav-item">
                            <Link
                                href={item.href}
                                className="nav-link"
                                style={{ color: primaryTextColor }}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    {/* Contact Us Button/Link */}
                    <li className="nav-item contact-button-wrapper">
                        <a 
                            href="#contact-form-anchor"
                            className="contact-button"
                            style={{ 
                                backgroundColor: accentColor, 
                                color: primaryColor, 
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