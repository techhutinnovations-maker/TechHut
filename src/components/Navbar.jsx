import React, { useState, useEffect } from "react";
import Logo from "../assets/images/logo.png"; // Adjust path as needed
import "../assets/css/navbar.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setOpenDropdown(null); // Close dropdown when mobile menu is toggled
  };

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !event.target.closest(".header-dropdown")) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <>
      <header className={`main-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          <div className="header-content">
            {/* Logo */}
            <a href="/" className="header-logo-box" onClick={closeAllMenus}>
              <img src={Logo} alt="Company Logo" className="header-company-logo" />
            </a>

            {/* Mobile Toggler */}
            <button
              className="header-toggler"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              <span className={`header-toggler-icon ${isMenuOpen ? "open" : ""}`}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </span>
            </button>

            {/* Navigation Links Container */}
            <div className={`header-nav-box ${isMenuOpen ? "show" : ""}`}>
              <ul className="header-nav">
                <li><a href="/" className="header-nav-link" onClick={closeAllMenus}>HOME</a></li>
                <li><a href="#about" className="header-nav-link" onClick={closeAllMenus}>ABOUT US</a></li>
                <li><a href="#programs" className="header-nav-link" onClick={closeAllMenus}>PROGRAMS</a></li>
                <li><a href="#testimonials" className="header-nav-link" onClick={closeAllMenus}>TESTIMONIALS</a></li>
                {/* Dropdown Example: Products */}
                
                <li><a href="#faq" className="header-nav-link" onClick={closeAllMenus}>FAQ</a></li>
                <div className="header-contact-button-container">
                  <a href="#contact" className="header-contact-btn" onClick={closeAllMenus}>Get in Touch</a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to push content below the fixed header */}
      <div className="header-spacer"></div>
    </>
  );
};

export default Header;