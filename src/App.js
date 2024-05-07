import React from 'react'
import { Route, Routes} from "react-router-dom"
import { Home } from "./pages/Home"
import { Destinations } from "./pages/Destinations"
import { About } from "./pages/About"
import { Gear } from "./pages/Gear"
import { Finances } from "./pages/Finances"
import { Contact } from "./pages/Contact"
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/destinations' element={<Destinations />} />
      <Route path="/about" element={<About />} />
      <Route path="/gear" element={<Gear />} />
      <Route path="/finances" element={<Finances />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App;


