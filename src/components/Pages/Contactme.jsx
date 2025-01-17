import React from 'react'
import ContactForm from '../Contactme/ContactForm'
import MouseTracker from '../Animations/MouseTracker'
import Blob from '../Animations/Blob'
import Whatsapp from '../Contactme/Whatsapp'

const Contactme = () => {

    return (
        <div className='contactme-container'>
            <Blob />
            <MouseTracker />
            <Whatsapp />
            <p className='contact-or'>OR</p>
            <ContactForm />
        </div>
    )
}

export default Contactme