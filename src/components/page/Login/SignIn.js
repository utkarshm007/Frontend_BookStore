import React from 'react'
import Login from './Login'
import VerifyOtp from './VerifyOtp'
import Register from './Register'

const SignIn = () => {
  return (
    <div>
      <Login />
      <VerifyOtp />
      <Register/>
    </div>
  )
}

export default SignIn
