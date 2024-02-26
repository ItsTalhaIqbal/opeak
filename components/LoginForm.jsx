"use client"
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Input from './ui/input';
import Button from './ui/button';
import Link from 'next/link';

function LoginForm() {
  const [signupStatus, setSignupStatus] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <>
      <Button
        className='bg-[#9F8F87] w-[100px] rounded-full text-white hover:bg-[#9F8F87]'
        onClick={handleShow}
      >
        LOG IN
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className='flex justify-center items-center '>
            <div className='bg-white rounded-lg p-4'>
              {signupStatus ? (
                <div className='inset-0 flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm'>
                  <div className='bg-white rounded-lg p-4'>
                    <div className='w-[350px]  flex flex-col justify-center items-center'>
                      <Input className='mb-4 w-64' placeholder='NAME' type='text' />
                      <Input className='mb-4 w-64' placeholder='Email' type='email' />
                      <Input className='mb-4 w-64' placeholder='Password' type='password' />
                      <Button className='w-64 text-white rounded-md bg-[#9F8F87] hover:bg-[#9F8F87]'>
                        SIGN IN
                      </Button>
                      <Link href='#' className='text-color text-center' onClick={()=>setSignupStatus(false)}>
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='w-[250px] flex flex-col justify-center items-center'>
                  <Input className='mb-4 w-full text-color3' placeholder='Username' />
                  <Input className='mb-4 w-full text-color3' type='password' placeholder='Password' />
                  <Link href='#' className='text-color mb-4'>
                    Forgot your password?
                  </Link>
                  <Button className='w-full text-white b-color rounded-sm bg-[#9F8F87] hover:bg-[#9F8F87]'>
                    SIGN IN
                  </Button>
                  <Link href='#' className='text-color text-center' onClick={()=>setSignupStatus(true)}>
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

export default LoginForm;
