import React from 'react'
import ProjectCard from './ProjectCard'

const OtherProjects = () => {
  return (
    <div className='container mb-5'>
      <h2 className='text-center white'>Other NoteWorthy Projects</h2>
      <p className='text-center secondary mb-4'>View the archive</p>
       <div className='row'>
        <div className='col'>
        <ProjectCard heading='Project Heading' 
       text="Some Text about Project Details Some Text about Project Details Some Text about Project Details Some Text about Project Details" 
       technology={["js", "ts", "html", "css", "node", "react"]} />
        </div>
        <div className='col'>
        <ProjectCard heading='Project Heading' 
       text="Some Text about Project Details Some Text about Project Details Some Text about Project Details Some Text about Project Details" 
       technology={["js", "ts", "html", "css", "node", "react"]} />
        </div>
       </div>
       <div className='row'>
        <div className='col'>
        <ProjectCard heading='Project Heading' 
       text="Some Text about Project Details Some Text about Project Details Some Text about Project Details Some Text about Project Details" 
       technology={["js", "ts", "html", "css", "node", "react"]} />
        </div>
        <div className='col'>
        <ProjectCard heading='Project Heading' 
       text="Some Text about Project Details Some Text about Project Details Some Text about Project Details Some Text about Project Details" 
       technology={["js", "ts", "html", "css", "node", "react"]} />
        </div>
       </div>
    </div>
  )
}

export default OtherProjects
