import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

// Import images
import Everest from '../../assets/EBC.jpg'
import EverestSunset from '../../assets/everestSunset.jpg'
import RenjoLa from '../../assets/renjola.jpg'
import Gokyo from '../../assets/gokyo.jpg'

// Displays the Nepal page
export function Nepal () {
    return (
        <div>
            <Standard bgImg={Everest} text="Nepal" />
            <div className='container'>
                <div className='all-text'>
                    <p>When it comes to mountains, there is no country in the world quite like Nepal. The Himalayas are an incredible spectacle to see, and Nepal has some of the best that the Himalayas has to offer, none more famous than Mount Everest. Nepal holds a special place in my heart, as seeing Mount Everest has always been a bucket-list item for me. I believe every hiker needs to visit Nepal at least once in their lifetime, and experience the incredible scale and beauty of the Himalayas.</p>
                </div>
                <h3>The Three Passes Trek</h3>
                <div className='image-text'>
                    <img src={RenjoLa} alt="Everest at Sunset" />
                    <p>The Three Passes Trek is simply the greatest trek I have ever done. I started in the town of Salleri, at an elevation of only 5,000 feet, deep in the jungle-covered mountains that border the mighty Himalayas. I highly recommend you start here rather than at Lukla if you have the time (and the willpower). From here, you watch as the jungle slowly begins to thin and the temperature begins to drop as you gain elevation. <br /> <br />Then you merge with the trekkers that flew into Lukla, and enter the snow-capped Himalayas. The size of the mountains around you is absolutely awe-inspiring. You get your first glimpse of Everest not long after you exit the tree line. From here, it is incredible views in all directions, at all times. 
                    Once you reach Namche Bazaar, you diverge from the traditional Everest Base Camp trek. Here, you have the option to do the Three Passes Loop either in a clockwise or anti-clockwise direction. I recommend doing the trek in the clockwise direction as this leaves the best views in front of you rather than behind you, although the acclimitization profile of the route in this direction is somewhat more challenging. </p> 
                </div>        
                <div className='all-text'>
                    <p>You then begin to climb towards Renjo La pass, the first of three 17,000ft passes on the trek. Passing over Renjo La pass, you get your best birds-eye viewpoint of the Everest region (see image above). </p>
                </div>
                <div className='image-text'>
                    <img src={Gokyo} alt='Gokyo Lakes' />
                    <p>
                        As you descend from Renjo La Pass, you enter one of the most beautiful sections of the trek: the Gokyo lakes region. There are several lakes here, each a different shade of blue, all of them spectacular. You will spend your first night above 15,000 feet here, and then hike up Gokyo Ri for a sunrise view of Everest. After soaking in the sunrise view, you begin your trek towards Everest Base Camp.
                        <br /> <br /> The section from Gokyo to Everest Base Camp features a glacier crossing and another 17,000ft pass. By now, you are likely acclimatized to the altitude, so this pass shouldn't be as difficult. Along the way, you will catch a great view of Cho Oyu, the 6th tallest mountain in the world. Then you turn into Everest Valley, and get your first sight of the famed Khumbu glacier.
                        <br /> < br /> In stark contrast to much of the trek up to this point, the Everest Valley area is usually a circus of tourists. Most people visiting the Everest region hike the traditional Everest Base Camp trek, and the crowds on the trail here can be suffocating. 
                    </p>
                </div>
                <div className='all-text'>
                    <p>However, the crowds are here for good reason: Everest Valley is iconic and absolutely stunning. As you walk along the Khumbu Glacier towards Everest Base camp, you can see the towering ridgeline that makes up the Nepal-China border and features many of the tallest mountains in the world, Everest included. Eventually, you reach Gorak Shep, the final town before reaching Everest Base Camp. 
                        <br/><br/>Most people rest here for the night and climb up to Kala Pathur to get the most iconic view of Everest during sunrise. This is because Everest is often covered in clouds during the afternoon, and therefore going up for sunrise presents the best chance of seeing Everest without clouds. However, during sunrise, the sun rises behind Mount Everest, casting a giant shadown on the mountain itself. While this silhouette view is indeed cool to see, it doesn't allow you see the mountain itself in its full glory, and the colors are rather muted given the back-lit viewpoint.</p>
                </div>
                <div className='image-text'>
                    <img src={EverestSunset} alt="Everest at Sunset" />
                    <p>Therefore, if luck is on your side and the sky is clear as sunset approaches, I HIGHLY recommend you trek up Kala Pathur for sunset. I was extremely fortunate to have clear skies as sunset approached, so I began trekking up Kala Pathur around 4pm to catch the greatest of alpenglow spectacles. The best view of Everest isn't actually at the summit of Kala Pathur- it's approximately 2/3 up (the image to the left represents the view at this point). As the sun drops below the horizon, the entire ridgeline will begin to glow orange, and slowly the glow will fade upwards until only Everest is orange. This was my favorite view of the entire trek.
                    <br/><br/> The next day you will explore Everest Base Camp, which if you visit during April or May, will be full of people preparing for their summit attempts. I really enjoyed talking with some of the sherpas here, many of whom have summited Everest over 10 times! 
                    <br/><br/> Following Everest Base Camp, you will climb up the last of the three high passes, and catch glimpses of Lhotse (4th tallest mountain in the world) as well as Ama Dablam (known as the Matterhorn of the Himalayas). Finally, you begin your descent back towards Lukla (or Salleri if you started here).
                    </p>
                </div>
                <div className='all-text'>
                    <p>The Three Passes Trek is an epic journey that can take up to 3 weeks depending on your starting point and trekking pace. As of April 2024, Nepal now requires all hikers to be accompanied by a guide when trekking in the Everest region (Sagamartha National Park) so be sure to hire a  guide for this trek. You will likely need to hire a private guide (as did I) because most group tours only do the traditional Everest Base Camp trek. However, the extra cost is absoultely worth the incredible views and lack of crowds you get on the Three Passes Trek, and I hope everyone reading this gets to experience this journey once in their lifetime. </p>
                </div>
                <h3>Alternative treks</h3>
                <div className='bullets'>
                    <li>Everest Base Camp: The classic bucket-list hike</li>
                    <li>Annapurna Circuit: A once incredible trek that has been somewhat degraded by the construction of a new road along the trek, but still worth it</li>
                    <li>Manaslu Circuit: A more off-the-beaten-path trek for those who don't have as much time and want more solitude.</li>
                </div>
                <div className='linebreak'/>
                <div className='linebreak'/>
            </div>
        </div>
    )
}