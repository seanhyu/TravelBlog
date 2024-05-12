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
import { UK } from './pages/locations/UK'
import { Tanzania } from './pages/locations/Tanzania'
import { NewZealand } from './pages/locations/NZ'
import { Utah } from './pages/locations/Utah'
import { Glacier } from './pages/locations/Glacier'
import { Qatar } from './pages/locations/Qatar'
import { TMB } from './pages/locations/TMB'
import { Olympic } from './pages/locations/Olympic'
import { Arizona } from './pages/locations/Arizona'
import { Iceland } from './pages/locations/Iceland'
import { Banff } from './pages/locations/Banff'
import { Yosemite } from './pages/locations/Yosemite'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/blog' element={<Destinations />} />
      <Route path="/about" element={<About />} />
      <Route path="/gear" element={<Gear />} />
      <Route path="/finances" element={<Finances />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/peru" element={<Peru />} />
      <Route path="/nepal" element={<Nepal />} />
      <Route path='/patagonia' element={<Patagonia/>} />
      <Route path='/uk' element={<UK/>} />
      <Route path='/tanzania' element={<Tanzania/>} />
      <Route path='/nz' element={<NewZealand/>} />
      <Route path='/utah' element={<Utah/>} />
      <Route path='/glacier' element={<Glacier/>} />
      <Route path='/Qatar' element={<Qatar/>} />
      <Route path='/tmb' element={<TMB/>} />
      <Route path='/olympic' element={<Olympic/>} />
      <Route path='/arizona' element={<Arizona/>} />
      <Route path='/iceland' element={<Iceland/>} />
      <Route path='/banff' element={<Banff/>} />
      <Route path='/yosemite' element={<Yosemite/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App;


