import React from 'react'
import './HeroStyles.css'

// import image
import Towers from '../../assets/patagoniaTowers.jpg'

// Displays the background image of the home page
function Hero() {
    return (
        <div className='hero'>
            <img src={Towers} alt="Towers" />
            <div className='content'>
                <h1>Your Dream Trip Reimagined</h1>
            </div>
        </div>
    )
}

export default Hero