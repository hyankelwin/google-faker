import React, { createContext, useState, useCallback, useContext } from 'react';
import { Animal } from '../api/google-faker-api/search/interfaces/animal.interface';
import { getAnimals } from '../api/google-faker-api/search/google-faker.request';
import { getTimeOut } from '../utils/getTimeOutSimulateApi';
import { checkAnimals } from '../utils/getAnimalType';

interface ISearch {
  isLoading: boolean;
  error: boolean;
  search: string;
  animals: Animal[];
  animalSelected: Animal;
  showCard: boolean;
  visibilityModalOptions: boolean;
  visibilityModalSearch: boolean;
  inputIsEmpty: boolean;
  handleFindSeach(value: string): void;
  handleClearInputValue(): void;
  handleSetItemSelected(item: Animal): void;
  handleSetShowCard(): void;
  handleSetClearCard(): void;
  handleSetVisibiltyModalOptions(value: boolean): void;
  handleSetVisibiltyModalSearch(value: boolean): void;
  handleSetEmptyInputValue(value: boolean): void;
}

const SearchContext = createContext<ISearch>({} as ISearch);

const SearchProvider: React.FC = ({ children }) => {
  const [search, setSearch] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [inputIsEmpty, setInputIsEmpty] = useState(true);
  const [visibilityModalOptions, setVisibilityModalOptions] = useState(false);
  const [visibilityModalSearch, setVisibilityModalSearch] = useState(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [animalSelected, setAnimalSelected] = useState<Animal>({} as Animal);

  const handleSetItemSelected = useCallback((item: Animal) => {
    setAnimalSelected(item);
  }, []);

  const handleClearInputValue = useCallback(() => {
    setSearch('');
  }, []);

  const handleSetEmptyInputValue = useCallback(value => {
    setInputIsEmpty(value);
  }, []);

  const handleSetShowCard = useCallback(() => {
    setShowCard(true);
  }, []);

  const handleSetClearCard = useCallback(() => {
    setShowCard(false);
  }, []);

  const handleSetLocalStorage = useCallback((value: string) => {
    setShowCard(false);
    localStorage.setItem('search', value);
  }, []);

  const handleSetVisibiltyModalOptions = useCallback((value: boolean) => {
    setVisibilityModalOptions(value);
  }, []);

  const handleSetVisibiltyModalSearch = useCallback((value: boolean) => {
    setVisibilityModalSearch(value);
  }, []);

  const handleFindSeach = useCallback(
    async (value: string) => {
      setLoading(true);
      setError(false);
      setSearch(value);
      handleSetLocalStorage(value);

      await getTimeOut(10);

      if (!checkAnimals(value)) {
        setLoading(false);
        setError(true);
        return;
      }

      const response = await getAnimals(value);

      setAnimals(response);
      setLoading(false);
    },
    [handleSetLocalStorage],
  );

  return (
    <SearchContext.Provider
      value={{
        search,
        isLoading,
        error,
        animals,
        animalSelected,
        showCard,
        visibilityModalOptions,
        visibilityModalSearch,
        inputIsEmpty,
        handleFindSeach,
        handleClearInputValue,
        handleSetItemSelected,
        handleSetShowCard,
        handleSetClearCard,
        handleSetVisibiltyModalOptions,
        handleSetVisibiltyModalSearch,
        handleSetEmptyInputValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

function useSearch(): ISearch {
  const context = useContext(SearchContext);

  return context;
}

export { SearchProvider, useSearch };
