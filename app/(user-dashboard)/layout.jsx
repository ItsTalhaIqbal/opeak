"use client"
import React, { useEffect } from 'react';
import Router from 'next/router';
import Navbar from '@/components/dashboard-components/Navbar';
import Sidebar from '@/components/dashboard-components/Sidebar';
import { isLogin } from '@/utils/auth';
import { toast } from 'react-toastify';

const Layout = ({ children }) => {
  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await isLogin();
      if (!loggedIn) {
        toast.error("Please Login");
        Router.push('/');
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full max-w-[1400px] h-full mx-auto flex">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default Layout;
