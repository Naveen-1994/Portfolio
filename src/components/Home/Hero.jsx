import React from 'react'
import ScrollingText from '../Animations/ScrollingText'
import FloatingWords from '../Animations/FloatingWords'
import sparkle from "../../assets/images/icons/sparkle.png"

const Hero = () => {


    return (
        <div className='hero-container'>
            <ScrollingText />
            <div className='profile-container'>
                <h1 className='greet-message'>Hi there, I'm</h1>
                <div className='intro-block'>
                    <h2 className='intro-message'>Naveen K,&ensp;</h2>
                    <FloatingWords />
                </div>
                <h3 className='tagline-message'>Transforming ideas into beautiful websites.</h3>
                <a className='download-resume cta-button' href='https://drive.google.com/file/d/1zkl7a0Zh35Dj2VtFLHeX3t92vmLwbCuV/view?usp=sharing' download target='_blank' rel='noreferrer'>Resume
                    <img src={sparkle} alt='sparkle' className='sparkle1' />
                    <img src={sparkle} alt='sparkle' className='sparkle2' />
                    <img src={sparkle} alt='sparkle' className='sparkle3' />
                    <img src={sparkle} alt='sparkle' className='sparkle4' />
                    <img src={sparkle} alt='sparkle' className='sparkle5' />
                </a>
            </div>
        </div>
    )
}

export default Hero