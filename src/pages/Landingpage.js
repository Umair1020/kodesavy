import Header from "../components/Header/Header";
import "../App.css"
import { useMediaQuery } from "react-responsive";
import { useState, useRef, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import Slider from 'react-slick';
import Footer from "../components/Footer/Footer";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
import Counter from "../components/Count";
import IdeasSection from "../components/Ideasection";
import Testimonials from "../components/Testmonial";
import Faqs from "../components/Faq";
import Scroller from "../components/Scroller";
import Form from "../components/Form";
import BusinessNewsletter from "../components/Newsletter";

const Landingpage = ({ name }) => {
  const [filter, setFilter] = useState('web-design');

  const handleContactClick = () => {
    setShowPopup(true);
  };
  const portfolioData = [
    {
      category: 'social-media',
      title: 'Social Media Project',
      images: ["/social.jpg", "/social2.png",],

    },
    {
      category: 'graphics-desining',
      title: 'Graphic Designing Project ',
      images: ["/2.webp", "/1.webp"],

    },
    {
      category: 'web-design',
      title: 'Web Design Project ',
      images: ['/new3.webp', "/new4.webp"],


    },
    {
      category: 'app-development',
      title: 'App Development Project ',
      images: ['/app1.jpg', "/app2.png"],

    },
    // Add more portfolio items as needed
  ];

  const buttonStyle = {
    borderRadius: '27.208px',
    background: 'rgba(145, 0, 157, 0.4)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    margin: '5px',
    padding: "9.9px 41.8px"
  };

  const inactiveButtonStyle = {
    borderRadius: '27.208px',
    background: 'linear-gradient(0deg, rgba(92, 92, 92, 0.50) 0%, rgba(92, 92, 92, 0.50) 100%)',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    margin: '5px',
    padding: "9.9px 41.8px"
  };

  const technologyLogos = [
    'image21.svg',
    'image22.svg',
    'image30.svg',
    'image24.svg',
    'image25.svg',
    'image26.svg',
    'image27.svg',
    'image28.svg',
    'image29.svg',
    'image30.svg',
    // Add more logo paths here
  ];
  const filteredPortfolio = portfolioData.filter(item => item.category === filter);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   const hasPopupDisplayed = localStorage.getItem('hasPopupDisplayed');
  //   if (!hasPopupDisplayed) {
  //     const timer = setTimeout(() => {
  //       setShowPopup(true);
  //       localStorage.setItem('hasPopupDisplayed', 'true');
  //     }, 10000);

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }
  // }, []);
  console.log(name)
  useEffect(() => {
    const popupTimeout = setTimeout(() => {
      localStorage.removeItem('hasPopupDisplayed');
    }, 30000);

    return () => {
      clearTimeout(popupTimeout);
    };
  }, []);

  const containerRef = useRef(null);

  const handleChevronClick = (e) => {
    if (containerRef.current) {
      // Scroll the container by the width of a single "chevron" element
      containerRef.current.scrollBy({
        left: e.target.offsetWidth,
        behavior: 'smooth', // You can change this to 'auto' for immediate scroll
      });
    }
  };


  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

  const serviceData = [
    {
      icon: <img src="/ser1.png" alt="Web Development" />,
      title: "Web Development",
      description: "Crafting high-impact websites that blend innovation and functionality. From sleek designs to seamless user experiences, we bring your digital vision to life."
    },
    {
      icon: <img src="/ser2.png" alt="Content Writing" />,
      title: "Content Writing",
      description: "Expert writers crafting captivating narratives and engaging copy. From compelling web content to SEO-optimized articles, we boost brand visibility and story impact"
    },
    {
      icon: <img src="/ser3.png" alt="Ui/Ux Design" />,
      title: "Ui/Ux Design",
      description: "Crafting captivating brand visuals that inspire and elevate. From logos to marketing materials, we bring your brand to life with compelling designs."
    },
    {
      icon: <img src="/ser4.png" alt="Seo" />,
      title: "Seo",
      description: "Boosting online presence through tailored SEO strategies. From optimization to content, we elevate your visibility for digital success."
    },
    // Add two more service items for the remaining services
  ];
  return (
      <div className="container1"
        style={{
          position: "relative",
          backgroundColor: "#fff",
          color: "#000",
          width: "100%",
          // height: "6681px",
          overflow: "hidden",
          textAlign: "left",
          fontSize: "18px",
          color: "#fff",
          fontFamily: "Montserrat",
        }}
      >

        {/* <img
          style={{
            position: "absolute",
            top: "0px",
            left: "574px",
            width: "100%",
            height: "817px",
          }}
          alt=""
          src="/ellipse-2.svg"
        /> */}


        <Header />
        <br />
        <div className='row'>
          {/* <div
          style={{
            borderRadius: "50%",
            backgroundColor: "rgba(255, 201, 62, 0.8)",
            filter: "blur(435px)",
            width: "331px",
          }}
        /> */}
          {/* <img className="vector" src='/vector.svg' /> */}

          {/* <img className="mx-4" src='/vector.svg' /> */}
          <div className='container'>
            <div className='row digitalagency digitalagency1'>

              <div className='col-lg-12 d-flex align-items-center justify-content-center'>
                <img src="/empower.png" className="" style={{ width: "100px" }} />
                <h1 className="text-dark"
                  style={{

                    textAlign: "center",
                    fontWeight: 700
                  }}
                >
                  Digital
                </h1>

                {/* <img className="btn6" src='/worldclass.svg' /> */}
              </div>
              <div className='col-lg-6 '>
                <h1 className='agencyh1'
                  style={{

                    fontWeight: 700
                  }}
                >
                  Agency
                </h1>
                <p className="text-dark">Kodesavy delivers innovative software, AI solutions, and digital transformation to empower businesses with smart technology.</p>
                <button className='probtn custom-cta' >
                  Our Projects
                </button>
              </div>
              <div className='col-lg-6'>
                <img className='img4 ' src='/Image.png' />
              </div>
            </div>
          </div>

          <div className="col-lg-12 background-wrapper">
            <img className="lady" src="Group.png" alt="Lady" style={{ position: 'relative', zIndex: 2 }} />
          </div>


        </div>
        <div className="container bottom-glow-wrapper">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6 col-md-5 col-sm-12">
              <h1 className="sech1 text-dark">
                Crafting High-Impact Apps & Websites for <br /> Digital Success
      </h1>
              <br />
              <p className="text-dark">
                We're a dynamic digital agency fueling creativity to craft immersive brand experiences. With a blend of innovation and expertise, we sculpt compelling narratives, design captivating visuals, and engineer digital strategies that elevate brands to new heights. At our core, we're storytellers, breathing life into brands through the power of digital
              </p>
            <button
              className="button custom-cta"
              
            >
        Get In Touch
            </button>
          </div>
      <div className="col-lg-6 col-md-5">
        <br />
        <img className="sec2img" src="/image1.png" alt="Right Section" />
      </div>
           </div>
        </div>  <br />
        <div  className="counter-section background-wrapper py-5">
  <div className="container">
    <div className="row text-center">
      <div className="col-6 col-md-3">
        <Counter end={4800} duration={2000} label="Job Completed" />
      </div>
      <div className="col-6 col-md-3">
        <Counter end={12} duration={2000} label="Industry Experience" suffix="A+" />
      </div>
      <div className="col-6 col-md-3">
        <Counter end={2800} duration={2000} label="World Wide Clients" />
      </div>
      <div className="col-6 col-md-3">
        <Counter end={400} duration={2000} label="Won Awards" />
      </div>
    </div>  
  </div>  
</div>  
  
      

    
 <div className="row d-flex justify-content-center align-items-center gray1 ">
    <div className="col-lg-5 col-sm-12 ">
      <img className="d-flex justify-content-center align-items-center mx-auto w-75" src="/ggirl2.png" />
      </div>
    
          <div className="col-lg-7 ">
    
            <div className="text-center" style={{ fontWeight: "700" }}>
        <br />
        <h2>The Kodesavy Way</h2>
        </div>
      <br />
      
            {/* Move the common structure for each point outside the repeated code */}
      <div className="solution-point">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/correct.png" />
            </div>
          <div style={{ margin: '0 10px' }}></div>
          <div>
            <h2 className="heading">Understanding & Strategy</h2>
            <p className="para">We analyze client goals, audience, and technology needs to develop high-performance mobile apps, progressive web apps (PWAs), and websites. Our solutions are tailored to align with business objectives, ensuring scalability and a seamless user experience.</p>
            </div>
          </div>
        </div>
      
            <br />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/correct.png" />
         </div> 
        <div style={{ margin: '0 10px' }}></div> {/* Thoda sa gap */}
        <div>
          <h2 className="heading">Agile Development & UI/UX Excellence</h2>
          <p className="para">Our agile approach ensures flexibility, with a strong focus on UI/UX to create intuitive, responsive, and visually engaging digital experiences. We design and develop mobile apps, PWAs, and websites optimized for seamless navigation, cross-platform compatibility, and high performance, enhancing user engagement and retention.</p>
          </div>
        
            </div>
      <br />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="/correct.png" />
          </div>
        <div style={{ margin: '0 10px' }}></div> {/* Thoda sa gap */}
        <div>
          <h2 className="heading">Quality Assurance & Support</h2>
          <p className="para">We conduct rigorous testing to ensure apps, PWAs, and websites are bug-free, optimized, and secure. Post-launch, we provide continuous support, updates, and improvements, ensuring long-term success and business growth in the digital space.</p>
          </div>
        </div><br />
        <button
      className="button custom-cta bg-light text-dark"
       
      >
        Get In Touch
      </button>
            <br /><br />
    
     </div>
  </div>
        <br / ><br />
        <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
     
                 <div class="row align-items-center">
                  
                   <div class="col-lg-7">
                     <div class="row g-4">
     
                       <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                         <br />  
                          <div class="service-item mt-2" style={{ background: "#FB2156" }}>
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
                   <div class="col-lg-5 mb-5 mb-lg-0 background-wrapper">
                    <img src="/sucess.png" />
                   </div>

                   <div className='col-lg-12 bottom-glow-wrapper'> <br /><br /><br />
                     <img src='/web6.png' className='w-100' />
                   </div>
                 </div>
               </div>
        <Scroller />
         {/* <IdeasSection /> */}
        <Desktop>
          <div className="background-wrapper">
          <div className="container">
            <div className="row d-flex justify-content-center background-wrapper">
              <div className="col-lg-9 col-md-7 col-sm-7 my-5 ">
                <h2 className="text-start text-dark " style={{ fontWeight: "700" }}>Digital Excellence:  <br />
                <span className="color">App, Web & PWA  </span> Services</h2>
              </div>
              <Link to="/portfolio">
                <div className="col-lg-3 col-md-5 col-sm-4 my-5 p-2">
                  <button style={{ borderRadius: "41px", display: "flex", justifyContent: "end", alignItems: "flex-end", background: "none", color: "#000", padding: "10px", border: "2px solid #000 ", width: "max-content" }}>See All</button>
                </div>
              </Link>
            </div>
          </div>  
          </div >
        </Desktop>
        <Mobile>  
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-12 my-5">
        <h2 className="text-start text-dark " style={{ fontWeight: "700" }}>Digital Excellence:  <br />
          <span className="color">App, Web & PWA  </span> Services</h2>
                <button style={{ borderRadius: "41px", display: "flex", justifyContent: "end", alignItems: "flex-end", background: "none", color: "#000", padding: "10px", border: "2px solid #000 ", width: "max-content" }}>See All</button>
        </div>
      
            </div>
    </div>
  </Mobile>
        <Desktop >
  
<div className="container">
    <div className="row justify-content-center">
      {/* Card 1 */}
      <div className="col-lg-5 col-sm-12">
        <div
          className="card service-card"
          style={{ backgroundImage: "url('/service1.png')" }}
        >
          <div className="card-icon"><img src="/ser1.png" alt="Icon" /></div>
          <h3>Web Development</h3>
          <p>Crafting high-impact websites that blend innovation and functionality. From sleek designs to seamless user experiences, we bring your digital vision to life.</p>
          <Link to="/portfolio"><button className="custom-cta2 bg-light text-dark">Read More</button></Link>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-lg-5 col-sm-12">
        <div
          className="card service-card"
          style={{ backgroundImage: "url('/service2.png')" }}
        >
          <div className="card-icon"><img src="/ser2.png" alt="Icon" /></div>
          <h3>SEO</h3>
          <p>Boosting online presence through tailored SEO strategies. From optimization to content, we elevate your visibility for digital success.</p>
          <Link to="/portfolio"><button className="custom-cta2">Read More</button></Link>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-lg-5 col-sm-12">
        <div
          className="card service-card"
          style={{ backgroundImage: "url('/service3.png')" }}
        >
          <div className="card-icon"><img src="ser3.png" alt="Icon" /></div>
          <h3>Content Writing</h3>
          <p>Expert writers crafting captivating narratives and engaging copy. From compelling web content to SEO-optimized articles, we boost brand visibility and story impact.</p>
          <Link to="/portfolio"><button className="custom-cta2">Read More</button></Link>
        </div>
      </div>

      {/* Card 4 */}
      <div className="col-lg-5 col-sm-12">
        <div
          className="card service-card"
          style={{ backgroundImage: "url('/service4.png')" }}
        >
          <div className="card-icon"><img src="ser4.png" alt="Icon" /></div>
          <h3>UI/UX Design</h3>
          <p>Crafting captivating brand visuals that inspire and elevate. From logos to marketing materials, we bring your brand to life with compelling designs.</p>
          <Link to="/portfolio"><button className="custom-cta2">Read More</button></Link>
        </div>
      </div>
    </div>

  </div>  
  
        </Desktop>
        <Mobile>  
          <div className="container">
            <div className="row justify-content-center">
              {/* {serviceData.map((service, index) => ( */}
              <div className="col-lg-5 col-sm-12"  >
                <div className="card"  >
                  {/* Service Icon */}
                  <div className="card-icon"><img src="ser1.png" /></div>

                  {/* Service Title */}
                  <h3>Web Development</h3>

                  {/* Service Description */}
                  <p style={{ width: "70%", fontWeight: "100" }}>Crafting high-impact websites that blend innovation and functionality. From sleek designs to seamless user experiences, we bring your digital vision to life.</p>

                  {/* Read More Button */}
                  <Link to="/portfolio"><button className="custom-cta2">Read More</button></Link>
                </div>
                <br />
              </div>
              <div className="col-lg-5 col-sm-12"  >
                <div className="card"  >
                  {/* Service Icon */}
                  <div className="card-icon"><img src="ser2.png" /></div>

                  {/* Service Title */}
                  <h3 className="">Seo</h3>

                  {/* Service Description */}
                  <p style={{ width: "70%", fontWeight: "100" }}>Boosting online presence through tailored SEO strategies. From optimization to content, we elevate your visibility for digital success."
                  </p>

                  <Link to="/portfolio"> <button className="custom-cta">Read More</button></Link>
                </div>
                <br />
              </div>
              <div className="col-lg-5 col-sm-12"  >
                <div className="card"  >
                  {/* Service Icon */}
                  <div className="card-icon"><img src="ser3.png" /></div>

                  {/* Service Title */}
                  <h3>Content Writing</h3>

                  {/* Service Description */}
                  <p style={{ width: "70%", fontWeight: "100" }}>Expert writers crafting captivating narratives and engaging copy. From compelling web content to SEO-optimized articles, we boost brand visibility and story impact</p>

                  {/* Read More Button */}
                  <Link to="/portfolio"><button className="custom-cta2">Read More</button></Link>
                </div>
                <br />
              </div>
              <div className="col-lg-5 col-sm-12"  >
                <div className="card"  >
                  {/* Service Icon */}
                  <div className="card-icon"><img src="ser4.png" /></div>

                  {/* Service Title */}
                  <h3>Ui/Ux Design</h3>

                  {/* Service Description */}
                  <p style={{ width: "70%", fontWeight: "100" }}>Crafting captivating brand visuals that inspire and elevate. From logos to marketing materials, we bring your brand to life with compelling designs."
                  </p>

                  <Link to="/portfolio"> <button className="custom-cta">Read More</button></Link>
                </div>
                <br />
              </div>
              <br / >
  </div>
          </div>  
        </Mobile>
  
             
        <section id="testimonials" className="testimonials">
          <div className="container" data-aos="fade-up">
            <div className="section-header"> <br /> <br />
            <h2 className="text-dark fw-bold ">Hear From Our <span className="color">Clients</span> </h2>
            </div>
            <div className="slides-3 swiper" data-aos="fade-up" data-aos-delay="100">
              <div className="swiper-wrapper">

                <Swiper
                  slidesPerView={'auto'}
                  centeredSlides={true}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <div className="swiper-slide">
                    <SwiperSlide>
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <p>

                            <img src="/quote.png" style={{ width: "50px", marginTop: "-30px" }} />
                            Working with this team has been a game-changer for our brand. Their content writing expertise brought our story to life, engaging our audience in ways we hadn't imagined. They've truly elevated our online presence!

                          </p>
                          <div className="d-flex align-items-center">
                            <img src="/agha.png" className="testimonial-img flex-shrink-0" alt="" />
                            <div>
                              <h3>Ajaz Ali </h3>
                              <h4>Client</h4>
                              <div class="stars">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>

                  <div className="swiper-slide">
                    <SwiperSlide>
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <p>
                            <img src="/quote.png" style={{ width: "50px", marginTop: "-30px" }} />
                            This graphic design team exceeded our expectations! Their creations transformed our brand's identity, captivating our audience with visually stunning and impactful designs. We're thrilled with the results!

                          </p>
                          <div className="d-flex align-items-center">
                            <img src="/agha.png" className="testimonial-img flex-shrink-0" alt="" />
                            <div>
                              <h3>Ali Muhammad</h3>
                              <h4>Client</h4>
                              <div class="stars">
                                <FaStar /><FaStar /><FaStar /><FaStar />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>

                  <div className="swiper-slide">
                    <SwiperSlide>
                      <div className="testimonial-wrap">
                        <div className="testimonial-item">
                          <p>
                            <img src="/quote.png" style={{ width: "50px", marginTop: "-30px" }} />

                            Working with this team has been a game-changer for our brand. Their content writing expertise brought our story to life, engaging our audience in ways we hadn't imagined. They've truly elevated our online presence!


                          </p>
                          <div className="d-flex align-items-center">
                            <img src="/agha.png" className="testimonial-img flex-shrink-0" alt="" />
                            <div>
                              <h3>Nadeem Ali</h3>
                              <h4>Client</h4>
                              <div class="stars">
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>

                
                </Swiper>
              </div>

            </div>

          </div>
        </section >
        <Faqs />
        <Form />
        <BusinessNewsletter />
        <Footer />
      </div>


  );
};

export default Landingpage;
