import React from 'react'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Bio from './components/bio/Bio'
import Selects from './components/selects/Selects'
import Footer from './components/footer/Footer'



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Bio />
      <Selects />
      <Footer />
    </div>
  );
}

export default App;
