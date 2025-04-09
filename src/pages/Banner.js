import React from 'react';

const CustomHeaderBanner = () => {
  return (
    <div className="custom-wrapper">
      <header className="custom-header">
        <div className="custom-logo"><img  src='/logo.png'/></div>
        <nav className="custom-nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
          <a href="#">Technologies</a>
        </nav>
        <button className="custom-cta">Get In Touch</button>
      </header>

      <section className="custom-hero-section">
        <div className="custom-left-text">
          <div className="custom-sticker">Empowering Your</div>
          <h1 className="custom-heading">
            <span className="black">Digital</span> <span className="pink">Journey</span>
          </h1>
          <p className="custom-desc">
            Kodesavy delivers innovative software, AI solutions, and digital transformation to empower businesses with smart technology.
          </p>
          <button className="custom-special">Our Specialities</button>
        </div>
        <div className="custom-right-image">
          <img src="" alt="hero" className="main-img" />
          <div className="play-btn">▶</div>
        </div>
        <div className="custom-corner-image">
          <img src="" alt="guy pointing" />
        </div>
        <div className="scroll-text">Scroll Down</div>
      </section>
    </div>
  );
};

export default CustomHeaderBanner;
