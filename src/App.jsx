import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import AboutCollage from './Components/AboutCollage'
import VisionMission from './Components/VisionMission'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-college" element={<AboutCollage />} />
        <Route path="/vision-mission" element={<VisionMission />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
