import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import { TCocktail } from '../types/types';

type InitialContext = {
  cocktails: TCocktail[];
  setSearchTerm: (term: string) => void;
};

const AppContext = createContext<InitialContext | null>(null);

export const AppProvider: FC<React.ReactNode> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState<TCocktail[]>([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      const { drinks } = await res.json();
      setCocktails(drinks);
    };
    fetchCocktails();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        cocktails,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
