import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Help.css';
import Footer from './Footer';

const Help = () => {
  // ✅ Correctly Define States Here
  const [showTicketForm, setShowTicketForm] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [ticketDetails, setTicketDetails] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // ✅ Handle Form Input Change
  const handleInputChange = (e) => {
    setTicketDetails({ ...ticketDetails, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a successful submission
    setShowTicketForm(false);
    setShowSuccessPopup(true);

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessPopup(false);
      setTicketDetails({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="helps-section">
      <div data-aos="fade-left" className="helps-header">
        <h3>Need help?</h3>
        <p>We are always here for you. Reach out to us anytime</p>
      </div>

      <div className="helps-cards">
        <div data-aos="fade-up" className="helps-card">
          <div className="helps-image">
            <img src="/assets/help1.jpg" alt="Customer Support" />
          </div>
          <div className="helps-content">
            <h4>Customer Support</h4>
            <p>
              Our friendly support team is available 24/7 to assist you with any queries.
              Feel free to contact us via chat, email, or phone.
            </p>
            <Link to="/contact">
              <button>Contact Support</button>
            </Link>
          </div>
        </div>

        {/* Ticket Support */}
        <div data-aos="fade-up" className="helps-card">
          <div className="helps-content">
            <h4>Ticket Support</h4>
            <p>
              Submit a support ticket for detailed assistance on complex issues.
              Our team ensures timely resolution of all your concerns.
            </p>
            <button onClick={() => setShowTicketForm(true)}>Submit a Ticket</button>
          </div>
          <div className="helps-image">
            <img src="/assets/help2.jpg" alt="Ticket Support" />
          </div>
        </div>

        {/* FAQ */}
        <div data-aos="fade-up" className="helps-card">
          <div className="helps-image">
            <img src="/assets/help3.jpg" alt="FAQ" />
          </div>
          <div className="helps-content">
            <h4>FAQ</h4>
            <p>
              Browse our Frequently Asked Questions for quick answers to common queries.
              Find solutions without waiting.
            </p>
            <Link to="/faq">
              <button>Explore FAQ</button>
            </Link>
          </div>
        </div>
      </div>

      {/* ✅ Ticket Form Modal */}
      {showTicketForm && (
        <div className="ticket-modal">
          <div className="ticket-card">
            <h3>Submit a Ticket</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" value={ticketDetails.name} onChange={handleInputChange} required />
              <input type="email" name="email" placeholder="Your Email" value={ticketDetails.email} onChange={handleInputChange} required />
              <input type="text" name="subject" placeholder="Subject" value={ticketDetails.subject} onChange={handleInputChange} required />
              <textarea name="message" placeholder="Describe your issue" value={ticketDetails.message} onChange={handleInputChange} required />
              <div className="ticket-buttons">
                <button type="submit" className="btn-submit">Submit</button>
                <button type="button" className="btn-cancel" onClick={() => setShowTicketForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ✅ Success Message Popup */}
      {showSuccessPopup && (
        <div className="success-modal">
          <div className="success-card">
            <div className="checkmark">
              <svg viewBox="0 0 52 52">
                <circle cx="26" cy="26" r="25" fill="none" />
                <path fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" d="M14 27l7 7 16-16" />
              </svg>
            </div>
            <h3>Message Sent Successfully!</h3>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Help;
