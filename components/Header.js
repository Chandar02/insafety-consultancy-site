"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Detect active section while scrolling
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                "home",
                "services",
                "industries",
                "why-us",
                "methodology",
                "leadership",
                "success-stories",
                "resources",
            ];

            for (let section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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

    return (
        <header className="main-header">
            {/* LOGO */}
            <Link
                href="#home"
                className="header-logo-link"
                onClick={closeMenu}
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
                    {navItems.map((item) => (
                        <li key={item.name} className="nav-item">
                            <Link
                                href={item.href}
                                className={`nav-link ${
                                    activeSection === item.href.replace("#", "")
                                        ? "active"
                                        : ""
                                }`}
                                onClick={closeMenu}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}

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
