import Link from 'next/link';
import React from 'react';
import { CgProfile } from "react-icons/cg";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { logOut } from '@/utils/auth';
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await logOut();
    router.push('/');
  };

  return (
    <div className='h-[600px] w-[20%]  p-4'>
      <Link href={'/dashboard'} className='text-white mt-4 text-decoration-none no-underline'>
        <h2 className='ml-5 mt-5'>My Profile</h2>
      </Link>
      <ul className='h-auto w-full mt-5'>
        <li className='mt-3'>
          <Link href={'/personal-info'} className='flex text-white no-underline text-center gap-2'>
            <CgProfile className='h-5 w-5 mt-1' />
             User Info
          </Link>
        </li>
        <li className='mt-3'>
          <Link href={'/purchases'} className='flex text-white no-underline text-center gap-2'>
            <FaRegCreditCard className='h-5 w-5 mt-1' />
            My Purchases
          </Link>
        </li>
        <li className='mt-3'>
          <Link href={'/orders'} className='flex text-white no-underline text-center gap-2'>
            <MdAddShoppingCart className='h-5 w-5 mt-1' />
            My Orders
          </Link>
        </li>
        <li className='mt-3'>
          <button onClick={handleLogout} className='flex text-white no-underline text-center gap-2'>
            <IoIosLogOut className='h-5 w-5 mt-1' />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
