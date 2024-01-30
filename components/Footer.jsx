import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import GoogleMap from './googleMap'
import HelpForm from './HelpForm'
import Image from 'next/image'
import NavItem from './Navitem'
import { TfiLocationPin } from "react-icons/tfi";
import { LiaMobileAltSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";


import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className='w-full h-auto bg-color'>
        <h2 className='text-center pt-8 font-bold text-white text-5xl'>Keep in touch</h2>
        <p className='text-center text-color mt-2'>Sign up to get the latest on sales, new release and more..</p>
        <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-2 mt-5  p-4">
          <Input
            type="email"
            placeholder="Your Email Address"
            className="w-full md:w-[400px] lg:w-[400px] xl:w-[700px] p-2"
          />
          <Button type="submit" className="mt-2 md:mt-0 b-color">
            Submit
          </Button>
        </div>

        <div>
          <h2 className='text-center pt-8  text-color text-4xl font-semibold'>CONTACT</h2>

          <GoogleMap />
        </div>
        <div className='h-[300px] flex w-full mt-5 '>
          <div className=' w-full flex flex-col items-center h-[300px]'>
            <HelpForm />
          </div>


         
          <div className='w-full h-[300px] flex flex-col px-10 '>
  <div className='b-bottum text-white b h-[300px]'>
    <h2 className='flex items-center justify-between gap-3 pt-[30px] text-white text-2xl font-semibold'>
      ADDRESS <TfiLocationPin />
    </h2>
    <p>20550 TOWNSEN Blvd
      Bldg, Unit 201
      Humbel Texas 77338
      United States
    </p>
  </div>
  <div className='b-bottum h-[300px]'>
    <h2 className='flex items-center justify-between gap-3 pt-[30px] text-white text-2xl font-semibold'>
      PHONE <LiaMobileAltSolid />
    </h2>
    <p className='text-white'>(888)445-9675</p>
  </div>
  <div className='b-bottum h-[300px]'>
    <h2 className='flex items-center justify-between gap-3 pt-[30px] text-white text-2xl font-semibold'>
      EMAIL <MdEmail />
    </h2>
    <p className='text-white'>contact@eet.auction</p>
  </div>
</div>
        </div>

        <div className=' h-auto'>
          <Image
            src='/2nd-logo.png'
            alt='2nd-logo'
            height={10}
            width={200}
            className='h-[100px] w-[250px] ml-auto mr-auto mt-11' />
          <div className=' w-full flex'>
            <ul className=' flex text-white  gap-7 mt-5  ul  ml-auto mr-auto  '>
              <NavItem href='/bikes'>Bikes</NavItem>
              <NavItem href='/accessories'>ACCESSORIES</NavItem>
              <NavItem href='/about'>ABOUT US</NavItem>
              <NavItem href='/contact'>CONTACT</NavItem>
            </ul>
          </div>

        </div>
        <div className='w-full h-[150px] b-color flex justify-center items-center '>

          <ul className='flex justify-center items-center w-full  h-[80px] gap-[70px] bg'>
            <li className=' h-full w-20 rounded-full bg-color '>
              <Link href='#'>
                <Image
                  src='/tiktok.png'
                  height={20}  // Set a specific height, adjust accordingly
                  width={20}   // Let the width adjust based on the aspect ratio
                  className='h-[50px] w-[50px] ml-4 mt-3'
                />
              </Link>
            </li>
            <li className=' h-full w-20 rounded-full  bg-color'>
              <Link href='#'>
                <Image
                  src='/instagram.png'
                  height={20}  // Set a specific height, adjust accordingly
                  width={50}   // Let the width adjust based on the aspect ratio
                  className='h-15 w-15 ml-4 mt-3'
                />
              </Link>
            </li>
            <li className=' h-full w-20 rounded-full  bg-color'>
              <Link href='#'>
                <Image
                  src='/pintrest.png'
                  height={20}  // Set a specific height, adjust accordingly
                  width={50}   // Let the width adjust based on the aspect ratio
                  className='h-15 w-15 ml-4 mt-2'
                />
              </Link>
            </li>
            <li className=' h-full w-20 rounded-full  bg-color'>
              <Link href='#'>
                <Image
                  src='/youtube.png'
                  height={20}  // Set a specific height, adjust accordingly
                  width={50}   // Let the width adjust based on the aspect ratio
                  className='h-15 w-15 ml-3 mt-3'
                />
              </Link>
            </li>
          </ul>


        </div>
        <div className='w-full h-[50px] text-center text-color2 mt-3'>
          <Link href='#'>© 2024 - Reserved by Opeak</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer