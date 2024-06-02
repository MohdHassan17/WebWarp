import React from 'react'
import '../assets/css/Card.css'
import WebDev from '../assets/images/Card/web development.svg'
import { TiTick } from "react-icons/ti";




function Card({id, heading, img, description}) {
  return (
    <div className="card " key={id} data-aos="flip-right">
      <div className="card-wrapper">

      <div className="card-img-container">
        <img src={img} alt="" className="card-img" />
      </div>
      <div className="card-text-container">
        <div className="card-heading-container">
          <h1 className="card-heading custom-gradient-text">{heading}</h1>
        </div>
        <ul className="card-text-list">
          {
            description.map(i => (
              <li className="card-list"><span style={{color: '#31CB00', display: 'inline', float: 'left', fontSize: '22px', }}><TiTick/></span> {i}</li>
            ))
          }
         

         
        </ul>

        <div className="card-btn-container ">
        <a href="/contact-us" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 gradient-bg-button">
                Contact Team
            </a>
        </div>
      </div>

      </div>
      

    </div>
  )
}

export default Card