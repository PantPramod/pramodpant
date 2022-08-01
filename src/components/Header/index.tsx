import React, { Dispatch, SetStateAction } from 'react'
import Button from '../Button'
import './Header.css'

type propTypes={
    showResume:boolean,
    setShowResume:Dispatch<SetStateAction<boolean>>
}

const Header = ({showResume, setShowResume}:propTypes) => {
    return (
        <div className='container-fluid main-color sticky-top'>
            <div className=' p-4 d-flex justify-content-between align-items-center'>
                <div className='header-color' >
                    Logo
                </div>

                <ul className='menu d-flex header-font m-0 align-items-center'>
                    <li className='header-color p-3'>
                        <a href="#about" >
                            <span className='me-1 header-sn'>01.</span>About
                        </a>
                    </li>
                    <li className='header-color p-3'>
                        <a href="#experience" >
                            <span className='me-1 header-sn'>02.</span>Experince
                        </a>
                    </li>
                    <li className='header-color p-3'>
                        <a href="#home" >
                            <span className='me-1 header-sn'>03.</span>Home
                        </a>
                    </li>
                    <li className='header-color p-3'>
                        <a href="#contact">
                            <span className='me-1 header-sn'>04.</span>Contact
                        </a>
                    </li>
                    <Button onClick={() => {setShowResume(!showResume) }} text="Resume" size='small' />
                </ul>


            </div>
        </div>
    )
}

export default Header
