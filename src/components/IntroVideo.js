import React from 'react'
import Webxus from '../assets/videos/Webxus.mp4'
function IntroVideo() {
    return (
        <>
        <div className="intro-container">

        <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 text-center custom-heading">
                What we <span class="custom-gradient-text"> Offer?</span>
            </h3>
            <div className="video-wrapper">

            <video class="video" muted autoPlay loop >
                <source src={Webxus} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="section-btn">
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 gradient-bg-button">
                Speak to Sales
            </a> 
            </div>

            </div>


        </div>
          
        </>
    )
}

export default IntroVideo