import React, { useEffect } from 'react'

const FloatingWords = () => {

    const floatingWords = [
        { word: "A", positions: [30] },
        { word: "Frontend", positions: [40, -60, -30, 70, 10, -30, 50, 40] },
        { word: "Developer", positions: [50, -50, -40, 60, 20, -20, 40, 60, 30] }
    ]

    useEffect(() => {
        const elements = document.querySelectorAll(".letter");
        const floatEffect = () => {
            elements.forEach((letter) => {
                const randomX = Math.random() * 120 - 60; // Random movement on the X-axis
                const randomY = Math.random() * 80 - 50; // Random movement on the Y-axis
                letter.style.setProperty('--x', `${randomX}px`);
                letter.style.setProperty('--y', `${randomY}px`);
            });
        };
        const interval = setInterval(floatEffect, 1000);
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);


    return (
        <div className='hover-effect'>
            {
                floatingWords.map((wordObj, id) => (
                    < div key={`${wordObj.word}${id}`} className='floating-word' >
                        {
                            wordObj.word.split('').map((letter, letterIndex) => (
                                <span key={`${letter}${letterIndex}`} className='letter'
                                    style={{
                                        "--x": `${wordObj.positions[letterIndex]}px`,
                                        "--y": `${Math.random() * 200 - 100}px`
                                    }}>
                                    {letter}
                                </span>
                            ))
                        }
                    </div >
                ))
            }
        </div>
    )
}

export default FloatingWords