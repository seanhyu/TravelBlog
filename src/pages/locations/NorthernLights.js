import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

import CanadaLights from '../../assets/northernLights.jpg'

export function NorthernLights () {
    return (
        <div>
            <Standard bgImg={CanadaLights} text="Northern Lights" />
        </div>

    )
}