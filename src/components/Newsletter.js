import React from 'react';
import './BusinessNewsletter.css';

const BusinessNewsletter = () => {
  return (
    <>
      {/* Top Section */}
      <section className="top-section text-white text-center">
        <div className="container py-5">
          <h2 className="fw-bold">READY TO GROW <span className="text-white">YOUR BUSINESS</span></h2>
          <p className="mt-3 mb-4">
            Contact us to partner with a results-driven agency specializing in App, Web, and PWAs.
          </p>
          <button className="custom-cta bg-light text-dark">Get In Touch</button>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="newsletter-section text-center">
        <div className="container py-5">
          <h3 className="fw-bold mb-4">Subscribe To Our Daily Newsletter</h3>
          <div className="newsletter-box mx-auto">
            <p className="mb-2">Sign Up to Receive Updates and More</p>
            <div className="d-flex align-items-center">
              <input
                type="email"
                className="form-control border-0 bg-transparent text-white"
                placeholder="youremail@gmail.com"
              />
              <span className="arrow-btn ms-2">{'>'}</span>
            </div>
          </div>
        </div>
      </section> */} <br />
     <div className="newsletter-container">
      <div className="newsletter-content">
        <h2>Sign Up to Receive Updates and More</h2>
        <div className="newsletter-input-wrapper">
          <input
            type="email"
            placeholder="youremail@gmail.com"
            className="newsletter-input"
          />
          <span className="arrow-icon">➤</span>
        </div>
      </div>
    </div>

    </>
  );
};

export default BusinessNewsletter;
