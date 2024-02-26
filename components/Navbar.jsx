"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import About from './About';
import LoginForm from './LoginForm';
import Contact from './Contact';
import Accessories from './Accessories';
import Bikes from './Bikes';
import Cart from './cart';

const Navbar = () => {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <nav className='w-full bg-color p-2 h-[90px] px-5 py-8' >
      <div className='flex w-auto max-w-[1310px] ml-auto mr-auto'>
        <Link href='/'>
          <Image
            src='/logo-opeak.png'
            alt='Opeak Logo'
            height={46}
            width={304}
            className='w-auto h-auto mt-2'
            onClick={toggleStatus}
          />
        </Link>
        <ul className='hidden md:flex ml-auto mr-5 mb-0 w-auto gap-5 h-auto '>
          <li className='mt-auto font-semibold'><Bikes /></li>
          <li className='mt-auto font-bold'><Accessories /></li>
          <li className='mt-auto font-bold'><About /></li>
          <li className='mt-auto font-bold'><Contact /></li>
        </ul>

        <Cart />
        {/* <div className='hidden 
          md:h-full w-auto'>
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

        <div className='hidden md:block mr-none w-[100px] mt-3 '>
          <LoginForm />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

