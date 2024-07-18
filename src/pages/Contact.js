import React from 'react'

// Import standard template and contacts content functions
import Standard from '../components/standard/Standard'
import ContactContent from '../components/contactContent/ContactContent'

// Import image
import BackgroundImg from '../assets/AmadablamFar.jpg'

// Displays the contacts page
export function Contact() {
    return (
      <div>
        <Standard bgImg={BackgroundImg} text="Contact Me"/>
        <ContactContent />
      </div>
      
    )
  }