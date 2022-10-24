import React from 'react';

import userPhoto from '../image/harry_potter.webp';

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type='text' placeholder='Find a user...'/>
      </div>
      <div className='userChat'>
        <img src={userPhoto} alt='userPhoto' />
        <div className='userChatInfo'>
          <span>Harry</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
