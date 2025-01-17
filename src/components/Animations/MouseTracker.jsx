import React, { useEffect } from 'react'

const MouseTracker = () => {

    useEffect(() => {
        let mouseX = 0, mouseY = 0;
        let circleX = 0, circleY = 0;
        let dotX = 0, dotY = 0;
        const followCircle = document.querySelector(".followCircle");
        const followDot = document.querySelector(".followDot");
        const trackCursorPosition = (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
        }
        const addStyles = () => {
            circleX += (mouseX - circleX) / 15;
            circleY += (mouseY - circleY) / 15;
            dotX += (mouseX - dotX) / 25;
            dotY += (mouseY - dotY) / 25;
            followCircle.style.left = `${circleX}px`;
            followCircle.style.top = `${circleY}px`;
            followDot.style.left = `${dotX}px`;
            followDot.style.top = `${dotY}px`;
        }
        window.addEventListener("mousemove", trackCursorPosition)
        setInterval(addStyles, 20)

        return () => {
            window.removeEventListener("mousemove", trackCursorPosition)
            clearInterval(addStyles)
        }
    }, [])

    return (
        <>
            <div className='followCircle'></div>
            <div className='followDot'></div>
        </>
    )
}

export default MouseTracker