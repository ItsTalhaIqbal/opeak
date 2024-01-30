import React from 'react'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default layout