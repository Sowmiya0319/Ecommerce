import React from 'react'
import './login.css';
import { Link, useNavigate} from 'react-router-dom';
import {auth} from './firebase';
import { useState } from 'react';
export default function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();
  const SignIn = e =>
  {
    e.preventDefault();
    
    auth
    
    .signInWithEmailAndPassword(email, password)
    .then(auth => {
      navigate('/');
    })
    .catch(error => alert(error.message))
  }
  const register = e =>
  {
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) => {
  
        if (auth) {
            navigate('/');
        }
    })
    .catch(error => alert(error.message))
  }
  
  
  return (
    <div className="logo">
      <Link to={'/'}>
      <img src="https://img.etimg.com/thumb/msid-59738992,width-640,resizemode-4,imgsize-25499/amazon.jpg" className="amazon_logo"/>
      </Link>
      <div className='login_info'>
      <h1>Sign in</h1>
      <b> <p1>Email</p1></b>
      <input type='text' value={email} onChange={e => setEmail(e.target.value)} className="button_type1" />
      <br></br>
      <br></br>
      <b> <p1>Password</p1></b>
      

      <input type='password' value={password} onChange={e => setPassword(e.target.value)} className='button_type1' />
      <br></br>

      <button type="submit"  onClick={SignIn} className="sign_in_button" >Sign In</button>
      <br></br>
      <p className="conditions">By continuing, you agree to Amazon's Clone Conditions of Use and Privacy Notice.</p>  
      <button onClick={register}  type="submit" className="create_acc_button">Create Your Amazon Account</button>

      </div>
          </div>
  )
}