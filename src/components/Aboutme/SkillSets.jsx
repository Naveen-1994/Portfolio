import React from 'react'

import ReactJs from "../../assets/images/icons/React.svg";
import Redux from "../../assets/images/icons/Redux.svg";
import HTML5 from "../../assets/images/icons/HTML5.svg";
import CSS3 from "../../assets/images/icons/CSS3.svg";
import JavaScript from "../../assets/images/icons/JavaScript.svg";
import TypeScript from "../../assets/images/icons/TypeScript.svg";
import NodeJs from "../../assets/images/icons/Node.svg";
import Webflow from "../../assets/images/icons/Webflow.svg";
import WordPress from "../../assets/images/icons/WordPress.svg";
import TailwindCSS from "../../assets/images/icons/Tailwind.svg";
import Bootstrap from "../../assets/images/icons/Bootstrap.svg";
import ReactBootstrap from "../../assets/images/icons/ReactBootstrap.svg";
import SQLDeveloper from "../../assets/images/icons/SQLDeveloper.svg";
import MongoDB from "../../assets/images/icons/MongoDB.svg";
import GitHub from "../../assets/images/icons/GitHub.svg";
import GitLab from "../../assets/images/icons/GitLab.svg";
import Jenkins from "../../assets/images/icons/Jenkins.svg";
import Java from "../../assets/images/icons/Java.svg";
import Selenium from "../../assets/images/icons/Selenium.svg";

const SkillSets = () => {
    return (
        <div className='intro-container'>
            <div className='exp-title-block title-block'>
                <p className='exp-title'>The Skills <br></br>That Power<br></br> My <br></br> Projects</p>
            </div>
            <div className='projects-container about-me-desc-block'>
                <div className='skill-icon-block'>
                    <img src={ReactJs} alt='React' className='tech-icon' />
                    <img src={Redux} alt='Redux' className='tech-icon' />
                    <img src={HTML5} alt='HTML5' className='tech-icon' />
                    <img src={CSS3} alt='CSS3' className='tech-icon' />
                    <img src={JavaScript} alt='Javascript' className='tech-icon' />
                    <img src={TypeScript} alt='Typescript' className='tech-icon' />
                    <img src={NodeJs} alt='Nodejs' className='tech-icon' />
                    <img src={Webflow} alt='Webflow' className='tech-icon' />
                    <img src={WordPress} alt='Wordpress' className='tech-icon' />
                    <img src={TailwindCSS} alt='TailwindCSS' className='tech-icon' />
                    <img src={Bootstrap} alt='Bootstrap' className='tech-icon' />
                    <img src={ReactBootstrap} alt='ReactBoostrap' className='tech-icon' />
                    <img src={SQLDeveloper} alt='SQL Developer' className='tech-icon' />
                    <img src={MongoDB} alt='MOngoDB' className='tech-icon' />
                    <img src={GitHub} alt='Github' className='tech-icon' />
                    <img src={GitLab} alt='GitLab' className='tech-icon' />
                    <img src={Jenkins} alt='Jenkins' className='tech-icon' />
                    <img src={Java} alt='Java' className='tech-icon' />
                    <img src={Selenium} alt='Selenium' className='tech-icon' />
                </div>
            </div>
        </div>
    )
}

export default SkillSets