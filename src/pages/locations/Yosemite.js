import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

import TunnelView from '../../assets/TunnelView.jpg'

export function Yosemite () {
    return (
        <div>
            <Standard bgImg={TunnelView} text="Yosemite" />
        </div>

    )
}