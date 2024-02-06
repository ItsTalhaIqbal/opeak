import React from 'react'
import { Input } from './ui/input'
import Link from 'next/link'
import { Button } from './ui/button'

const LoginForm = ({ isVisible, onClose }) => {
  const handleClick = (e) => {
    if (e.target.id === "login") {
 onClose()
  }
    }
   

  if (!isVisible) return null;
  return (

    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm' id="login" onClick={handleClick}>
  <div className='bg-white rounded-lg p-4'>
    <div className='flex justify-end'> 
      <Button onClick={() => onClose(false)} className='button text-black font-bold'>
        X
      </Button>
    </div>
    <div className='w-[600px] h-[400px] flex flex-col justify-center items-center'>
      <Input className='mb-4 w-64' placeholder='Username' />
      <Input className='mb-4 w-64' type='password' placeholder='Password' />
      <Link href='#' className='text-color2 mb-4'>Forgot your password?</Link>
      <Button className='w-64'>SIGN IN</Button>
      <Link href='#' className='text-color2 text-center'>No account? Create one here</Link>
    </div>
  </div>
</div>

  )
}

export default LoginForm