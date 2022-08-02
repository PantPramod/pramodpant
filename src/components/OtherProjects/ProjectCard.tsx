import React from 'react'
import './style.css'
import { AiOutlineFolder } from 'react-icons/ai'
import { TbExternalLink } from 'react-icons/tb'
import { VscGithubAlt } from 'react-icons/vsc'

type propTypes = {
  heading: string,
  text: string,
  technology: string[]
}

const ProjectCard = ({ heading, text, technology }: propTypes) => {
  return (
    <div className='cards p-4 mb-4'>
      <div className='d-flex justify-content-between'>
        <AiOutlineFolder
          size={40}
          color="#64ffda"
        />
        <div>
          <VscGithubAlt
            size={20}
            color="white"
            className='me-3'
          />
          <TbExternalLink
            size={20}
            color="white"
          />
        </div>
      </div>

      <h3 className='white'>{heading}</h3>
      <p className='light'>{text}</p>
      <div className='d-flex '>
        {technology.map(tech => <p
          key={tech}
          className="light me-2 font-code tech"
        >
          {tech}
        </p>)}
      </div>

    </div>
  )
}

export default ProjectCard
