import React from 'react';
import { Button } from './ui/button';



const About = ({ isVisible, onClose }) => {
  const handleClick = (e) => {
    if (e.target.id === "about") {
      onClose()
    }
  }

  if (!isVisible) return null;
  return (

    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm' id="about" onClick={handleClick}>
      <div className='bg-white rounded-lg  flex b w-[90%] h-[500px]'>
        <div className='w-full b h-[50px] flex justify-end'>
          <Button onClick={() => onClose(false)} className='button text-black'> X </Button>
        </div>
        <div className='h-full w-auto b'></div>
        <div className='h-full w-auto b'></div>
        <div className='h-full w-auto b'></div>
      </div>
    </div>
  )
};


export default About;

