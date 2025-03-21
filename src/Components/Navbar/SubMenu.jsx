import React, { useState } from 'react';
import './SubMenu.css';
import Footer from './Footer';
import Hero from '../../Home/Hero';
import { FaCopy } from 'react-icons/fa';

const SubMenu = () => {
    const [showDeposit, setShowDeposit] = useState(false);
    const [showTransfer, setShowTransfer] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [recipient, setRecipient] = useState('');
    const [network, setNetwork] = useState('');
    const [amount, setAmount] = useState('');


    const handleTransfer = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                setShowTransfer(false);
            }, 2000);
        }, 20000);
    };

    const address = "pi_1examplewalletaddress";

    const handleCopy = () => {
        navigator.clipboard.writeText(address);
        alert("Address copied!");
    };

    return (
        <div className={showDeposit || showTransfer ? "blur-background" : ""}>
            <Hero />
            <div className="overlay">
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-item" onClick={() => setShowDeposit(true)}>
                            <i className="fas fa-wallet"></i>
                            <span>Deposit</span>
                        </div>
                        <div className="modal-item" onClick={() => setShowTransfer(true)}>
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

            {/* Deposit Popup */}
            {showDeposit && (
                <div className="poopup">
                    <div className="poopup-card">
                        <h3>Receive</h3>
                        <div className="input-copy">
                            <input type="text" readOnly value={address} />
                            <FaCopy onClick={handleCopy} style={{ cursor: "pointer" }} />
                        </div>
                        <div className="poopup-buttons">
                            <button onClick={handleCopy}>Copy</button>
                            <button onClick={() => setShowDeposit(false)}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Transfer Popup */}
            {showTransfer && (
                <div className="poopup">
                    <div className="poopup-card">
                        {loading ? (
                            <div className="loader-container">
                                <div className="wave-loader">
                                    <span></span><span></span><span></span><span></span>
                                </div>
                                <p>Processing transfer...</p>
                            </div>
                        ) : success ? (
                            <div className="successs-message">
                                <div className="checkmark">
                                    <div className="checkmarkk-circle"></div>
                                    <div className="checkmarkk-stem"></div>
                                    <div className="checkmarkk-kick"></div>
                                </div>
                                <p>Transfer Successful!</p>
                            </div>
                        ) : (
                            <>
                                <h3>Transfer</h3>
                                <input
                                    type="text"
                                    placeholder="Recipient Address"
                                    value={recipient}
                                    onChange={(e) => setRecipient(e.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Network"
                                    value={network}
                                    onChange={(e) => setNetwork(e.target.value)}
                                    required
                                />
                                <input
                                    type="number"
                                    placeholder="Amount"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                />
                                <p>Transaction fee: 1 PI</p>
                                <div className="poopup-buttons">
                                    <button
                                        type='submit'
                                        onClick={handleTransfer}
                                        disabled={!recipient || !network || !amount}
                                    >
                                        Send
                                    </button>
                                    <button className='pop-ups' type='button' onClick={() => setShowTransfer(false)}>Cancel</button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default SubMenu;
