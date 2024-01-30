import React from 'react'
import { Input } from './ui/input'
import Link from 'next/link'
import { Button } from './ui/button'

const LoginForn = () => {
  return (
   
    <>
    <div className='flex flex-col items-center justify-center h-[270px] w-[300px] l-div'>
      <Input className='mb-4 w-64' placeholder='Username' />
      <Input className='mb-4 w-64' type='password' placeholder='Password' />
      <Link href='#' className='text-color2 mb-4'>Forgot your password?</Link>
      <Button className='w-64'>SIGN IN</Button>
    </div>
    <Link href='#' className='text-color2 text-center'>No account? Create one here</Link>
  </>
  )
}

export default LoginForn