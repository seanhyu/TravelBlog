import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

import Ausangate2 from '../../assets/ausangate2.jpg'
import Ausangate from '../../assets/Ausangate.jpg'
import MachuPicchu from '../../assets/machuPicchu.jpg'

export function Peru () {
    return (
        <div>
            <Standard bgImg={Ausangate} text="Peru"/>
            <div className='container'> 
                <div className="all-text">
                    <p> Peru is a criminally underrated travel destination. From epic mountain views in the Andes, to incredible ruins like Macchu Picchu, and everything in between, Peru has something to offer for everyone. When I visited Peru, I spent 2 weeks in and around Cusco exploring, so this blog post only covers the Cusco area. </p>
                </div>
                <h3>Trek to Machu Picchu</h3>
                <div className="image-text">
                    <img src={MachuPicchu} alt="Machu Picchu" />
                    <p>Macchu Picchu is probably the most well-known attraction in Peru, and for good reason. Perched high up in the mountains of the Andes, the Incan ruins were left untouched for centuries until only just over 100 years ago, when it was "discovered" by a Yale professor. There are a few ways to get to Machu Picchu, but I recommend trekking there. There are two main treks that lead to Machu Picchu: the Salkantay and the Inca trail. <br/> <br/>The Inca trail goes past several ruins before approaching Machu Picchu from the famed Sun Gate. Tours for this trek often book out many months in advance, so you would need to plan very far ahead to book this trek. <br/> <br/>I did the Salkantay, which begins high up in the Andes Mountains at Lake Humanatay, and eventually descends into the jungle region before reaching Machu Picchu. This diverse trek provides the best of both nature and ruins, and I highly recommend it. </p>
                </div>
                <div className="all-text">
                    <p> When you arrive at Machu Picchu, you will have 4 options (A,B,C,D) for tours within the ruins. Generally tours A and B are the best for seeing the most iconic views of Machu Picchu, whereas tours C and D offer side excursions to viewpoints such as Huayna Picchu that offer stunning viewpoints from high up of the ruins. I did both tour A and tour D, and I highly recommend you do one of either A or B and one of either C or D to have the best viewpoints and experience!</p>
                </div>
                <h3>Ausangate Trek</h3>
                <div className="image-text">
                    <img src={Ausangate2} alt="Ausangate" />
                    <p>The Ausangate trek is one of the greatest alpine treks in the world. The trek circumnavigates the Ausangate Mountain, which at over 20,000 feet, is one of the tallest mountains in the world outside of the Himalayas. Usually completed over 4 days, the trek reaches elevations of over 17,000 feet, making it quite difficult. The trek can also be extended with a visit to the Rainbow Mountains, an option my group opted for and recommend. <br /><br /> We hired a private trekking tour package from HikeAusangate for $450 per person, which included all food, a guide, and accomodation (in tents). Our tour guide Andy was great, and our cook was especially incredible, creating gourmet meals even at elevations of 17,000 feet. We highly recommend their services! <br /><br /> This trek was definitely the highlight of Peru for me, alongside touring Machu Picchu. While the conditions can be quite difficult given the altitude, I highly suggest anyone who with a moderate level of fitness take on this epic challenge!</p>
                </div>
                <div className="linebreak"></div>
                <h3>Other attractions</h3>
                <div className="bullets">
                    <li>Rainbow Mountains: These colorful mountains are an Instagram feed classic. While photos online often over-saturate the colors of the mountain, the colors are still very cool in person, and I still highly recommend visiting.</li>
                    <li>Colca Canyon: One of the deepest canyons in the world, the scale of this canyon is awe-inspiring.</li>
                    <li>The Sacred Valley: Filled with ruins and other natural wonders, a tour of the Sacred Valley is a must for any Cusco itinerary.</li>
                    <li>Cusco Salt Mines: One of the most unique sights in Peru, these salt mines are often included in Sacred Valley tours, and are well worth the visit.</li>
                <div className="linebreak"></div>
                <div className="linebreak"></div>
                </div>
                
            </div>
        </div>
        
    )
}