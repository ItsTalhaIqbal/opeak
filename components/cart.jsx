import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import Image from 'next/image';

const Cart = () => {
  const [status, setStatus] = useState(false);

  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <div className='relative'>
      <div className='rounded-full h-9 w-9 cart mt-2  mr-3 flex items-center justify-center'>
        <Image
          src="/bucket.png"
          height={20}
          width={20}
          alt='bucket'
          className='items-center'
          onClick={toggleStatus}
        />
        {status && 
          <div className=' h-auto w-[350px] bg-white absolute top-[65px] left-auto  lg:right-3 z-10 '>
            <span className='flex justify-end mr-2 mt-2'>
            <IoMdClose className='h-6 w-6' onClick={()=>setStatus(false)}/>
            </span>
            <p className='text-center font-semibold text-md mt-[20px]'>You have no item in your shopping cart</p>
          </div>
        }
      </div>
    </div>
  );
};

export default Cart;
