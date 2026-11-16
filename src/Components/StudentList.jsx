import { useState } from 'react'
import './StudentList.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

const studentBatches = [
  { label: 'Batch 2025–2026', href: 'https://alvashomoeopathy.com/files/DataStudent2025-26.pdf' },
  { label: 'Batch 2024–2025', href: 'https://alvashomoeopathy.com/files/DataStudent2024-25.pdf' },
  { label: 'Batch 2023–2024', href: 'https://alvashomoeopathy.com/files/DataStudent2024.pdf' },
  { label: 'Batch 2022–2023', href: 'https://alvashomoeopathy.com/files/STUDENTSLIST2022-2023.pdf' },
  { label: 'Batch 2021–2022', href: 'https://alvashomoeopathy.com/files/STUDENTSLIST2021-2022.pdf' },
  { label: 'Batch 2020–2021', href: 'https://alvashomoeopathy.com/files/STUDENTSLIST2020-2021.pdf' },
  { label: 'Batch 2019–2020', href: 'https://alvashomoeopathy.com/files/STUDENTSLIST2019-2020.pdf' },
  { label: 'Batch 2018–2019', href: 'https://alvashomoeopathy.com/files/STUDENTSLIST2018-2019.pdf' },
]

function StudentList() {
  const [accessedBatch, setAccessedBatch] = useState('')

  return (
    <main className="student-list-page">
      <SiteHeader />
      <section className="student-list-content" aria-labelledby="student-list-title">
        <h1 id="student-list-title">Students List</h1>
        <div className="student-list-batches">
          {studentBatches.map(({ label, href }) => (
            <a
              key={label}
              className={accessedBatch === label ? 'is-accessed' : undefined}
              href={href}
              target="_blank"
              rel="noreferrer"
              onClick={() => setAccessedBatch(label)}
            >
              {label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}

export default StudentList
