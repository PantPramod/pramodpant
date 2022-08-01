import React from 'react'
import Button from '../Button'
import './HeroSection.css'
const HeroSection = () => {
  return (
    <div className='container pt-5 pb-5'>
      <p className='header-sn m-0'>Hi My Name is </p>
      <p className='font1 m-0'>Pramod Pant.</p>
      <p  className="font1 light">I build things for the web.</p>
      <p className='light mw540px'>I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
      <div className='mt-5'> 
      <Button onClick={()=>{}} text="Check out my Github" size='large'/>
      </div>
    </div>
  )
}

export default HeroSection
