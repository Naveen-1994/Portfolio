import React from 'react'
import { Link } from 'react-router-dom'
import sparkle from "../../assets/images/icons/sparkle.png"
import { handleHideElement, handleShowElement } from '../../utils/handleFunctions'

const Intro = () => {

    return (
        <div className='intro-container'>
            <div className='intro-title-block title-block'>
                <p className='intro-title'>Building Learning Growing... Journey So Far</p>
            </div>
            <div className='intro-desc-block about-me-desc-block'>
                <p className='intro-desc about-me-desc'>I'm a Frontend Developer with <b>3.8</b> years of experience in <b>React.js, state management, Webflow, and vanilla JavaScript</b>. Starting as a Test Engineer, I developed a keen eye for detail and delivering bug-free solutions. <br></br>My passion for coding led me to transition into development, where I excel in creating seamless frontend experiences and gained backend skills with <b>Node.js and Express.js</b>.<br></br> I'm known for my perfectionist mindset and adaptability, aiming to grow into a <b>full-stack MERN</b> developer, crafting impactful solutions. <br></br><br></br>Let's <Link to="/contact-me" className='cta-button' onMouseEnter={handleHideElement} onMouseLeave={handleShowElement}>connect
                    <img src={sparkle} alt='sparkle' className='sparkle1' />
                    <img src={sparkle} alt='sparkle' className='sparkle2' />
                    <img src={sparkle} alt='sparkle' className='sparkle3' />
                    <img src={sparkle} alt='sparkle' className='sparkle4' />
                    <img src={sparkle} alt='sparkle' className='sparkle5' />
                </Link> to build something remarkable!</p>
            </div>
        </div >
    )
}

export default Intro
