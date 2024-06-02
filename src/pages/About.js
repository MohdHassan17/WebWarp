import React from 'react'
import AboutUs from '../assets/images/efficient.svg'
import '../assets/css/About.css'
import Features from '../components/Features'

function About() {
  return (
    <>
        <div class="sm:flex items-center max-w-screen-xl mb-20 mt-10">
    <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
            <img src={AboutUs}/>
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div class="text">
            <span class="text-gray-500 border-b-2 border-blue-600 uppercase ">About us</span>
            <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 custom-heading mb-5">
                    <span class="custom-gradient-text"> About Us</span>
                </h3>
            <p class="text-gray-300">
            At Webxus, we specialize in delivering comprehensive digital solutions tailored to meet the unique needs of our clients. Our services range from web development and graphic design to e-commerce solutions and beyond. With a focus on innovation and quality, we strive to transform your vision into a digital reality that resonates with your audience. Our dedicated team of experts works closely with you to understand your goals, ensuring every project is executed with precision and creativity. At Webxus, your success is our commitment, and we are here to support you every step of the way.
            </p>
        </div>
    </div>
</div>

<div className="mb-20">
<Features/>
</div>



    
    </>
  )
}

export default About