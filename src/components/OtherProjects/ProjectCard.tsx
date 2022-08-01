import React from 'react'
import './style.css'

type propTypes={
  heading:string,
  text:string,
  technology:string[]
}

const ProjectCard = ({heading, text, technology}:propTypes) => {
  return (
    <div className='card p-4 mb-4'>
    
       <h3 className='white'>{heading}</h3>
       <p className='light'>{text}</p>
       <div className='d-flex'>
           {technology.map(tech=><p key={tech} className="light me-2 font-code">{tech}</p>)} 
       </div>        
    </div>
  )
}
 
export default ProjectCard
