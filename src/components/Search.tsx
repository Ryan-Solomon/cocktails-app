import React from 'react';
import { useAppContext } from '../context/appContext';

const Search = () => {
  const { searchTerm, setSearchTerm } = useAppContext()!;

  return (
    <div className='search-bar'>
      <div className='search-bar__items'>
        <div className='search-bar__title'>
          <h3>Search Your Favorite Cocktail</h3>
        </div>
        <div className='search-bar__user-input'>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type='text'
            value={searchTerm}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
