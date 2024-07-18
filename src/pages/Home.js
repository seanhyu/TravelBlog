import React from 'react'

// import components of the page
import Hero from '../components/hero/Hero'
import Bio from '../components/bio/Bio'
import Selects from '../components/selects/Selects'

// displays the home page
export function Home() {
    return (
      <div>
        <Hero />
        <Bio />
        <Selects />
      </div>
    )
  }
  
  
  