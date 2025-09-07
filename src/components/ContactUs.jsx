import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    frontend: "",
    backend: "",
    database: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_rf2aaec', 
      'template_lw7c6qx', 
      e.target, 
      'kFCNP7KO7LEsgyRdS'
    )
      .then(() => {
        toast.success("Message sent successfully!");
        setIsSubmitting(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          frontend: "",
          backend: "",
          database: "",
          message: ""
        });
      })
      .catch(() => {
        toast.error("Something went wrong, please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-container" id="contact">
      {/* Left Side */}
      <div className="contact-left">
        <h2>Let's chat.</h2>
        <h3>Tell us about your project.</h3>
        <p>
          We’d love to hear from you. Share your project ideas, requirements, or any
          questions you have. Our team will get back to you promptly to discuss how
          we can help bring your vision to life.
        </p>

        <div className="contact-info-box">
          <div className="info-item">
            <div className="icon-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </div>
            <div>
              <p>Mail us at</p>
              <a href="mailto: techhut.innovations@gmail.com">techhut.innovations@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="contact-right">
        <div className="form-header">
          <h3>Send us a message</h3>
          <p>We typically respond within 24 hours</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Form Inputs */}
          <div className="row">
            <div className="input-group">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name*" 
                required 
              />
              <span className="input-highlight"></span>
            </div>
            <div className="input-group">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address*" 
                required 
              />
              <span className="input-highlight"></span>
            </div>
          </div>

          <div className="input-group">
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Contact Number*" 
              required 
            />
            <span className="input-highlight"></span>
          </div>

          <div className="row">
            <div className="input-group">
              <select 
                name="frontend"
                value={formData.frontend}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Choose Frontend*</option>
                <option value="react">React JS</option>
                <option value="html">HTML/CSS</option>
                <option value="angular">Angular</option>
                <option value="vue">Next JS</option>
              </select>
              <span className="input-highlight"></span>
            </div>
            <div className="input-group">
              <select 
                name="backend"
                value={formData.backend}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Choose Backend*</option>
                <option value="node">Node.js</option>
                <option value="express">Express</option>
                <option value="net">.NET</option>
                <option value="django">python</option>
              </select>
              <span className="input-highlight"></span>
            </div>
          </div>

          <div className="input-group">
            <select 
              name="database"
              value={formData.database}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Choose Database*</option>
              <option value="sql">SQL</option>
              <option value="mongodb">MongoDB</option>
              <option value="mysql">MySQL</option>
            </select>
            <span className="input-highlight"></span>
          </div>

          <div className="input-group">
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your project requirements*" 
              rows="5" 
              required
            ></textarea>
            <span className="input-highlight"></span>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </button>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={4000} hideProgressBar={false} />
    </div>
  );
};

export default ContactForm;
