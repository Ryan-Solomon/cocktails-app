import React, { FC } from 'react';
import { TCocktail } from '../types/types';

type Props = {
  cocktail: TCocktail;
};

const CocktailCard: FC<Props> = ({ cocktail }) => {
  return (
    <div className='cocktail-card'>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <h4>{cocktail.strDrink}</h4>
      <p>{cocktail.strInstructions}</p>
    </div>
  );
};

export default CocktailCard;
