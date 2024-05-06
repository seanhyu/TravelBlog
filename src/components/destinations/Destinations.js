import React from 'react'
import './DestinationsStyles.css'

import IcelandGlacier from '../../assets/glacier.jpg'
import Ausangate from '../../assets/Ausangate.jpg'
import Banff from '../../assets/banff.jpg'
import Tongariro from '../../assets/tongariro.jpg'
import Everest from '../../assets/everest.jpg'


function Destinations() {
    return (
        <div className='destinations'>
            <div className='container'>
                <h1>Popular Destinations</h1>
                <div className='img-container'>
                    <img className = 'span-3 image-grid-row-2' src={Ausangate} alt = "Peru" />
                    <img src={Everest} alt = "Nepal" />
                    <img src={Tongariro} alt = "New Zealand" />
                    <img src={IcelandGlacier} alt = "Iceland" />
                    <img src={Banff} alt = "Banff" />
                </div>
            </div>
            
        </div>
    )
}

export default Destinations