import * as React from 'react'

import Link from 'next/link'

export default function Job({ job }) {
  const jobData = job || {}
  const { position, location, experience, salary, overview } = jobData

  return (
    <>
      <div className="back">
        <BackButton />
      </div>
      <section className="job">
        <div className="job-header">
          <div className="position">
            <h3>{position}</h3>
            <span>{location}</span>
          </div>
          <span className="date-posted">4 days ago</span>
        </div>

        <div className="details">
          <div className="experience">
            <h4>Experience</h4>
            <span>{experience}</span>
          </div>

          <div className="location">
            <h4>Location</h4>
            <span>{location}</span>
          </div>

          <div className="salary">
            <h4>Salary Range</h4>
            <span>{salary}</span>
          </div>
        </div>

        <div className="overview">
          <h4>Company overview</h4>
          <p>
            {overview}
          </p>
        </div>
      </section>
    </>
  )
}

// eslint-disable-next-line react/display-name
const BackButton = React.forwardRef(({}, ref) => (
  <Link ref={ref} href="/" passHref>
    <a>Back</a>
  </Link>
))
