import React from 'react';
import CocktailCard from './CocktailCard';
import { useAppContext } from '../context/appContext';

const Cocktails = () => {
  const { cocktails } = useAppContext()!;
  const renderedCocktailCards = cocktails.map((cocktail) => {
    return <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />;
  });

  return (
    <div className='cocktails-container'>
      <div className='cocktails__header'>
        <h1>Cocktails</h1>
      </div>
      <div className='cocktails__cards'>{renderedCocktailCards}</div>
    </div>
  );
};

export default Cocktails;
