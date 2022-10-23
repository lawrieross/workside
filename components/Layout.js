import { useState, useEffect } from 'react'

import Navbar from './Navbar'

export default function Layout({ children }) {
  const [isNavOpen, toggleNav] = useState(false)

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  })

  return (
  <>
      <Navbar
        isNavOpen={isNavOpen}
        toggleNav={toggleNav}
      />
      <main>{children}</main>
    </>
  )
}
