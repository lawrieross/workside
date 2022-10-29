import React, { useState, useEffect } from 'react'

import Job from '../components/Job'
import Filters from '../components/Filters'
import JobListing from '../components/JobListing'

export default function HomePage({ jobs }) {
  const [currentJob, setCurrentJob] = useState(jobs[0])
  const [isFilterOpen, toggleFilter] = useState(false)
  const [showJobInfo, toggleJobInfo] = useState(false)
  const [isMobile, checkClientWidth] = useState(false)

  // eslint-disable-next-line react/display-name
  const BackButton = () => (
    <button onClick={() => toggleJobInfo(false)}>
      <a>Back</a>
    </button>
  )

  useEffect(() => {
    checkClientWidth(document.documentElement.clientWidth <= 768)
  }, [])

  return (
    <>
      <Filters
        isMobile={isMobile}
        isFilterOpen={isFilterOpen}
        toggleFilter={toggleFilter}
        style={{ display: showJobInfo || isMobile ? 'none' : 'block' }}
      />

      <div
        className="back"
        style={{ display: showJobInfo && isMobile ? 'flex' : 'none' }}
      >
        <BackButton />
      </div>

      <section className={`jobs-container${showJobInfo && isMobile ? ' is-open' : ''}`}>
        <section className="jobs">
          {jobs.map((job, index) => (
            <JobListing
              key={index}
              data={job}
              showJobInfo={showJobInfo}
              setCurrentJob={setCurrentJob}
              toggleJobInfo={toggleJobInfo}
            />
          ))}
        </section>

        <section className="job-info__container">
          <Job job={currentJob} />
        </section>
      </section>
    </>
  )
}
