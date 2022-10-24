import React from 'react';
import {Link } from 'react-router-dom';

import errorImage from '../image/404error.png';

const Error = () => {
  return (
    <div className='errorContainer'>
      <div className='errorContainer'>
        <img src={errorImage} alt='error' />
        <p>Something went wrong</p>
        <button>
          <Link to='/'>Go Back</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
