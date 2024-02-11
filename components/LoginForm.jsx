"use Client"
import { Input } from './ui/input'
import Link from 'next/link'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function LoginForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='bg-color' onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
      <div className=' inset-0 flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm ' >
  <div className='bg-white rounded-lg p-4 '>
    
    <div className='w-[450px]  flex flex-col justify-center items-center'>
      <Input className='mb-4 w-64' placeholder='Username' />
      <Input className='mb-4 w-64' type='password' placeholder='Password' />
      <Link href='#' className='text-color2 mb-4'>Forgot your password?</Link>
      <Button className='w-64'>SIGN IN</Button>
      <Link href='#' className='text-color2 text-center'>No account? Create one here</Link>
    </div>
  </div>
</div></Modal.Body></Modal>
    </>
  );
}
export default LoginForm

