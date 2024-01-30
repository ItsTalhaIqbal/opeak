"use client"
import { useState } from 'react';
import Link from 'next/link'


const NavItem = ({ href, children, dropdownItems }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
  
    const handleMouseEnter = () => {
      setDropdownOpen(true);
    };
  
    const handleMouseLeave = () => {
      setDropdownOpen(false);
    };
  
    return (
      <li className='relative group hover:text-blue'>
        <Link href={href}
           onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </Link>
        
        {isDropdownOpen && dropdownItems && (
          <ul className='absolute left-0 mt-2 bg-white text-black border border-gray-300 p-2 space-y-2'>
            {dropdownItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  export  default NavItem