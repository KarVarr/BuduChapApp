import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

import UserPhoto from '../image/harry_potter.webp';

const { currentUser } = useContext(AuthContext);
const { data } = useContext(ChatContext);

const Message = ({ messages }) => {
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
