"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [clickedSection, setClickedSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Industries", href: "#industries" },
        { name: "Why Choose Us", href: "#why-us" },
        { name: "Methodology", href: "#methodology" },
        { name: "Leadership", href: "#leadership" },
        { name: "Success Stories", href: "#success-stories" },
        { name: "Resources", href: "#resources" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleNavClick = (sectionId) => {
        setClickedSection(sectionId);
        closeMenu();
    };

    return (
        <header className="main-header">
            {/* LOGO */}
            <Link
                href="#home"
                className="header-logo-link"
                onClick={() => handleNavClick("home")}
            >
                <div className="site-title">InSafety Services</div>
                <div className="site-tagline">
                    Solutions for Today's Challenges, Assurance for Tomorrow
                </div>
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
                onClick={toggleMenu}
                className="mobile-menu-button"
                aria-expanded={isMenuOpen}
            >
                {isMenuOpen ? "X" : "≡"}
            </button>

            {/* NAV MENU */}
            <nav className={`main-nav ${isMenuOpen ? "nav-open" : ""}`}>
                <ul className="nav-list">
                    {navItems.map((item) => {
                        const sectionId = item.href.replace("#", "");
                        const isActive = clickedSection === sectionId;
                        
                        return (
                            <li key={item.name} className="nav-item">
                                <Link
                                    href={item.href}
                                    className={`nav-link ${isActive ? "active" : ""}`}
                                    onClick={() => handleNavClick(sectionId)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}

                    {/* CONTACT BUTTON */}
                    <li className="nav-item contact-button-wrapper">
                        <a
                            href="#contact-form-anchor"
                            className="contact-button"
                            onClick={closeMenu}
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}