import * as React from 'react'
import Image from 'next/image'

import { Location } from './Location'
import { Checkmark } from './Checkmark'

// eslint-disable-next-line react/display-name
const JobListing = ({ showJobInfo, setCurrentJob, toggleJobInfo, data }) => {
  const {
    image,
    alt,
    title,
    location,
    tags,
    verified
  } = data

  const handleClick = event => {
    event.preventDefault();
    setCurrentJob(data);
    toggleJobInfo(!showJobInfo);
  }

  return (
    <button className="job-listing-button" onClick={handleClick}>
      <a className="job-listing">
        <div className="job-header">
          <div className="logo">
            <Image
              src={image}
              width="40"
              height="40"
              alt={alt}
            />
          </div>

          <div className="title-container">
            <h4>{title}</h4>
            <div className="location">
              <Location
                src="/location.svg"
                width={16}
                height={17}
                alt="Location pointer"
              />
              <span>{location}</span>
            </div>
          </div>
        </div>

        <div className="info-container">
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="payment">
            <Checkmark verified={verified} />
            <h4>Payment verified</h4>
          </div>
        </div>
      </a>
    </button>
  )
}

export default JobListing
