"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const primaryTextColor = "white";
  const accentColor = "#ffc107"; 
  const primaryColor = "#1f3e66"; 

  // --------------------------
  // ACTIVE SECTION DETECTION
  // --------------------------
  const [activeSection, setActiveSection] = useState("home");

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

  // --------------------------
  // NAV ITEMS LIST
  // --------------------------
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

  // --------------------------
  // MOBILE MENU
  // --------------------------
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // ⭐ NEW FUNCTION — closes menu after selecting any link
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="main-header">
      
      {/* LOGO */}
      <Link
        href="#home"
        className="header-logo-link"
        onClick={closeMenu}
        style={{ textDecoration: "none" }}
      >
        <div className="site-title" style={{ color: primaryTextColor, fontWeight: "bold" }}>
          InSafety Services
        </div>
        <div className="site-tagline" style={{ color: accentColor }}>
          Solutions for Today's Challenges, Assurance for Tomorrow
        </div>
      </Link>

      {/* MOBILE MENU ICON */}
      <button
        onClick={toggleMenu}
        className="mobile-menu-button"
        aria-expanded={isMenuOpen}
        style={{ color: primaryTextColor }}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* NAV BAR */}
      <nav className={`main-nav ${isMenuOpen ? "nav-open" : ""}`}>
        <ul className="nav-list">

          {/* MAIN NAV LINKS */}
          {navItems.map((item) => (
            <li key={item.name} className="nav-item">
              <Link
                href={item.href}
                className={`nav-link ${
                  activeSection === item.href.replace("#", "") ? "active" : ""
                }`}
                style={{ color: primaryTextColor }}
                onClick={closeMenu}   // ⭐ AUTO-CLOSE ON TAP
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
              style={{
                backgroundColor: accentColor,
                color: primaryColor,
              }}
              onClick={closeMenu}  // ⭐ AUTO-CLOSE ON TAP
            >
              Contact Us
            </a>
          </li>

        </ul>
      </nav>
    </header>
  );
}
