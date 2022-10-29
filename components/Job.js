import * as React from 'react'

import { Checkmark } from './Checkmark'

export default function Job({ job }) {
  const jobData = job || {}
  const {
    position,
    location,
    experience,
    salary,
    overview,
    requirements
} = jobData

  return (
    <>
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

          <h4>Job requirements</h4>
          <div className="requirements">
            {requirements.map((requirement, index) => (
              <div key={index} className="requirement">
                <Checkmark verified={true} />
                <span>{requirement}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
