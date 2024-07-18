import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

// Import images
import Lauterbrunnen from '../../assets/lauterbrunnen.jpg'
import Chapel from '../../assets/chapel.jpg'
import MurrenP from '../../assets/murrenPortrait.jpg'

// Displays the Switzerland page
export function Switzerland() {
    return (
        <div>
            <Standard bgImg={Lauterbrunnen} text="Switzerland" />
            <div className='container'>
                <div className='all-text'>When it comes to top travel destinations, Switzerland is among the most sought-after because of its picteresque villages and incredible scenery. However, experiencing that Swiss charm comes at a cost: Switzerland is easily the most expensive country I've ever visited. I only spent 3 days in Switzerland given the exorbitant costs of the country, and chose my itinerary based on activities and sites that I thought were truly one-of-a-kind. </div>
                <div className='linebreak'/>
                <h3>Lauterbrunnen</h3>
                <div className='image-text'>
                    <img src={Chapel} alt="Lauterbrunnen" />
                    <p>Lauterbrunnen valley is in my opinion the crown jewel of the Swiss Alps. The sheer cliffs, countless waterfalls, and mountain backdrop combine to create the a valley that looks like it came straight from a fairytale. 
                        <br/><br/>When I first arrived at Lauterbrunnen, I did what everyone else probably does first: I went hunting for the classic Instagram shot of Lauterbrunnen Valley with the white chapel in the middle. To do this, you need to visit Staubbachfall Viewpoint. For those who take the train to Lauterbrunnen, this viewpoint is only a 5 minute walk from the train station! 
                        <br/><br/>However, my favorite view of the valley actually came from the town of Wengwald. To get here, just take the train from Lauterbrunnen valley to Wengwald train station, and then upon getting off the train, make a right and walk along the trail until the valley comes into site. Coming to this bird's-eye view of the valley during sunset allows you to capture the entire valley along with the glowing snow peaks illuminated red by the sunset!
                        <br/><br/>There are a lot of options for activities to do in the Lauterbrunnen area. You can hike to different waterfalls, rent a bicycle and bike through the valley, or take lifts up to the top of the cliffs to enjoy views from up above the valley.
                    </p>
                </div>
                <div className='image-text'>
                    <img src={MurrenP} alt="Murren Via Ferrata"/>
                    <p>For those who are seeking some adrenaline, I highly recommend doing the Murren Via Ferrata! This was easily the highlight of my short trip to Switzerland.
                    <br/><br/>Not for the faint of heart, this via ferrata dangles you hundreds of feet over the valley floor, supported by just some iron rungs for your feet and a cable for you to clip on to. The views you get here are incredible, and the exhiliration of hanging suspended in the air over the valley makes the experience super fun (for those who enjoy heights). Of course, if you are not comfortable with heights, please do not attempt this via ferrata!
                    <br/><br/>If you have via ferrata gear and experience, you can do this via ferrata for free as it is a public trail. However, this was my first time attempting a via ferrata so I went with a tour company who gave us equipment and taught us how to traverse via ferratas safely. As with everything in Switzerland, this tour was quite expensive (150 CHF) but given there is only one tour operator in the area, you don't really have any other options. The guides were very professional, but didn't provide us with any new information that couldn't be found with a simple YouTube video, so if you have your own gear or can rent it prior to coming to Lauterbrunnen, you can definitely save the money and go on your own.
                    </p>
                </div>
                <div className='linebreak'/>
                <h3>Other attractions</h3>
                <div className='bullets'>
                    <li>The Matterhon: Probably the most iconic mountain in Switzerland due to its unique shape</li>
                    <li>Jungfraujoch: Known as "The Top of Europe", this extremely expensive attraction takes visitors to the top of the Jungfrau massif. I personally do not think this excursion is worth it, but it is definitely popular.</li>
                    <li>Lucerne: This idealic city is one of the prettiest in the world in my opinion, and well worth a stop to experience some Swiss charm!</li>
                    <li>Interlaken: This is basically a basecamp for a bunch of really cool areas, including Lauterbrunnen valley and the Jungfraujoch, but it offers many cool experiences locally as well.</li>
                </div>
                <div className='linebreak'/>
            </div>
        </div>
    )
}