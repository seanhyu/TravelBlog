import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

import SecondBeach from '../../assets/olympic.jpg'

export function Olympic() {
    return (
        <div>
            <Standard bgImg={SecondBeach} text="Olympic" />
            <div className='container'>
                
            </div>
        </div>
    )
}