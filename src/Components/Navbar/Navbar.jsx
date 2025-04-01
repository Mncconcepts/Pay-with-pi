import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
// import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      return newMode;
    });
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const handleMenuClose = () => setMenuOpen(false);



  return (
    <div className={`navbar ${isDarkMode ? 'dark' : ''}`}>
      {/* <img src="" alt="Logo" className="logo" /> */}
      <Link to="/home" className="no-underline-link">
        <h4 className='text-white font-extrabold'> <strong>Paywithpi.</strong></h4>
      </Link>


      {/* Hamburger icon for small screens */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
      </div>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li onClick={handleMenuClose}>
          <Link to="/home"><i className="fas fa-home"></i>Home</Link>
        </li>
        <li onClick={handleMenuClose}>
          <Link to="/about"><i className="fas fa-info-circle"></i>About</Link>
        </li>
        <li onClick={handleMenuClose}>
          <Link to="/dashboard"><i className="fas fa-tachometer-alt"></i>Dashboard</Link>
        </li>
        <li onClick={handleMenuClose}>
          <Link to="/CardsAccount"><i className="fas fa-credit-card"></i>Cards & Accounts</Link>
        </li>
        <li onClick={handleMenuClose}>
          <Link to="/submenu"><i className="fas fa-plus-circle"></i>Add Funds</Link>
        </li>
        <li onClick={handleMenuClose}>
          <Link to="/submenu"><i className="fas fa-arrow-down"></i>Withdraw Funds</Link>
        </li>
        <li onClick={handleMenuClose}>
          <Link to="/profile"><i className="fas fa-cogs"></i>Settings</Link>
        </li>
        <li onClick={handleMenuClose}>
          <Link to="/help"><i className="fas fa-question-circle"></i>Help & Support</Link>
        </li>
        <li onClick={handleMenuClose}>
          <Link to="/contact"><i className="fas fa-gift"></i>Contact Us</Link>
        </li>
        <li className="btn btn-success" onClick={handleMenuClose}>
          <Link to="/signup"><i className="fas fa-sign-out-alt"></i>Join Us</Link>
        </li>
        <li onClick={handleMenuClose}>
          <Link to="/logout"><i className="fas fa-sign-out-alt"></i>Logout</Link>
        </li>
      </ul>
    </div>

  );
};

export default Navbar;
