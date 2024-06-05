import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

import TunnelView from '../../assets/TunnelView.jpg'
import HalfDome from '../../assets/halfDome.jpg'

export function Yosemite () {
    return (
        <div>
            <Standard bgImg={TunnelView} text="Yosemite" />
            <div className='container'>
                <div className='all-text'>
                    <p>Yosemite National Park is the crown jewel of the Sierra Nevadas. While a relaxed visit to Yosemite involving some short hikes and a bike rental can of course suffice, I believe Yosemite is best explored through some of its most challenging but unique hikes.</p>
                </div>
                <h3>Half Dome</h3>
                <div className='image-text'>
                    <img src={HalfDome} alt="Half Dome"/>
                    <p>
                        Half Dome is my favorite day-hike in the USA. As an adrenaline junkie, I absolutely loved dangling off the cables of half dome on my way to the top. For any adrenaline-lovers like me, Half Dome should absolutely be on your bucketlist.
                        <br/><br/>Unfortunately, what stops most people from hiking half dome is the permit system. Getting a day permit to hike Half Dome while the cables are up is quite difficult as the acceptance rates are often below 20% for a season. The pre-season lottery usually runs in April, where the vast majority of permits are given, and then a daily lottery which occurs 2-days before the permit date where the remaining spots are given.
                        <br/><br/>Additionally, you can also apply for a Wilderness Permit at several trailheads that include Half Dome permits. These trailheads are noted on Recreation.gov and are also in extremely high demand. The preseason lottery for these reservations occurs 6 months in advance, and the last-minute lottery occurs one week in advance.
                        <br/><br/>To maximize your chance of getting a permit, I would try to apply for Half Dome permits through both of these routes, starting with the wilderness permit and then if needed trying for the day-hike permit. If you land the wilderness permit, you can camp at Little Yosemite Valley Campground the night before your half dome ascent, and also potentially include a hike up to cloud's rest for the following day.
                        <br/><br/>I have been lucky enough to hike half dome twice, once through a backpacking trip and the other as a day-hike. I personally found the backpacking trip more enjoyable as the hike is quite long and having a stop overnight to shorten each day's distance makes the hike more enjoyable.
                        <br/><br/>If you do complete the hike as a day-hike, be ready for quite the adventure! The hike is approximately 15 miles in length and climbs over 5,000 feet in elevation. I would recommend starting very early (4 or 5am) to give yourself enough time to get up and back down before night falls.
                    </p>
                </div>
                <div className='linebreak' />
                <h3>Other spots</h3>
                <div className='bullets'>
                    <li>Clouds Rest: My second favorite hike in the park, this trail takes you on an exposed ridge with epic views of Half Dome and Yosemite Valley</li>
                    <li>Tunnel View: The classic Instagram shot of Yosemite Valley - note you must use the Park's South Entrance to get this view as you enter the park.</li>
                    <li>Vernal and Nevada Falls: a classic hike for those who don't complete the full half-dome hike</li>
                    <li>Wapama Falls: a hidden gem in the Hetch Hetchy area of Yosemite that I was able to enjoy with almost no crowds</li>
                </div>
            </div>
        </div>

    )
}