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
import AdmissionProcedure from './Components/AdmissionProcedure'
import FirstProfesnalBHMS from './Components/FirstProfesnalBHMS'
import SecondProfesionalHtml from './Components/SecondProfesionalBHSM'
import ThirdProfesionalHtml from './Components/ThirdProfesionalHtml'
import FinalProfesionalHtml from './Components/FinalProfesionalBHMS'
import Facilities from './Components/Facilities'
import FacilityPlaceholder from './Components/FacilityPlaceholder'
import HospitalOpd from './Components/HospitalOpd'
import HospitalIpd from './Components/HospitalIpd'
import HospitalCampus from './Components/HospitalCampus'

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
  '/facilities': 'Facilities',
  '/hospital-opd': 'Hospital OPD',
  '/hospital/opd': 'Hospital OPD',
  '/hospital/ipd': 'Hospital IPD',
  '/facilities/general-infrastructures': 'General Infrastructures',
  '/facilities/clinical-facilities': 'Clinical Facilities',
  '/facilities/library': 'Library',
  '/facilities/hostel': 'Hostel',
  '/facilities/sports-specialty': 'Sports Specialty',
  '/facilities/transportation': 'Transportation',
  '/course-admission/bhms-course': 'B.H.M.S Course',
  '/course-admission/admission-procedure': 'Admission Procedure',
  '/course-admission/first-professional-bhms-subjects': 'First Professional B.H.M.S. Subjects',
  '/course-admission/second-professional-bhms-subjects': 'Second Professional B.H.M.S. Subjects',
  '/course-admission/third-professional-bhms-subjects': 'Third Professional B.H.M.S. Subjects',
  '/course-admission/final-professional-bhms-subjects': 'Final Professional B.H.M.S. Subjects',
}

function PageTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = pageTitles[pathname] ?? "Alva's Homeopathic Medical College"
    window.scrollTo(0, 0)
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
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/general-infrastructures" element={<Facilities />} />
        <Route path="/hospital">
        <Route path='opd' element={<HospitalOpd />} />
        <Route path='ipd' element={<HospitalIpd />} />
        <Route path='campus' element={<HospitalCampus />} />
        </Route>
        {/* <Route path="/facilities/general-infrastructures" element={<GeneralInfrastructures />} /> */}
        <Route path="/facilities/:facility" element={<FacilityPlaceholder />} />
        <Route path="/course-admission">
          <Route path="bhms-course" element={<BHMSCourse />} />
          <Route path="admission-procedure" element={<AdmissionProcedure />} />
          <Route path="first-professional-bhms-subjects" element={<FirstProfesnalBHMS />} />
          <Route path="second-professional-bhms-subjects" element={<SecondProfesionalHtml />} />
          <Route path="third-professional-bhms-subjects" element={<ThirdProfesionalHtml />} />
          <Route path="final-professional-bhms-subjects" element={<FinalProfesionalHtml />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

