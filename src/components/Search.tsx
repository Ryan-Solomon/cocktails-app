import React from 'react';

const Search = () => {
  return (
    <div className='search-bar'>
      <div className='search-bar__items'>
        <div className='search-bar__title'>
          <h3>Search Your Favorite Cocktail</h3>
        </div>
        <div className='search-bar__user-input'>
          <input type='text' />
        </div>
      </div>
    </div>
  );
};

export default Search;
