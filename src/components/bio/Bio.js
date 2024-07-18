import React from 'react'
import './BioStyles.css'

// import portrait image
import Portrait from '../../assets/portrait.jpg'

// bio content on the home page
function Bio() {
    return (
        <div className='bio'> 
            <div className='container'>
                <div className = 'bio-container'>
                    <img className = 'img-span' src={Portrait} alt='Sean' />
                    <div className='bio-text'>
                        <p>
                            Hey there, I'm Sean! I am a travel and backpacking fanatic who has been to 6 continents and over 30 countries. I'm excited to share everything I've learned over the course of my trips to help you make the most out of your next adventure. I hope you find this resource useful for your trip planning!
                        </p>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Bio