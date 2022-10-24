import React from 'react'

import userPhoto from '../image/harry_potter.webp'


const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Logo Chat</span>
      <div className='user'>
        <img src={userPhoto} alt='userPhoto' />
        <span>Harry</span>
        <button>logout</button>
      </div>
    </div>
  );
}

export default Navbar