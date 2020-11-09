import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { TCocktail } from '../types/types';

type Props = {
  cocktail: TCocktail;
};

const CocktailCard: FC<Props> = ({ cocktail }) => {
  const history = useHistory();

  const fetchCocktail = (id: string) => {
    history.push(`/cocktail/${id}`);
  };

  return (
    <div
      onClick={() => fetchCocktail(cocktail.idDrink)}
      className='cocktail-card'
    >
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <h4>{cocktail.strDrink}</h4>
      <p>{cocktail.strInstructions}</p>
    </div>
  );
};

export default CocktailCard;
