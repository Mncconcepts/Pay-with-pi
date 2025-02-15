import React, { useState, useEffect } from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [transactions, setTransactions] = useState([
    { type: 'Send Money', amount: -656.02 },
    { type: 'Cashout', amount: -120.02 },
    { type: 'Add Money', amount: 250.0 },
  ]);

  const [totalBalance, setTotalBalance] = useState(0);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    profileImage: '',
  });

  const navigate = useNavigate();

  // Calculate total balance
  useEffect(() => {
    const balance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    setTotalBalance(balance);
  }, [transactions]);

  // Load user data from localStorage
  useEffect(() => {
    const name = localStorage.getItem('username') || 'Guest';
    const email = localStorage.getItem('email') || 'guest@example.com';
    const profileImage = localStorage.getItem('profileImage') || '/src/assets/default-profile.png';

    setUserData({ name, profileImage });
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="apps-container">
      <header className="header">
        <div className="user-info">
          <img
            src={userData.profileImage}
            alt="User Avatar"
            className="avatar"
            onClick={() => handleNavigation('/profile')} 
            style={{ cursor: 'pointer' }}
          />
          <div className="user-name">
            <h2>{userData.name},</h2>
            <p>Welcome Back!</p>
            <small>{userData.email}</small>
          </div>
        </div>
        <div className="notification-icon">
          <i onClick={() => handleNavigation("/notification")} className="fas fa-bell"></i>
        </div>
      </header>

      <section className="walletsection">
        <div className="walletinfo">
          <h3>Your Wallet Balance</h3>
          <h1>${totalBalance.toFixed(2)}</h1>
        </div>
        <div className="walletactions">
          <button>
            <i className="fas fa-paper-plane"></i> Send
          </button>
          <button>
            <i className="fas fa-exchange-alt"></i> Receive
          </button>
        </div>
      </section>

      <section className="servicessection">
        <h3 className="mt-3 pb-4">Other Services</h3>
        <div className="services-grid">
          <button onClick={() => handleNavigation('/airtime')} className="clickable">
            <i className="fas fa-mobile-alt"></i> Airtime
          </button>
          <button onClick={() => handleNavigation('/data')} className="clickable">
            <i className="fas fa-wifi"></i> Data
          </button>
          <button onClick={() => handleNavigation('/submenu')} className="clickable">
            <i className="fas fa-piggy-bank"></i> Deposit
          </button>
          <button onClick={() => handleNavigation('')} className="clickable">
            <i className="fas fa-globe"></i> Internet
          </button>
          <button onClick={() => handleNavigation('')} className="clickable">
            <i className="fas fa-concierge-bell"></i> Services
          </button>
          <button onClick={() => handleNavigation('/payments')} className="clickable">
            <i className="fas fa-tv"></i> Subs
          </button>
          <button onClick={() => handleNavigation('/submenu')} className="clickable">
            <i className="fas fa-credit-card"></i> Payment
          </button>
          <button onClick={() => handleNavigation('/submenu')} className="clickable">
            <i className="fas fa-credit-card"></i> Payment
          </button>
          <button onClick={() => handleNavigation('')} className="clickable">
            <i className="fas fa-ellipsis-h"></i> Seemore
          </button>
        </div>
      </section>

      <section className="recent-activity-section">
        <h3>Recent Activity</h3>
        {transactions.map((transaction, index) => (
          <div className="activity-item" key={index}>
            <div>
              <p>{userData.name}</p>
              <small>{transaction.type}</small>
            </div>
            <p className={`amount ${transaction.amount < 0 ? 'negative' : 'positive'}`}>
              {transaction.amount < 0 ? '-' : '+'} ${Math.abs(transaction.amount).toFixed(2)}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Hero;
