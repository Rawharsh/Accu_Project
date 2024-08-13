import React from 'react'
import Hero from "../components/Hero/Hero";
import PopularResidency from '../components/Popular/PopularResidency';


const Website = () => {
  return (
    <div className="App">
    <div>
      <div className="white-gradient" />
      <Hero />
      <PopularResidency/>
    </div>

  </div>
  )
}

export default Website