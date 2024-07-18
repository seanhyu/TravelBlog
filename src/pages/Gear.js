import React from 'react'

// import standard template and the content for the gear page
import Standard from '../components/standard/Standard'
import GearContent from '../components/gearContent/GearContent'

// Import image
import GearImg from '../assets/gear-image.jpeg'

// Displays the Gear page
export function Gear() {
    return (
      <div>
        <Standard bgImg={GearImg} text="Gear"/>
        <GearContent/>
      </div>
    )
  }