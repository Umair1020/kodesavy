import React, { useState } from "react";
import "./footer.css";
import { FaPhoneAlt, FaClock, FaMapMarkerAlt, FaFacebookF, FaTwitter } from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Footer = () => {
    // const [selectedService, setSelectedService] = useState("App Development");
    const services = ["App Development", "Web Development", "PWA’s Development"];

    return (
        <footer className="footer-wrapper">
            <div className="container">


                <div className="footer-container  row">
                    <div className="footer-section footer-left col-lg-5">
                        <img src="/footerlogo.png" alt="Logo" className="footer-logo img-fluid" />
                        <p className="footer-desc">
                            Our mission is to make it easy for you to build the software you need. Everyone should be able to do it – doesn’t matter what your background, tech knowledge or budget is. Our goal is to serve individuals and teams that are starting a new venture or even existing businesses. We’re kind of like an incubator that houses an accelerator. We’re not easy to describe, but very easy to work with.
                        </p>
                        <p className="footer-map-label">Google Maps view,</p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.071027524803!2d-95.06648292376467!3d29.543425775179703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86409d7cbfb1c451%3A0x52350d361f38c0fa!2s2600%20South%20Shore%20Blvd%20%23300%2C%20League%20City%2C%20TX%2077573%2C%20USA!5e0!3m2!1sen!2s!4v1744372183283!5m2!1sen!2s"></iframe>
                    </div>

                    <div className="footer-section footer-middle col-lg-3 mt-4">
                        <h4 className="footer-heading">Quick Link’s</h4>
                        <ul className="footer-links-list">
                            <li className="footer-link mt-3">Home</li>
                            <li className="footer-link mt-3">About us</li>
                            <li className="footer-link mt-3">Blog</li>
                            <li className="footer-link mt-3">Services</li>
                            {services.map((service) => (
                                <li
                                    key={service}
                                    className={`footer-link footer-service-item `}
                                
                                >
                                    · {service}
                                </li>
                            ))}
                            <li className="footer-link mt-3">Technologies</li>
                        </ul>
                    </div>

                    <div className="footer-section footer-right col-lg-3">
                        <div className="footer-social-icons">
                            <FaFacebookF className="footer-icon" />
                            <FaTwitter className="footer-icon" />
                        </div>

                        <div className="footer-contact-item d-flex align-items-center">
                            <FaPhoneAlt className="footer-icon" /> <strong>CALL</strong><span className="ml-3">  +1 281-916-1898 </span>
                        </div>

                        <div className="footer-contact-item d-flex align-items-center justify-content-">
                            <MdEmail className="footer-icon" /> <strong>EMAIL</strong> <span className="ml-3">info@kodesavy.com</span>
                        </div>

                        <div className="footer-contact-item ">
                           <div className="d-flex"> <FaMapMarkerAlt className="footer-icon" /> <strong>Office</strong><br /></div>
                            <p>2600 South Shore Blvd #300,<br />
                            League City, TX77573, United States</p>
                            
                        </div>

                        <div className="footer-contact-item">
                            <FaClock className="footer-icon" /> <strong>Our Timings</strong>
                            <ul className="footer-timings-list">
                                <li>Monday – Friday: 9 am - 5:30 pm</li>
                                <li>Saturday: Closed</li>
                                <li>Sunday: Closed</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-bar">
                    <span className="footer-bottom-text">2023. All rights Reserved</span>
                    <span className="footer-bottom-links">
                        <a href="/" className="footer-bottom-link">Terms & Conditions</a> |
                        <a href="/" className="footer-bottom-link">Privacy</a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
