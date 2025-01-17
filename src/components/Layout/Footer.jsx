import React, { useState } from 'react'
import { IoShareSocialOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import { handleHideElement, handleShowElement } from '../../utils/handleFunctions';



const Footer = () => {
    const [isHovered, setIsHovered] = useState(false)
    const location = useLocation();

    const handleMouseLeave = () => {
        if (location.pathname !== "/") {
            setIsHovered(false);
            handleShowElement()
        }
        else {
            setIsHovered(false)
        }
    }

    return (
        <div className='footer-container' onMouseLeave={handleMouseLeave} onMouseEnter={location.pathname !== '/' ? handleHideElement : null}>
            {
                isHovered && <div className='social-icons-container'>
                    <a href='https://github.com/Naveen-1994' target='_blank' rel="noopener noreferrer"><div className='social-icon'><FaGithub /></div></a>
                    <a href='https://www.linkedin.com/in/naveen-k-b5a784145/' target='_blank' rel="noopener noreferrer"><div className='social-icon'><CiLinkedin /></div></a>
                    <a href='https://www.facebook.com/naveen.kpoojary.5/' target='_blank' rel="noopener noreferrer"><div className='social-icon'><FaFacebook /></div></a>
                    <a href='https://www.instagram.com/__im__naveen_/' target='_blank' rel="noopener noreferrer"><div className='social-icon'><FaInstagram /></div></a>

                </div>
            }
            <div className='footer-icon' onMouseEnter={() => setIsHovered(true)} ><IoShareSocialOutline /></div>
        </div >
    )
}

export default Footer