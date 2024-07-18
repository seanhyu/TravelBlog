import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

// Import images
import Snowdonia from '../../assets/snowdonia.jpg'
import Cliffs from '../../assets/chalkCliffs.jpg'
import Stonehenge from '../../assets/stonehenge.jpg'

// Displays the UK page
export function UK() {
    return (
        <div>
            <Standard bgImg={Stonehenge} text="United Kingdom" />
            <div className='container'>
                <div className='all-text'>
                    <p>
                        The U.K. might be known mainly for the sights of London, but the country has a lot more to offer than just London. From the natural beauty of Snowdonia National park, to the ancient history found at Stonehenge and Bath, the country has such diverse offerings. I spent a month in the U.K. and was able to visit England and Wales, so this post will focus on those two countries, but I know Scotland has a lot to offer and I will update this post accordingly once I get the chance to visit Scotland.  
                    </p>
                </div>
                <div className='linebreak'/>
                <h3>The Seven Sisters Cliffs</h3>
                <div className='image-text'>
                    <img src={Cliffs} alt="The Seven Sisters Cliffs" />
                    <p>
                        The Seven Sisters Cliffs are truly a unique destination. Located along the south coast of England, these white chalk cliffs really are a sight to behold. While the Cliffs of Dover might be more famous, the Seven Sisters Cliffs are more picturesque and easier to capture, and I think more worth the visit.
                        <br/><br/>When I visited, I hiked the one-way trek from Seaford to Eastbourne. This 12-mile hike traverses the best parts of the cliffs, with views both from the top of the cliffs as well as on the beaches looking up to them. I recommend completing the full-hike, as it is mostly flat and the views are incredible throughout!
                        <br/><br/>If you are looking to shorten the hike a bit while still maintaining all the views, an easy way to shorten the hike is to cut out the hike back to the road at the Cuckmere river and instead just walk through the river. I did this when I completed the hike and it shortened the trek by 2 miles, and the river is often very low flowing as it crosses the beach and empties into the ocean, making it easy to walk across.
                        <br/><br/>To complete this trek, you can either take the train to the Seaford station, complete the trek, and then take the train back from the Eastbourne station, or if you have two cars, you can park one at each side. If neither option is possible, I would recommend going to the Birling gap and hiking in either direction to get many of the best views while still returning to the same trailhead at the end.
                    </p>
                </div>
                <div className='linebreak'/>
                <h3>Snowdonia National Park</h3>
                <div className='image-text'>
                    <img src={Snowdonia} alt="Snowdonia National Park" />
                    <p>
                        Located in Wales, Snowdonia National Park is dotted with dramatic green mountains and deep-blue alpine lakes. At the center of the park is the mountain Snowdon, from which the park gets its name. For those who have a car, Snowdonia has many great sights to admire across the park, however if you do not have a car, you can take a train and bus to the base of Snowdon itself and hike one of the many trails around and to the top of Snowdon.
                        <br/><br/>The most famous and notorious hike in Snowdonia is the Horseshoe. This epic day-hike climbs up the terrifying Crib Goch ridge, and eventually reaches the summit of Snowdon on this ridge before wrapping around the ridge on the opposite side of Snowdon and returning to the trailhead. This hike is not for the faint of heart! Of all the treks that I have done, the Snowdon horseshoe is the most sketchy one I have done!
                        <br/><br/>The section that traverses Crib Goch features a knife-edged ridge that is so narrow that many people traverse the ridge with one leg on each side of the ridge. Crib Goch has unfortunately seen deaths almost every year so this hike should absolutely not be attempted by anyone with any sort of fear of heights. Please also do not attempt this hike unless you have some experience with scrambling, as while this hike is only rated a grade-1 scramble, the consequences of slipping are fatal.
                        <br/><br/>If you are not fond of crazy adventures, there are many other options for hikes that summit Snowdon, all with equally stunning views! I recommend the Pyg and Miner's track, which tours some of the lakes beneath Snowdon before ascending to the mountain's summit. 
                    </p>
                </div>
                <div className='linebreak'/>
                <h3>Other attractions</h3>
                <div className='bullets'>
                    <li>Stonehenge: This prehistoric site is one of the Wonders of the World and features a truly fascinating and mysterious backstory.</li>
                    <li>Bath: This unique town features buildings that are all made of the same white-tan-ish material, making for a very unique town to visit. The town also has preserved baths that were used by the Romans which were really interesting to explore.</li>
                    <li>Tower of London: This was my favorite attraction within London, and a must-do while in the city!</li>
                    <li>Churchill's War Rooms: This museum shows some of the bunkers from which Churchill and his staff directed World War II. One of the most underrated museums in London, I found the war rooms to be fascinating.</li>
                </div>
                <div className='linebreak'/>
            </div>
        </div>
    )
}