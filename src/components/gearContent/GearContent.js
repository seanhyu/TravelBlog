import React from 'react'
import './GearContentStyles.css'
import GearItems from '../gearItems/GearItems'

// import images
import OspreyExos from '../../assets/ospreyExos58.jpeg'
import UGQ from '../../assets/ugqBandit.jpeg'
import Thermarest from '../../assets/thermarest.jpeg'
import OspreyFarpoint from '../../assets/ospreyFarpoint.jpeg'
import DJI from '../../assets/djiMini2.jpeg'
import Sony from '../../assets/sonya7iii.jpeg'
import BigAgnes from '../../assets/bigAgnes.jpeg'

// Displays the gear page content
function GearContent() {
    return (
        <div className='gear-content'>
            <div className = 'container'>
                <h4> </h4>
                <p>Choosing gear to buy for your trips can be a fun but stressful process! Here you can find a list of the gear that I use. For the major items, I have included a brief review about my experience!</p>
                <h2>Backpacking Gear</h2>
                <hr></hr>
                <GearItems title= "Pack: Osprey Exos 58" gearImg={OspreyExos} text="The Osprey Exos 58 is my go-to pack for multi-day treks, with a capacity of 58L. The pack isn't quite as light as some of the more expensive ultralight packs, however at 2.4 pounds it still tips the scale favorably while providing a lot of comfort. Most importantly, the Osprey Exos 58 is backed by Osprey's All-Mighty-Guarantee, which essentially a life-time warranty where the company will fix any tear or problems with your pack for any reason for free." pro1="Lightweight" pro2="Very comfortable" pro3="Great warranty" con1="Cannot carry-on through airports" con2="Less support than other Osprey models" con3="Not truly ultra-light" />
                <GearItems title="Sleeping Bag: UGQ Outdoor Bandit quilt" gearImg={UGQ} text="The UGQ Outoor Bandit quilts are each custom-made by UGQ Outdoors, allowing customers to indicate the exact specifications they want. They offer great prices relative to their warmth and weight. I recommend choosing a temperature rating of 20F for the greatest amount of flexibility. If you plan on camping in freezing temperatures, subtract 10 degrees fahrenheit from your camping temperature to find your ideal rating." pro1="Very warm and light for the price" pro2="Customizable" pro3="Extremely packable" con1="Long production times" con2="Fragile given lightweight materials" con3="More set-up than a sleeping bag" />
                <GearItems title="Sleeping Pad: Therm-a-Rest NeoAir Xlite" gearImg={Thermarest} text="The Thermarest NeoAir XLite is a staple of any backpacker's sleep system. Packing a great combination of warmth, weight, and comfort, this sleeping pad is great for almost any trek. ALthough there have been complaints about the pad being noisy, this has not been the case for my pad. However, if you don't mind sleeping on a hard mattress, then a foam pad can be a much cheaper, quieter, and more durable option." pro1="Comfortable" pro2="Lightweight" pro3="Great for treks at/above freezing temps" con1="Expensive" con2="Fragile" con3="Can be noisy if you move a lot while asleep" />
                <GearItems title="Tent: Big Agnes Copper Spur HV UL3" gearImg={BigAgnes} text="The Big Agnes Copper Spur HV UL3 is a 3-person backpacking tent that scores well in both weight and space. The tent weighs just under 4 pounds and is reasonably strong given the thin materials used. I spent multiple nights sleeping in the tent while in Patagonia, enduring torrential rainfall and high winds, and the tent had no problems dealing with the conditions. I recommend getting a tent with 1 extra person of capacity (3-person tent for 2 people)." pro1="Lightweight and packable" pro2="Easy assembly" pro3="High tent ceiling" con1="Expensive" con2="Can only fit 2 people comfortably" con3="Thin materials must be handled with care" />
                <h3>Other gear:</h3>
                <div className='other-gear'>
                    <li>Stove: BRS3000T</li>
                    <li>Pot: Toaks Titanium 750mL Pot</li>
                    <li>Pack cover: Osprey Ultralight Raincover</li>
                    <li>Rain Jacket: Arc'Teryx Beta LT</li>
                    <li>Down Jacket: Mountain Hardware Ghost Whisperer 2</li>
                    <li>Fleece Jacket: Patagonia Better Sweater</li>
                    <li>Pants: prAna Stretch Zion</li>
                    <li>Shoes: Salamon SpeedCross 6</li>
                    <li>Water bottle: Katadyn BeFree</li>
                    <li>Med Kit: Adventure Medical Kits .5 Medical Kit</li>
                </div>
                <div className='linebreak'> </div>
                <hr></hr>
                <div className='linebreak'> </div>
                <h2>Travel/Camera Gear</h2>
                <hr></hr>
                <GearItems title= "Pack: Osprey Farpoint 40" gearImg={OspreyFarpoint} text="The Osprey Farpoint 40 is a 40L travel backpack that uses a similar frame to those found on Osprey's backpacking packs to make carrying loads comfortable. The pack fits within the dimension of carry-on sizes at airports and is a great way to travel without a suitcase. The pack is best paired with a separate daypack for day-excursions." pro1="Large capacity" pro2="Very comfortable" pro3="Open design" con1="Expensive" con2="Lack of storage organization" con3="Few external pockets" />
                <GearItems title= "Drone: DJI Mini 2" gearImg={DJI} text="The DJI Mini 2 has been an extremely reliable drone that has withstood harsh treatment. Despite crashing it multiple times, the drone has had no problems. I have also flown the drone over 17,000 feet in altitude with no problem, well beyond its official specifcations. There are however newer models of this drone that I would suggest purchasing instead, particularly if you have the budget. I also definitely recommend purchasing the fly-more combo!" pro1="Very small and packable" pro2="Rugged" pro3="Inexpensive compared to newer options" con1="Lack of self-tracking mode" con2="No obstacle detection" con3="Smaller battery" />
                <GearItems title="Camera: Sony A7III" gearImg={Sony} text="The Sony A7III has been a workhorse for me! The image quality has been great, and the battery life has been phenomenal. The weatherproofing of the camera has stood the test of time, enduring multiple rainy days in the UK and extreme cold in Iceland. I pair the camera with the Tamron 28-200mL f2.8-f5.6 lens, which provides great flexibility for composing shots." pro1="Great image quality" pro2="Weatherproof" pro3="Smaller than a DSLR" con1="Expensive" con2="Can be hard to take on treks" con3="Weight penalty is significant" />
                <h3>Other gear:</h3>
                <div className='other-gear'>
                    <p>
                    <li>Tripod: Sirui Carbon Fiber Travel Tripod</li>
                    <li>International Outlet Adapter: Insignia All-In-One Travel Adapter</li>
                    <li>Power bank: Anker 20,000 mAh Power Bank</li>
                    <li>Action Camera: GoPro Hero 8</li>
                    </p>
                </div>
                <div className='linebreak' />
                <div className='linebreak' />
            </div>
        </div>
    )

}

export default GearContent