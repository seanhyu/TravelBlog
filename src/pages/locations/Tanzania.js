import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

// Import images
import Kilimanjaro from '../../assets/kilimanjaro.jpg'
import Team from '../../assets/kiliTeam.jpg'
import Summit from '../../assets/kiliSummit.jpg'

// Displays the Kilimanjaro page
export function Tanzania() {
    return (
        <div>
            <Standard bgImg={Kilimanjaro} text="Tanzania" />
            <div className='container'>
                <div className='all-text'>
                    <p>
                        Unlike many of the other countries I have been to where I typically was looking to visit multiple attractions, I visited Tanzania with one goal in mind: to summit Kilimanjaro. Kilimanjaro is the tallest mountain in Africa, and one of the Seven Summits of the world. 
                        <br/><br/>However, Tanzania has many other things to offer, most notably their safari adventures. Personally though, I was blown away by the hospitality I received and really enjoyed leasrning about the culture and history of the country through speaking with the guides that trekked with us. 
                        <br/><br/>Therefore, unlike other countries where I often left with tons of memeories about the views but not as many about my interactions with the local people, I actually left Tanzania with a much bigger impression about the amazing people and the culture of the country rather than the scenery! </p>
                </div>
                <div className='linebreak'/>
                <h3>Kilimanjaro: The trekking group</h3>
                <div className='image-text'>
                    <img src={Team} alt="Altezza Travel team" />
                    <p>
                        To climb Kilimanjaro, you are required to join a tour. I climbed Kilimanjaro with Altezza Travel. If you book a trek to summit Kilimankaro, I would highly recommend choosing a tour agency (like Altezza Travel) that partners with the Kilimanjaro Porters Assistance Project. This nonprofits helps the porters and guides in Tanzania fight for better pay and working conditions. The work on Kilimanjaro is grueling, and this is the least we can do to make sure those who helped us get to the summit are compensated for their incredible work.
                        <br/><br/>The number of people it takes to support a single summit group is insane. Our group had 12 participants, and 50 porters and gudies working to support us. Every porter and guide I met on my trek was extremely professional and positive, despite the difficulty of their jobs. I truly have the utmost of respect for the staff who helped us reach the summit, and sincerely hope that anyone who chooses to climb Kilimanjaro does so with a company that is part of KPAP. 
                        <br/><br/>I would also highly recommend bringing extra cash for tip. While the trekking agency I trekked with recommended bringing $300, most of my group's participants including myself ended up tipping a lot more given how INCREDIBLE of a job the workers did. Since there are virtually no ATM's in Tanzania, you will need to bring more cash if you would like to tip the porters and guides.
                    </p>
                </div>
                <div className='linebreak'/>
                <h3>Kilimanjaro: The climbing experience</h3>
                <div className='image-text'>
                    <img src={Summit} alt="Summit of Kilimanjaro"/>
                    <p>Climbing Kilimanjaro requires a decent amount of preparation beforehand. First off, you will need to get the proper vaccines to keep you safe during the trek, and get in shape to prepare for the trek.
                        <br/><br/>The difficulty for summiting Kilimanjaro comes mainly from the altitude gain given that the trek is rather short, at under 35 miles. Over the course of a typical 7-day trek, you spend the first 5 days climbing, and then the last 2 days descending. However, the elevation gain is not linear by any means. When you first land at Kilimanjaro Airport, you are standing at basically sea level. Then on the first day, you drive all the way up to 11,000 feet and begin your trek from there. This rapid ascent to 11,000+ feet can already cause altitude sickness symptoms for some.
                        <br/><br/> In addition, because the highest source of water lies only at around 13,000 feet, most tours camp no higher than 13,000 feet for any of the nights except the night before the summit. And most tours also don't trek above 15,000 feet until summit day. Considering the summit of Kilimanjaro stands at over 19,000 feet, this makes for a rough acclimitization profile, which results in varying symptoms for different people throughout the trek, particularly on summit day. 
                        <br/><br/>Unfortunately, your body's ability to handle altitude cannot be trained through anything but exposure to high altitude itself. Therefore, while you can and should train as much as possible to be in shape for the climb, your body's ability to adapt to altitude will ultimately determine whether you are able to summit. I highly recommend doing as long of a tour as possible to maximize the amount of time you give your body to acclimatize to the altitude, significantly increasing your chances of summitting. 
                        <br/><br/>During the trek, our tour company did absolutely everything they could to help us reach the summit. The guides provided us with obscene quantities of food (so much so that I ended up gaining 3 pounds from this trek), had porters to carry all the equipment we needed so that we could each just carry daypacks, and provided water, medicine, and anything else that we could possibly need during the trek. The guides were super open to talking with us, much more so than guides from other tours in other places I've been to, and I spent many hours each day just chatting with them to learn about their daily lives and get to know them on a more personal level. 
                        <br/><br/>When it comes to summit day, there really is nothing that can prepare you for this extremely difficult day. The previous day, you climb from 13,000 feet to 15,500 feet, and then rest during the afternoon. Then at night, you begin your ascent to the summit with the goal of reaching the summit for sunrise. Given that in just a 24-hour period you ascend over 6,000 feet in altitude, almost every person got some form of altitude sickness during summit day. For me, this manifested in a brutal headache, which when combined with the below 0 degrees Fahrenheit temperatures we were climbing in, made for a grueling experience. However, the guides did their absolute best to maintain a positive environment, singing and chanting the entire way up. I really cannot stress enough how incredible of a job they did during the entire trek.
                    </p>
                </div>
                <div className='linebreak'/>
                <h3>Final thoughts</h3>
                <div className='all-text'>
                    <p>
                        While most people come to Kilimanjaro to complete a bucket-list item, I think a visit to Tanzania goes way beyond just summiting Kilimanjaro. The incredible people I met there were the clear highlight of the trip for me, and I hope everyone gets the opportunity to visit this amazing country once in their lifetime and experience Tanzanian culture and hospitality for themselves.
                    </p>
                </div>
            </div>
        </div>
    )
}