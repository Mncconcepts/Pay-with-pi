import React from 'react';
import './SubMenu.css';
import Footer from './Footer';
import Hero from '../../Home/Hero';

const SubMenu = () => {
    return (
        <div>
            <Hero/>
            <div class="overlay">
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-item">
                            <i className="fas fa-wallet"></i>
                            <span>Deposit</span>
                        </div>
                        <div className="modal-item">
                            <i className="fas fa-exchange-alt"></i>
                            <span>Transfer</span>
                        </div>
                        <div className="modal-item">
                            <i className="fas fa-coins"></i>
                            <span>Withdraw</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SubMenu;
