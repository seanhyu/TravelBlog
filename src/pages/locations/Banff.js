import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

import Moraine from '../../assets/banff.jpg'
import JohnstonLake from '../../assets/johnstonLake.jpeg'
import LakeLouise from '../../assets/lakeLouise.jpeg'
import PeytoLake from '../../assets/peytoLake.jpeg'

export function Banff () {
    return (
        <div>
            <Standard bgImg={JohnstonLake} text="Banff" />
            <div className='container'>
                <div className='all-text'>
                    <p>Banff is the perfect destination for anyone who wants to see incredible views without needing to hike a lot. The park has some of the prettiest glacial lakes I've ever seen, all within a few footsteps from your car! I visited in September 2023 with my parents, and they loved the easy accessibility of everything in the park. Given that most of the highlights are all located on one road (Icefields Parkway), I will list my favorite spots below and then delve quickly into some logistics.</p>
                </div>
                <h3>Best stops</h3>
                <div className='bullets'>
                    <li>Moraine Lake: Probably the most photographed lake in the world and for good reason... try to go for sunrise!</li>
                    <li>Lake Louise: Probably the second most photographed lake in the world... rent a kayak here!</li>
                    <li>Peyto lake: The perfect sky blue glacial lake surrounded by beautiful mountains</li>
                    <li>Bow lake: a large turqoise-colored lake again surrounded by beautiful mountains.</li>
                    <li>Johnston Canyon: A series of cascading waterfalls with beautiful glacial blue water.</li>
                </div>
                <div className='linebreak' />
                <div className='all-images'>
                    <img src={Moraine} alt='Moraine Lake' />
                    <img src={LakeLouise} alt="Lake Louise" />
                    <img src={PeytoLake} alt="Peyto Lake" />
                </div>
                <h3>A Note on Timing:</h3>
                <div className='all-text'>
                    <p>Banff National Park is best visited during the earlier parts of the summer, as well as during October. This is because in recent years during the later parts of the summer, wildfire smoke has tended to engulf the area, making it quite hazy. While this doesn't ruin the views completely, it does make everything much harder to see. We definitely suffered from some haze during our trip in September, and so I'd lookout for this if you are planning a trip to Banff.</p>
                </div>
            </div>
        </div>

    )
}