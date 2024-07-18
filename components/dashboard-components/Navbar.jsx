"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Contact from '../Contact';
import Bikes from '../Bikes';
import About from '../About';
import Accessories from '../Accessories';


const Navbar = () => {
  return (
    <nav className='w-full bg-color p-2 px-5 py-8 lg:h-[80px]'>
      <div className='flex justify-between items-center max-w-[1310px] mx-auto mt-2 '>
        <Link href='/' className=' hidden lg:block '>
          <Image
            src='/logo-opeak.png'
            alt='Opeak Logo'
            height={46}
            width={304}
            className='cursor-pointer '
          />
        </Link>
        {/* Desktop Menu */}
        <ul className='hidden lg:flex gap-5  ml-auto mr-5 my-auto md:gap-3'>
          <li><Bikes /></li>
          <li><Accessories /></li>
          <li><About /></li>
          <li><Contact /></li>
        </ul>

        {/* Mobile Menu */}
        <div className='w-full h-auto lg:hidden'>
          <Link href={'/'}>
            <Image
              src='/2nd-logo.png'
              alt='2nd-logo'
              height={50}
              width={200}
              className='mx-auto mt-3'
            />
          </Link>
          <ul className=' w-auto flex justify-center  text-white gap-4 mt-3 font-bold text-lg '>
            <li ><Bikes /></li>
            <li ><Accessories /></li>
            <li ><About /></li>
            <li ><Contact /></li>
          </ul>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
