import React from 'react'
import Standard from '../components/standard/Standard'

import GearImg from '../assets/gear-image.jpeg'


export function Gear() {
    return (
      <div>
        <Standard bgImg={GearImg} text="Gear"/>
      </div>
    )
  }