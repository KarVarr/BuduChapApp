import React from 'react';

import userPhoto from '../image/harry_potter.webp';
const Chats = () => {
  return (
    <div className='chats'>
      <div className='userChat'>
        <img src={userPhoto} alt='userPhoto' />
        <div className='userChatInfo'>
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
