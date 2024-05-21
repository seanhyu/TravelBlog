import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

import Dessert from '../../assets/qatarDessert.jpg'
import Souq from '../../assets/souqWaquif.jpg'
import Canal from '../../assets/doha.jpg'

export function Qatar() {
    return (
        <div>
            <Standard bgImg={Dessert} text="Qatar" />
            <div className='container'>
                <div className='all-text'>
                    <p>
                        Qatar is mostly known for its oil, and for being a layover for many people on their way to Asia on Qatar Airways. While I wouldn't dedicate an entire trip to Qatar, I really enjoyed my extended 2-day layover in Qatar, and would recommend others extend their layovers in Qatar by a day or two if possible to experience what the country has to offer. 
                    </p>
                </div>
                <div className='linebreak'/>
                <h3>The Pearl</h3>
                <div className='image-text'>
                    <img src={Canal} alt="The Pearl"/>
                    <p>
                        The Pearl is a man-made sequence of islands and penninsulas stretching over the Persian gulf that offers luxurious accomodations at relatively reasonable prices. From the air, the islands look like a giant pearl stretching out from the mainland, and is quite the sight to see from the plane when you land or depart from Doha's airport.
                        <br/><br/> While at the pearl, you can take a boat tour, walk along the many pathways that follow the waterline, or even explore Doha's version of the Venice canals. The area also has a lot of restaurants and shopping. 
                        <br/><br/>As with everything in Qatar, you are going to want to stay indoors for most of the mid-day time, and only go outside during the evening given the intense sun and heat that Qatar experiences. 
                        <br/><br/>One thing to note: Qatar does not allow any restaurant or shop to serve alcohol unless they are within an international hotel. Therefore, don't expect to find any drinks alongside your meals when you visit the country. While the country is relatively lenient towards tourists, they are still a conservative and very religious country so be sure to dress conservatively.
                    </p>
                </div>
                <h3>Souq Waqif</h3>
                <div className='image-text'>
                    <img src={Souq} alt="Souq Waqif"/>
                    <p>The Souq Waqif is a local market within Qatar with a lot of history and unique shopping. Here, you can find anything from arabic dates to jewelery.
                        <br/><br/>The area retains the region's roots from pre-oil times, while still showing the influences of the wealth the country amassed once it began exporting oil. The variety in shopping really is immense, from cheap and fun textiles, to luxurious products.
                        <br/><br/>Interestingly, because Qatar does not have any taxes, the price of gold in Qatar is significantly cheaper than it is in other countries. As a result, there are tons of stores that sell everything from gold jewelery to pure gold bars, all for great prices.
                        <br/><br/>I personally also thought the arabic dates that I got while shopping at the Souq Waqif were absolutely to die for, so I highly recommend trying some while you are there.
                        <br/><br/>One final thing to note: You should visit the Souq Waqif at night when the market is bustling with activity and most of the shops are open. If you visit during the day, many of the shops will be closed due to the intense heat. Beware also that the weekends in Qatar are Friday and Saturday, not Saturday and Sunday, so the hours of the stores vary based on this weekend schedule.
                    </p>
                </div>
                <div className='linebreak'/>
                <h3>Other attractions</h3>
                <div className='bullets'>
                    <li>Desert tours: I did one while at Qatar and it was very fun! The sand dunes in Qatar are massive and quite the sight to see, and you can also go sand boarding which I found really fun!</li>
                </div>
            </div>
        </div>
    )
}