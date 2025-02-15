import React, { useState, useEffect } from "react";
import "./WelcomePage.css";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router

const WelcomePage = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [subTextIndex, setSubTextIndex] = useState(0);
  const navigate = useNavigate(); // Hook for navigation

  const titleText = "Welcome to Paywith-Pi";
  const subText = "Discover More By Getting Started";

  useEffect(() => {
    // Typing effect for the main title
    if (textIndex < titleText.length) {
      const timer = setTimeout(() => {
        setTextIndex((prevIndex) => prevIndex + 1);
      }, 100); // Typing speed
      return () => clearTimeout(timer);
    }
  }, [textIndex, titleText]);

  useEffect(() => {
    // Typing effect for the sub-title
    if (textIndex === titleText.length && subTextIndex < subText.length) {
      const timer = setTimeout(() => {
        setSubTextIndex((prevIndex) => prevIndex + 1);
      }, 100); // Typing speed
      return () => clearTimeout(timer);
    }
  }, [textIndex, subTextIndex, subText]);

  const handleGetStarted = () => {
    navigate("/termsconditions"); // Navigate to the signup page
  };

  return (
    <div className="bdy">
      <div className="welcome-container">
        <div className="logo logo-animate">
          <img src="" alt="Logo" />
        </div>
        <h1 className="title">
          {titleText.slice(0, textIndex)}
        </h1>
        <h2 className="subtitle">
          {subText.slice(0, subTextIndex)}
        </h2>
        {textIndex === titleText.length && subTextIndex === subText.length && (
          <button className="get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;
