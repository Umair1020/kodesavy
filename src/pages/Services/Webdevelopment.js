import React from "react";
import "./web.css"
import Header from "../../components/Header/Header";
import ContactForm from "../../components/ContactForm22";
import FAQ from "../../components/Faqcomp";
import Form from "../../components/Form";
import Ui from "../../components/Appdevelopmentcomp";
import Webcomp from "../../components/WebdevelopmentComp";

const Webdev = () => {
  return (
    <>

      {/* <Header /> */}
      <header id="header" class="header d-flex align-items-center sticky-top">
        <div class="container-fluid container-xl position-relative d-flex align-items-center">
          <Header />


        </div>
      </header> <br /><br /><br /><br /><br /><br />
      <main class="main">

        <section id="hero" class="hero section dark-background">

          <div id="hero-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

            <div class="carousel-item active">
              <img src="/web.png" alt="" className="w-100" />
              <div class="carousel-container">
                <h2>Website Development</h2>

              </div>
            </div>

          </div>
        </section> <br /><br />
        <div className="container">
          <div className="row p-2 d-flex align-items-center">
            <div className="col-lg-6 background-wrapper">
              <h2>Website Development</h2>
              <p>Kodesavy specializes in Website Development, creating customized, high-performance websites that are responsive, secure, and optimized for a seamless user experience across all devices. Our team uses the latest technologies to design and develop websites tailored to meet your business objectives.</p>
              <p>We focus on building websites that are secure, scalable, and optimized for performance. Each project is carefully crafted to align with your business goals, ensuring your website supports your brand’s growth and long-term success. At Kodesavy, we prioritize user-centric design and functionality, creating websites that engage visitors, enhance conversions, and improve customer satisfaction. Whether you need a simple brochure site or a complex platform, Kodesavy provides reliable, results-driven website development services that help your business thrive in the digital world.</p>
            </div>
            <div className="col-lg-6 background-wrapper">
              <img src="/web1.png" className="w-100" />
            </div>

          </div>
        </div>
       
            <Webcomp />
        {/* <Form /> */}

      </main>
    </>
  );
};

export default Webdev;