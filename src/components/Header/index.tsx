import React from 'react'
import Button from '../Button'
import './Header.css'

const Header = () => {
    return (
        <div className='container-fluid main-color sticky-top'>
            <div className=' p-4 d-flex justify-content-between align-items-center'>
                <div className='header-color' >
                    Logo
                </div>

                <ul className='menu d-flex header-font m-0 align-items-center'>
                    <li className='header-color p-3'><span className='me-1 header-sn'>01.</span>About</li>
                    <li className='header-color p-3'><span className='me-1 header-sn'>02.</span>Experince</li>
                    <li className='header-color p-3'><span className='me-1 header-sn'>03.</span>Home</li>
                    <li className='header-color p-3'><span className='me-1 header-sn'>04.</span>Contact</li>
                    <Button onClick={()=>{}} text="Resume" size='small'/>
                </ul>


            </div>
        </div>
    )
}

export default Header
