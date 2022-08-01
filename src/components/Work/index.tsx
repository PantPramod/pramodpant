import React from 'react'
import AboutProject from '../AboutProject'
import Button from '../Button'
import './Work.css'
const Work = () => {
    return (
        <>
        <div className='container py-5 '>
            <h2 className='numbered-heading white num'>
                <span className='secondary'>03.</span>
                Some things I've Built
            </h2>
            <div className='row pt-5 pb-5'>
                <div className='col' style={{minWidth:"600px", zIndex:"1"}}>
                <p className='secondary m-2'>Featured Project</p>
            <h2 className='white'>Halcyon Theme</h2>
            
            <AboutProject text='A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.' />
            <div className='d-flex mt-2'>
                <div className='light ms-3 tech'>
                    VSCode
                </div>
                <div className='light ms-3 tech'>
                    Sublime Text
                </div>
                <div className='light ms-3 tech'>
                    Atom
                </div>
                <div className='light ms-3 tech'>
                    iTerm2
                </div>
                <div className='light ms-3 tech'>
                    Hyper
                </div>
            </div>
                </div>
                <div className='col ' style={{marginLeft:"-100px"}}>

                </div>
            </div>

            <div className='row pt-5 pb-5'>
                <div className='col' style={{minWidth:"600px", zIndex:"1"}}>
                <p className='secondary m-2'>Featured Project</p>
            <h2 className='white'>Halcyon Theme</h2>
            
            <AboutProject text='A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.' />
            <div className='d-flex mt-2'>
                <div className='light ms-3 tech'>
                    VSCode
                </div>
                <div className='light ms-3 tech'>
                    Sublime Text
                </div>
                <div className='light ms-3 tech'>
                    Atom
                </div>
                <div className='light ms-3 tech'>
                    iTerm2
                </div>
                <div className='light ms-3 tech'>
                    Hyper
                </div>
            </div>
                </div>
                <div className='col ' style={{marginLeft:"-100px"}}>

                </div>
            </div>

            <div className='row pt-5 pb-5'>
                <div className='col' style={{minWidth:"600px", zIndex:"1"}}>
                <p className='secondary m-2'>Featured Project</p>
            <h2 className='white'>Halcyon Theme</h2>
            
            <AboutProject text='A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.' />
            <div className='d-flex mt-2'>
                <div className='light ms-3 tech'>
                    VSCode
                </div>
                <div className='light ms-3 tech'>
                    Sublime Text
                </div>
                <div className='light ms-3 tech'>
                    Atom
                </div>
                <div className='light ms-3 tech'>
                    iTerm2
                </div>
                <div className='light ms-3 tech'>
                    Hyper
                </div>
            </div>
                </div>
                <div className='col' style={{marginLeft:"-100px"}}>

                </div>
            </div>
            <div className='text-end '>
            <Button onClick={()=>{}} size="small" text='Learn More' />
            </div> 
        </div>

        </>
    )
}

export default Work
