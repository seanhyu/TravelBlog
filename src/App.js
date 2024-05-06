import React from 'react'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Bio from './components/bio/Bio'
import Destinations from './components/destinations/Destinations'


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Bio />
      <Destinations />
    </div>
  );
}

export default App;
