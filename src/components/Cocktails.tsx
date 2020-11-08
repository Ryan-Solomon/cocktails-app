import React from 'react';
import CocktailCard from './CocktailCard';

const Cocktails = () => {
  return (
    <div className='cocktails-container'>
      <div className='cocktails__header'>
        <h1>Cocktails</h1>
      </div>
      <div className='cocktails__cards'>
        <CocktailCard />
        <CocktailCard />
        <CocktailCard />
        <CocktailCard />
      </div>
    </div>
  );
};

export default Cocktails;
