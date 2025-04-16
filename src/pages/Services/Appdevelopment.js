import React from "react";
import "./web.css"
import Header from "../../components/Header/Header";
import ContactForm from "../../components/ContactForm22";
import FAQ from "../../components/Faqcomp";
import Form from "../../components/Form";
import Ui from "../../components/Appdevelopmentcomp";

const Appdev = () => {
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
              <img src="/hero.png" alt="" className="w-100" />
              <div class="carousel-container">
                <h2>App Development<br /></h2>

              </div>
            </div>

          </div>
        </section> <br /><br />
        <div className="container">
          <div className="row p-2 d-flex align-items-center">
            <div className="col-lg-6 background-wrapper">
              <h2>App Development</h2>
              <p>Kodesavy offers cutting-edge App Development services tailored to meet the unique needs of your business. Our expert team specializes in creating robust, scalable, and secure mobile applications for both iOS and Android platforms. We focus on delivering high-performance apps that provide seamless user experiences, ensuring your business stands out in the competitive digital landscape.</p>
              <p>We leverage the latest technologies, frameworks, and tools to build custom applications that align with your business goals. From concept to launch and beyond, Kodesavy ensures that each app is optimized for efficiency, usability, and security. Our commitment to excellence guarantees that your mobile app will drive growth, increase engagement, and enhance customer satisfaction.</p>
            </div>
            <div className="col-lg-6 background-wrapper">
              <img src="/wen1.png" className="w-100" />
            </div>

          </div>
        </div>
       
            <Ui />
        {/* <Form /> */}

      </main>
    </>
  );
};

export default Appdev;