import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import NavItem from './Navitem'


const Navbar = () => {
  return (
    <nav className='w-full flex bg-color p-4 '>
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
          <NavItem href='/bikes'>Bikes</NavItem>
          <NavItem href='/accessories'>ACCESSORIES</NavItem>
          <NavItem href='/about'>ABOUT US</NavItem>
          <NavItem href='/contact'>CONTACT</NavItem>
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
          ><Link href={'/login'}>Login</Link></Button>
        </div>
      </div>
    </nav>
  )
}



export default Navbar
