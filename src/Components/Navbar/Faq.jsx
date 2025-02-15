import React, { useState } from 'react';
import './Faq.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the difference between a coin and a token in cryptocurrency?',
      answer: 'A coin typically operates on its own blockchain (e.g., Bitcoin, Ethereum), while a token is built on an existing blockchain and often represents a specific utility or asset.',
    },
    {
      question: 'How does staking in cryptocurrencies work?',
      answer: 'Staking involves locking up your cryptocurrency to support the operations of a blockchain network, earning rewards in return.',
    },
    {
      question: 'What are smart contracts, and how are they used?',
      answer: 'Smart contracts are self-executing agreements with the terms directly written into code, facilitating trustless transactions on blockchains.',
    },
    {
      question: 'What is the role of decentralized exchanges (DEX) in crypto trading?',
      answer: 'Decentralized exchanges allow peer-to-peer trading of cryptocurrencies without the need for an intermediary, offering greater privacy and control over assets.',
    },
    {
      question: 'What are the risks associated with cryptocurrency investments?',
      answer: 'Risks include market volatility, security breaches, regulatory changes, and the potential loss of funds due to scams or mismanagement.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (email.trim() === "") {
      alert("Please enter a valid email address.");
      return;
    }
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="faq-section">
      <div className="faq-container">
        <div className="faq-questions">
          <div data-aos="fade-down" className='que'>
            <h2 className="faq-title">Frequently Asked Questions</h2>
          </div>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div>{faq.question}</div>
              <div>+</div>
              {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
        <div data-aos="zoom-" className="contact-box">
          <h3>Do you have more questions?</h3>
          <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
          <Link to="/contact">
            <button>Send a Direct Mail</button>
          </Link>
        </div>
      </div>
      <div className="newsletter-section">
        <div className="newsletter">
          <h1>Subscribe To Our Newsletter</h1>
          <label htmlFor="email">Enter your email to proceed:</label> <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
          <button type="button" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
        {showPopup && (
          <div className="popup">
            <div className="popup-card">
              <div className="success-icon">
                <span>&#10003;</span>
              </div>
              <p>Subscription Successful!</p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default FAQSection;
