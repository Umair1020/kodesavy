import React from 'react'
import Header from './Header/Header'
import { Link } from 'react-router-dom';

import Footer from './Footer/Footer';
import Faqs from './Faq';
import Form from './Form';
import BusinessNewsletter from './Newsletter';

const Ui = () => {
  const portfolioData = [
    {
      title: 'Graphic Designing Project',
      images: ["/1.png", "/app2.png", "/3.png", "/app4.png"],
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
                <h2 class="fw-bold mb-4 servies-title text-dark">How Kodesavy Help you in App Development?</h2>
                <p class="mb-4 text-dark">At Kodesavy, we understand that every business has unique requirements when it comes to app development. Our team of experienced developers collaborates closely with you to understand your vision, business goals, and target audience. We provide custom mobile app solutions that align with your specific needs, ensuring the app enhances your business’s performance, efficiency, and customer engagement. Whether you need a simple app or a complex enterprise solution, we are equipped to deliver outstanding results on time and within budget.
                  <br /><br />
                  Our approach to app development is built on innovation and quality. We use the latest technologies, frameworks, and tools to ensure that your app is not only functional but also future-proof and scalable. From the initial design phase to development, testing, and deployment, we follow industry best practices and maintain a focus on user experience. Our apps are designed to be intuitive, engaging, and easy to navigate, ensuring a seamless experience for your users.
                  <br /><br />
                  Post-launch, we offer continuous support and updates to ensure your app remains relevant and fully optimized. Whether it’s bug fixes, performance improvements, or adding new features, Kodesavy is committed to providing long-term support. We work with you throughout the app’s lifecycle to ensure it evolves as your business grows. With Kodesavy, you’re not just getting an app—you’re investing in a reliable partner committed to your success.</p> <br />
                <Link to="/contact">
                  <button className="custom-cta">Get In Touch</button>
                </Link>
              </div>
              <div class="col-lg-7">
                <div class="row g-4">

                  <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div class="service-items background" style={{ background: "#FB2156" }}>
                      <img src='/app (3).png' />
                      <h3 className='text-light'><br />Game Development</h3>
                      <p className='text-light'>Kodesavy offers E-Commerce PWA Development, delivering fast, secure, and responsive shopping experiences that enhance customer engagement, boost conversions, and provide seamless functionality across all devices.</p>
                    </div>
                  </div>

                  <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                   <br /> <div class="service-items">
                      <img className='' src='/app (4).png' />
                      <h3 className='text-dark'><br />Enterprise & Custom App</h3>
                      <p className='text-dark fs-6'>Kodesavy offers tailored Enterprise and Custom App Development services, delivering secure, scalable solutions that enhance efficiency, streamline operations, and provide seamless user experiences to meet your unique business needs.</p>

                    </div>

                  </div>
                <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400"><br /> 
                  <br /> <div class="service-items">
                      <img className='' src='/app (1).png' />
                      <h3 className='text-dark'> <br />Fintech & Block Chain Apps</h3>
                      <p className='text-dark fs-6'>Kodesavy specializes in Fintech and Blockchain App Development, creating secure, scalable solutions that enhance financial transactions, improve transparency, and drive innovation in the fintech and blockchain sectors for your business.</p>
                    </div>
                  </div>

                  <br /><div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500"><br />
                  
                    <br /> <div class="service-items">
                      <img className='' src='/app (2).png' />
                      <h3 className='text-dark'><br />AI &
                        IoT Apps</h3>
                      <p className='text-dark fs-6'>Kodesavy provides AI and IoT App Development services, creating intelligent, connected solutions that enhance automation, improve decision-making, and drive innovation for smarter, more efficient business operations.</p>
                    </div>
                  </div>
                </div>
              </div> <br /> <br />
              <div class="col-lg-7" ><br /> <br />
                <div class="row g-4">


                  <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div class="service-items background" style={{ background: "#FB2156" }}>
                      <img src='/app (3).png' />
                      <h3 className='text-light'><br />Game Development</h3>
                      <p className='text-light'>Kodesavy offers E-Commerce PWA Development, delivering fast, secure, and responsive shopping experiences that enhance customer engagement, boost conversions, and provide seamless functionality across all devices.</p>
                    </div>
                  </div>

                  <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                    <br /><div class="service-items">
                      <img className='' src='/app (4).png' />
                      <h3 className='text-dark'><br />Enterprise & Custom App</h3>
                      <p className='text-dark fs-6'>Kodesavy offers tailored Enterprise and Custom App Development services, delivering secure, scalable solutions that enhance efficiency, streamline operations, and provide seamless user experiences to meet your unique business needs.</p>

                    </div>



                  </div>
                </div>
              </div>
              <div className='col-lg-5 bottom-glow-wrapper'> <br /><br /><br />
                <img src='/app.png' className='w-100' />
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

export default Ui