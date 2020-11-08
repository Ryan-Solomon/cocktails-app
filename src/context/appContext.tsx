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

const AppProvider: FC<React.ReactChild> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cocktails, setCocktails] = useState<TCocktail[]>([]);

  useEffect(() => {
    const fetchCocktails = async () => {
      const res = await fetch('');
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

const useAppContext = () => {
  return useContext(AppContext);
};
