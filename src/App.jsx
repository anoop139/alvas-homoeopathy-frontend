import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import AboutCollage from './Components/AboutCollage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-college" element={<AboutCollage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
