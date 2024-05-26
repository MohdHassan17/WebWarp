import React from 'react'
import Card from './Card'
import '../assets/css/Card.css'

import Portfolio from '../assets/images/web design.svg'
import Ecom from '../assets/images/ecom.svg'
import GraphicDesigning from '../assets/images/graphic.svg'





function CardSection() {

  const cardData = [
    {
      
      heading: 'Portfolio Designing', 
      img: Portfolio,
      description: [
        'Highlight your skills and accomplishments',
        'Capture the attention of potential clients',
        'Establish a professional online presence'
      ]
    },

    {
      
      heading: 'E-commerce Site', 
      img: Ecom,
      description: [
        'Customized to match the vibe of your brand!',
        'Sell Products to Customers Worldwide, 24/7',
        'Provide a convinient shopping experience',
        
      ]
    },

    {
      
      heading: 'Graphic Designing', 
      img: GraphicDesigning,
      description: [
        'Create eye-catching, attractive designs',
        'Convey messages clearly and creatively',
        'Reinforce the image of your brand'
      ]
    },



  ]

  return (


    <div className="card-wrapper" id='services'>
    <div className="text-center">
        <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          What We <span class="text-indigo-600">Offer?</span>
        </h3>
      </div>
      <div className='card-container'>


      {cardData.map((item)=>(
        <Card key={item.heading} heading={item.heading} img={item.img} description={item.description}/>
      ))}

      
      

      </div>



    </div>
      
  
  )
}

export default CardSection