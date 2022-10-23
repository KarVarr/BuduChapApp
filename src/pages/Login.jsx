import React from 'react';

import avatarImage from '../image/add-user.png';

const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>BuDu Chat</span>
        <span className='title'>Register</span>
        <form action=''>
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <button>Sign In</button>
        </form>
        <p>You do have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
