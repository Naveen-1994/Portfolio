import React, { useEffect } from 'react'

const Scrolldown = () => {

    useEffect(() => {
        const handleMOuseScroll = (e) => {
            const scrollElement = document.querySelector(".scrolldown-block");
            if (window.scrollY > 10) {
                scrollElement.style.display = "none"
            }
        }
        document.addEventListener("scroll", handleMOuseScroll)
        return () => document.removeEventListener("scroll", handleMOuseScroll)
    }, [])

    return (
        <div className='scrolldown-block'>
            <div className='scrolldown'></div>
        </div>
    )
}

export default Scrolldown