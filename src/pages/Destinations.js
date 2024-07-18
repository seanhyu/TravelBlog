import React from 'react'

// Import images
import MP from '../assets/machuPicchu.jpg'

// Import standard template and destinations content functions
import Standard from '../components/standard/Standard'
import DestBody from '../components/destBody/DestBody'

// Displays the Blog page
export function Destinations() {
    return (
      <div>
        <Standard bgImg={MP} text="Trips" />
        <DestBody />
      </div>
    )
  }