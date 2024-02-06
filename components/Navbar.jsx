"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './ui/button'
import About from './about'
import LoginForm from './LoginForm'
import Contact from './Contact'


const Navbar = () => {
  const [showAbout, setShowAbout] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showContact,setShowContact]=useState(false)


  return (
    <>
      <nav className='w-full flex bg-color p-4 fixed '>
        <div className='w-[200px] h-13  mt-3  lg:ml-[100px] sm:ml-0 mx-0'>

          <Link href='/'>
            <Image
              src='/logo.jpg'
              alt='Opeak Logo'
              height={150}
              width={600}
            />
          </Link>
        </div>

        <div className=' flex  md:ml-auto  lg:ml-auto mr-[100px] '>
          <ul className=' hidden md:flex text-white font-bold gap-8 py-4 ml-10 ul mr-[50px] '>
            <Button href='/bikes' className='button'>Bikes</Button>
            <Button href='/accessories' className='button'>ACCESSORIES</Button>
            <Button onClick={() => setShowAbout(true)} className='button'>ABOUT US</Button>
            <Button onClick={()=>setShowContact(true)} className='button'>CONTACT</Button>
          </ul>
          <div className=' hidden md:block w-[40px]'>
            <Image
              src="/bucket.png"
              height={10}
              width={25}
              alt='bucket'
              className='h-5 w-6 mt-4 ml-3'
            />
          </div>

          <div className=''>
            {/* Add a responsive menu button here */}
          </div>

          <div className=' hidden md:block   mr-none'>
            <Button
              className="rounded-[10px] mt-2 b-color w-[90px]"
              onClick={() => setShowLogin(true)}>Login</Button>
          </div>
        </div>
      </nav>
      <About isVisible={showAbout} onClose={setShowAbout} />
      <LoginForm isVisible={showLogin} onClose={setShowLogin}/>
      <Contact isVisible={showContact} onClose={setShowContact}/>
    </>
  )
}



export default Navbar
