import { React, useEffect } from "react";
import Typewriter from "typewriter-effect";
import LandingBG from "../assets/images/layered-waves-haikei (3).svg";
import FeaturesBG from '../assets/images/second-section.svg'
import DesignImage from '../assets/images/landing-bg.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/css/Landing.css";



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
                      .typeString("Elevate your brand with stunning design!")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString(
                        "Bringing Your Visions to Life, Pixel by Pixel"
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

        <h1 class="mb-24 w-full text-center text-4xl font-extrabold dark:text-slate-50 sm:mx-auto sm:mb-20 sm:w-4/5 black-feature-text">
          <span class="text-blue-800">Best benefits</span> for small and medium businesses
        </h1>
        <div class="flex flex-col space-y-24 sm:flex-row sm:space-y-0 sm:space-x-8">
          <div class="flex w-full flex-col justify-between sm:mb-0 sm:w-1/3">
            <div class="w-full text-center">
              <img
                alt="Trusted and secured"
                class="mx-auto mb-4 h-16 dark:contrast-200 dark:invert"
                src="/illustrations/undraw_security_on_re_e491.svg"
              />
              <h2 class="mb-2 text-xl font-bold leading-tight dark:text-slate-50 md:text-xl">
                Trusted and secured
              </h2>
              <p class="mb-4 leading-relaxed text-slate-700 dark:text-slate-400">
                Each transaction is guarded by advanced and certified security
                system.
              </p>
            </div>
            <div class="text-center">
              <a
                class="group relative mx-auto inline-block text-sm font-semibold text-slate-900 underline decoration-violet-300 decoration-2 underline-offset-8 transition hover:decoration-slate-700 dark:text-slate-200 dark:hover:decoration-slate-200 sm:m-0"
                href="#"
              >
                Read more
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                  class="absolute bottom-0 -right-6 scale-x-0 transition group-hover:scale-x-100"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14m-4 4l4-4m-4-4l4 4"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="flex w-full flex-col justify-between sm:mb-0 sm:w-1/3">
            <div class="w-full text-center">
              <img
                alt="Multi layer security"
                class="mx-auto mb-4 h-16 dark:contrast-200 dark:invert"
                src="/illustrations/undraw_fingerprint_re_uf3f.svg"
              />
              <h2 class="mb-2 text-xl font-bold leading-tight dark:text-slate-50 md:text-xl">
                Multi layer security
              </h2>
              <p class="mb-4 leading-relaxed text-slate-700 dark:text-slate-400">
                Support fingerprint and face recognition for any transaction.
                More options coming soon.
              </p>
            </div>
            <div class="text-center">
              <a
                class="group relative mx-auto inline-block text-sm font-semibold text-slate-900 underline decoration-violet-300 decoration-2 underline-offset-8 transition hover:decoration-slate-700 dark:text-slate-200 dark:hover:decoration-slate-200 sm:m-0"
                href="#"
              >
                Read more
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                  class="absolute bottom-0 -right-6 scale-x-0 transition group-hover:scale-x-100"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14m-4 4l4-4m-4-4l4 4"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="flex w-full flex-col justify-between sm:mb-0 sm:w-1/3">
            <div class="w-full text-center">
              <img
                alt="Meaningful insight"
                class="mx-auto mb-4 h-16 dark:contrast-200 dark:invert"
                src="/illustrations/undraw_all_the_data_re_hh4w.svg"
              />
              <h2 class="mb-2 text-xl font-bold leading-tight dark:text-slate-50 md:text-xl">
                Meaningful insight
              </h2>
              <p class="mb-4 leading-relaxed text-slate-700 dark:text-slate-400">
                Visualize transactions with multiple chart option to get insight
                as you need.
              </p>
            </div>
            <div class="text-center">
              <a
                class="group relative mx-auto inline-block text-sm font-semibold text-slate-900 underline decoration-violet-300 decoration-2 underline-offset-8 transition hover:decoration-slate-700 dark:text-slate-200 dark:hover:decoration-slate-200 sm:m-0"
                href="#"
              >
                Read more
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                  class="absolute bottom-0 -right-6 scale-x-0 transition group-hover:scale-x-100"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14m-4 4l4-4m-4-4l4 4"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
