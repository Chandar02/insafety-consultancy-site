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

    // NEW & IMPROVED: Intersection Observer logic
    useEffect(() => {
        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                // If a section crosses into the middle 50% of the screen, make it active
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, {
            // This invisible boundary ensures the highlight changes as soon as the section hits the middle of the screen
            rootMargin: "-40% 0px -60% 0px"
        });

        // Tell the observer to watch all our sections
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

    const smoothScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;
        const targetScroll = element.offsetTop - 30; 
        const startScroll = window.scrollY;
        const distance = targetScroll - startScroll;
        const duration = 2500; 
        let startTime = null;

        const easeInOutCubic = (t) => {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const scroll = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / duration;
            if (progress < 1) {
                const easeProgress = easeInOutCubic(progress);
                window.scrollY !== targetScroll &&
                    window.scrollTo(0, startScroll + distance * easeProgress);
                requestAnimationFrame(scroll);
            } else {
                window.scrollTo(0, targetScroll);
            }
        };
        requestAnimationFrame(scroll);
    };

    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId);
        closeMenu();
        smoothScrollToSection(sectionId);
    };

    return (
        <header className="main-header">
            {/* LOGO */}
            <a
                href="#home"
                className="header-logo-link"
                onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("home");
                }}
            >
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
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(sectionId);
                                    }}
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
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick("contact-form-anchor");
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