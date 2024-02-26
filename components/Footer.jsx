import React from 'react'
import  Button  from "@/components/ui/button"
import  Input  from "@/components/ui/input"
import GoogleMap from './googleMap'
import HelpForm from './HelpForm'
import Image from 'next/image'


import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full h-full b'>
      <div className='w-full h-auto bg-color ml-auto mr-auto b '>
        <div className='h-full w-full layout-bg'>

          <div className='  w-auto max-w-[1400px] ml-auto mr-auto'>
            <h2 className='text-center pt-8 font-bold text-white text-5xl'>Keep in touch</h2>
            <p className='text-center text-color text-lg mt-2'>Sign up to get the latest on sales, new release and more..</p>
            <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-2 mt-5  p-4">
              <Input
                type="email"
                placeholder="Your Email Address"
                className="w-full md:w-[400px] lg:w-[400px] xl:w-[700px] p-2 bg-white"
              />
              <Button type="submit" className=" md:mt-0 b-color text-white bg-[#9F8F87] hover:bg-[#9F8F87]">
                SUBMIT
              </Button>
            </div>

            <div>
              <h2 className='text-center pt-8  text-color text-4xl font-semibold'>CONTACT</h2>

              <GoogleMap />
            </div>
          </div>
        </div>

        <div className='h-full w-full '>
          <div className='h-auto flex  w-auto max-w-[1400px] mt-3  ml-auto mr-auto'>
            <div className=' w-full flex   h-auto '>
              <HelpForm />
            </div>
            <div className='w-full h-[400px] flex   '>
              <div className='h-auto w-auto  ml-[100px] mt-3 '>
                <h2 className='flex items-center justify-between   text-white text-3xl font-semibold'>
                  ADDRESS
                </h2>
                <div className=' text-white text-xl h-[70px] w-[350px]  text-center b-bottum'>
                  <p>20550 TOWNSEN Blvd
                    Bldg, Unit 201
                    Humbel Texas 77338
                    United States
                  </p>
                </div>
                <h2 className='flex items-center justify-between   text-white text-3xl font-semibold'>
                  PHONE
                </h2>
                <div className=' h-[50px] w-[350px] text-center  text-xl b-bottum'>
                  <p className='text-white'>(888)445-9675</p>
                </div>
                <h2 className='flex items-center justify-between   text-white text-3xl font-semibold'>
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
          <Image
            src='/2nd-logo.png'
            alt='2nd-logo'
            height={10}
            width={200}
            className='h-[100px] w-[250px] ml-auto mr-auto mt-11' />
          <div className=' w-full flex'>
            <ul className=' flex text-white  gap-7 mt-5  ul  ml-auto mr-auto  '>
              <Link href='/bikes' className='text-color2'>Bikes</Link>
              <Link href='/accessories' className='text-color2'>ACCESSORIES</Link>
              <Link href='/about' className='text-color2'>ABOUT US</Link>
              <Link href='/contact' className='text-color2'>CONTACT</Link>
            </ul>
          </div>
        </div>

        <div className='w-full h-[150px] b-color flex justify-center items-center '>

          <ul className='flex justify-center items-center w-full  h-[80px] gap-[70px] bg'>
            <li className=' h-full w-20 rounded-full bg-color bg'>
              <Link href='#'>
                <Image
                  src='/tiktok.png'
                  height={20}
                  width={20}
                  className='h-[50px] w-[50px] ml-4 mt-3'
                />
              </Link>
            </li>
            <li className=' h-full w-20 rounded-full  bg-color bg'>
              <Link href='#'>
                <Image
                  src='/instagram.png'
                  height={20}
                  width={50}
                  className='h-15 w-15 ml-4 mt-3'
                />
              </Link>
            </li>
            <li className=' h-full w-20 rounded-full  bg-color bg'>
              <Link href='#'>
                <Image
                  src='/pintrest.png'
                  height={20}
                  width={50}
                  className='h-15 w-15 ml-4 mt-2'
                />
              </Link>
            </li>
            <li className=' h-full w-20 rounded-full  bg-color bg'>
              <Link href='#'>
                <Image
                  src='/youtube.png'
                  height={20}
                  width={50}
                  className='h-15 w-15 ml-3 mt-3'
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