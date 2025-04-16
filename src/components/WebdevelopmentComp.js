import React from 'react'
import Header from './Header/Header'
import { Link } from 'react-router-dom';

import Footer from './Footer/Footer';
import Faqs from './Faq';
import Form from './Form';
import BusinessNewsletter from './Newsletter';

const Webcomp = () => {
  const portfolioData = [
    {

      images: ["/web1.jpg", "/web2.jpg", "/web3.jpg", "/web5.jpg"],
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
                <h2 class="fw-bold mb-4 servies-title text-dark">How Kodesavy Help you in Web Development?</h2>
                <p class="mb-4 text-dark">At Kodesavy, we focus on providing tailored Website Development services that meet the specific needs of your business. Our experienced team works closely with you to understand your objectives and create a website that aligns with your brand identity. We ensure that the design, features, and functionality of the website match your vision while providing an intuitive and engaging experience for your users. From the initial planning phase to the final launch, we are committed to delivering a solution that meets your business goals and enhances your online presence.
                  <br />
                  <br />

                  We use the latest web development technologies and frameworks to build responsive, user-friendly, and scalable websites. Kodesavy ensures that your website is optimized for performance, ensuring fast load times, smooth navigation, and accessibility across all devices. We create secure websites with robust back-end systems to guarantee reliability and seamless functionality. Whether you're looking for a basic informational site or a complex e-commerce platform, Kodesavy has the expertise to bring your ideas to life.
                  <br /><br />

                  Beyond the launch, Kodesavy provides continuous support and maintenance to keep your website updated, secure, and performing at its best. We help you adapt to changing business needs, implement new features, and stay ahead of industry trends. With Kodesavy, you’re not just getting a website; you’re gaining a reliable partner dedicated to the long-term success and growth of your online presence.
                  o3-mini</p> <br />
                <Link to="/contact">
                  <button className="custom-cta">Get In Touch</button>
                </Link>
              </div>
              <div class="col-lg-7">
                <div class="row g-4">

                  <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <br />   <div class="service-items mt-2" style={{ background: "#FB2156" }}>
                      <img src='/app (3).png' />
                      <h3 className='text-light'><br />Game2 Development</h3>
                      <p className='text-light fs-6'>Kodesavy offers E-Commerce PWA Development, delivering fast, secure, and responsive shopping experiences that enhance customer engagement, boost conversions, and provide seamless functionality across all devices.</p>
                    </div>
                  </div>

                  <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                    <br /> <div class="service-items mt-2">
                      <img className='' src='/app (4).png' />
                      <h3 className='text-dark'><br />Enterprise & Custom App</h3>
                      <p className='text-dark fs-6'>Kodesavy offers tailored Enterprise and Custom App Development services, delivering secure, scalable solutions that enhance efficiency, streamline operations, and provide seamless user experiences to meet your unique business needs.</p>

                    </div>

                  </div>
                  <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400"><br />
                    <br /> <div class="service-items mt-2">
                      <img className='' src='/app (1).png' />
                      <h3 className='text-dark'> <br />Fintech & Block Chain Apps</h3>
                      <p className='text-dark fs-6'>Kodesavy specializes in Fintech and Blockchain App Development, creating secure, scalable solutions that enhance financial transactions, improve transparency, and drive innovation in the fintech and blockchain sectors for your business.</p>
                    </div>
                  </div>

                  <br /><div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500"><br />

                    <br /> <div class="service-items mt-2">
                      <img className='' src='/app (2).png' />
                      <h3 className='text-dark'><br />AI &
                        IoT Apps</h3>
                      <p className='text-dark fs-6'>Kodesavy provides AI and IoT App Development services, creating intelligent, connected solutions that enhance automation, improve decision-making, and drive innovation for smarter, more efficient business operations.</p>
                    </div>
                  </div>
                </div>
              </div> <br /> <br />

              <div className='col-lg-12 bottom-glow-wrapper'> <br /><br /><br />
                <img src='/web6.png' className='w-100' />
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

export default Webcomp