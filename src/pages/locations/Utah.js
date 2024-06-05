import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

import Subway from '../../assets/subway.jpg'

export function Utah() {
    return (
        <div>
            <Standard bgImg={Subway} text="Utah" />
            <div className='container'>
                <div className='all-text'>
                    <p>Utah is my favorite state in the USA! The state has some of the most other-worldly scenery in the world, and is home to 5 epic national parks. There are way too many places in Utah to cover in detail, so I will go over Zion National Park in detail since it is my favorite national park in the USA, and then list out some of my other favorite hikes.</p>
                </div>
                <h3>Zion National Park</h3>
                <div className='image-text'>
                    <img src={Subway} alt="The Subway" />
                    <p>
                        I have been to Zion 4 times and I absolutely LOVE the park. It is my favorite national park in the USA by a decent margin, and I've been to about 20 U.S. National Parks. The park tends to get overcrowded during the summer months, so I recommend visiting during September or October instead of peak season to avoid some of the crowds and also see Zion's fall foliage.
                        <br/><br/> Zion is most known for 3 of its hikes: Angel's Landing, the Narrows, and the Subway. 
                        <br/><br/> Angel's Landing is often referred to as America's most dangerous hike, but I don't think the hike deserves this reputation. The videos online of the hike always depict the trail as being more narrow than it actually is in real life. In reality, the trail is almost always more than 4 feet wide, and can be done without the rope for the vast majority of the hike.
                        That doesn't make the hike less fun though! I really enjoyed hiking to Angel's Landing, as it has great views all along the hike and definitely gets the adrenaline juices flowing. To do Angel's Landing, you will need to apply for a permit, either through the early lottery which is seasonal, or through the last-minute drawing which occurs 2-days before the valid date. You can apply for the permit on Recreation.gov. 
                        <br/><br/> The Narrows also needs no introduction. It is a massive slot canyon carved by the Virgin river, through which you walk in to get to the famous Wall Street area. To hike the Narrows, I recommend renting water shoes and other gear (depending on the temperature) from Zion Outfitters. Then, you should hike into the Narrows to at least the splitting point between Orderville Canyon and the main Narrows slot canyon for the best views (this is the area known as Wall Street). During the summer, this trek can get VERY crowded so again I recommend visiting in September or October to avoid these crowds. Also note that if you visit during Spring, the Narrows will likely be closed due to high water flow from the Virgin river.
                        <br/><br/> The Subway is my favorite hike in the park. You can either complete the Subway "Top-Down" or "Bottom-Up". If you are able to rappel, you should absolutely do the hike top-down as this lets through-hike lets you see the full Subway. I unfortunately have not done the Subway Top-Down yet, but plan to do so in the near future! I did the Subway Bottom-up, which doesn't require any rappeling and is an out-and-back trail. This version only lets you see about 1/3 of the Subway, but this third is the best part of the Subway so it is still more than worth the trek! You need a permit to hike to the Subway, and the application/reservation can be found on Zion's own wilderneess permits site rather than on Recreation.gov.
                    </p>
                </div>
                <div className='linebreak'/>
                <h3>Other Destinations</h3>
                <div className='bullets'>
                    <li>Bryce Canyon National Park: A small national park next to Zion with dramatic hoodoos that is worth a day-trip to visit.</li>
                    <li>Goblin Valley: A crazy collection of weirdly shaped red rocks that resemble goblins!</li>
                    <li>Bentonite Hills: An absolutely epic spot in Capitol Reef National Park that can be accessed only using a high-rise 4-wheel drive vehicle.</li>
                    <li>Grand Stairs Escalante National Monument: A must-do if you have a high-rise 4-wheel drive vehicle, this national monument has some of my favorite hikes in the USA, including Reflection Canyon, Cosmic Ashtray, Coyote Gulch, and Peekaboo and Spooky Gulch.</li>
                    <li>Arches National Park: Another one of Utah's Mighty 5 National Parks. Definitely recommend doing the Devil's Garden and Delicate Arches trails!</li>
                    <li>Canyonlands National Park: Boasts massive canyon views similar to the Grand Canyon along with many other views!</li>
                </div>
                <div className='linebreak'/>
            </div>
        </div>
    )
}