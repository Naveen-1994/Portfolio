import React from 'react'

import { FaExternalLinkAlt } from "react-icons/fa";

import cardImg1 from "../../assets/images/tangent.png"
import cardImg2 from "../../assets/images/rosette.png"
import cardImg3 from "../../assets/images/dashboard.png"
import cardImg4 from "../../assets/images/website.png"
import cardImg5 from "../../assets/images/trestique.png"
import { handleHideElement, handleShowElement } from '../../utils/handleFunctions';

const Projects = () => {

    return (
        <div className='intro-container'>
            <div className='exp-title-block title-block'>
                <p className='exp-title'>Work Tales: <br></br>Projects <br></br>That Shaped<br></br> Me</p>
            </div>
            <div className='projects-container about-me-desc-block'>
                <div className='project-cards-block' onMouseEnter={handleHideElement} onMouseLeave={handleShowElement}>
                    <div className='project-card'>
                        <img src={cardImg1} alt="Tangent App"></img>
                        <div className='card-content'>
                            <a href='https://apps.shopify.com/tangent-1' className='project-link' target='_blank' rel='noreferrer'><FaExternalLinkAlt /></a>
                            <p className='card-title'>Tangent Skin & Hair Quiz</p>
                            <p className='card-desc'>
                                I developed a B2B quiz editor application using React.js, Redux Toolkit, and React Router, enabling e-commerce businesses to create fully customizable quizzes. The app integrates essential tools for streamlined quiz creation and is hosted on Shopify, ensuring compliance with Polaris design standards. This solution offers an intuitive and efficient experience for businesses looking to enhance customer engagement.
                            </p>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img src={cardImg2} alt='Rosette website bg'></img>
                        <div className='card-content'>
                            <a href='https://www.rosettehealth.ai/' className='project-link' target='_blank' rel='noreferrer'><FaExternalLinkAlt /></a>
                            <p className='card-title'>Rosette AI Powered Health Simulator</p>
                            <p className='card-desc'>
                                Developed a third-party application using React.js, React Query, and Redux Toolkit, enabling real-time updates for AI conversations through efficient polling. The app features a customized Bootstrap UI tailored to client requirements, delivering a unique user experience. Additionally, I built a generative AI-powered simulation platform to create diverse patient scenarios, enhancing training for healthcare providers.
                            </p>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img src={cardImg3} alt='Client dashboard'></img>
                        <div className='card-content'>
                            <p className='card-title'>Customer Dashboard</p>
                            <p className='card-desc'>
                                Developed a React.js single-page dashboard application using React Query for B2B clients to view and analyze quiz responses in real-time. The project features a responsive, modern UI built with Tailwind CSS, enhancing usability and accessibility. Advanced data visualization tools were integrated, providing clients with actionable insights to support informed decision-making.
                            </p>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img src={cardImg4} alt='Tangent Website'></img>
                        <div className='card-content'>
                            <a href='https://www.tangent.ai/' className='project-link' target='_blank' rel='noreferrer'><FaExternalLinkAlt /></a>
                            <p className='card-title'>Tangent AI Website</p>
                            <p className='card-desc'>
                                Designed and developed the Tangent AI website using Webflow and JavaScript, delivering a visually appealing and fully responsive experience across devices. Integrated a CMS for seamless blog management, enabling content writers to add posts effortlessly. Additionally, implemented an email trigger system to notify stakeholders of form submissions, streamlining communication and ensuring timely responses.
                            </p>
                        </div>
                    </div>
                    <div className='project-card'>
                        <img src={cardImg5} alt='Trestique'></img>
                        <div className='card-content'>
                            <a href='https://www.trestique.com/pages/makeup-routine-quiz-recommendation?resp_id=d233b310-41ac-479f-b237-cf8d87ef9077' className='project-link' target='_blank' rel='noreferrer'><FaExternalLinkAlt /></a>
                            <p className='card-title'>Trestique Recommendation</p>
                            <p className='card-desc'>
                                Developed an interactive webpage for a third-party client using Vanilla JavaScript, based on a provided Figma design. Enabled users to add products to the cart and fetch product details via HTTP GET requests. Integrated an external carousel package to style customer review cards, delivering a seamless and visually appealing user experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects