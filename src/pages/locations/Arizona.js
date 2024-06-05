import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

import Wave from '../../assets/wave.jpg'

export function Arizona () {
    return (
        <div>
            <Standard bgImg={Wave} text="Arizona" />
            <div className='container'>
                <div className='all-text'>
                    <p>Arizona has some of the most unique landscapes in the world. While there are far too many destinations in the state to write about in one article, I will highlight my favorite places (the wave) here, and list alternative destinations below.</p>
                </div>
                <h3>The Wave</h3>
                <div className='image-text'>
                    <img src={Wave} alt="The Wave"/>
                    <p>
                        Simply put, the Wave might be the coolest single location I have ever hiked to. Located near the Utah-Arizona border, the Wave (more formely known as Coyote Buttes South) is a red rock formation that was made famous when Microsoft used it as a wallpaper for Windows 7.
                        <br/><br/> Due to the Wave's immense popularity and delicate nature, the Bureau of Land Management requires hikers to have a permit in order to hike to the Wave. Unfortunately, the lottery system for this permit is extremely difficult to win! Both the advance and last-minute lotteries can be found on Recreation.gov, with the advance lottery occuring every month (for 4 months in advance), and the last-minute daily lottery occuring the day before the permit is valid.
                        <br/><br/> I applied for the advance lottery 13 times before I finally won a permit. This is generally in-line with the roughly 5% acceptance rate that a park ranger I asked quoted regarding the Wave lottery.
                        <br/><br/> However even if you don't win the advance lottery, you can still apply to the daily lottery while you are in Utah or Arizona. You can only apply to the daily lottery if you are located within the area specified by Recreation.gov (they check your location before allowing you to apply), so be sure to drive within the application boundaries so that you can apply.
                        <br/><br/> Once you have secured your Wave permit, the next difficult step is getting to the Wave! To drive here, you need a 4-wheel drive vehicle as the road is not paved and can be nearly impassable when muddy. When you finally arive at the parking lot, it's a relatively flat 6-mile round-trip hike to visit the Wave. Be sure to bring a lot of water if visiting in the summer as the area gets VERY hot.
                        <br/><br/> I visited in February, and because it had just snowed a few days beforehand, the road to the Wave was extremely rough. This is no-time to skimp on your rental car collision waiver- just get it! 
                        <br/><br/> I hope everyone that reads this has some luck with the lottery!
                    </p>
                </div>
                <div className='linebreak'/>
                <h3>Other destinations</h3>
                <div className='bullets'>
                    <li>Grand Canyon: This world-famous needs no introduction and is a place everyone needs to visit once in their lifetime </li>
                    <li>Antelope Canyon: Simply the coolest slot canyons I've ever been to. I recommend visiting both Upper and Lower Antelope Canyon!</li>
                    <li>Monument Valley: A collection of red rock stacks that was featured in Forrest Gump and is worth a stop along the way from Utah to Arizona</li>
                    <li>Sedona: A beautful area full of hikes to unique red-rock landscapes and features</li>
                </div>
            </div>
        </div>
        

    )
}