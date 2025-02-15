import React from "react";
import { Link } from "react-router-dom";
import "./TermsConditions.css";

const TermsConditions = () => {
    return (
        <div className="terms-section">
            <div data-aos="fade-up" className="terms-card">
                <h1>Do You Agree to Our Terms and Conditions?</h1>
                <div className="terms-content">
                    <p>
                        Welcome to <strong>PAYWITH-PI</strong> a platform designed to facilitate transactions using the Pi cryptocurrency. By using our services, you agree to these terms and conditions in full. Please read them carefully before proceeding.
                    </p>
                    <ol>
                        <li>
                            <strong>Introduction:</strong>
                            By accessing PAYWITH-PI, you agree to comply with these terms and conditions. If you do not agree with any part, you must discontinue using our services.
                        </li>
                        <li>
                            <strong>Eligibility:</strong>
                            To use PAYWITH-PI, you must be at least 18 years old, possess a valid Pi wallet, and comply with applicable laws in your jurisdiction. Providing false information during registration may result in account termination.
                        </li>
                        <li>
                            <strong>Services Provided:</strong>
                            PAYWITH-PI allows users to send, receive, and store Pi cryptocurrency, as well as make payments for goods and services. While we strive for uninterrupted service, occasional disruptions may occur.
                        </li>
                        <li>
                            <strong>Account Security:</strong>
                            You are responsible for safeguarding your account credentials, including passwords and wallet keys. Any activity under your account will be treated as authorized by you. Notify us immediately of any security breaches.
                        </li>
                        <li>
                            <strong>Fees and Transactions:</strong>
                            Transactions may incur fees, which will be displayed before confirmation. Transactions are irreversible once confirmed. Ensure the accuracy of wallet addresses, as we cannot recover funds sent to an incorrect address.
                        </li>
                        <li>
                            <strong>Prohibited Activities:</strong>
                            You agree not to use PAYWITH-PI for unlawful activities, fraud, money laundering, or disruption of services. Violations may result in account suspension or legal action.
                        </li>
                        <li>
                            <strong>Privacy and Data Collection:</strong>
                            We collect and use your data to provide and improve our services, as outlined in our Privacy Policy. Your data will not be sold to third parties and will only be shared with authorities if required by law.
                        </li>
                        <li>
                            <strong>Limitation of Liability:</strong>
                            PAYWITH-PI is provided "as-is" without guarantees of reliability or performance. We are not liable for user errors, service interruptions, or unauthorized account access due to negligence.
                        </li>
                        <li>
                            <strong>Dispute Resolution:</strong>
                            In case of disputes, contact our support team. Unresolved disputes will be subject to arbitration under the rules of Arbitration Authority, with decisions being final and binding.
                        </li>
                        <li>
                            <strong>Modifications to Terms:</strong>
                            We may update these terms at any time. Continued use of our app after changes signifies acceptance of the new terms. Notifications of changes will be communicated through the app or via email.
                        </li>
                        <li>
                            <strong>Termination of Service:</strong>
                            We reserve the right to suspend or terminate accounts for violations of these terms. You may also request account termination. Termination does not absolve you of any outstanding obligations.
                        </li>
                        <li>
                            <strong>Governing Law:</strong>
                            These terms are governed by the laws of Jurisdiction, and disputes will be resolved in courts within Jurisdiction.
                        </li>
                        <li>
                            <strong>Contact Information:</strong>
                            For inquiries, reach us at:
                            <ul>
                                <li>Email: nwezesamuelsaviour@gmail.com</li>
                                <li>Phone: +234 810 662 4834</li>
                                <li>Address: PortHarcourt City Nigeria</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Acknowledgment:</strong>
                            By using PAYWITH-PI, you confirm that you have read, understood, and agreed to these terms. If you do not agree, discontinue use immediately.
                        </li>
                    </ol>
                </div>
                <span>
                    By clicking on the yes button below, you agree to our terms and conditions.
                </span>
                <div className="terms-buttons">
                    <button type="button" className="no-button">
                        No
                    </button>
                    <Link to="/signup">
                        <button type="button" className="yes-button">
                            Yes
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;
