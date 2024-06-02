import React from 'react'
import '../assets/css/Services.css'
import Card from '../components/Card'

import WebDev from '../assets/images/Card/web development.svg'
import Ecom from '../assets/images/Card/ecom.svg'
import Portfolio from '../assets/images/Card/portfolio-designing.png'
import SocialMedia from '../assets/images/Card/social-media-management.svg'
import GraphicDesigning from '../assets/images/Card/graphic-designing.svg'
import Branding from '../assets/images/Card/brand-designing.png'


function Services() {

  const cardData = [
    {
      id:1,
      name: 'Web Development',
      img : WebDev,
      description: [
        'Customized for your brand',
        'Mobile Friendly',
        'Integrated Contact Forms and Chat Widgets',
        'Easy-to-use Admin Panel'

      ]
    },

    {
      id:2,
      name: 'Portfolio Designing',
      img : Portfolio,
      description: [
        'Showcase your skills and achievement',
        'Attract Employers and Clients',
        'Establish a Professional Online Presence',
        

      ]
    }

    ,
    {
      id:3,
      name: 'Ecommerce Store',
      img : Ecom,
      description: [
        'Provide a Convenient Shopping Experience',
        'Category-wise product listing',
        'Integrated Payment Gateways',
        'Easy-to-use Admin Panel'

      ]
    }

    ,

    {
      id:4,
      name: 'Marketing and Social Media Management',
      img : SocialMedia,
      description: [
        'Regular Posting Frequencies',
        'Customized Campaigns for your Brand',
        'Swift Responses to Inquiries and Messages',
        'Email Marketing'

      ]
    }


    ,{
      id:5,
      name: 'Brand Designing',
      img : Branding,
      description: [
        'Logo Designing',
        'Social Media Post Designing',
        'Packaging Branding',
        

      ]
    }

    ,

    {
      id:6,
      name: 'Graphic Designing',
      img : GraphicDesigning,
      description: [
        'Logo Designing',
        'Social Media Post Designing',
        'Cover Photo Designing',
        'Poster/Banner Designing'

      ]
    }
  ]
  return (
    <>

    <section className="services-section mb-20" data-aos="fade-up">
    <div class="mb-14 mt-14 text-center services-heading">
                
                <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 custom-heading">
                    <span class="custom-gradient-text"> Services</span>
                </h3>
                <br/>
                    <p class="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
                        Provides advanced features like time tracking, integrating with
                        third party apps (calendar / Google drive), creating subtasks.
                    </p>
                </div>
      <div className="card-container">  
      

      {
        cardData.map(item => (
          <Card id={item.id} heading={item.name} img={item.img} description={item.description}/>
        ))
      }
   

   
      

      
      
      </div>
    </section>


    

    
    </>
  )
}

export default Services