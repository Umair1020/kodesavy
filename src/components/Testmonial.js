import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: `Working with the team has been a game-changer for our brand. Their strategic vision has brought our story to life, engaging our audiences and inspiring leadership progress. They are truly diverse in building online presence!`,
      author: "Brooklyn Stories",
      role: "Global Inc CEO"
    },
    {
      text: `The group's design team exceeded expectations. Their creative approach captivated our audience with visually stunning and impactful designs. We're thrilled with the results!`,
      author: "Brooklyn Shrines", 
      role: "Global Inc CEO"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false
  };

  return (
    <div className="testimonial-container">
      <h2>Hear From Our Clients</h2>
      
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <div className="watermark">66</div>
            
            <div className="testimonial-content">
              <p className="text">{testimonial.text}</p>
              <div className="author-details">
                <div className="vertical-line"></div>
                <div>
                  <h3>{testimonial.author}</h3>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;