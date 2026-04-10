"use client";
import { useState, useEffect } from "react";

export default function Header() {
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Industries", href: "#industries" },
        { name: "Why Choose Us", href: "#why-us" },
        { name: "Methodology", href: "#methodology" },
        { name: "Leadership", href: "#leadership" },
        { name: "Risk Calculator", href: "#risk-calculator" }
    ];

    // Intersection Observer perfectly tracks where you are on the screen
    useEffect(() => {
        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, {
            rootMargin: "-40% 0px -60% 0px"
        });

        navItems.forEach((item) => {
            const sectionId = item.href.replace("#", "");
            const element = document.getElementById(sectionId);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="main-header">
            {/* LOGO */}
            <a href="#home" className="header-logo-link" onClick={closeMenu}>
                <div className="site-title">InSafety Services</div>
                <div className="site-tagline">
                    Solutions for Today's Challenges, <br className="hidden md:block" />Assurance for Tomorrow
                </div>
            </a>

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
                        const isActive = activeSection === sectionId;

                        return (
                            <li key={item.name} className="nav-item">
                                <a
                                    href={item.href}
                                    className={`nav-link ${isActive ? "active" : ""}`}
                                    onClick={closeMenu}
                                >
                                    {item.name}
                                </a>
                            </li>
                        );
                    })}
                    {/* CONTACT BUTTON */}
                    <li className="nav-item contact-button-wrapper">
                        <a
                            href="#contact-form-anchor"
                            className="contact-button"
                            style={{ display: "inline-block" }}
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