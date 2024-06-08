import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

import MossCanyon from '../../assets/mossCanyon.jpg'
import Vestrahorn from '../../assets/vestrahorn.jpg'
import DiamondBeach from '../../assets/diamondBeach.jpg'
import Eruption from '../../assets/eruptions.jpg'

export function Iceland () {
    return (
        <div>
            <Standard bgImg={Vestrahorn} text="Iceland" />
            <div className='container'>
                <div className='all-text'>
                    <p>
                        When people ask for trip inspiration, I always ask if they have been to Iceland before. If they haven't, Iceland is always my first recommendation. Despite being smaller in land area than the state of Pennsylvania, Iceland has everything from glacier lagoons and massive waterfalls to volcanoes and moss canyons. The only downside to Iceland is the high expenses! But if you can stomach the high prices of the country, Iceland is an absolute must-visit for any nature-lover. 
                        <br/><br/> I have visited Iceland twice: once in the summer and once in the winter. Each season has its own sights to see, and therefore I have divided my post by season. If possible I highly recommend visiting Iceland in both seasons to experience everthing that Iceland offers!
                    </p>    
                </div>
                <h3>Summer</h3>
                <div className='image-text'>
                    <img src={MossCanyon} alt="Moss Canyons" />
                    <p>
                        Iceland shows off its incredible diversity best during the summer. The full ring road becomes easily accessible, and the high country roads open in late June, providing access to gems like Landmannalaguar. I recommend renting a car and driving around the full Ring Road (Route 1) to see the best of what Iceland provides. This itinerary alone would require at least one week to complete, and 
                        <br/><br/> contains enough destinations for a month-long trip! If you have more time, I would recommend adding on Landmannalaguar and other high country destinations in Iceland, as well as exploring the West Fjords and the Snaesfelless Penninsula.
                        <br/><br/>In my opinion, the best time to visit Iceland is in September. During this month, all of Iceland is still accessible, with the added bonus of the nights being dark enough for the chance to see the northern lights. The northern lights tend to be strongest during the fall and spring equinoxes, so if you are able to time your trip to be during a new moon near September 21st, this would be ideal.
                        <br/><br/>Now for some of my favorite stops on the ring road going in the clockwise direction during the summer...
                    </p>
                </div>
                <div className='bullets'>
                    <li>Kirkjufell Mountain: Technically not part of the ring road, this iconic mountain is Iceland's most famous and a worthy detour.</li>
                    <li>Hverir: An area full of unique volcanic features similar to those found in Yellowstone.</li>
                    <li>Detifoss: Europe's most powerful waterfall and definitely worth the 1-hour detour off the ring road.</li>
                    <li>Studlagil Canyon: An Instagram-famous canyon that looks gorgeous when the water is blue, so check the water color from the Main Access viewpoint first before embarking on the 6-mile hike to the canyon itself.</li>
                    <li>Vestrahorn: An absolutely stunning mountain situated behind a black sand beach that is a photographer's paradise.</li>
                    <li>Jokulsarlon Glacier Lagoon: Classic stop on the ring road, and more than worthy of that status despite the crowds.</li>
                    <li>Mulagljufur Canyon: Probably my favorite stop! This moss canyon (shown in the picture above) comes straight out of a fairytale.</li>
                    <li>Fjadragljufur Canyon: Made famous by Justin Bieber, this moss canyon is beautiful! Make sure to walk to the last viewpoint for the best view!</li>
                </div>
                <div className='all-text'>
                    <p>The examples provided here really are just scratching the surface! I'll finish off with a list of other destinations that I went to since there are simply too many: Hverfjall Volcano, Krafla Viti Crater, Hengifoss, Reynisfjara Beach, Skogafoss, Seljalandsfoss, Gljufrabui, and the Golden Circle.</p>
                </div>
                <div className='linebreak'/>
                <h3>Winter</h3>
                <div className='image-text'>
                    <img src={DiamondBeach} alt = "Diamond Beach"/>
                    <p>
                        Most people visit Iceland in the Winter with one goal in mind: the Northern lights. However, Iceland has much more to offer than just Northern Lights during the winter.
                        <br/><br/> For the winter, I recommend sticking to just the south coast of Iceland, as the roads in the north of the island often become impassable during this season due to the snow. In addition, keep in mind that the length of daylight during the winter in Iceland is very short, so you need to make the most out of the few hours of daylight you have! I recommend doing most of the driving during the darker hours for this reason. 
                        <br/><br/> The destinations to visit in the winter are some of the same as those in the latter half of the ring road during the summer, specifically after the Vestrahorn. During the winter, many of the glaciers look much more impressive, and I recommend focusing the trip heavily on exploring glaciers!
                        <br/><br/> For additional activities not included in the summer itinerary, I recommend doing an Ice Cave tour, exploring Svinafellsjokull, and visiting the beautiful diamond beach. During the summer, the ice blocks that make diamond beach famous are rather small, but during the winter these chunks are enormous! Diamond beach during sunset was my favorite stop in Iceland during the winter. 
                    </p>
                </div>
                <div className='linebreak' />
                <h3>Bonus: Volcanic Eruption</h3>
                <div className='image-text'>
                    <img src={Eruption} alt="Volcano Eruptions" />
                    <p>
                        If you are lucky enough to be in Iceland during a volcanic eruption, you should absolutely make a detour to go visit the eruption! In the last year alone, Iceland has already experienced over 5 eruptions. While this volcanic activity likely won't persist at this frequency, the island is always volcanically active so always be on the lookout for eruption news.
                        <br/><br/> In July 2023, the eruption was small enough that the Iceland government actually created trails for people to visit the eruption up close. If this is an option when you visit, PLEASE TAKE ADVANTAGE. This is an incredibly unique and once-in-a-lifetime experience to witness a volcanic eruption from up close!
                        <br/><br/> However, for most other eruptions, this is not possible as the eruptions are too large to be visited up close safely. This was the case when I visted in May 2024. While you can definitely view the eruption from the roads afar, the best way to experience these incredible phenomenon when there is no trail to the eruption site is on a helicopter tour. 
                        <br/><br/> I took the above photograph during my helicopter tour of the May 2024 eruption, and it was absolutely worth it! The price was quite steep at $480 (I booked with Glacier Heli) but the views you get are absolutely out of this world and are MORE THAN WORTH the price.
                    </p>
                </div>
                <div className='linebreak'/>
                
            </div>
            
        </div>

    )
}