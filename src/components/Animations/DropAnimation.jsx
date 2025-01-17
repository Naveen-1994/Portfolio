import React, { useEffect } from 'react'

const DropAnimation = () => {

    useEffect(() => {
        const drops = document.querySelectorAll('.dots-container');
        drops.forEach((drop) => {
            drop.style.setProperty("--d", `${Math.ceil(Math.random() * 10)}s`)
        })
    }, [])


    return (
        <div className='drops-animation-container'>
            <div className='dots-container'>
                <span className='shiny-dot-1'></span>
                <span className='shiny-dot-2'></span>
                <span className='shiny-dot-3'></span>
            </div>
            <div className='dots-container'>
                <span className='shiny-dot-1'></span>
                <span className='shiny-dot-2'></span>
                <span className='shiny-dot-3'></span>
            </div>
            <div className='dots-container'>
                <span className='shiny-dot-1'></span>
                <span className='shiny-dot-2'></span>
                <span className='shiny-dot-3'></span>
            </div>
            <div className='dots-container'>
                <span className='shiny-dot-1'></span>
                <span className='shiny-dot-2'></span>
                <span className='shiny-dot-3'></span>
            </div>
            <div className='dots-container'>
                <span className='shiny-dot-1'></span>
                <span className='shiny-dot-2'></span>
                <span className='shiny-dot-3'></span>
            </div>
            <div className='dots-container'>
                <span className='shiny-dot-1'></span>
                <span className='shiny-dot-2'></span>
                <span className='shiny-dot-3'></span>
            </div>
            <div className='dots-container'>
                <span className='shiny-dot-1'></span>
                <span className='shiny-dot-2'></span>
                <span className='shiny-dot-3'></span>
            </div>
        </div>
    )
}

export default DropAnimation