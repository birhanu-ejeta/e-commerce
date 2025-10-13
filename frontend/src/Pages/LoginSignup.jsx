import React from 'react'
import './CSS/LoginSignup.css'

export default function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have account <span>Login here</span> </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, I agree to the terms of use and privace</p>
        </div>
      </div>
    </div>
  )
}
