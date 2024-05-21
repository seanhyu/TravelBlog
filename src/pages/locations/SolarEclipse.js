import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

import CanadaEclipse from '../../assets/solarEclipse.jpg'

export function SolarEclipse () {
    return (
        <div>
            <Standard bgImg={CanadaEclipse} text="Solar Eclipses" />
        </div>

    )
}