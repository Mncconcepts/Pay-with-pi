import React from "react";
import "./AboutUs.css";
import Footer from "../Components/Navbar/Footer";

const AboutUs = () => {
    return (
        <div className="about-section">
            {/* Hero Section */}
            <div className="hero-section">
                <div data-aos="fade-left" className="hero-text">
                    <h1 className="pt-5 ">
                        About Us
                    </h1>
                    <p>
                        Paywith-pi is a revolutionary online platform
                        and mobile app that enables users to pay for various utility blls and subscription using pi currency.
                        Our mission is to bridge the gap between crypto currency holders and everyday expenses, providing a seamless and secured payment experience
                    </p>
                </div>
                <div className="hero-image">
                    <img
                        src="/assets/pi03.png"
                        alt="Hero"
                    />
                </div>
            </div>

            {/* Features Section */}
            <div className="features-section">
                <div data-aos="fade-right" className="features-text">
                    <h2>Market Analysis</h2>
                    <ul className="">
                        <li>
                            <span></span> Target Market: Pi Network users estimated 10 million users.
                        </li>
                        <li>
                            <span></span> Growth: Expand to other cryptocurrency communities and mainstream users.
                        </li>
                        <li>
                            <span></span> Competitive Advantage: Exclusive forces on pi coin and utility bill payment.
                        </li>
                    </ul>
                    <div data-aos="fade-right" className="features-text">
                        <h2 className="mt-5">Services Offered</h2>
                        <ul className="">
                            <li>
                                <span></span> Utility Bill Payment: Electricty, Water, Gas, Internet
                            </li>
                            <li>
                                <span></span> Subscription Services: Netflix, Dstv, Gotv, Music streaming platform.
                            </li>
                            <li>
                                <span></span> Telecommunication services: Airtime recharge, Data bundles.
                            </li>
                            <li>
                                <span></span> Other Services: Insurnce premiums, Loan repayments.
                            </li>
                        </ul>
                    </div>
                    <div data-aos="fade-right" className="features-text">
                        <h2 className="mt-5">Revenue Model</h2>
                        <ul className="">
                            <li>
                                <span></span> Transaction fees 2-5% per transaction.
                            </li>
                            <li>
                                <span></span> Partnership commission with service providers.
                            </li>
                            <li>
                                <span></span> Advertising targeted, non-intrustive.
                            </li>
                        </ul>
                    </div>
                </div>
                <div data-aos="fade-left" className="bg-light features-image mb-5">
                    <img
                        src="/assets/display1.png"
                        alt="Feature"
                    />
                    <div className="overlay-box">
                        <p>Creative Digital Currrency</p>
                        <div>
                            <span>Team Collaboration Active</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Features Section */}
            <div className="additional-features">
                <div data-aos="fade-right" className="bg-light features-image">
                    <img
                        src="/assets/display2.png"
                        alt="Business"
                    />
                    <div className="overlay-box pt-10">
                        <p>Overview</p>
                        <p>Revenue Growth: $25.3K</p>
                    </div>
                </div>
                <div data-aos="zoom-in" className="features-text">
                    <h2>Key Features</h2>
                    <ul className="">
                        <li>
                            <span></span> User friendly interface
                        </li>
                        <li>
                            <span></span> Secure Payment Gateway
                        </li>
                        <li>
                            <span></span> Real time transaction update
                        </li>
                        <li>
                            <span></span> Bill tracking and reminders
                        </li>
                        <li>
                            <span></span>Multi currency support pi coin and fiat
                        </li>
                        <li>
                            <span></span>Integration with pi network API
                        </li>
                    </ul>
                </div>
                <div data-aos="zoom-in" className="features-text">
                    <h2>Market Strategy</h2>
                    <ul className="">
                        <li>
                            <span></span> Sicial media campaigns, twitter, facebook, instagram.
                        </li>
                        <li>
                            <span></span> Influencer partnership with pi network community
                        </li>
                        <li>
                            <span></span> Content creation blog post, video, tutorials
                        </li>
                        <li>
                            <span></span> Referral program
                        </li>
                        <li>
                            <span></span>Collaborations with pi Network Ambassordors
                        </li>
                        <li>
                            <span></span>Integration with pi network API
                        </li>
                    </ul>
                </div>
            </div>

            {/* Partnership Section */}
            <div className="partnership-section">
                <div className="sliding-text">
                    <h3>Our Partners: | PI NETWORK | NETFLIX, DSTV, GOTV | UTILITY COMPANIES</h3>
                </div>
            </div>
            <div className="features-text">
                <h2 className="mt-5">Management Team</h2>
                <ul className="mb-5">
                    <li>
                        <span></span> NWEZE SAMUEL SAVIOUR: CEO, Business Development
                    </li>
                    <li>
                        <span></span> ...... CTO, Technical lead
                    </li>
                    <li>
                        <span></span> ...... Marketing and Partnership Manager
                    </li>
                </ul>
            </div>
             {/* Footer Section */}
             <footer className="footerr-section">
                <div className="footerr-content">
                    <div className="logo">PAYWITH-PI</div>
                    <p>revolutionary online platform and mobile
                        app that enables users to pay for various utility blls and subscription using pi currency,
                        Our mission is to bridge the gap between crypto currency holders and everyday expenses,
                        providing a seamless and secured payment experience</p>
                </div>
                <div className="footerr-links">
                    <div>
                        <h4>Our Services</h4>
                        <ul>
                            <li>Utility Bill Payment</li>
                            <li>Subscription Services</li>
                            <li>Telecommunication services</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Our Support</h4>
                        <ul>
                            <li onClick={() => handleNavigation("/about")}>Services</li>
                            <li onClick={() => handleNavigation("/faq")}>FAQs</li>
                            <li>Contact</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Contact Info</h4>
                        <ul>
                            <li>Phone:+234 810 662 4834</li>
                            <li>Email: nwezesamuelsaviour@gmail.com</li>
                            <li>PortHarcourt City Nigeria</li>
                        </ul>
                    </div>
                </div>
            </footer>
            <Footer />
        </div>

    );
};

export default AboutUs;
