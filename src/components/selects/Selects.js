import React from 'react'
import './SelectsStyles.css'

import Reynisfjara from '../../assets/reynisfjara.jpg'
import Ausangate from '../../assets/Ausangate.jpg'
import Tongariro from '../../assets/tongariro.jpg'
import Everest from '../../assets/everest.jpg'
import Patagonia from '../../assets/glacierGrey.jpg'
import Kilimanjaro from '../../assets/kilimanjaro.jpg'


import SelectsImg from '../selectsImgs/SelectsImgs'


function Selects() {
    return (
        <div name='destinations' className='selects'>
            <h1>Top Destinations</h1>
            <div className='container'>
                <SelectsImg bgImg={Ausangate} text="Peru" link="/peru"/>
                <SelectsImg bgImg={Everest} text="Nepal" link="/nepal"/>
                <SelectsImg bgImg={Patagonia} text="Patagonia" link="/patagonia"/>
                <SelectsImg bgImg={Tongariro} text="New Zealand" link="/nz"/>
                <SelectsImg bgImg={Reynisfjara} text="Iceland" link="/iceland"/>
                <SelectsImg bgImg={Kilimanjaro} text="Tanzania" link="/tanzania"/>
            </div>
        </div>
    )
}

export default Selects