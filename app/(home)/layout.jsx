import React from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const layout = ({ children }) => {
  return (
    <>
    
      <Navbar />
       <ToastContainer />
      {children}
      <Footer />
    </>
  )
}

export default layout