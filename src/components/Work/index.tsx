import React from 'react'
import { FeaturedProjects } from '../../Data/data'
import AboutProject from '../AboutProject'
import Button from '../Button'
import './Work.css'

const Work = () => {
    return (
        <>
        <div className='container py-5 mt-5' id="home">
            <h2 className='numbered-heading white num'>
                <span className='secondary'>03.</span>
                Some things I've Built
            </h2>
             
            {FeaturedProjects.map(fp=><div>
                <div className='row pt-5 pb-5'>
                <div className='col' style={{minWidth:"600px", zIndex:"1"}}>
                <p className='secondary m-2'>Featured Project</p>
            <h2 className='white'>{fp.title}</h2>
            
            <AboutProject text={fp.text}/>
               {fp.technology.map(tech=>
                <div className='light ms-3 tech'>
                    {tech}
                </div>)}  
                </div>
                <div className='col filter-gray' style={{marginLeft:"-100px"}}>
                <img  src={fp.imgUrl} alt=""/>
                </div>
            </div>    
            </div>)}
           
            <div className='text-end '>
            <Button 
            onClick={()=>{}} 
            size="small" 
            text='Learn More' 
            />
            </div> 
        </div>

        </>
    )
}

export default Work
