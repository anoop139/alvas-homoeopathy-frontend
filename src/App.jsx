import './App.css'
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './Components/Home'
import AboutCollage from './Components/AboutCollage'
import VisionMission from './Components/VisionMission'
import ChairpersonMessage from './Components/ChairpersonMessage'
import PrincipalMessage from './Components/PrincipalMessage'
import Administration from './Components/Administration'
import PrajnyaAlvaM from './Components/PrajnyaAlvaM'
import RoshanPinto from './Components/RoshanPinto'
import PraveenRaj from './Components/PraveenRaj'
import Aef from './Components/Aef'
import BHMSCourse from './Components/BHMSCourse'
import FirstProfesnalBHMS from './Components/FirstProfesnalBHMS'

const pageTitles = {
  '/': "Alva's Homeopathic Medical College",
  '/about-college': 'About College',
  '/vision-mission': 'Vision & Mission',
  '/chairperson-message': "Chairman's Message",
  '/principal-message': "Principal's Message",
  '/administration': 'Administration',
  '/PrajnyaAlvaM': 'Dr. Prajnya Alva M',
  '/RoshanPinto': 'Dr. Herald Roshan Pinto',
  '/PraveenRaj': 'Dr. Praveen Raj',
  '/aef': 'About AEF',
  '/course-admission/bhms-course': 'B.H.M.S Course',
  '/course-admission/first-professional-bhms-subjects': 'First Professional B.H.M.S. Subjects',
}

function PageTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = pageTitles[pathname] ?? "Alva's Homeopathic Medical College"
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <PageTitle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-college" element={<AboutCollage />} />
        <Route path="/vision-mission" element={<VisionMission />} />
        <Route path="/chairperson-message" element={<ChairpersonMessage />} />
        <Route path="/principal-message" element={<PrincipalMessage />} />
        <Route path="/administration" element={<Administration />} />
        <Route path="/PrajnyaAlvaM" element={<PrajnyaAlvaM />} />
        <Route path="/RoshanPinto" element={<RoshanPinto />} />
        <Route path="/PraveenRaj" element={<PraveenRaj />} />
        <Route path="/aef" element={<Aef />} />
        <Route path="/course-admission">
          <Route path="bhms-course" element={<BHMSCourse />} />
          <Route path="first-professional-bhms-subjects" element={<FirstProfesnalBHMS />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
