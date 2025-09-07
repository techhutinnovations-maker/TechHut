import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={footerContentStyle}>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <div style={footerLinksStyle}>
          <a href="#" style={footerLinkStyle}>Privacy Policy</a>
          <a href="#" style={footerLinkStyle}>Terms of Service</a>
          <a href="#" style={footerLinkStyle}>Contact</a>
        </div>
        <div style={socialIconsStyle}>
          {/* Replace with actual social media icons/links */}
          <a href="#" style={socialIconStyle}>FB</a>
          <a href="#" style={socialIconStyle}>TW</a>
          <a href="#" style={socialIconStyle}>LI</a>
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '2rem 2rem',
  textAlign: 'center',
  fontSize: '0.9rem',
};

const footerContentStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',
};

const footerLinksStyle = {
  display: 'flex',
  gap: '1.5rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const footerLinkStyle = {
  color: '#a0a0a0',
  textDecoration: 'none',
};

const socialIconsStyle = {
  display: 'flex',
  gap: '1rem',
  marginTop: '1rem',
};

const socialIconStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.2rem',
  border: '1px solid white',
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default Footer;