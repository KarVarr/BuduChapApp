import React from 'react';

import avatarImage from '../image/add-user.png'

const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>BuDu Chat</span>
        <span className='title'>Register</span>
        <form action=''>
          <input type='text' placeholder='display name' />
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <input style={{display: 'none'}} type='file' id='file'/>
          <label htmlFor="file">
            <img src={avatarImage} alt="avatarImage" />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
