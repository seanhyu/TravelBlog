import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

import CanadaEclipse from '../../assets/solarEclipse.jpg'
import Beads from '../../assets/beads.jpg'
import DiamondRing from '../../assets/diamondRing.jpg'

export function SolarEclipse () {
    return (
        <div>
            <Standard bgImg={Beads} text="Solar Eclipses" />
            <div className='container'>
                <div className='all-text'>
                    <p>Witnessing a total solar eclipse is truly a once-in-a-lifetime experience. To see the sun blocked by the moon, with its corona shining it, is such a surreal and magical moment. If you ever have the chance to witness a total solar eclipse, you should absolutely go out of your way to make it to the path of totality.</p>
                </div>
                <h3>Total vs Partial Solar Eclipse</h3>
                <div className='image-text'>
                    <img src={CanadaEclipse} alt="Bailey's Beads"/>
                    <p>
                        In April of 2023, many of us in the U.S. had the chance to witness a solar eclipse. However, the vast majority of people only got to see a partial solar eclipse, where the sun is only partially blocked by the moon.
                        <br/><br/>While seeing a partial eclipse is still cool, it simply cannot compare to the experience of being in the path of totality and seeing the sun fully blocked. During partial eclipses, one must wear solar eclipse glasses for the entire duration of the eclipse. 
                        <br/><br/>However if you are located in the path of totality, you can actually take off your glasses and look directly at the sun during the few minutes of totality. The sky rapidly darkens in the few minutes before totality as the sun gets covered, and when totality occurs it is almost as dark as night and you can see the stars.
                        <br/><br/>If you didn't get the chance to witness totality during the April 2023 Solar Eclipse, I highly recommend travelling out to Europe in 2026 for the total solar eclipse that is happening there! The path of totality crosses portions of Iceland, Spain, and Portugal. Just be sure to check the weather beforehand so that you can position yourself where it won't be cloudy during the eclipse. 
                        <br/><br/>
                    </p>
                </div>
                <h3>Photographing Totality</h3>
                <div className='all-text'>
                    <p>If you are interested in photographing the moment of totality, you will need at least a 200mm lens, and preferably even higher. My photos here were taken with a 200mm lens, and while they do show an accurate depiction of what totality looks like, they are relatively lower quality because I had to crop into the image. 
                        <br/><br/>Be sure to set your camera's focus manually since auto-focus will not be able to properly focus on the moon and Sun. I also recommend using bracket-mode to capture a large range of exposures since it can be difficult to expose the corona properly with a single shot. This also removes a degree of human error, which is important since totality only lasts a few minutes and you need to save time to actually enjoy the eclipse with your own eyes!</p>
                </div>
            </div>
        </div>

    )
}