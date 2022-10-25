import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

import UserPhoto from '../image/harry_potter.webp';

const Message = ({ messages }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div
      className={`message $${messages.senderId === currentUser.uid && 'owner'}`}
    >
      <div className='messageInfo'>
        <img
          src={
            messages.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt='UserPhoto'
        />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>{messages.text}</p>
        {messages.img && <img src={messages.img} alt='UserPhoto' />}
      </div>
    </div>
  );
};

export default Message;
