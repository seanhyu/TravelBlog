import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

// Import images
import CanadaLights from '../../assets/northernLights.jpg'
import IcelandLights from '../../assets/northernLightsIceland.jpg'

// Displays the Northern Lights page
export function NorthernLights () {
    return (
        <div>
            <Standard bgImg={IcelandLights} text="Northern Lights" />
            <div className='container'>
                <div className='all-text'>
                    <p>The Northern Lights are one of the most magical phenomenon I've ever seen. But they can also be quite elusive. While a degree of luck is definitely needed, there are definitely ways to maximize your chances of seeing the northern lights.</p>
                </div>
                <h3>Finding the Northern Lights</h3>
                <div className='image-text'>
                    <img src={CanadaLights} alt="Northern Lights in Canada"/>
                    <p>
                        There are four main factors to consider when planning out a Northern Lights trip. 
                        <br/><br/>The first is location. You want to travel to a place as close to the aurora oval as possible. The aurora oval is a ring-shaped region around the magnetic poles where the aurora borealis tends to be the strongest. Generally this means getting yourself close to the artic circle. Some of the best places to visit are Fairbanks in Alaska, Tromso in Norway, and Iceland. 
                        Once you are there, you will need to get yourself as far away from civilization as possible to avoid light pollution.
                        <br/><br/>The second factor is the sky conditions. Is the sky cloudy? If so, try to move around to find a place where it isn't. Places like Iceland tend to have very hit-or-miss weather, so if northern lights is all you are going after, I would recommend Fairbanks or Tromso over Iceland.
                        <br/><br/>Third, you must consider timing. During the summer, the northern lights are not visible throughout most of the arctic circle because the sky never turns dark during these months, so you will need to choose a date generally between late August and April depending on where you are. The fall and spring equinoxes also have historically been when aurora activity has been greatest, so try timing your visit around these dates. Furthermore, visiting during the Solar Maximum (the period within the 11 year solar cycle where the sun is most unstable) is preferable! 
                        You should also try to visit during a new moon to eliminate light pollution caused by the moon.
                        <br/><br/>Finally, you need to consider the Kp index. The Kp index is a scale from 1-9 that essentially measures the strength of the aurora. Depending on your location, a Kp index of 2 or higher is likely needed for you to see the northern lights. However, only when the index is above 4 are the lights vivid enough for the colors to really pop to the naked eye. I recommend getting the Hello Aurora app, which tells you what the current aurora strengths are and also alerts you when others nearby have reported seeing the northern lights.
                    </p>
                </div>
                <div className='all-text'>
                    <p>In the end, you will need luck to be on your side to witness the northern lights. So I recommend staying at least one week at any location to maximize your chances of catching the lights. I wish everyone the best of luck in your northern lights hunting excursions!</p>
                </div>
            </div>
        </div>

    )
}