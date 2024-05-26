import { React, useEffect } from "react";
import Typewriter from "typewriter-effect";
import LandingBG from "../assets/images/layered-waves-haikei (3).svg";
import FeaturesBG from '../assets/images/second-section.svg'
import DesignImage from '../assets/images/landing-bg.svg'

import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/css/Landing.css";
import FAQ from "../components/FAQ";
import Form from "../components/Form";
import CardSection from "../components/CardSection";
import Features from "../components/Features";



function Landing() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <section className="landing-container" data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">
        <img src={LandingBG} alt="" className="landing-bg-img" style={{ width: '100%' }} />
        <div className="landing">
          <div className="landing-text-container">
            <div className="landing-text">
              <h1 className="landing-heading">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("ELEVATE YOUR BRAND WITH STUNNING DESIGN!")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString(
                        "BRINGING YOUR VISIONS TO LIFE, PIXEL BY PIXEL"
                      )
                      .start();
                  }}
                  options={{
                    loop: false,
                    cursor: "_",
                    typeSpeed: 10, // Typing speed in milliseconds per character
                    deleteSpeed: 5, // Deleting speed in milliseconds per character
                    delay: 75,
                  }}
                />
              </h1>

              <p className="landing-description">
                {" "}
                Your go-to stop for top-notch web development and graphic
                design!
              </p>
            </div>
            <div className="landing-button-container">
              <a href="" className="btn btn-hover lighter-btn">
                LEARN MORE
              </a>
              <a href="#contact" className="btn  " style={{ color: "#fff", background:'#03254E' }}>
                CONTACT NOW
              </a>
            </div>
          </div>
          <div className="landing-img-container">
            <img src={DesignImage} alt="" className="landing-img" />
          </div>
        </div>
      </section>


      {/* Product Card Section */}
      <CardSection />

      {/* Features Section */}
      <Features />




      <FAQ />
      <Form />



    </>
  );
}

export default Landing;
