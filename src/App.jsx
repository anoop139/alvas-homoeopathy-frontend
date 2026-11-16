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
import TimeTable from './Components/TimeTable'
import CollegeCouncil from './Components/CollegeCouncil'
import ExaminationSchedule from './Components/ExaminationSchedule'
import LibraryResult from './Components/LibraryResult'
import UniversityResult from './Components/UniversityResult'
import StaffResearchPublications from './Components/StaffResearchPublications'
import MateriaMedica from './Components/MateriaMedica'
import Organ from './Components/Organ'
import HomoeopathicPharmacy from './Components/HomoeopathicPharmacy'
import HomoeopathicRepertory from './Components/HomoeopathicRepertory'
import HumanAnatomy from './Components/HumanAnatomy'
import HumanPhysiologyBiochemistry from './Components/HumanPhysiologyBiochemistry'
import ForensicMedicineToxicology from './Components/ForensicMedicineToxicology'
import PathologyMicrobiology from './Components/PathologyMicrobiology'
import CommunityMedicine from './Components/CommunityMedicine'
import GynaecologyObstetrics from './Components/GynaecologyObstetrics'
import PracticeOfMedicine from './Components/PracticeOfMedicine'
import Surgery from './Components/Surgery'
import DepartmentOfYoga from './Components/DepartmentOfYoga'
import StudentList from './Components/StudentList'
import StudentsCouncil from './Components/StudentsCouncil'
import StudentAwardsAchievements from './Components/StudentAwardsAchievements'

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
  '/students-data/student-list': 'Student List',
  '/students-data/students-council': 'Students Council',
  '/students-data/student-awards-achievements': 'Student Awards & Achievements',
  '/academics/time-table': 'Time Table',
  '/academics/college-council': 'College Council',
  '/academics/examination-schedule': 'Examination Schedule',
  '/academics/library-result': 'Library Result',
  '/academics/university-result': 'University Results',
  '/academics/staff-research-publications': 'Staff Research & Publications',
  '/academics/departments/homoeopathic-materia-medica': 'Homoeopathic Materia Medica',
  '/academics/departments/organon': 'Organon with Homoeopathic Philosophy and Fundamentals of Psychology',
  '/academics/departments/homoeopathic-pharmacy': 'Homoeopathic Pharmacy',
  '/academics/departments/homoeopathic-repertory-case-taking': 'Homoeopathic Repertory & Case Taking',
  '/academics/departments/human-anatomy': 'Human Anatomy',
  '/academics/departments/human-physiology-biochemistry': 'Human Physiology & Biochemistry',
  '/academics/departments/forensic-medicine-toxicology': 'Forensic Medicine & Toxicology',
  '/academics/departments/pathology-microbiology': 'Pathology & Microbiology',
  '/academics/departments/community-medicine-research-methodology-biostatistics': 'Community Medicine, Research Methodology & Biostatistics',
  '/academics/departments/surgery': 'Surgery',
  '/academics/departments/gynaecology-obstetrics': 'Gynaecology & Obstetrics',
  '/academics/departments/practice-of-medicine-with-essentials-of-pharmacology': 'Practice Of Medicine With Essentials Of Pharmacology',
  '/academics/departments/yoga': 'Department of Yoga',
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
        <Route path="/students-data">
          <Route path="student-list" element={<StudentList />} />
          <Route path="students-council" element={<StudentsCouncil />} />
          <Route path="student-awards-achievements" element={<StudentAwardsAchievements />} />
        </Route>
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
        <Route path="/academics">
          <Route path="time-table" element={<TimeTable />} />
          <Route path="college-council" element={<CollegeCouncil />} />
          <Route path="examination-schedule" element={<ExaminationSchedule />} />
          <Route path="library-result" element={<LibraryResult />} />
          <Route path="university-result" element={<UniversityResult />} />
          <Route path="staff-research-publications" element={<StaffResearchPublications />} />
          <Route path="departments/homoeopathic-materia-medica" element={<MateriaMedica />} />
          <Route path="departments/organon" element={<Organ />} />
          <Route path="departments/homoeopathic-pharmacy" element={<HomoeopathicPharmacy />} />
          <Route path="departments/homoeopathic-repertory-case-taking" element={<HomoeopathicRepertory />} />
          <Route path="departments/human-anatomy" element={<HumanAnatomy />} />
          <Route path="departments/human-physiology-biochemistry" element={<HumanPhysiologyBiochemistry />} />
          <Route path="departments/forensic-medicine-toxicology" element={<ForensicMedicineToxicology />} />
          <Route path="departments/pathology-microbiology" element={<PathologyMicrobiology />} />
          <Route path="departments/community-medicine-research-methodology-biostatistics" element={<CommunityMedicine />} />
          <Route path="departments/surgery" element={<Surgery />} />
          <Route path="departments/gynaecology-obstetrics" element={<GynaecologyObstetrics />} />
          <Route path="departments/practice-of-medicine-with-essentials-of-pharmacology" element={<PracticeOfMedicine />} />
          <Route path="departments/yoga" element={<DepartmentOfYoga />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
