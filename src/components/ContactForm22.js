import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./ContactForm.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const ContactForm = () => {
  const [selectedService, setSelectedService] = useState("UI / UX Design");
  const [phone, setPhone] = useState("");

  const services = ["UI / UX Design", "Website Development", "Mobile Development"];

  return (
    <>
    <div className="container1"
                style={{
                    position: "relative",
                    // backgroundColor: "#000c2b",
                    width: "100%",
                    overflow: "hidden",
                    textAlign: "left",
                    fontSize: "18px",
                    color: "#000",
                    fontFamily: "Montserrat",
                }}
            >
      <Header />
      <div className="contact-wrapper ">
        {/* <h1 className="contact-heading">
          <span className="dot">•</span> Contact <span className="highlight">Us ?</span> <span className="dot">•</span>
        </h1> */}
         <div className='col-lg-12  d-flex align-items-center justify-content-center digitalagency'>
                            <div className=''><img src='/reddot.svg' /></div>
                            <h1 className='mt-3 ml-4 contact-heading '
                                style={{

                                    textAlign: "center",
                                    fontWeight: 700
                                }}
                            >
                                Contact
                            </h1>
                            {/* <img className="mx-auto vector  " src='/vector.svg' /> */}
                            {/* <img className="btn6" src='/worldclass.svg' /> */}
                        </div>
                        <div className='col-lg-12 d-flex align-items-center justify-content-center'>
                           
                            <h1 className='contact-heading   color '
                                style={{

                                    fontWeight: 700
                                }}
                            >
                                Us ?
                            </h1>
                            <div className='ml-5'><img src='/blackdot.svg' /></div>
                        </div>
        <p className="contact-subtext">
          Get in touch with Kodesway today! Our team is ready to assist you with your digital needs and provide tailored solutions for your business growth.
        </p>

        <div className="form-box">
          <h2>Project Details</h2>
          <div className="form-row">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Company" />
          </div>
          <div className="form-row">
            <input type="email" placeholder="Email" />
            <PhoneInput
              country={"gb"}
              value={phone}
              onChange={setPhone}
              inputStyle={{
                width: "100%",
                height: "45px",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            />
          </div>

          <label>Services</label>  <br />
          <div className="services">
            <div className="service-buttons">
              {services.map((service, index) => (
                <button
                  key={index}
                  className={`service-btn ${selectedService === service ? "active" : ""}`}
                  onClick={() => setSelectedService(service)}
                >
                  {service}
                </button>
              ))}
            </div>
          </div> <br />
          <br />
          <textarea placeholder="Please Tell Us More About Your Project" rows="6" />

          <button className="submit-btn">Submit</button>
        </div>
      </div>
      <Footer />
      </div>
    </>
  );
};

export default ContactForm;
