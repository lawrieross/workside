import Link from 'next/link'
import Image from 'next/image'
import * as React from 'react'

import { Location } from './Location'
import { Checkmark } from './Checkmark'

// eslint-disable-next-line react/display-name
const JobListing = React.forwardRef(({ data }, ref) => {
  const { id, image, alt, title, location, tags, verified } = data

  return (
    <Link
      ref={ref}
      href={{ pathname: '/jobs/[id]', query: { id: id } }}
      scroll={false}
      shallow={true}
      passHref
    >
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
    </Link>
  )
})

export default JobListing
