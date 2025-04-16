import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import React, { useState } from "react";

const Form = () => {
      const [selectedService, setSelectedService] = useState("UI / UX Design");
      const [phone, setPhone] = useState("");
    
      const services = ["UI / UX Design", "Website Development", "Mobile Development"];
  return (
    <div className='contact-wrapper'>
         <div className="form-box">
          <h2 className="text-dark">Project Details</h2>
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
          <div className="services1">
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
  )
}

export default Form