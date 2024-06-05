import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

import SecondBeach from '../../assets/olympic.jpg'
import Rainforest from '../../assets/rainforest.jpg'
import RubyBeach from '../../assets/rubyBeach.jpg'
import StormKing from '../../assets/stormKing.jpg'

export function Olympic() {
    return (
        <div>
            <Standard bgImg={SecondBeach} text="Olympic" />
            <div className='container'>
                <div className='all-text'>
                    <p>Olympic National Park is the most diverse U.S. National Park within the contiguous 48 states. With its beautiful beaches, misty rainforests, and epic mountain views, the park has something to offer for everyone!</p>
                </div>
                <h3>My favorite spots:</h3>
                <div className='bullets'>
                    <li>Second Beach: (The photo at the top) This beautiful beach is the perfect place to catch a sunset</li>
                    <li>Rialto Beach: A fun beach with different sea stacks, rock formations, and tide pools to explore</li>
                    <li>Ruby Beach: Another classic West Coast beach with rock formations</li>
                    <li>Hoh Rainforest: My favorite spot in Olympic, this rainforest looks magical especially when it just a bit foggy. Perfect for a day when it rains!</li>
                    <li>Hurricane Ridge: Glorious mountain views on a ridgeline</li>
                    <li>Mount Storm King: A steep hike up to a great viewpoint of a lake with awesome mountain scenery as the backdrop.</li>
                </div>
                <div className='linebreak'/>
                <div className='all-images'>
                    <img src={Rainforest} alt="Hoh Rainforest" />
                    <img src={RubyBeach} alt="Ruby Beach"/>
                    <img src={StormKing} alt="Mount Storm King"/>
                </div>
                <div className='linebreak'></div>
                <h3>A Note on Timing:</h3>
                <div className='all-text'>
                    <p>Olympic National Park is susceptible to haze due to wildfire smoke from the surround region, especially during the later parts of the summer and into early fall. Therefore I recommend visiting either earlier in the summer or in later September to reduce the chances of having a lot of haze.</p>
                </div>
            </div>
        </div>
    )
}