import React from "react";
import "./web.css"
import Header from "../../components/Header/Header";
import ContactForm from "../../components/ContactForm22";
import FAQ from "../../components/Faqcomp";
import Form from "../../components/Form";
import Ui from "../../components/Appdevelopmentcomp";
import Webcomp from "../../components/WebdevelopmentComp";
import Pwacomp from "../../components/Pwacomp";

const Pwadevelelopment = () => {
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
              <img src="/pwa.png" alt="" className="w-100" />
              <div class="carousel-container">
                <h2>PWA Development</h2>

              </div>
            </div>

          </div>
        </section> <br /><br />
        <div className="container">
          <div className="row p-2 d-flex align-items-center">
            <div className="col-lg-6 background-wrapper">
              <h2>PWA Development</h2>
              <p>Kodesavy offers top-tier Progressive Web Apps (PWAs) Development services designed to provide businesses with fast, reliable, and engaging web experiences. Our team specializes in building PWAs that combine the best features of web and mobile applications, ensuring seamless performance across devices and platforms. PWAs are highly scalable, enabling businesses to reach users on any device with a smooth and responsive experience..</p>
              <p>With Kodesavy's PWA development services, we ensure your app works offline, loads quickly, and delivers native app-like functionality without the need for app store downloads. Our expertise in modern web technologies enables us to create PWAs that are not only user-friendly but also secure and cost-effective, driving enhanced customer engagement and long-term business growth.</p>
            </div>
            <div className="col-lg-6 background-wrapper">
              <img src="/pwa1.png" className="w-100" />
            </div>

          </div>
        </div>
       
            <Pwacomp />
        {/* <Form /> */}

      </main>
    </>
  );
};

export default Pwadevelelopment;