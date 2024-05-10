import React from 'react'
import './DestBodyStyles.css'

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


import SelectsImg from '../selectsImgs/SelectsImgs'


function DestBody() {
    return (
        <div name='destinations' className='dest-body'>
            <div className='container'>
                <h1> </h1>
                <p1>I have compiled here my itineraries and tips from my trips across the world. All pictures on this site were taken by me, and I've included information on where and how I took these images for each destination so you can witness and capture them yourself. I hope you find the information here helpful!  </p1>
                
                <h1>International</h1>
                <div className='dest-images'>
                    <div className='container-grid'>
                        <SelectsImg bgImg={Ausangate} text="Peru"/>
                        <SelectsImg bgImg={Everest} text="Nepal"/>
                        <SelectsImg bgImg={Patagonia} text="Patagonia"/>
                        <SelectsImg bgImg={Tongariro} text="New Zealand"/>
                        <SelectsImg bgImg={Reynisfjara} text="Iceland"/>
                        <SelectsImg bgImg={Lauterbrunnen} text="Switzerland"/>
                        <SelectsImg bgImg={Kilimanjaro} text="Tanzania"/>
                        <SelectsImg bgImg={Doha} text="Qatar"/>
                        <SelectsImg bgImg={UK} text="United Kingdom"/>
                    </div>
                </div>
                <h1>North America</h1>
                <div className='dest-images'>
                    <div className='container-grid'>
                        <SelectsImg bgImg={Banff} text="Banff"/>
                        <SelectsImg bgImg={OlympicBeach} text="Washington"/>
                        <SelectsImg bgImg={Subway} text="Utah"/>
                        <SelectsImg bgImg={Wave} text="Arizona"/>
                        <SelectsImg bgImg={GlacierNP} text="Glacier"/>
                        <SelectsImg bgImg={TunnelView} text="Yosemite"/>
                    </div>
                </div>
            </div>
        </div>
        

    )
}

export default DestBody