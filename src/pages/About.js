import React from 'react'
import Standard from '../components/standard/Standard'
import portraitL from '../assets/seanMoss.jpg'
import AboutContent from '../components/aboutContent/AboutContent'


export function About() {
    return (
      <div>
        <Standard bgImg={portraitL} text="About Me"/>
        <AboutContent/>
      </div>
    )
  }