import React from 'react'
import './DestBodyStyles.css'

// import images for the image grid
import Reynisfjara from '../../assets/reynisfjara.jpg'
import Ausangate from '../../assets/Ausangate.jpg'
import Lauterbrunnen from '../../assets/lauterbrunnen.jpg'
import Tongariro from '../../assets/tongariro.jpg'
import Everest from '../../assets/everest.jpg'
import Patagonia from '../../assets/glacierGrey.jpg'
import Banff from '../../assets/banff.jpg'
import OlympicBeach from '../../assets/olympic.jpg'
import Subway from '../../assets/subway.jpg'
import GlacierNP from '../../assets/highline.jpg'
import Doha from '../../assets/doha.jpg'
import TunnelView from '../../assets/TunnelView.jpg'
import UK from '../../assets/snowdonia.jpg'
import Kilimanjaro from '../../assets/kilimanjaro.jpg'
import Wave from '../../assets/wave.jpg'
import NorthernLights from '../../assets/northernLights.jpg'
import SolarEclipse from '../../assets/diamondRing.jpg'

// imports SelectsImg function which displays the images with the text and the link
import SelectsImg from '../selectsImgs/SelectsImgs'

// Displays the destinations image grid and the corresponding text on the blog page
function DestBody() {
    return (
        <div name='destinations' className='dest-body'>
            <div className='container'>
                <div className='linebreak'></div>
                <div className='linebreak'></div>
                <p>I have compiled here my itineraries and tips from my trips across the world. All pictures on this site were taken by me, and I've included information on where and how I took these images for each destination so you can witness and capture them yourself. I hope you find the information here helpful!  </p>
                <h1>International</h1>
                <div className='dest-images'>
                    <div className='container-grid'>
                        <SelectsImg bgImg={Reynisfjara} text="Iceland" link="/iceland" />
                        <SelectsImg bgImg={Everest} text="Nepal" link="/nepal"/>
                        <SelectsImg bgImg={Tongariro} text="New Zealand" link="/nz"/>
                        <SelectsImg bgImg={Patagonia} text="Patagonia" link="/patagonia"/>
                        <SelectsImg bgImg={Ausangate} text="Peru" link="/peru"/>
                        <SelectsImg bgImg={Doha} text="Qatar" link="/qatar"/>
                        <SelectsImg bgImg={Lauterbrunnen} text="Switzerland" link="/switzerland"/>
                        <SelectsImg bgImg={Kilimanjaro} text="Tanzania" link="/tanzania"/>
                        <SelectsImg bgImg={UK} text="United Kingdom" link="/uk"/>
                    </div>
                </div>
                <h1>North America</h1>
                <div className='dest-images'>
                    <div className='container-grid'>
                        <SelectsImg bgImg={Wave} text="Arizona" link="/arizona"/>
                        <SelectsImg bgImg={Banff} text="Banff" link="/banff"/>
                        <SelectsImg bgImg={GlacierNP} text="Glacier" link="/glacier"/>
                        <SelectsImg bgImg={OlympicBeach} text="Olympic" link="/olympic"/>
                        <SelectsImg bgImg={Subway} text="Utah" link="/utah"/>
                        <SelectsImg bgImg={TunnelView} text="Yosemite" link="/yosemite"/>
                    </div>
                </div>
                <h1>Bonus trips</h1>
                <div className='dest-images'>
                    <div className='container-grid-2'>
                        <SelectsImg bgImg={NorthernLights} text="Northern Lights" link="/northern-lights"/>
                        <SelectsImg bgImg={SolarEclipse} text="Solar Eclipses" link="/solar-eclipse"/>
                    </div>
                </div>
            </div>
        </div>
        

    )
}

export default DestBody