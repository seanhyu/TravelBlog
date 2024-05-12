import React from 'react'
import Standard from '../../components/standard/Standard'
import "./LocationsStyles.css"

import IcelandGlacier from '../../assets/glacier.jpg'

export function Iceland () {
    return (
        <div>
            <Standard bgImg={IcelandGlacier} text="Iceland" />
            <div className='container'>
                
            </div>
            
        </div>

    )
}