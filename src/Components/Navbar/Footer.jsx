import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <Link to="/home" className="footer-button">
                <i className="fas fa-home"></i>
                <span>Home</span>
            </Link>
            <Link to="/submenu" className="footer-button">
                <i className="fas fa-qrcode"></i>
                <span>Sub Menu</span>
            </Link>
            <Link to="/profile" className="footer-button">
                <i className="fas fa-user"></i>
                <span>Profile</span>
            </Link>
        </footer>
    );
};

export default Footer;
