"use client"
import Image from 'next/image'
import Link from 'next/link'
import About from './About'
import LoginForm from './LoginForm'
import Contact from './Contact'
import Accessories from './Accessories'
import Bikes from './Bikes'


const Navbar = () => {



  return (
    <>
      <nav className='w-full  bg-color p-2  h-auto'>
        <div className=' flex w-auto max-w-[1400px] ml-auto mr-auto b'>
          <Link href='/'>
            <Image
              src='/logo-opeak.png'
              alt='Opeak Logo'
              height={300}
              width={600}
              className='w-auto h-auto mt-2'
            />
          </Link>
          <ul className=' hidden md:flex text-white    ml-auto mr-5 mb-0 w-auto gap-5 h-auto b'>
            <li className='mt-auto'><Bikes/></li>
            <li className='mt-auto'><Accessories/></li>
            <li className='mt-auto'><About/></li>
            <li className='mt-auto'><Contact/></li>
          </ul>



          
          <Link href='#' className='b'>
            <Image
              src="/bucket.png"
              height={10}
              width={25}
              alt='bucket'
              className='h-5 w-6 mt-6 ml-2 mr-2  '
            />
          </Link>
          {/* responsive */}
          {/* <div className='hidden md:h-full w-auto'>
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
          </div> */}

          <div className=' hidden md:block   mr-none b'>
            <LoginForm />

          </div>
        </div>


      </nav >

    </>
  )
}



export default Navbar
