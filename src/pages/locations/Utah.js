import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

import Subway from '../../assets/subway.jpg'

export function Utah() {
    return (
        <div>
            <Standard bgImg={Subway} text="Utah" />
            <div className='container'>
                
            </div>
        </div>
    )
}