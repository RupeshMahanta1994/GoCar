import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./Components/Navbar/Navbar"
import HomePage from "./Components/HomePage/HomePage"
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Testimonials from './Components/Testimonials/Testimonials'
import Members from './Components/Members/Members'
import OurTeam from './Components/OurTeam/OurTeam'
import Contact from './Components/Contact/Contact'
import TrendingCars from './Components/TrendingCars/TrendingCars'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="models" element={<TrendingCars />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="ourteam" element={<OurTeam />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
