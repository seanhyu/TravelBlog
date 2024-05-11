import React from 'react'

import Standard from '../components/standard/Standard'
import ContactContent from '../components/contactContent/ContactContent'

import BackgroundImg from '../assets/AmadablamFar.jpg'

export function Contact() {
    return (
      <div>
        <Standard bgImg={BackgroundImg} text="Contact Me"/>
        <ContactContent />
      </div>
      
    )
  }