import React, { useContext } from 'react';
import Camera from '../image/video-camera-svgrepo-com.svg';
import User from '../image/user-add-svgrepo-com.svg';
import More from '../image/more-svgrepo-com.svg';

import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
        <div className='chatIcons'>
          <img src={Camera} alt='camera' />
          <img src={User} alt='user' />
          <img src={More} alt='more' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
