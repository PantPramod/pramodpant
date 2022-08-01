import React from 'react'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FiCodepen } from 'react-icons/fi'
import './style.css'
const SocialShareMenu = () => {
    return (
        <div style={{ position: "fixed", left: "40px", bottom: "0" }} className="d-flex align-items-center flex-column ">
            <div className=''>
                <div className='mb-4'>
                    <BsGithub
                        size={22}
                        cursor="pointer"
                        className='social-icon'
                    />
                </div>
                <div className='mb-4'>
                    <BsInstagram
                        // color='#8892B0'
                        size={22}
                        cursor="pointer"
                        className='social-icon'
                    />
                </div>
                <div className='mb-4'>
                    <BsTwitter
                        // color='#8892B0'
                        size={22}
                        cursor="pointer"
                        className='social-icon'
                    />
                </div>
                <div className='mb-4'>
                    <BsLinkedin
                        // color='#8892B0'
                        size={22}
                        cursor="pointer"
                        className='social-icon'
                    />
                </div>
                <div className='mb-4'>
                    <FiCodepen
                    
                        size={22}
                        cursor="pointer"
                        className='social-icon'
                    />
                </div>
            </div>
            <div className='v-line'></div>
        </div>
    )
}

export default SocialShareMenu
