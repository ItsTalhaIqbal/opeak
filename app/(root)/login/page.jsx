import LoginForm from '@/components/LoginForm'
import React from 'react'

const Login = () => {
  return (
    <div className='h-auto w-full '>
      <h2 className='ml-10 mt-10 text-color1 font-bold text-3xl'>Log in to your account</h2>
      <LoginForm/>
    </div>
  )
}

export default Login