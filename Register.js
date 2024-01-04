import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import "./login.css";
import "./register.css";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email,password);
      const user = userCredential.user;
      if (name) {
        auth.user.updateProfile({
          displayName: name,
        });
      }

      

      navigate('/'); 
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='login_info'>
      <h1>Create Your Account</h1>
      <Link to={'/'}>
        <img
          src="https://img.etimg.com/thumb/msid-59738992,width-640,resizemode-4,imgsize-25499/amazon.jpg"
          className="amazon_logo"
        />
      </Link>
      <form  >
        <input type="text"className="button_type1" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <br></br>
        <br></br>

        <input type="email" className="button_type1" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br></br>
        <br></br>
        <input type="password" className="button_type1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br></br>
        <br></br>
        <button type="submit" className='button_type1' onClick={handleRegister}>Create Account</button>
        <br></br>
        <br></br>
      </form>
      <Link to="/login" className='sign_in'>Already have an account? Sign In</Link>
    </div>
  );
};

export default Register;
