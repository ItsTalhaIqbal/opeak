"use client"
import React, { useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import EMTBFull from "@/components/Product-components/EMTBFull";
import EMTB from "@/components/Product-components/EMTB";
import Imperial from "@/components/Product-components/Imperial";
import SuperMoto from "@/components/Product-components/SuperMoto";
import Unik from "@/components/Product-components/Unik";

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
          <Link href="#emtb" className="scroll-link w-full max-w-[1310px] mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="flex flex-col items-center">
              <Image src='/choose-emtb.jpg' alt="EMTB" height={385} width={281} />
            </div>
          </Link>
          <Link href="#emtbfull" className="scroll-link w-full max-w-[1310px] mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="flex flex-col items-center">
              <Image src='/choose-emtbfull.jpg' alt="EMTB Full" height={385} width={281} />
            </div>
          </Link>
          <Link href="#supermoto" className="scroll-link w-full max-w-[1310px] mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="flex flex-col items-center">
              <Image src='/choose-supermoto.jpg' alt="SuperMoto" height={385} width={281} />
            </div>
          </Link>
          <Link href="#unik" className="scroll-link w-full max-w-[1310px] mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="flex flex-col items-center">
              <Image src='/choose-unik.jpg' alt="Unik" height={385} width={281} />
            </div>
          </Link>
          <Link href="#imperial" className="scroll-link w-full max-w-[1310px] mb-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
            <div className="flex flex-col items-center">
              <Image src='/choose-imperial.jpg' alt="Imperial" height={385} width={281} />
            </div>
          </Link>
        </div>
      </div>
      <div id='supermoto'><SuperMoto /></div>
      <div id='unik'><Unik /></div>
      <div id='imperial' ><Imperial/></div>
      <div id='emtbfull'><EMTBFull  /></div>
      <div id='emtb'><EMTB  /></div>
    
      
    
    
     
    </>
  );
}

export default ScrollComponent;
