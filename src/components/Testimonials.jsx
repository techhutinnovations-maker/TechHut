import React, { useState, useEffect } from 'react';
import profile from '../assets/images/profile.jpg';
import profilemen from '../assets/images/profilemen.jpg';

// --- Testimonials Data ---
const testimonialsData = [
  {
    id: 1,
    name: 'Yokesh',
    quote: "Working on the MERN stack project really boosted my confidence. I was able to understand how frontend and backend connect in a real-world scenario.",
    company: 'Final Year Student, CSE',
    avatar: profile,
  },
  {
    id: 2,
    name: 'Yogarajan',
    quote: "The .NET project experience helped me build strong backend knowledge. It gave me clarity on APIs, authentication, and database connectivity.",
    company: 'Junior Software Engineer',
    avatar: profile,
  },
  {
    id: 3,
    name: 'Siva',
    quote: "I learned a lot from the MEAN stack project. It was challenging but helped me explore full-stack development and deploy my first live project.",
    company: 'Aspiring Full Stack Developer',
    avatar: profilemen,
  },
  {
    id: 4,
    name: 'Karthi',
    quote: "The hands-on projects gave me practical knowledge beyond theory. It really helped me prepare for technical interviews and problem-solving rounds.",
    company: 'Graduate Engineer Trainee',
    avatar: profile,
  },
  {
    id: 5,
    name: 'Yaswanth',
    quote: "These projects shaped my portfolio and career. I got real confidence to build and deploy applications, which played a big role in landing my first job.",
    company: 'Junior Software Engineer at Kartoffel Technologies',
    avatar: profilemen,
  },
];

// --- Responsive Hook ---
const useResponsiveStyles = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headingSize = windowWidth < 768 ? '2rem' : '2.8rem';
  const quoteSize = windowWidth < 768 ? '1.1rem' : '1.45rem';
  const nameSize = windowWidth < 768 ? '1.1rem' : '1.3rem';
  const companySize = windowWidth < 768 ? '0.9rem' : '1.05rem';
  const avatarSize = windowWidth < 768 ? '80px' : '110px';
  const cardPadding = windowWidth < 768 ? '2rem' : '3rem';

  return {
    headingSize,
    quoteSize,
    nameSize,
    companySize,
    avatarSize,
    cardPadding
  };
};

// --- Testimonials Component ---
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const {
    headingSize,
    quoteSize,
    nameSize,
    companySize,
    avatarSize,
    cardPadding
  } = useResponsiveStyles();

  // Auto-carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
        );
        setAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    if (index === currentIndex) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimating(false);
    }, 500);
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" style={sectionStyle}>
      <h2 style={{ ...headingStyle, fontSize: headingSize }}>💬 What Our Students Say</h2>
      <div style={carouselContainerStyle}>
        <div
          style={{
            ...testimonialCardStyle,
            padding: cardPadding,
            opacity: animating ? 0 : 1,
            transform: animating
              ? 'translateY(20px) scale(0.95)'
              : 'translateY(0) scale(1)',
          }}
        >
          <div
            style={{
              ...avatarContainerStyle,
              width: avatarSize,
              height: avatarSize,
            }}
          >
            <img
              src={currentTestimonial.avatar}
              alt={currentTestimonial.name}
              style={avatarStyle}
            />
          </div>
          <p style={{ ...quoteStyle, fontSize: quoteSize }}>“{currentTestimonial.quote}”</p>
          <p style={{ ...nameStyle, fontSize: nameSize }}>{currentTestimonial.name}</p>
          <p style={{ ...companyStyle, fontSize: companySize }}>{currentTestimonial.company}</p>
        </div>
      </div>

      {/* Dots */}
      <div style={dotsContainerStyle}>
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            style={{
              ...dotStyle,
              ...(index === currentIndex ? activeDotStyle : {}),
            }}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

// --- Styles ---
const primaryColor = '#667eea';
const secondaryColor = '#764ba2';
const textColor = '#2c3e50';
const lightTextColor = '#555';

const sectionStyle = {
  padding: '6rem 2rem',
  textAlign: 'center',
  fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
};

const headingStyle = {
  color: textColor,
  marginBottom: '3.5rem',
  fontWeight: '800',
  letterSpacing: '-0.03em',
};

const carouselContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '320px',
  marginBottom: '3rem',
  perspective: '1000px',
};

const testimonialCardStyle = {
  backgroundColor: '#f9f7ff',
  borderRadius: '20px',
  maxWidth: '750px',
  width: '100%',
  textAlign: 'center',
  boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
  transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
  position: 'relative',
};

const avatarContainerStyle = {
  borderRadius: '50%',
  overflow: 'hidden',
  marginBottom: '2rem',
  border: `5px solid ${primaryColor}`,
  boxShadow: `0 0 25px rgba(102,126,234,0.4)`,
  margin: '0 auto 2rem',
};

const avatarStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const quoteStyle = {
  lineHeight: '1.7',
  color: lightTextColor,
  fontStyle: 'italic',
  marginBottom: '2rem',
};

const nameStyle = {
  fontWeight: '700',
  color: textColor,
  marginBottom: '0.5rem',
};

const companyStyle = {
  color: '#7f8c8d',
};

const dotsContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '2rem',
};

const dotStyle = {
  height: '14px',
  width: '14px',
  margin: '0 8px',
  backgroundColor: '#d1d9e6',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
  border: '2px solid transparent',
};

const activeDotStyle = {
  backgroundColor: primaryColor,
  transform: 'scale(1.3)',
  boxShadow: `0 0 12px ${primaryColor}`,
  border: `2px solid ${secondaryColor}`,
};

export default Testimonials;
