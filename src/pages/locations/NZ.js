import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

import Tongariro from '../../assets/tongariro.jpg'

export function NewZealand() {
    return (
        <div>
            <Standard bgImg={Tongariro} text="New Zealand" />
            <div className='container'>
                
            </div>
        </div>
    )
}