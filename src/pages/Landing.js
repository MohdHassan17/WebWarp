import { React, useEffect } from "react";
import Typewriter from "typewriter-effect";
import LandingBG from "../assets/images/layered-waves-haikei (3).svg";
import FeaturesBG from '../assets/images/second-section.svg'
import DesignImage from '../assets/images/landing-bg.svg'
import Personalization from '../assets/images/personalization.svg'
import Innovation from '../assets/images/innovative.svg'
import Efficient from '../assets/images/efficient.svg'
import Processing from '../assets/images/processing.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/css/Landing.css";
import Form from '../components/Form'
import FAQ from '../components/FAQ'


import { TbListDetails, TbTruckDelivery } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";



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
                VIEW SERVICES
              </a>
              <a href="" className="btn bg-blue-800 " style={{ color: "#fff" }}>
                CONTACT NOW
              </a>
            </div>
          </div>
          <div className="landing-img-container">
            <img src={DesignImage} alt="" className="landing-img" />
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section class="container mx-auto px-12 py-28 feature-container" data-aos="fade-zoom-in"
      >

        <h1 class="mb-24 w-full text-center text-2xl font-extrabold dark:text-slate-50 sm:mx-auto sm:mb-20 sm:w-4/5 black-feature-text">
          <span class="text-blue-800">Best benefits</span> for content creators and small/medium businesses
        </h1>
        <div class="flex flex-col space-y-24 sm:flex-row sm:space-y-0 sm:space-x-8">
          <div class="flex w-full flex-col justify-between sm:mb-0 sm:w-1/3">
            <div class="w-full text-center">
              <img
                alt="Personalized"
                class="mx-auto mb-4 h-16 t"
                src={Personalization}
              />
              <h2 class="mb-2 text-xl font-bold leading-tight dark:text-slate-50  md:text-xl">
                Personalized
              </h2>
              <p class="mb-4 leading-relaxed text-slate-700 dark:text-slate-400">
                Each project designed to ensure a personalized experience for your brand/company
              </p>
            </div>

          </div>
          <div class="flex w-full flex-col justify-between sm:mb-0 sm:w-1/3">
            <div class="w-full text-center">
              <img
                alt="Multi layer security"
                class="mx-auto mb-4 h-16 "
                src={Efficient}
              />
              <h2 class="mb-2 text-xl font-bold leading-tight dark:text-slate-50 md:text-xl ">
                Efficient
              </h2>
              <p class="mb-4 leading-relaxed text-slate-700 dark:text-slate-400">
                Swift project delivery, meeting dealines without compromising on quality
              </p>
            </div>

          </div>
          <div class="flex w-full flex-col justify-between sm:mb-0 sm:w-1/3">
            <div class="w-full text-center b-bottom">
              <img
                alt="Innovative Design"
                class="mx-auto mb-4 h-16 "
                src={Innovation}
              />
              <h2 class="mb-2 text-xl font-bold leading-tight dark:text-slate-50 md:text-xl">
                Innovative Design
              </h2>
              <p class="mb-4 leading-relaxed text-slate-700 dark:text-slate-400">
                Our work incroporates innovative and modern design-trends to develop visually stunning content!
              </p>
            </div>

          </div>
        </div>
      </section>


      <section className="workflow">

      <div className="workflow-heading-wrapper">
            <h1 class="mb-24 w-full text-center text-2xl font-extrabold dark:text-slate-50 sm:mx-auto sm:mb-20 sm:w-4/5 black-feature-text workflow-heading">
          <span class="text-blue-800">How</span> we work ?
        </h1>
            </div>
        <div className="workflow-wrapper">

          <div className="workflow-img-container">
            <img src={Processing} alt="" className="workflow-img" />
          </div>
      
          
            <div className="workflow-card-wrapper">
            <div className="workflow-card">
            <div className="card-img">
                <TbListDetails size={40} color="##36454F;"/>
              </div>
              <div className="card-text-container">
                <h1 className="card-heading">Discovery & Consultation</h1>
                <p className="card-description">We start with a friendly virtual meeting to understand your needs and share ideas, setting the state for a customized project!</p>
              </div>
            </div>
            <div className="workflow-card">
              <div className="card-img">
                <MdOutlineDesignServices size={40} color="##36454F;"/>
              </div>
              <div className="card-text-container">
                <h1 className="card-heading"> Design Proposal</h1>
                <p className="card-description"> We craft a stunning design and deliver it for your review, making sure it's perfect with your feedback</p>
              </div>
            </div>
            <div className="workflow-card">
            <div className="card-img">
                <TbTruckDelivery size={40} color="##36454F;"/>
              </div>
              <div className="card-text-container">
                <h1 className="card-heading">Development and Delivery</h1>
                <p className="card-description">After approval, we develop your site with precision and aim to launch ahead of schedule for a smooth, timely release.</p>
              </div>
            </div>
            
            </div>
        
        </div>

        <img src="" alt="" className="landing-bg-img" />

      </section>



      <Form/>

      <FAQ/>

    </>
  );
}

export default Landing;
