import React from 'react'

const ScrollingText = () => {
    return (
        <>
            <div className='scrolling-text-block'>
                <p className='scroll-text scroll-left'>DESIGN DESIGN DESIGN DESIGN</p>
                <p aria-hidden="true" className='scroll-text scroll-left'>DESIGN DESIGN DESIGN DESIGN</p>
            </div>
            <div className='scrolling-text-block'>
                <p className='scroll-text scroll-right'>DEVELOP DEVELOP DEVELOP DEVELOP</p>
                <p aria-hidden="true" className='scroll-text scroll-right'>DEVELOP DEVELOP DEVELOP DEVELOP</p>
            </div>
            <div className='scrolling-text-block'>
                <p className='scroll-text scroll-left'>DEBUG DEBUG DEBUG DEBUG</p>
                <p aria-hidden="true" className='scroll-text scroll-left'>DEBUG DEBUG DEBUG DEBUG</p>
            </div>
            <div className='scrolling-text-block'>
                <p className='scroll-text scroll-right'>DEPLOY DEPLOY DEPLOY DEPLOY</p>
                <p aria-hidden="true" className='scroll-text scroll-right'>DEPLOY DEPLOY DEPLOY DEPLOY</p>
            </div>
        </>
    )
}

export default ScrollingText