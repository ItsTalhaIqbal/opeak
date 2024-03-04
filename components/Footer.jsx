"use client"
import React from 'react'
import  Button  from "@/components/ui/button"
import  Input  from "@/components/ui/input"
import GoogleMap from './googleMap'
import HelpForm from './HelpForm'
import Image from 'next/image'
import Contact from './Contact';
import Accessories from './Accessories';
import Bikes from './Bikes';
import About from './About';



import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full h-full '>
      <div className='w-full h-auto bg-color ml-auto mr-auto  '>
        <div className='h-full w-full layout-bg'>

          <div className='  w-auto max-w-[1400px] ml-auto mr-auto'>
            <h2 className='text-center pt-8 font-bold text-white text-2lg lg:text-5xl'>Keep in touch</h2>
            <p className='text-center text-color text-sm lg:text-lg mt-2'>Sign up to get the latest on sales, new release and more..</p>
            <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-2 mt-5  p-4">
              <Input
                type="email"
                placeholder="Your Email Address"
                className="w-[350px] lg:w-[400px] xl:w-[700px] p-2 bg-white rounded-none"
              />
              <Button type="submit" className="rounded-none mt-3 lg:mt-0 b-color text-white bg-[#9F8F87] hover:bg-[#9F8F87]">
                SUBMIT
              </Button>
            </div>

            <div>
              <h2 className='text-center pt-8  text-color text-2xl lg:text-4xl font-semibold'>CONTACT</h2>

              <GoogleMap />
            </div>
          </div>
        </div>

        <div className='h-full w-full '>
          <div className='h-auto flex flex-col lg:flex-row w-auto max-w-[1400px] mt-3 ml-auto mr-auto'>
            <div className=' w-full flex   h-auto '>
              <HelpForm />
            </div>
            <div className='w-full h-[300px] flex mt-3 '>
              <div className='h-auto w-auto ml-3 lg:ml-[100px]   mx-auto'>
                <h2 className='flex items-center justify-between   text-white text-xl lg:text-3xl font-semibold'>
                  ADDRESS
                </h2>
                <div className=' text-white text-lg lg:text-xl h-[70px] w-[350px]  text-center b-bottum'>
                  <p>20550 TOWNSEN Blvd
                    Bldg, Unit 201
                    Humbel Texas 77338
                    United States
                  </p>
                </div>
                <h2 className='flex items-center justify-between   text-white text-xl lg:text-3xl font-semibold'>
                  PHONE
                </h2>
                <div className=' h-[50px] w-[350px] text-center  text-xl b-bottum'>
                  <p className='text-white'>(888)445-9675</p>
                </div>
                <h2 className='flex items-center justify-between   text-white text-xl lg:text-3xl font-semibold'>
                  EMAIL
                </h2>
                <div className=' h-[50px] w-[350px] text-center  text-xl b-bottum'>
                  <p className='text-white'>contact@eet.auction</p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className=' h-auto'>
          <Link href={"/"}>
          <Image
            src='/2nd-logo.png'
            alt='2nd-logo'
            height={10}
            width={200}
            className='h-[100px] w-[250px] ml-auto mr-auto mt-11' />
          </Link>
          
          <div className=' w-full flex'>
            <ul className=' flex text-white  gap-7 mt-5  ul  ml-auto mr-auto  '>
              <li className='text-color2'><Bikes /></li>
              <li className='text-color2'><Accessories /></li>
              <li className='text-color2'><About /></li>
              <li className='text-color2'><Contact /></li>
              
            </ul>
          </div>
        </div>

        <div className='w-full h-[130px] bg-[#9F8F87] flex justify-center items-center '>

          <ul className='flex  justify-center w-full my-auto  h-[80px] gap-[15px] lg:gap-[70px] bg'>
          <li className=' h-[60px] w-[60px] rounded-full  bg-color bg'>
              <Link href='#'>
                <Image
                  src='/opeak-face.png'
                 height={20}
                 width={20}
                  className='ml-5 mt-3'
                />
              </Link>
            </li>
            <li className='  h-[60px] w-[60px] rounded-full bg-color bg'>
              <Link href='#'>
                <Image
                  src='/tiktok.png'
                  height={30}
                  width={30}
                  className='  ml-4 mt-3'
                />
              </Link>
            </li>
            <li className='h-[60px] w-[60px] rounded-full  bg-color bg'>
              <Link href='#'>
                <Image
                  src='/instagram.png'
                  height={30}
                  width={30}
                  className=' ml-4 mt-3'
                />
              </Link>
            </li>
            <li className=' h-[60px] w-[60px] rounded-full  bg-color bg'>
              <Link href='#'>
                <Image
                  src='/pintrest.png'
                  height={30}
                  width={30}
                  className=' ml-4 mt-3'
                />
              </Link>
            </li>
            <li className=' h-[60px] w-[60px] rounded-full  bg-color bg'>
              <Link href='#'>
                <Image
                  src='/youtube.png'
                  height={40}
                  width={40}
                  className=' ml-2 mt-2'
                />
              </Link>
            </li>
          </ul>


        </div>
        <div className='w-full h-[50px] text-center text-color2 mt-3 text-white decoration-none'>
          <Link href='#' className='text-color2'>© 2024 - Reserved by Opeak</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer