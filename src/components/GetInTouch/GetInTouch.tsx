import React from 'react'
import Button from '../Button'
import './GetInTouch.css'

const GetInTouch = () => {
  return (
    <div className='text-center container'>
      <p className='secondary pt-2 pb-3 m-0'><span className='me-2'>04.</span>What’s Next?</p>
      <h2 className='white git m-0 pb-2' >Get In Touch</h2>
      <p className='text-description light mx-auto'>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
      <div className='mt-5'>
      <Button 
      onClick={()=>{}} 
      size='large'
      text="Say Hello"
      />
      </div>
    </div>
  )
}

export default GetInTouch
