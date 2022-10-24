import React from 'react';

import Attach from '../image/attach-svgrepo-com.svg';
import Img from '../image/image-add-fill-svgrepo-com.svg';

const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Type something...' />
      <div className='send'>
        <img src={Attach} alt='attach' />
        <input type='file' name='file' id='file' style={{ display: 'none' }} />
        <label htmlFor='file'>
          <img src={Img} alt='images' />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
