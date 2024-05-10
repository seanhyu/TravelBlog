import React from 'react'
import Standard from '../components/standard/Standard'

import GearImg from '../assets/gear-image.jpeg'
import GearContent from '../components/gearContent/GearContent'



export function Gear() {
    return (
      <div>
        <Standard bgImg={GearImg} text="Gear"/>
        <GearContent/>
      </div>
    )
  }