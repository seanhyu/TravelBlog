import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

import Kilimanjaro from '../../assets/kilimanjaro.jpg'

export function Tanzania() {
    return (
        <div>
            <Standard bgImg={Kilimanjaro} text="Tanzania" />
            <div className='container'>
                
            </div>
        </div>
    )
}