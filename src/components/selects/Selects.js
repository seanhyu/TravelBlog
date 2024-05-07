import React from 'react'
import './SelectsStyles.css'

import Reynisfjara from '../../assets/reynisfjara.jpg'
import Ausangate from '../../assets/Ausangate.jpg'
import Lauterbrunnen from '../../assets/lauterbrunnen.jpg'
import Tongariro from '../../assets/tongariro.jpg'
import Everest from '../../assets/everest.jpg'
import Patagonia from '../../assets/glacierGrey.jpg'


import SelectsImg from '../selectsImgs/SelectsImgs'


function Selects() {
    return (
        <div name='destinations' className='selects'>
            <h1>Top Destinations</h1>
            <div className='container'>
                <SelectsImg bgImg={Ausangate} text="Peru"/>
                <SelectsImg bgImg={Everest} text="Nepal"/>
                <SelectsImg bgImg={Patagonia} text="Patagonia"/>
                <SelectsImg bgImg={Tongariro} text="New Zealand"/>
                <SelectsImg bgImg={Reynisfjara} text="Iceland"/>
                <SelectsImg bgImg={Lauterbrunnen} text="Switzerland"/>
            </div>
        </div>
    )
}

export default Selects