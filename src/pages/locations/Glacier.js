import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

// Import images
import Highline from '../../assets/highline.jpg'
import Bear from '../../assets/bear.jpg'
import Grinell from '../../assets/grinellGlacier.jpg'
import CrackerLake from '../../assets/crackerLake.jpg'

// Displays the Glacier NP page
export function Glacier() {
    return (
        <div>
            <Standard bgImg={Highline} text="Glacier" />
            <div className='container'>
                <div className='all-text'>
                    <p>Glacier National Park is in my opinion the most scenic national park in the USA. Located near Kalispell, Montana, the park boasts beautiful mountains and glacial lakes, and an abundance of wildlife. </p>
                </div>
                <h3>Favorite Hikes</h3>
                <div className='bullets'>
                    <li>The Highline Trail: My favorite trail in the park, this 11-mile through-hike takes you on a tour of the mountains starting from Logan Pass on the Continental Divide. It is mostly downhill so despite its length it is a relatively easy hike! </li>
                    <li>Grinnell Glacier trail: This trail takes you past multiple glacial lakes of varying colors before ending at the small but still picturesque Grinnell Glacier </li>
                    <li>Hidden Lake: A short trail to a overlook of Hidden lake with lots of wildflowers along the way</li>
                    <li>Avalanche Lake: Another short trail that leads to Avalanche lake, which is a large glacial lake which avalanche-carved mountains as the backdrop</li>
                    <li>Cracker Lake: A beautiful sky blue to almost white lake which you can camp at as well</li>
                </div>
                <div className='linebreak'/>
                <div className='all-images'>
                    <img src={Grinell} alt="Grinell Glacier"/>
                    <img src={Bear} alt="Grizzly Bear"/>
                    <img src={CrackerLake} alt="Cracker Lake"/>
                </div>
                <h3>A Note on Wildlife</h3>
                <div className='all-text'>
                    <p>Glacier National Park is home to many bears, moose, and other wildlife. During my 6-day visit to the park, I saw 3 bears and 2 moose, including a bear encounter and a moose encounter in which each animal was only 30 feet away from me. While these animals are certainly breathtaking to witness, they can also be dangerous. 
                        Never hike in Glacier National Park without bear spray! You can rent it from the airport for quite cheap. Note that you cannot bring bear spray on airplanes, so you will need to rent it.
                        <br/><br/>If hiking in a group, not everyone needs to have bear spray, but make sure the group stays together, and ideally rent at least two cans. Have the person in the front have one can of bear spray, and the person in the back have another. My group was split into 2 when a bear surprised us from the side, but because we had 2 bear spray cans divided up like this, the two groups were each still protected by a can of bear spray.
                        </p>
                </div>
            </div>
        </div>
    )
}