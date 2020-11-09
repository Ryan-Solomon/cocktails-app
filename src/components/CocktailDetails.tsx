import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TCocktail } from '../types/types';

enum Status {
  pending = 'PENDING',
  resolved = 'RESOLVED',
}

const CocktailDetails = () => {
  const params = useParams<{ id: string }>();
  const [cocktail, setCocktail] = useState<TCocktail>();
  const [status, setStatus] = useState<Status>(Status.pending);

  useEffect(() => {
    const fetchCocktail = async () => {
      setStatus(Status.pending);
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`
      );
      const { drinks } = await res.json();
      setCocktail(drinks[0]);
      setStatus(Status.resolved);
    };
    fetchCocktail();
  }, []);

  if (status === Status.pending) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='cocktail'>
      <img src={cocktail?.strDrinkThumb} alt={cocktail?.strDrink} />
      <h1>{cocktail?.strDrink}</h1>
      <p>{cocktail?.strInstructions}</p>
    </div>
  );
};

export default CocktailDetails;
