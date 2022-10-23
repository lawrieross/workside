import { useState } from 'react'

import Filters from '../components/Filters'
import JobListing from '../components/JobListing'

export default function HomePage({ jobs }) {
  const [isFilterOpen, toggleFilter] = useState(false)

  return (
    <>
      <Filters
        isFilterOpen={isFilterOpen}
        toggleFilter={toggleFilter}
      />
      <section className="jobs">
        {jobs.map((job, index) => <JobListing key={index} data={job} />)}
      </section>
    </>
  )
}
