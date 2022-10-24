import React from 'react';

import UserPhoto from '../image/harry_potter.webp';

const Message = () => {
  return (
    <div className='message owner'>
      <div className='messageInfo'>
        <img src={UserPhoto} alt='UserPhoto' />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>hello there</p>
        <img src={UserPhoto} alt='UserPhoto' />
      </div>
    </div>
  );
};

export default Message;
