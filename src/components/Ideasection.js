import React from 'react';
import './IdeasSection.css';
import Scroller from './Scroller';


const IdeasSection = () => {
  return (
    <div className="ideas-section">
      <div className="intro-section">
        <h2>Turning Ideas into <span>Success</span></h2>
        <div class="col-lg-12 about-images aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
          <div class="row gy-4">
            <div class="col-lg-4">
              <img src="/meet (2).png" class="img-fluid" alt="" />
            </div>
            <div class="col-lg-4">
              <h3 className='text-dark'>Web Development</h3>
              <p className='text-dark'><strong>79K+</strong><br />We've completed 79,000+ websites, ensuring seamless user experience and tailored, responsive designs.</p>
            </div>

            
            <div class="col-lg-4">
              <div class="row gy-4">
                <div class="col-lg-6">
                  <img src="/meet (1).png" class="img-fluid" alt="" />
                </div>
                {/* <div class="col-lg-12">
                  <img src="assets/img/about-company-3.jpg" class="img-fluid" alt="" />
                </div> */}
              </div>
            </div>
            <div class="col-lg-4">
              <div class="row gy-4">
              <div class="col-lg-4">
              <h3 className='text-dark'>Web Development</h3>
              <p className='text-dark'><strong>79K+</strong><br />We've completed 79,000+ websites, ensuring seamless user experience and tailored, responsive designs.</p>
            </div>
                {/* <div class="col-lg-12">
                  <img src="assets/img/about-company-3.jpg" class="img-fluid" alt="" />
                </div> */}
              </div>
            </div>
          </div>

        </div>
        {/* <div className="top-grid">
        <div className="grid-item image-box">
          <img src="/meet (2).png" alt="Team Meeting" />
        </div>
        <div className="grid-item content-box">
          <h3>Web Development</h3>
          <p><strong>79K+</strong><br />We've completed 79,000+ websites, ensuring seamless user experience and tailored, responsive designs.</p>
        </div>
        <div className="grid-item content-box">
          <h3>App Development</h3>
          <p><strong>1K+</strong><br />Over 1,000+ apps delivered, helping businesses grow with customized mobile solutions and innovations.</p>
        </div>
        <div className="grid-item content-box">
          <h3>Progressive Web Apps (PWAs)</h3>
          <p><strong>5K+</strong><br />Built 5,000+ PWAs, providing efficient, fast, and reliable solutions for enhanced user engagement.</p>
        </div>
        <div className="grid-item image-box">
          <img src="/meet (1).png" alt="Tech Team" />
        </div>
      </div> */}

        <button className="contact-btn">Get In Touch</button>
      </div> <br />
      <h2 className='text-dark text-center fw-bold'>Our Latest <span className='project'>Projects</span> </h2>
      <Scroller />
    </div>
  );
};

export default IdeasSection;
