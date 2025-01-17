import React from 'react'
import { RiHome2Line } from "react-icons/ri";
import { LiaUserCircle } from "react-icons/lia";
import { PiContactlessPayment } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom"
import { handleHideElement, handleShowElement } from '../../utils/handleFunctions';




const Header = () => {
    const location = useLocation();

    return (
        <div className='header-container'
            onMouseOver={location.pathname !== '/' ? handleHideElement : null}
            onMouseLeave={location.pathname !== '/' ? handleShowElement : null}>
            <Link to="/" className={`header-path${location.pathname === '/' ? " active-link" : ""}`} title='Home'><RiHome2Line /></Link>
            <Link to="/about-me" className={`header-path${location.pathname === '/about-me' ? " active-link" : ""}`} title='About me' ><LiaUserCircle /></Link>
            <Link to="/contact-me" className={`header-path${location.pathname === '/contact-me' ? " active-link" : ""}`} title='Contact me' ><PiContactlessPayment /></Link>
        </div>
    )
}

export default Header