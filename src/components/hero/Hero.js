import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './HeroStyles.css'

import Video from '../../assets/StabilizedVideo.m4v'

function Hero() {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={Video} type='video/mp4' />
            </video>
            <div className='overlay'></div>
            <div className='content'>
                <h1>Your Dream Trip Reimagined</h1>
                <form className='form'>
                    <div>
                        <input type="text" placeholder = "Search Destinations"/>
                    </div>
                    <div>
                        <button><AiOutlineSearch className='icon'/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero