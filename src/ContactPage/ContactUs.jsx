import React from 'react';
import './ContactUs.css';
import { Link } from 'react-router';
import Footer from '../Components/Navbar/Footer';
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
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
                <form data-aos="fade-up" className="contactt-form">
                    <h4 className='mb-4'>Send Us Messages</h4>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <input type="text" placeholder="Your Subject" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </section>

            {/* Consult Services Section */}
            <section className="consult-services">
                <div data-aos="fade-right" className='consult'>
                    <h2>Consult the services you need now!</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque volutpat ipsum dolor.</p>
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
                            <p>Pellentesque faucibus leo bibendum sapien ullamcorperdian congue.</p>
                            <button>Learn more</button>
                        </div>
                        <div data-aos="zoom-in" className="help-card">
                            <i className="fas fa-ticket-alt"></i>
                            <h4>Ticket support</h4>
                            <p>Pellentesque faucibus leo bibendum sapien ullamcorperdian congue.</p>
                            <Link to="/help">
                            <button>Learn more</button>
                            </Link>
                        </div>
                        <div data-aos="zoom-in" className="help-card">
                            <i className="fas fa-question-circle"></i>
                            <h4>FAQ</h4>
                            <p>Pellentesque faucibus leo bibendum sapien ullamcorperdian congue.</p>
                            <Link to="/faq">
                                <button>Learn more</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
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
