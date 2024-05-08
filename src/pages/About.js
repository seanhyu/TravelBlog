import React from 'react'
import Standard from '../components/standard/Standard'
import portraitL from '../assets/portraitLandscape.jpg'


export function About() {
    return (
      <div>
        <Standard bgImg={portraitL} text="About Me"/>
      </div>
    )
  }