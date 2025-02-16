import React, { useState, useEffect } from 'react';
import './Data.css';
import { Link } from 'react-router-dom';
import Footer from '../Components/Navbar/Footer';

const Data = () => {
  const [selectedImage, setSelectedImage] = useState('/assets/airtelogo2.png');
  const [showDropdown, setShowDropdown] = useState(false);
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingComplete, setProcessingComplete] = useState(false);
  const handleImageSelect = (image) => {
    setSelectedImage(image);
    setShowDropdown(false);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  useEffect(() => {
      if (isProcessing) {
        setProcessingComplete(false);
        const timer = setTimeout(() => {
          setProcessingComplete(true);
        }, 60000); // 60 seconds
  
        return () => clearTimeout(timer);
      }
    }, [isProcessing]);
  

  return (
    <div>
      <section className="wallets-section">
        <div className="wallets-slider">
          <div className="wallets-slide">
            <div className="wallets-info slide-in">
              <h1>Exclusive & Top Data Bundles</h1>
              <h6>Save More with Every Purchase</h6>
              <button className='btn btn-success' type='submit'>See Offer</button>
            </div>
            <div className="wallets-images slide-in">
              <img src="/assets/slider3.png" alt="Promotional" />
            </div>
          </div>
          <div className="wallets-slide">
            <div className="wallets-info slide-in">
              <h1>Recharge Data For Tomorrow.</h1>
              <h6>Save More With Our Sure Data Plan</h6>
              <button className='btn btn-success' type='submit'>See Offer</button>
            </div>
            <div className="wallets-image slide-in">
              <img src="/assets/slider4.png" alt="Promotional Offer" />
            </div>
          </div>
        </div>
      </section>
      <div className="airtimes-container mb-5">
        <header className="airtimes-header">
          <div className="airtimes-logo">
            <img src={selectedImage} alt="Airtime Logo" onClick={() => setShowDropdown(!showDropdown)} />
            {showDropdown && (
              <div className="dropdowns-menu">
                <img
                  src="src/assets/airtelogo2.png"
                  alt="net 1"
                  onClick={() => handleImageSelect('/assets/airtelogo2.png')}
                />
                <img
                  src="src/assets/glologo.png"
                  alt="net 2"
                  onClick={() => handleImageSelect('/assets/glologo.png')}
                />
                <img
                  src="src/assets/mtnlogo2.png"
                  alt="net 3"
                  onClick={() => handleImageSelect('/assets/mtnlogo2.png')}
                />
              </div>
            )}
          </div>
          <div className="regs-input d-block">
            <input type="number" name="number" placeholder="phone" />
          </div>
          <div className="users-image-container">
            <img
              className="images"
              src={selectedImage}
              alt="net image"
            />
          </div>
        </header>
        <div className="airtimes-banner">
          <p>
            Recommended Data Offers <strong>Get Exclusive Data Plans At Cheap Rates</strong>
          </p>
        </div>

        <section>
          <h3 className="mt-3 mb-3">Exclusive Airtime Bundles</h3>
          <div className="top-up-card">
            {[{ amount: 50, cashback: 1, airtime: '₦50' }, { amount: 100, cashback: 3, airtime: '₦100' }, { amount: 200, cashback: 5, airtime: '₦200' }, { amount: 500, cashback: 10, airtime: '₦500' }, { amount: 1000, cashback: 20, airtime: '₦1000' }, { amount: 2000, cashback: 40, airtime: '₦2000' }].map((bundle, index) => (
              <div className="cards" key={index} onClick={() => setAmount(bundle.amount)}>
                <p className="cashback">₦{bundle.cashback} Cashback</p>
                <h4>{bundle.airtime}</h4>
                <p>Pay ₦{bundle.amount}</p>
              </div>
            ))}
          </div>

          <div className="custom-amount">
            <input type="number" placeholder="₦50-500,000" value={amount} onChange={handleAmountChange} />
            <button onClick={() => setShowPopup(true)}>Pay</button>
          </div>
        </section>
        <section className="airtimes-service">
          <h2 className="mt-3 mb-1">Data Service</h2>
          <div className="services-item mt-3">
            <div className="services-icon">USSD</div>
            <div className="services-text">
              <h4>USSD enquiry</h4>
              <p>Check phone balance and more</p>
            </div>
          </div>
        </section>

        <section className="mores-events">
          <h3 className="mt-2">More Events</h3>
          <div className="event-item mt-2 mb-3">
            <h4>Win up to 100M bonus!</h4>
            <p>Get exciting cash prizes this Christmas!</p>
          </div>
          <div className="event-item">
            <h4>Register and Win Now!</h4>
            <p>Don't miss out on amazing offers!</p>
          </div>
        </section>
        {/* Main Payment Details Popup */}
        {showPopup && !isProcessing && (
          <div className="popup">
            <div className="popup-card">
              <div className="popup-content">
                <h3>Payment Details</h3>
                <p>Phone Number: {phoneNumber}</p>
                <p>
                  Network: <img src={selectedImage} alt="Selected Network" className="network-logo" />
                </p>
                <p>Amount: ₦{amount}</p>
                <button className="btn btn-primary" onClick={() => setIsProcessing(true)}>
                  Pay Now
                </button>
                <button className="btn btn-secondary" onClick={() => setShowPopup(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Payment Processing Popup */}
        {isProcessing && (
          <div className="popup">
            <div className="popup-card">
              <div className="popup-content">
                <h3>{processingComplete ? "Payment Complete!" : "Processing Payment"}</h3>

                {processingComplete ? (
                  <p>Your payment has been successfully processed.</p>
                ) : (
                  <div className="loading-container">
                    <div className="spinner"></div>
                    <p className="loading-text">Please wait<span className="dots"></span></p>
                  </div>
                )}

                {processingComplete ? (
                  <button className="btn btn-success" onClick={() => { setIsProcessing(false); setShowPopup(false); }}>
                    Done
                  </button>
                ) : (
                  <button className="btn btn-secondary" onClick={() => setIsProcessing(false)}>
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Data;
