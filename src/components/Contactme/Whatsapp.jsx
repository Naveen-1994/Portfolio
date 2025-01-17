import React from 'react'
import { RiWhatsappFill } from "react-icons/ri";


const Whatsapp = () => {
    return (
        <div className='whatsapp-contact-block'>
            <p className='whatsapp-title'>WhatsApp me</p>
            <a href='https://wa.me/918105504812?text=Hello%20Naveen!%20I%27m%20interested%20in%20discussing%20a%20front-end%20development%20project.%20Can%20we%20talk%3F' target='_blank' rel='noreferrer' className='whatsapp-link'><RiWhatsappFill /></a>
        </div>
    )
}

export default Whatsapp