import { React, useEffect } from "react";
import Typewriter from "typewriter-effect";
import LandingBG from "../assets/images/layered-waves-haikei (3).svg";
import FeaturesBG from '../assets/images/second-section.svg'
import DesignImage from '../assets/images/landing-bg.svg'
import Personalization from '../assets/images/personalization.svg'
import Innovation from '../assets/images/innovative.svg'
import Efficient from '../assets/images/efficient.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/css/Landing.css";
import FAQ from "../components/FAQ";
import Form from "../components/Form";



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
        <div className="text-center">
<h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
                Best Benefits for <span class="text-indigo-600">Questions</span>
            </h3>
            </div>
        <div class="flex flex-col space-y-24 sm:flex-row sm:space-y-0 sm:space-x-8 mt-20">
          <div class="flex w-full flex-col justify-between sm:mb-0 sm:w-1/3">
            <div class="w-full text-center">
              <img
                alt="Personalized"
                class="mx-auto mb-4 h-16 t"
                src={Personalization}
              />
              <h2 class="mb-2 text-xl font-bold leading-tight dark:text-slate-50 black-feature-text md:text-xl">
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
              <h2 class="mb-2 text-xl font-bold leading-tight dark:text-slate-50 md:text-xl black-feature-text">
                Efficient
              </h2>
              <p class="mb-4 leading-relaxed text-slate-700 dark:text-slate-400">
                Swift project delivery, meeting dealines without compromising on quality
              </p>
            </div>
            
          </div>
          <div class="flex w-full flex-col justify-between sm:mb-0 sm:w-1/3">
            <div class="w-full text-center">
              <img
                alt="Meaningful insight"
                class="mx-auto mb-4 h-16 "
                src={Innovation}
              />
              <h2 class="mb-2 text-xl font-bold leading-tight dark:text-slate-50 md:text-xl">
                Meaningful insight
              </h2>
              <p class="mb-4 leading-relaxed text-slate-700 dark:text-slate-400">
                Visualize transactions with multiple chart option to get insight
                as you need.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      <FAQ/>
        <Form/>        
      


    </>
  );
}

export default Landing;
