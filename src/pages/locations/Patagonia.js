import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

import Lake from '../../assets/patagoniaLake.jpg'
import Towers from '../../assets/patagoniaTowers.jpg'
import Glacier from '../../assets/glacierGrey.jpg'

export function Patagonia() {
    return (
        <div>
        <Standard bgImg={Lake} text="Patagonia"/>
            <div className='container'>
                <div className='all-text'>
                    <p>Patagonia's jagged peaks, massive glaciers, and vibrant turquoise lakes make for a magical combination. It's no wonder the founder of Patagonia named his company after this region. When I visited Patagonia, I only visited one national park (Torres Del Paine), but the region is incredibly large, with multiple national parks, and one could easily spend a month exploring the area. However, for this guide we will focus on Torres Del Paine and specifically the O and W treks. </p>
                </div>
                <h3>The O-Trek</h3>
                <div className='image-text'>
                    <img src={Glacier} alt="Glacier Grey" />
                    <p>
                        The O-trek is an 80-mile trek that circumnavigates the Paine Massif and is usually completed over 7-8 days. If you have the time, I highly suggest doing the full O-trek. Many of my favorite views from Patagonia came from the first half of the O, which the W skips. 
                        <br/><br/>The O-trek is done counter-clockwise, and you begin by trekking towards the backcountry area of Torres Del Paine National park. During these first 2-3 days, you leave all the crowds behind and experience the rawness of Chilean Patagonia at its best. The park only allows 100 people to start the O-trek every day, which limits the number of people you will encounter on the trek and makes for a much more enjoyable experience in my opinion.
                        <br/><br/>On the fourth day, you go over John Gardner Pass, which is one of the coolest views I've ever encountered. Having just climbed 2500 feet, you are rewarded with your first view of the spectacular Grey Glacier, shown to the left. Following this, the O merges with the W-trek.
                        <br/><br/>
                    </p>
                </div>
                <div className='linebreak'/>
                <h3>The W-Trek </h3>
                <div className='all-text'>
                    <p>
                        The W-trek simply refers to the second-half of the O-circuit, and covers roughly 40 miles and is usually completed over 3-4 days. This trek is very crowded and touristy, but the views make dealing with the crowds worth it. On day 2, trekkers have the option to visit Mirador Frances and Mirador Britanico. I thought Mirador Britanico was worth the trek, although if you are tired, cutting this portion is an easy way to save some miles.
                    </p>
                </div>
                <div className='image-text'>
                    <img src={Towers} alt="Mirador Las Torres" />
                    <p>
                        At the end of the W-trek is Mirador Las Torres, possibly the most iconic viewpoint in Patagonia. I highly recommend going to Mirador Las Torres for sunrise. The towers glow a brilliant red, which contrasts perfectly with the turquoise lake beneath as seen in my photo to the left. To see this alpenglow phenomenon, you actually need to arrive at the lake before sunrise, as the red glow often appears 10-20 minutes before the actual sunrise time.
                        <br/><br/>When I completed the trek in 2023, everyone who had done the O-trek alongside me for the past 7 days also went up to the towers (Mirador Las Torres) for sunrise, so this presented a great finale for the whole group. It was a great way to say goodbye to all the new friends I made on the trek! 
                        <br/><br/> If you plan on going to Mirador Las Torres for sunrise, you should try to book a reservation at the Chileno campsite for the night before. Unfortunately for me, Chileno was fully booked so I had to stay further away from the towers, and hike 6 miles with 2,700 feet elevation gain in complete darkness to go see the towers for sunrise. Save yourself the effort and book a site at Chileno early! 
                    </p>
                </div>
            </div>
        </div>
    )
}