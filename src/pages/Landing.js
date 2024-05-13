import React from 'react'
import Typewriter from 'typewriter-effect';
function Landing() {
  return (
    <h1 style={{color: 'red', fontWeight:"bold"}}> <Typewriter
    onInit={(typewriter) => {
      typewriter.typeString('Hello, World!')
        .pauseFor(1000)
        .deleteAll()
        .typeString('Welcome to React Typewriter!')
        .deleteAll()
        .typeString('Get out hehe')
        .start()
    }}

    options={{
      loop: false,
      cursor: '_'
    }}
  /></h1>
   
  )
}

export default Landing