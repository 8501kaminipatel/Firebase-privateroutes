import React, { useContext, useEffect } from 'react';
import GoogleButton from 'react-google-button';
import { auth, provider } from '../SERVICES/firebase';
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Usercontext } from '../CONTEXT/AuthContext';

const Login = () => {
  const navigate = useNavigate(); // fixed typo
  const { user, setUser } = useContext(Usercontext);

  async function handlegooglesubmit(e) {
    e.preventDefault();
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
      setUser(res.user); 
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }

 

  return (
    <div className="login-container">
      
      <div className="login-card">
      
        <h2>Welcome Back To Login </h2>
        <p>Please sign in with your Google account to continue.</p>
      <div className='button'>
        <GoogleButton onClick={handlegooglesubmit} />
        </div>
      </div>
    </div>
  );
};

export default Login;
