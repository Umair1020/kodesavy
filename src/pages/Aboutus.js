import React from 'react'
import Header from '../components/Header/Header'
import { FaAlignRight, FaArrowRight } from 'react-icons/fa'
import Footer from "../components/Footer/Footer";
import BusinessNewsletter from '../components/Newsletter';

const Aboutus = () => {
    return (
        <div>
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
                <div className='row'>
                    <div
                        style={{
                            borderRadius: "50%",
                            backgroundColor: "#007be5",
                            filter: "blur(435px)",
                            // width: "394px",
                            // height: "200px",
                        }}
                    />

                </div>
                <div className='container'>
                    <div className='row digitalagency'>

                        <div className='col-lg-12  d-flex align-items-center justify-content-center'>
                            <div className=''><img src='/reddot.svg' /></div>
                            <h1 className='mt-3 ml-4'
                                style={{

                                    textAlign: "center",
                                    fontWeight: 700
                                }}
                            >
                                Want to Know
                            </h1>
                            {/* <img className="mx-auto vector  " src='/vector.svg' /> */}
                            {/* <img className="btn6" src='/worldclass.svg' /> */}
                        </div>
                        <div className='col-lg-12 d-flex align-items-center justify-content-start'>
                           
                            <h1 className='abouth1 mx-5 color'
                                style={{

                                    fontWeight: 700
                                }}
                            >
                                About Us ?
                            </h1>
                            <div className=''><img src='/blackdot.svg' /></div>
                        </div>
                        <p className='mx-auto w-75 text-center'>Kodesavy is a leading digital solutions provider, specializing in App Development, Progressive Web Apps, and Website Development. With cutting-edge technology and a client-first approach, we empower businesses to achieve digital excellence and drive sustainable growth across industries worldwide.</p>
                       
                    </div>
                    <br /> 
                    <div className='background-wrapper'>
                        <div className='container
                           '>
                            <div className='row'>


                                <div className='col-lg-6'>
                                    <h2 className='fw-bold'>Our Vision</h2>
                                    <p className='' style={{ fontSize: "15px" }}> At Kodesavy, our vision is to lead the digital transformation journey for businesses worldwide. We aim to be the trusted partner that helps organizations unlock their full potential through cutting-edge digital solutions. By providing innovative App Development, Progressive Web App Development, and Website Development services, we strive to create impactful solutions that drive growth, efficiency, and success.
                                        <br /><br />
                                        We envision a future where every business, regardless of size or industry, can harness the power of technology to streamline operations and enhance customer experiences. Our goal is to make technology more accessible, enabling companies to thrive in a fast-evolving digital landscape.
                                        <br /><br />
                                        We are committed to delivering personalized, high-quality solutions that exceed our clients' expectations. Through continuous innovation and a client-first approach, Kodesavy aspires to be a global leader in delivering exceptional digital experiences that drive business transformation and long-term success.
                                    </p>
                                    <a className='color'> Contact Us </a>
                                </div>
                                <div className='col-lg-6'>
                                    <h2 className='fw-bold'>Our Intro</h2>
                                    <img src='/about.png' className='h-75' style={{width: "-webkit-fill-available"}} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='background-wrapper'>
                    <div className='container row'>
                        <h2>Kodesavy’s Values</h2>
                        <p className='para'> At Kodesavy, our core values guide everything we do. We believe in innovation, always striving to stay ahead with the latest technologies and trends to provide exceptional solutions. We are driven by integrity, ensuring transparency and trust in all our client relationships. Collaboration is at the heart of our work, as we value teamwork and believe that the best solutions emerge when we work together with our clients. Finally, we are committed to excellence, delivering results that exceed expectations and help businesses thrive in the digital world.</p>
                    </div> 
                </div> 
                </div> <br/><br/>
                <img src='/grow.png' className=' w-75 mx-auto d-flex' />
                <br/><br/>
                <BusinessNewsletter />
                <Footer />
            </div>
        </div>
    )
}

export default Aboutus