import React from 'react'

import MP from '../assets/machuPicchu.jpg'
import Standard from '../components/standard/Standard'
import DestBody from '../components/destBody/DestBody'

export function Destinations() {
    return (
      <div>
        <Standard bgImg={MP} text="Trips" />
        <DestBody />
      </div>
    )
  }