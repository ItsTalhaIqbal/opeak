"use client";
import React, { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

function scrollToTarget(id) {
  const target = document.getElementById(id);
  if (target) {
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  }
}

function ScrollComponent() {
  useEffect(() => {
    const handleClick = (event, id) => {
      event.preventDefault();
      scrollToTarget(id);
    };

    const buttons = document.querySelectorAll('.scroll-link');
    buttons.forEach(button => {
      button.addEventListener('click', (event) => handleClick(event, button.getAttribute('href').substring(1)));
    });

    // Clean up event listener when component unmounts
    return () => {
      buttons.forEach(button => {
        button.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <>
      <div className="w-full h-auto bg-color">
        <h1 className="text-3xl pt-4 text-center text-white font-bold lg:text-5xl ">Choose your OPEAK eBike</h1>
        <div className="flex ml-auto mr-auto justify-center items-center mt-10 w-auto max-w-[1400px]">
          <Link href="#6692c7d753c366f2a6f75db5" className="scroll-link w-full max-w-[1310px] mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="flex flex-col items-center">
              <Image src='/choose-emtb.jpg' alt="EMTB" height={385} width={281} />
            </div>
          </Link>
          <Link href="#6692c77853c366f2a6f75da6" className="scroll-link w-full max-w-[1310px] mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="flex flex-col items-center">
              <Image src='/choose-emtbfull.jpg' alt="EMTB Full" height={385} width={281} />
            </div>
          </Link>
          <Link href="#6692c39e53c366f2a6f75d77" className="scroll-link w-full max-w-[1310px] mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="flex flex-col items-center">
              <Image src='/choose-supermoto.jpg' alt="SuperMoto" height={385} width={281} />
            </div>
          </Link>
          <Link href="#6692c5ca53c366f2a6f75d82" className="scroll-link w-full max-w-[1310px] mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="flex flex-col items-center">
              <Image src='/choose-unik.jpg' alt="Unik" height={385} width={281} />
            </div>
          </Link>
          <Link href="#6692c67f53c366f2a6f75d8d" className="scroll-link w-full max-w-[1310px] mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="flex flex-col items-center">
              <Image src='/choose-imperial.jpg' alt="Imperial" height={385} width={281} />
            </div>
          </Link>
        </div>
      </div>

    </>
  );
}

export default ScrollComponent;