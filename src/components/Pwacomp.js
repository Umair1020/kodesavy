import React from 'react'
import Header from './Header/Header'
import { Link } from 'react-router-dom';

import Footer from './Footer/Footer';
import Faqs from './Faq';
import Form from './Form';
import BusinessNewsletter from './Newsletter';

const Pwacomp = () => {
  const portfolioData = [
    {
      title: 'Graphic Designing Project',
      images: ["/pwa1.png", "/pwa2.png", "/pwa3.png", "/pwa4.png"],
      description: 'This is a social media project description.',
    },

  ];
  const renderImageCards = () => {
    return portfolioData.map((project, index) => (

      <div key={index} className="portfolio-item"><br />

        <div className="row image-gallery">

          {project.images.map((image, i) => (
            <div key={i} className="col-lg-6">

              <section class="portfoliowrp">
                {/* <div class="container-fluid" bis_skin_checked="1"> */}
                <div class="tab current ser-port tabs-Web-design wbport" bis_skin_checked="1">
                  <div class="row" bis_skin_checked="1">
                    <div class="col-md-12" bis_skin_checked="1">
                      <div class="tab ser-port tabs-custm-web wbport" bis_skin_checked="1">
                        <div class="row" bis_skin_checked="1">
                          <div class="col-md-12" bis_skin_checked="1">
                            <div class="port-box" bis_skin_checked="1">

                              <ul className='d-flex'>

                                <li class="hk_web_height lazy tabs-web-dsgn"
                                  data-src="/new1.webp" alt="t-1"
                                  data-was-processed="true"
                                  style={{ backgroundImage: `url(${image})` }}></li>


                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </div>
              </section>
            </div>
          ))}

        </div>
      </div>

    ));
  };
  return (
    <div>
      <div className='' style={{
        position: "relative",

        width: "100%",
        // height: "6681px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "18px",
        color: "#fff",
        fontFamily: "Montserrat",
      }}
      >
        <div className='container'>


          <div className="portfolio-list">
            {renderImageCards()}
          </div>
        </div>
        <div className="services section">
          <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

            <div class="row align-items-center">
              <div class="col-lg-5 mb-5 mb-lg-0 background-wrapper">
                <h2 class="fw-bold mb-4 servies-title text-dark">How Kodesavy Help you in PWA Development?</h2>
                <p class="mb-4 text-dark">At Kodesavy, we help businesses unlock the power of Progressive Web Apps (PWAs) to deliver exceptional user experiences. Our team works closely with you to understand your business needs and user requirements, ensuring we create custom PWAs that align with your goals. Whether you're looking to enhance customer engagement, improve app performance, or streamline your digital strategy, we provide tailored PWA solutions that deliver native app-like experiences directly through the web.
                <br /><br />
We specialize in building high-performance PWAs that are optimized for speed, reliability, and responsiveness. Our development process incorporates the latest web technologies to ensure your PWA works seamlessly across all devices, providing users with fast load times, offline access, and smooth interactions. By choosing Kodesavy for your PWA development, you eliminate the need for expensive app store listings and reduce maintenance costs while expanding your reach to both desktop and mobile users.
<br /><br />
Our commitment to quality extends beyond development. After launching your PWA, Kodesavy provides ongoing support and updates to ensure its performance remains top-notch. We focus on continuous optimization, ensuring your PWA evolves alongside your business needs. By leveraging the power of PWAs, Kodesavy helps you increase engagement, improve customer retention, and maximize ROI with a cost-effective, scalable solution tailored to your brand’s digital strategy.</p> <br />
                <Link to="/contact">
                  <button className="custom-cta">Get In Touch</button>
                </Link>
              </div>
              <div class="col-lg-7">
                <div class="row g-4">

                  <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                  <br />  <div class="service-items background" style={{ background: "#FB2156" }}>
                      <img src='/pwa (1).png' />
                      <h3 className='text-light'><br />E-Commerce PWA’s</h3>
                      <p className='text-light'>Kodesavy offers E-Commerce PWA Development, delivering fast, secure, and responsive shopping experiences that enhance customer engagement, boost conversions, and provide seamless functionality across all devices..</p>
                    </div>
                  </div>

                  <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                   <br /> <div class="service-items">
                      <img className='' src='/pwa (2).png' />
                      <h3 className='text-dark'><br />Social Media PWA’s</h3>
                      <p className='text-dark fs-6'>Kodesavy specializes in Social Media PWA Development, creating fast, engaging, and interactive platforms that enhance user experience, improve performance, and ensure seamless functionality across all devices.</p>

                    </div>

                  </div>
                <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400"><br /> 
                  <br /> <div class="service-items">
                      <img className='' src='/pwa (4).png' />
                      <h3 className='text-dark'> <br />Health Care
                      PWA’s</h3>
                      <p className='text-dark fs-6'>Kodesavy offers Health Care PWA Development, creating secure, responsive, and user-friendly platforms that enhance patient engagement, streamline communication, and provide seamless access to healthcare services across devices.</p>
                    </div>
                  </div>

                  <br /><div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500"><br />
                  
                    <br /> <div class="service-items">
                      <img className='' src='/pwa (3).png' />
                      <h3 className='text-dark'><br />E-Learning
                      PWA’s</h3>
                      <p className='text-dark fs-6'>Kodesavy provides E-Learning PWA Development, delivering fast, interactive, and accessible learning platforms that enhance user engagement, improve performance, and ensure seamless functionality across all devices.</p>
                    </div>
                  </div>
                </div>
              </div> <br /> <br />
              <div class="col-lg-7" ><br /> <br />
                <div class="row g-4">


                  <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                  <br />  <div class="service-items background" >
                      <img src='/pwa1 (2).png' />
                      <h3 className='text-dark'><br />Booking & Travel
                      PWA’s</h3>
                      <p className='text-dark'>Kodesavy offers Booking & Travel PWA Development, creating fast, responsive platforms that enhance user experience, streamline bookings, and provide seamless functionality across all devices for travelers.</p>
                    </div>
                  </div>

                  <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                    <br /><div class="service-items">
                      <img className='' src='/pwa1 (1).png' />
                      <h3 className='text-dark'><br />Business & SaaS
                      PWA’s</h3>
                      <p className='text-dark fs-6'>Kodesavy specializes in Business & SaaS PWA Development, creating scalable, secure platforms that enhance performance, streamline operations, and provide seamless, user-friendly functionality across all devices.</p>

                    </div>



                  </div>
                </div>
              </div>
              <div className='col-lg-5 bottom-glow-wrapper'> <br /><br /><br />
                <img src='/pwa6.png' className='w-100' />
              </div>
            </div>
          </div>

        </div>
      </div>
      <Faqs />
      <Form />
      <BusinessNewsletter />
      <Footer />
    </div>
  )
}

export default Pwacomp