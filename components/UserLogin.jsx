"use client"
import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

import Link from 'next/link';

import { baseURL } from "@/utils/constant";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import axios from "axios";
import { isLogin, setAuthentication } from "@/utils/auth";

function UserLogin() {
  const [signupStatus, setSignupStatus] = useState(false);
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };

    try {
      const res = await axios.post(`${baseURL}/login`, payload);
      setAuthentication(res.data.token);
      toast.success("Login Successful");
      setEmail(''),
      setPassword('')
      setName('')
      router.push("/dashboard");
    } catch (err) {
      toast.error(err?.response?.data?.message || "An error occurred");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      password,
    };

    try {
      await axios.post(`${baseURL}/signup`, payload);
      toast.success(
        <div>
          Account Created Successfully <br /> Please Login in
        </div>
      );
      setEmail(''),
      setPassword('')
      setName('')
      setSignupStatus(false);
    } catch (err) {
      toast.error(err?.response?.data?.message || "An error occurred");
    }
  };

  useEffect(() => {
    const authenticate = async () => {
      if (await isLogin()) {
        router.push("/");
        
      }
    };
    authenticate();
  }, []);

  return (
    <>
      <button
        className='button'
        onClick={() => setShow(true)}
      >
        LOG IN
      </button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className='flex justify-center items-center '>
            <div className='bg-white rounded-lg p-4'>
              {signupStatus ? (
                <div className='inset-0 flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm'>
                  <div className='bg-white rounded-lg p-4'>
                    <div className='w-[380px]  flex flex-col justify-center items-center'>
                      <form onSubmit={handleSignup}>
                        <input
                          value={name}
                          className='mb-4 w-64 text-[#9F8F87]'
                          placeholder='Name'
                          type='text'
                          onChange={(e) => setName(e.target.value)}
                        />
                        <input
                          value={email}
                          className='mb-4 w-64 text-[#9F8F87]'
                          placeholder='Email'
                          type='email'
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                          value={password}
                          className='mb-4 w-64 text-[#9F8F87]'
                          placeholder='Password'
                          type='password'
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className='w-64 text-white rounded-md bg-[#9F8F87] hover:bg-[#9F8F87]'>
                          SIGN UP
                        </button>
                      </form>
                      <Link href='#' className='text-color text-center' onClick={() => setSignupStatus(false)}>
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='w-[250px] flex flex-col justify-center items-center'>
                  <form onSubmit={handleLogin}>
                    <input
                      className='mb-4 w-full text-color3'
                      placeholder='Email'
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                    <input
                      value={password}
                      className='mb-4 w-full text-color3'
                      type='password'
                      placeholder='Password'
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Link href='#' className='text-color  ml-10 '>
                      Forgot your password?
                    </Link>
                    <button type="submit" className='w-full text-white b-color rounded-sm bg-[#9F8F87] hover:bg-[#9F8F87]'>
                      LOGIN
                    </button>
                  </form>
                  <Link href='#' className='text-color text-center' onClick={() => setSignupStatus(true)}>
                    No account? Create one here
                  </Link>
                </div>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UserLogin;
