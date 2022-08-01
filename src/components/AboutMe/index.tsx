import React from 'react'
import './AboutMe.css'
const index = () => {
  return (
    <div className='container py-5 '>
      <h2 className='white numbered-heading '><span className='secondary me-1'>01.</span> About Me</h2>
      <div className='row d-flex flex-direction-column '>
         <div className='col'>
             <p className='light'>
             Hello! My name is Pramod and I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                </p> 
             <p className='light'>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
             <p className='light'>Here are a few technologies I’ve been working with recently:</p>
             <ul className='light'>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node JS</li>
              <li>TypeScript</li>
              <li>GatsBy</li>
              <li>Next JS</li>
             </ul>   
         </div>
         <div className='col'>

         </div>
      </div> 
    </div>
  )
}

export default index
