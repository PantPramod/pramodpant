import ProjectCard from './ProjectCard'
import { Data } from '../../Data/data'

const OtherProjects = () => {
  return (
    <div className='container mb-5'>
      <h2 className='text-center white'>Other NoteWorthy Projects</h2>
      <p className='text-center secondary mb-4'>View the archive</p>
       <div className='row'>
        {Data.map(d=>
        <div className='col d-flex'>
         <ProjectCard 
         heading={d.title} 
         text={d.text}   
         technology={d.technology} 
         />
        </div>  
          )}
        </div>
    </div>
  )
}

export default OtherProjects
