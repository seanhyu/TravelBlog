import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

// Import images
import Tongariro from '../../assets/tongariro.jpg'
import EmeraldLake from '../../assets/emeraldLake.jpg'
import GlowWorm from '../../assets/glowWorm.jpeg'

// Displays the New Zealand page
export function NewZealand() {
    return (
        <div>
            <Standard bgImg={Tongariro} text="New Zealand" />
            <div className='container'>
                <div className='all-text'>New Zealand is a nature lover's paradise! From the volcanic landscapes of the north island to the fjords and glaciers of the south island, New Zealand is incredibly diverse in its offerings and well worth the long flight down under. When I visited New Zealand, I only had time to explore the North Island, so this blog will only be about my time in the North Island, but I will definitely be visiting the South Island in the future and will update this post at that time!</div>
                <div className='linebreak'/>
                <div className='all-text'>Note: New Zealand drives on the left side of the road, so be sure to consider that when deciding whether to visit and rent a car!</div>
                <div className='linebreak'/>
                <h3>Tongariro National Park</h3>
                <div className='image-text'>
                    <img src={EmeraldLake} alt="Emerald Lake" />
                    <p>Known for being one of the backdrops used in Lord of the Rings, Tongariro National Park boasts unique volcanic landscapes. Mount Ngauruhoe, pictured in the header, was actually the mountain used as Mount Doom in Lord of the Rings, and it's easy to see why: the shape of the volcano is almost a perfect cone. 
                        <br/><br/> Most visitors come to this national park to do the Tongariro Alpine Crossing, a 13-mile day-hike across the national park with awesome views of Mount Ngauruhoe and the surrounding emerald lakes and sulfur vents. This day-hike is a one-way trail, which means that you need to arrange accomodations to drop you off at the start and pick you up at the end of the trail on the other side of the park. There are many shuttle companies that offer a drop-off and pick-up service from your car at the main parking lot for a fee of around $30 USD per person.
                        <br/><br/> When I visited the park, I opted to do the longer Tongariro Northern Circuit trek, a 28-mile trek that extends the Tongariro Alpine crossing into a full loop and circumnavigates Mount Ngauruhoe. I did the hike over 2.5 days to give enough time to take in the scenery each day. 
                        <br/><br/> While I thought the trek was beautiful, I would actually recommend that others opt to do just the day-hike version. The best views of the multi-day trek were on the same portion of trail that overlapped with the day-hike, and while the rest of the trek was certaintly interesting, I left wishing that I had instead used that time exploring other areas of the North Island. However if you have time, the full circuit definitely provides great views all-around and is worth the trek!
                    </p>
                </div>
                <div className='linebreak' />
                <h3>Waitomo Glowworm Caves</h3>
                <div className='image-text'>
                    <img src={GlowWorm} alt="Waitomo Glowworm Caves" />
                    <p>
                        While Lord of the Rings attractions like Mount Ngauruhoe and the Hobbiton are probably the most well-known in New Zealand's North Island, the Waitomo Glowworm caves are an absolute hidden gem. These caves are full of glowworms what light up blue when noise is made, illuminating the entire cave a brilliant blue.
                        <br/><br/> One of the most popular ways to explore the glowworm caves is to go blackwater rafting. This is not normal rafting - you don't sit on a boat and sail through the waters of the caves. Instead, you are given these black inflatable donut tubes (think water park lazy rivers) and use them to drift with the current inside the caves for certain portions. For the tour I did, the tour guides actually taught us how to rappel so that we could rappel down into the caves to begin our journey.
                        <br/><br/> This was definitely the highlight of my New Zealand trip! The glowworms are really bright, and the whole tour felt like a cave-exploring adventure. All adventure-lovers will likely find this tour really fun! However, there are more tame version for those just seeking to see the glowworm caves and not rappel and blackwater raft.
                    </p>
                </div>
                <div className='linebreak'/>
                <h3>Additional attractions</h3>
                <div className='bullets'>
                    <li>Hobbiton: See the famous set from Lord of the Rings.</li>
                    <li>Sea kayaking: Offered in Auckland, sea kayaking tours allow you to visit many of the volcanic islands off the coast of Auckland</li>
                    <li>Egmont National Park: The famous Pouakai Crossing is located here, a roughly 13-mile day hike with incredible views of Taranaki Maunga volcano.</li>
                    <li>Cathedral Cove: A beautiful beach dotted with rock features</li>
                    <li>Rotorua: A volcanic region full of geysers and other geothermal features (think Yellowstone National Park).</li>
                </div>
                <div className='linebreak'/>
            </div>
        </div>
    )
}