import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

import Canal from '../../assets/doha.jpg'

export function Qatar() {
    return (
        <div>
            <Standard bgImg={Canal} text="Qatar" />
            <div className='container'>

            </div>
        </div>
    )
}