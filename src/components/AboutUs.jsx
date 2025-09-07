import React from "react";
import "../assets/css/aboutus.css";
import aboutImg from "../assets/images/about.jpg"; // Add your own image

const AboutUs = () => {
  return (
    <section className="aboutus-section" id="about">
      {/* Top bar accent */}
      <div className="aboutus-top-bar"></div>

      <div className="aboutus-container">
        {/* Left Image + Highlight Text */}
        <div className="aboutus-image-wrapper animate-fade-slide">
          <img src={aboutImg} alt="About us illustration" className="aboutus-image" />

          {/* Highlight under image */}
          <h3 className="aboutus-highlight animate-fade-slide delay-4">
            Your journey to academic success starts here — <strong>let’s build something amazing together!</strong>
          </h3>
        </div>

        {/* Right Content */}
        <div className="aboutus-content">
          <h2 className="aboutus-title animate-fade-slide">About Us</h2>
          {/* <div className="aboutus-separator animate-grow"></div> */}

          <p className="aboutus-paragraph animate-fade-slide delay-1">
            We specialize in creating high-quality <strong>academic projects</strong> for college students, covering both major and mini projects.
            Our goal is to help students transform their ideas into reality with practical, well-structured, and innovative solutions.
          </p>

          <p className="aboutus-paragraph animate-fade-slide delay-2">
            Whether you’re working on <strong>MERN, MEAN, .NET, Python,</strong> or other technologies, our team provides end-to-end guidance
            — from project selection and development to deployment and presentation.
          </p>

          <p className="aboutus-paragraph animate-fade-slide delay-3">
            We believe in learning by doing. That’s why every project is built with real-world practices in mind, helping students gain valuable
            hands-on experience and a portfolio that stands out.
          </p>

          {/* Mini Cards for Highlights */}
          <div className="aboutus-features">
            <div className="feature-card">
              <h4>📚 Major & Mini Projects</h4>
              <p>From concept to deployment, we help you every step of the way.</p>
            </div>
            <div className="feature-card">
              <h4>⚡ Latest Technologies</h4>
              <p>Work with MERN, MEAN, .NET, Python, and many more trending stacks.</p>
            </div>
            <div className="feature-card">
              <h4>🎯 End-to-End Guidance</h4>
              <p>Get support for documentation, reports, and viva preparation.</p>
            </div>
          </div>
        </div>
      </div>

    </section >
  );
};

export default AboutUs;
