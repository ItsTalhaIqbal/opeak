"use Client"
import { Input } from './ui/input'
import Link from 'next/link'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SignUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Link href='#' className='text-color text-center' onClick={handleShow}>No account? Create one here</Link>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
      <div className=' inset-0 flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm ' >
  <div className='bg-white rounded-lg p-4 '>
    
    <div className='w-[450px]  flex flex-col justify-center items-center'>
      <Input className='mb-4 w-64' placeholder='NAME' type="text" />
      <Input className='mb-4 w-64' placeholder='Email' type="email"/>
      <Input className='mb-4 w-64'  placeholder='Password' type='password'/>
      <Button className='w-64'>SIGN IN</Button>
      <Link href='#' className='text-color text-center'>Login</Link>
    </div>
  </div>
</div></Modal.Body></Modal>
    </>
  );
}
export default SignUp

