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
                <div className='linebreak' />
                <h3>Glacier Trekking</h3>
                <div className='all-text'>
                    <p>While at Glacier Grey, you have the option to book a glacier trekking tour. If you have never hiked on a glacier before, I would highly recommend trying it in Patagonia! I have hiked on glaciers in Alaska, Iceland, and Patagonia, and in my opinion, the glaciers in Patagonia are much cooler, with much deeper shades of blue. While not a must if you are short on time or worried about endurance, I think it's a worthwhile side excursion for anyone completing the O-trek in 8 days, since Day 5 (from Glacier Grey to Paine Grande) is a relatively short and easy day, which allows you to do the glacier trekking in the morning first. </p>
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
                <div className='linebreak' />
                <h3>Logistics & Accomodation</h3>
                <div className='all-text'>
                    <h4>Getting to Torres Del Paine:</h4>
                    <p>To get to Torres Del Paine National Park, I recommend flying directly to Puerto Natales. While you can also fly to Punta Arenas, you would then have to take a long bus ride to get to Puerto Natales, which could needlessly lengthen your trip by up to 2 days. From Puerto Natales, you need to book a bus from the city to Torres Del Paine. There are multiple companies that offer this route; I ended up riding with the company Big Sur.</p> 
                    <h4>Booking the trek</h4>
                    <p>Both the O Circuit and the W trek sell out very early. You should plan to book campsites at least 6 months in advance for the best availability. I booked only 4 months in advance and was unable to find reservations for the Chileno campsite, which made my trek to Mirador Las Torres for sunrise much longer. 
                        <br/><br/>I used the website BookingPatagonia to reserve my campsites. While you can do it on your own, you would need to coordinate amongst 3 campsite companies to find reservation spots since the campsites are split between 3 different companies. Booking Patagonia also handled the bus tickets from Puerto Natales to the national park for me. However, if you do choose to book everything on your own, you will be able to save the roughly $50 booking fee that BookingPatagonia charges.
                    </p>
                </div>
                
            </div>
        </div>
    )
}