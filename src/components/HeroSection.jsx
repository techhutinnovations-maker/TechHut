import React, { useState, useEffect } from "react";
import logo from "../assets/images/succes.png";

function HeroSection() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToAbout = () => {
  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <section
      id="hero"
      style={{
        ...heroStyle,
        flexDirection: isMobile ? "column" : "row",
        textAlign: isMobile ? "center" : "left",
        padding: isMobile ? "2rem 1rem" : "2rem 4rem",
      }}
    >
      {/* Left Content */}
      <div
        style={{
          ...heroContentStyle,
          maxWidth: isMobile ? "100%" : "550px",
          marginBottom: isMobile ? "2rem" : "0",
        }}
      >
        <h1
          style={{
            ...heroHeadingStyle,
            fontSize: isMobile ? "2rem" : "4rem",
          }}
        >
          Empowering the Next Generation of Tech Innovators
        </h1>
        <p
          style={{
            ...heroSubheadingStyle,
            fontSize: isMobile ? "1rem" : "1.3rem",
          }}
        >
          Dive into real-world projects with MERN, MEAN, .NET, Python, and more. Build
          your portfolio, gain experience, and launch your career!
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: isMobile ? "center" : "flex-start",
            gap: "1rem",
          }}
        >
          <button style={ctaButtonStyle} onClick={scrollToAbout}>Explore Projects</button>
          <button style={secondaryCtaButtonStyle} onClick={scrollToAbout} >Learn More</button>
        </div>
      </div>

      {/* Right Image */}
      <div
        style={{
          ...heroImagePlaceholderStyle,
          width: isMobile ? "100%" : "550px",
          height: isMobile ? "220px" : "420px",
        }}
      >
        <img
          src={logo}
          alt="Success illustration"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
}

const heroStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  minHeight: "80vh",
  backgroundColor: "#f8f9fa",
  gap: "3rem",
  flexWrap: "wrap",
};

const heroContentStyle = {
  maxWidth: "550px",
};

const heroHeadingStyle = {
  fontSize: "4rem",
  color: "#2c3e50",
  marginBottom: "1.5rem",
  lineHeight: "1.2",
  fontWeight: "700",
};

const heroSubheadingStyle = {
  fontSize: "1.3rem",
  color: "#555",
  marginBottom: "2rem",
  lineHeight: "1.6",
};

const ctaButtonStyle = {
  backgroundColor: "#007bff",
  color: "white",
  padding: "1rem 2rem",
  fontSize: "1rem",
  border: "none",
  borderRadius: "50px",
  cursor: "pointer",
  transition: "background-color 0.3s ease, transform 0.2s ease",
  fontWeight: "600",
  boxShadow: "0 4px 10px rgba(0, 123, 255, 0.2)",
  width: "100%", // Full width on mobile
  maxWidth: "250px",
};

const secondaryCtaButtonStyle = {
  backgroundColor: "transparent",
  color: "#007bff",
  padding: "1rem 2rem",
  fontSize: "1rem",
  border: "2px solid #007bff",
  borderRadius: "50px",
  cursor: "pointer",
  transition: "background-color 0.3s ease, color 0.3s ease, transform 0.2s ease",
  fontWeight: "600",
  width: "100%", // Full width on mobile
  maxWidth: "250px",
};

const heroImagePlaceholderStyle = {
  flexShrink: 0,
  backgroundColor: "#e9ecef",
  borderRadius: "15px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default HeroSection;
