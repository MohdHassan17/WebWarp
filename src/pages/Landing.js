import { React, useEffect } from "react";
import Typewriter from "typewriter-effect";
import LandingBG from "../assets/images/BG.png";
import CTABG from '../assets/images/cta-bg.svg'


import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/css/Landing.css";

import Form from "../components/Form";

import Features from "../components/Features";
import IntroVideo from "../components/IntroVideo";



function Landing() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>

<section class="custom-bg dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
        <div class="mr-auto place-self-center lg:col-span-7 ">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-4xl text-white">

            <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("ELEVATE YOUR BRAND!")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString(
                        "MAXIMIZE YOUR REACH!"
                      )
                      .start();
                  }}
                  options={{
                    loop: false,
                    cursor: "|",
                    typeSpeed: 10, // Typing speed in milliseconds per character
                    deleteSpeed: 10, // Deleting speed in milliseconds per character
                    delay: 75,
                  }}
                />






            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
            <a href="/services" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 gradient-border-button">
                  <p className="gradient-border-button-container">View Services
</p>
            </a>
            <a href="/contact-us" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 gradient-bg-button">
               Contact Us
            </a> 
        </div>
        <div class=" lg:mt-0 lg:col-span-5 lg:flex hidden md:justify-center">
            <img src={LandingBG} alt="landing" style={{width:'300px'}}/>
        </div>                
    </div>
</section>    


      {/* Product Card Section */}
      <IntroVideo/>
      {/* Features Section */}
      <Features />



  <section className="cta-wrapper">
    <img src={CTABG} alt="" className="cta-img" />   
 
    <section className="cta-container ">

                <p className="cta-text">Delivering personalized digital services that resonate. Bringing your unique story to the forefront
              </p>
              <div className="cta-btn-container">
              <a href="/about-us" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 gradient-border-button">
                  <p className="gradient-border-button-container">About Us
</p>
            </a>
            <a href="/services" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 gradient-border-button">
                  <p className="gradient-border-button-container">View Services
</p>
            </a>
            
              </div>
          
    </section>

  </section>







    
      <Form />



    </>
  );
}

export default Landing;
