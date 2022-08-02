import React, { useState } from 'react'
import './Carousal.css'
import {AiOutlineLeft ,AiOutlineRight} from 'react-icons/ai';

const Carousal = () => {
   
    const [a, setA]  =useState(0);
      
    console.log(a)
    const left = () => {
        
           setA(a<0?prev=>prev+100:a) 
    }

    const right = () => {
        
        setA(a>-400? prev=>prev-100:a)
    }
    return (
        <div className="container p-4">
            <div className=' d-flex align-items-center justify-content-center p-4'>
                <div
                className='text-white p-2  upper mr' 
                onClick={left}
                
                ><AiOutlineLeft 
                color='black' 
                size={30}
                cursor="pointer"
                />
                </div>
                <div className='frame-image'>
                    <div 
                    className={`image-group `} 
                    style={{transform:`translateX(${a}%)`}}
                    >
                        <img src="https://source.unsplash.com/500x500/?nature,water" alt="" />
                        <img src="https://source.unsplash.com/500x500/?nature,water1" alt="" />
                        <img src="https://source.unsplash.com/500x500/?nature,water2" alt="" />
                        <img src="https://source.unsplash.com/500x500/?nature,water3" alt="" />
                        <img src="https://source.unsplash.com/500x500/?nature,water4" alt="" />
                    </div>
                   
                </div>
                <div 
                className=' p-2 upper ml' 
                onClick={right}>
                    <AiOutlineRight
                     color='black' 
                     size={30}
                     cursor="pointer"
                    />
                    </div>
                    
            </div>

        </div>
    )
}

export default Carousal
