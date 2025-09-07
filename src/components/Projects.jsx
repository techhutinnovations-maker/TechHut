import React from 'react';
import '../assets/css/Projects.css'; // Assuming you'll update this CSS
import learnBuildImg from '../assets/images/ARISE WEBSITE_how-08.webp'; // Reusing for Learn & Build
import showcaseCertifyImg from '../assets/images/ARISE WEBSITE_how-10.png'; // Reusing for Showcase
import getRecognisedImg from '../assets/images/ARISE WEBSITE_how-11.webp'; // Reusing for Get Recognized

const Projects = () => {
  return (
    <section className="projects-wrapper font-regular" id="programs">
      {/* Section Header */}
      <div className="projects-header">
        <h2 className="projects-title">Our Streamlined Process</h2>
        <p className="projects-subtitle">
          We guide students through a comprehensive journey to <strong>master, apply, and excel </strong> 
          with real-world projects, boosting their practical skills and career readiness.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="projects-grid three-cards"> {/* Added a class for 3-card layout */}
        {/* Learn & Build */}
        <div className="projects-card">
          <img src={learnBuildImg} alt="Learn & Build" />
          <h3><span className="highlight">Learn & Build</span></h3>
          <p>
            Dive into trending technologies like MERN, MEAN, .NET, Python. Apply your knowledge
            immediately by developing both mini and major projects with expert guidance.
          </p>
        </div>

        {/* Showcase & Certify */}
        <div className="projects-card">
          <img src={showcaseCertifyImg} alt="Showcase & Certify" />
          <h3><span className="highlight">Showcase & Certify</span></h3>
          <p>
            Craft a compelling professional portfolio for your projects. Gain valuable
            certifications that validate your skills and practical expertise.
          </p>
        </div>

        {/* Excel & Get Recognized */}
        <div className="projects-card">
          <img src={getRecognisedImg} alt="Excel & Get Recognized" />
          <h3><span className="highlight">Excel & Get Recognized</span></h3>
          <p>
            Stand out in placements, internships, and competitions. Leverage your
            enhanced portfolio to gain recognition and accelerate your career.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;