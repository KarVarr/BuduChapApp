import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

import Attach from '../image/attach-svgrepo-com.svg';
import Img from '../image/image-add-fill-svgrepo-com.svg';

const Input = () => {
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);


  const handleSend = async () => {
    if (img) {

    } else {
      await updateDoc(doc(db, 'chats', data.chatId), {
        messages: arrayUnion({
        
        })
      })
    }
  }
  return (
    <div className='input'>
      <input
        type='text'
        placeholder='Type something...'
        onChange={e => setText(e.target.value)}
      />
      <div className='send'>
        <img src={Attach} alt='attach' />
        <input
          type='file'
          name='file'
          id='file'
          style={{ display: 'none' }}
          onChange={e => setImg(e.target.files[0])}
        />
        <label htmlFor='file'>
          <img src={Img} alt='images' />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;
