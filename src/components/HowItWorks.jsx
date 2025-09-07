import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../assets/css/HowItWorks.css';

function HowItWorks() {
  return (
    <section className="hiw-wrapper">
      <h2 className="hiw-heading">How It Works</h2>
      <p className="hiw-subheading">Turn Ideas into Impact in 3 Simple Steps</p>

      <div className="hiw-steps">
        {/* Step 1 */}
        <div className="hiw-step">
          <div className="hiw-circle">1</div>
          <p className="hiw-text">
            <strong>Sign Up</strong> <br />
            Begin your journey with a simple registration
          </p>
        </div>

        <FaArrowRight className="hiw-arrow" />

        {/* Step 2 */}
        <div className="hiw-step">
          <div className="hiw-circle">2</div>
          <p className="hiw-text">
            <strong>Learn & Grow</strong> <br />
            Gain practical skills in leadership, innovation, and business
          </p>
        </div>

        <FaArrowRight className="hiw-arrow" />

        {/* Step 3 */}
        <div className="hiw-step">
          <div className="hiw-circle">3</div>
          <p className="hiw-text">
            <strong>Showcase Your Idea</strong> <br />
            Pitch your venture to experts, mentors, and industry leaders
          </p>
        </div>
      </div>

      <div className="hiw-footer">
        Where Knowledge Meets Action – and Dreams Become Reality
      </div>
    </section>
  );
}

export default HowItWorks;
