"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Cart = () => {
  const cart = useSelector(state => state.cart.items);
  const [isClient, setIsClient] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server
  }

  return (
    <div className='relative'>
      <div className={`${pathName === "/cart" ? "hidden" : ""} rounded-full h-9 w-9 cart mt-2 mr-3 flex items-center justify-center`}>
        <Link href='/cart'>
          <Image
            src="/bucket.png"
            width={20}
            height={20}
            alt="bucket"
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
        {cart.length !== 0 && <div className='bg-[#FF5501] absolute top-1 right-1 mb-1 w-6 h-6 text-center rounded-lg p-0 font-semibold'>{cart.length}</div>}
      </div>
    </div>
  );
};

export default Cart;
