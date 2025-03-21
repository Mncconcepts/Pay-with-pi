import React, { useState } from "react";
import './ContactUs.css';
import { Link } from 'react-router';
import Footer from '../Components/Navbar/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
            }, 4000);
        }, 3000);
    };
    const contactInfo = [
        {
            title: 'Phone Number',
            content: '+234 810 662 4834',
        },
        {
            title: 'Email Address',
            content: 'nwezesamuelsaviour@gmail.com',
        },
        {
            title: 'Address',
            content: 'PortHarcourt City Nigeria',
        },
    ];


    const offices = [
        {
            location: 'Nigeria',
            type: 'Head Office',
            address: 'PortHarcourt Nigeria',
            phone: '+234 810 662 4834',
            email: 'nwezesamuelsaviour@gmail.com',
        },
    ];

    const features = ['Fast delivery', 'Competitive Price', 'Wide Delivery Area'];

    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };
    return (
        <div className="contact-us-page">
            {/* Hero Section */}
            <section className="heroo-section">
                <div className="overlayy">
                    <div data-aos="fade-down" className='textt'>
                        <h1>Contact Us</h1>
                        <p>At PAYWITH-PI, we value open communication and are always here to help.
                            Whether you have questions about our services, need assistance with an ongoing
                            project, or simply want to explore how we can work together, our dedicated team
                            is ready to assist you. Reach out to us for personalized support, expert advice,
                            and innovative solutions tailored to your needs. Your satisfaction is our top priority,
                            and we strive to ensure every interaction is meaningful and productive. Let us know how
                            we can make your experience exceptional today</p>
                    </div>
                </div>
            </section>

            {/* Get In Touch Section */}
            <section className="get-in-touch">
                <div data-aos="zoom-in" className='det'>
                    <h2>Get In Touch</h2>
                </div>
                <h5 className='mt-3'>Need help? Send Us Messages Now, We Are Eager and Ready To Hear From You</h5>
                <div className="contact-info">
                    {contactInfo.map((info, index) => (
                        <div className="info-item" key={index}>
                            <h4>{info.title}</h4>
                            <p>{info.content}</p>
                            <hr />
                        </div>
                    ))}
                </div>
                <div data-aos="zoom-in" className="contactt-form">
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Full Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <input type="text" placeholder="Subject" required />
                        <textarea placeholder="Write Your Message" required></textarea>

                        <button className="send-message" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <FontAwesomeIcon icon={faSpinner} spin /> Submitting...
                                </>
                            ) : isSubmitted ? (
                                <>
                                    <FontAwesomeIcon icon={faCheck} /> Message Sent Successfully
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                </div>
            </section>

            {/* Consult Services Section */}
            <section className="consult-services">
                <div data-aos="fade-right" className='consult'>
                    <h2>Consult the services you need now!</h2>
                </div>
                <p>Reach out to us, consult any service you might need from us</p>
                <div data-aos="fade-up" className="features">
                    {features.map((feature, index) => (
                        <div key={index}>{feature}</div>
                    ))}
                </div>
                <div data-aos="fade-right" className=''>
                    <button>Contact Us</button>
                </div>
            </section>

            {/* help section */}
            <section>
<<<<<<< HEAD
    <div className="help-section">
        <div data-aos="fade-left" className=''>
            <h3>Need help?</h3>
            <p>
                We accept Pi as payment! Our team is always available, reach out to us anytime.
            </p>
        </div>
        <div className="help-cards">
            <div data-aos="zoom-in" className="help-card">
                <i className="fas fa-headset"></i>
                <h4>Customer support</h4>
                <p>
                    Need assistance? We accept Pi as payment and are here to help you with any inquiries.
                </p>
                <button>Learn more</button>
            </div>
            <div data-aos="zoom-in" className="help-card">
                <i className="fas fa-ticket-alt"></i>
                <h4>Ticket support</h4>
                <p>
                    Have a ticket issue? We accept Pi as payment and are ready to assist with any support.
                </p>
                <Link to="/help">
                <button>Learn more</button>
                </Link>
            </div>
            <div data-aos="zoom-in" className="help-card">
                <i className="fas fa-question-circle"></i>
                <h4>FAQ</h4>
                <p>
                    Got questions? Check our FAQ for more details about our services and Pi payment options.
                </p>
                <Link to="/faq">
                    <button>Learn more</button>
                </Link>
            </div>
        </div>
    </div>
</section>
=======
                <div className="help-section">
                    <div data-aos="fade-left" className=''>
                        <h3>Need help?</h3>
                        <p>
                            We Are Always Available, Reach Us Out
                        </p>
                    </div>
                    <div className="help-cards">
                        <div data-aos="zoom-in" className="help-card">
                            <i className="fas fa-headset"></i>
                            <h4>Customer support</h4>
                            <p>Get quick assistance from our support team anytime you need help.</p>
                            <button>Learn more</button>
                        </div>
                        <div data-aos="zoom-in" className="help-card">
                            <i className="fas fa-ticket-alt"></i>
                            <h4>Ticket support</h4>
                            <p>Submit a support ticket and we will resolve your issue promptly.</p>
                            <Link to="/help">
                                <button>Learn more</button>
                            </Link>
                        </div>
                        <div data-aos="zoom-in" className="help-card">
                            <i className="fas fa-question-circle"></i>
                            <h4>FAQ</h4>
                            <p>Find answers to common questions about our services.</p>
                            <Link to="/faq">
                                <button>Learn more</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
>>>>>>> cb660a2 (remake)
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

export default ContactUs;
