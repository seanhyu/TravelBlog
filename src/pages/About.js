import React from 'react'
import Standard from '../components/standard/Standard'

// Import image
import portraitL from '../assets/seanMoss.jpg'

// Import the content for the about page
import AboutContent from '../components/aboutContent/AboutContent'

// Displays the about page
export function About() {
    return (
      <div>
        <Standard bgImg={portraitL} text="About Me"/>
        <AboutContent/>
      </div>
    )
  }