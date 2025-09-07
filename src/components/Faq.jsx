import React, { useState } from "react";

const faqData = [
  {
    question: "What kind of projects do you provide?",
    answer:
      "We provide academic projects in MERN, MEAN, .NET, Python, and other trending technologies, covering both mini and major projects.",
  },
  {
    question: "Do you offer support during the project?",
    answer:
      "Yes! We provide complete guidance and support throughout the project, including explanations and troubleshooting.",
  },
  {
    question: "Can I customize a project according to my college requirements?",
    answer:
      "Absolutely. We tailor projects to meet your college/university guidelines and specific requirements.",
  },
  {
    question: "Do you provide documentation along with the project?",
    answer:
      "Yes, we include detailed documentation to help you understand the code and concepts clearly.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us with your project requirement. We'll guide you through the process step by step.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      style={{
        padding: "5rem 2rem", // Increased padding
        background: "linear-gradient(135deg, #e0f2f7 0%, #c1e5ed 100%)", // Lighter, more modern gradient
        fontFamily: "'Roboto', sans-serif", // Using Roboto font
      }}
    >
      <h2
        style={{
          fontSize: "2rem", // Larger title
          textAlign: "center",
          marginBottom: "3.5rem", // Increased margin
          fontWeight: "800", // Bolder font weight
          color: "#2c3e50",
          letterSpacing: "-0.5px", // Tighter letter spacing
        }}
      >
        <span role="img" aria-label="question mark">
          💡
        </span>{" "}
        Frequently Asked Questions
      </h2>

      <div
        style={{
          maxWidth: "850px", // Slightly wider container
          margin: "0 auto",
        }}
      >
        {faqData.map((faq, index) => (
          <div
            key={index}
            style={{
              marginBottom: "1.2rem", // Increased margin between items
              borderRadius: "15px", // More rounded corners
              background: "#ffffff",
              boxShadow:
                activeIndex === index
                  ? "0 10px 30px rgba(0, 0, 0, 0.1), 0 0 0 3px #667eea" // Active state shadow with border glow
                  : "0 5px 20px rgba(0, 0, 0, 0.08)", // Softer shadow for inactive
              transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)", // Smoother transitions
              overflow: "hidden",
            }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "1.5rem 2rem", // More padding
                background: "none",
                border: "none",
                outline: "none",
                fontSize: "1.25rem", // Slightly larger font
                fontWeight: "600",
                color: "#34495e",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                backgroundColor:
                  activeIndex === index ? "#eef2ff" : "transparent", // Light background for active
                "&:hover": {
                  backgroundColor: "#f8faff", // Light hover background
                },
              }}
            >
              {faq.question}
              <span
                style={{
                  transform:
                    activeIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                  fontSize: "1.8rem", // Larger arrow icon
                  color: "#667eea",
                  fontWeight: "bold",
                }}
              >
                &#9660; {/* Unicode down arrow for a cleaner look */}
              </span>
            </button>

            <div
              style={{
                maxHeight: activeIndex === index ? "300px" : "0", // Increased max-height for content
                overflow: "hidden",
                transition: "max-height 0.5s ease-in-out, padding 0.4s ease", // Smoother animation
                padding: activeIndex === index ? "0 2rem 1.5rem" : "0 2rem", // Adjusted padding
              }}
            >
              <p
                style={{
                  color: "#5f6c7c", // Slightly darker text for better contrast
                  fontSize: "1.05rem", // Slightly larger body text
                  lineHeight: "1.7", // Improved line height
                }}
              >
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;