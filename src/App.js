import React from 'react'
import { Route, Routes} from "react-router-dom"
import { Home } from "./pages/Home"
import { Destinations } from "./pages/Destinations"
import { About } from "./pages/About"
import { Gear } from "./pages/Gear"
import { Finances } from "./pages/Finances"
import { Contact } from "./pages/Contact"
import { Peru } from "./pages/locations/Peru"
import { Nepal } from "./pages/locations/Nepal"
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Patagonia } from './pages/locations/Patagonia'

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
      <Route path="/peru" element={<Peru />} />
      <Route path="/nepal" element={<Nepal />} />
      <Route path='/patagonia' element={<Patagonia/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App;


