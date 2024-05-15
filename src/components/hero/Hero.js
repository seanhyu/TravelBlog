import React from 'react'
import './HeroStyles.css'

import Video from '../../assets/StabilizedVideo.m4v'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Your Dream Trip Reimagined</h1>
            </div>
        </div>
    )
}

export default Hero