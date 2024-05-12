import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

import Moraine from '../../assets/banff.jpg'

export function Banff () {
    return (
        <div>
            <Standard bgImg={Moraine} text="Banff" />
        </div>

    )
}