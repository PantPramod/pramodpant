import React from 'react'
import './AboutProject.css'

type propTypes={
    
    text:string,
    
}
const AboutProject = ({text}:propTypes) => {
  return (
    <div className='dark light' >
      {text}
    </div>
  )
}

export default AboutProject
