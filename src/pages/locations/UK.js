import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

import Snowdonia from '../../assets/snowdonia.jpg'

export function UK() {
    return (
        <div>
            <Standard bgImg={Snowdonia} text="United Kingdom" />
            <div className='container'>
                
            </div>
        </div>
    )
}