import React from 'react'
import '../assets/css/Card.css'




function Card({id, heading, img, description}) {
  return (
    <div className="card" key={id} data-aos="zoom-in-up">
      <div className="card-img-container">
        <img src={img}alt="" className="card-img" />
      </div>
      <div className="card-text-container">
        <h1 className='card-heading'>{heading}</h1>
        <ul className='card-description'>

          {
            description.map((item)=>(
              <li><span style={{fontFamily:'Inter', color:'#52B788'}}>✔</span> {item}</li>
            ))
          }



        </ul>
      </div>

    </div>
  )
}

export default Card