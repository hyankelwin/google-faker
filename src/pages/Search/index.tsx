import React, { useCallback, useEffect } from 'react';
import Loader from '../../components/Loader';
import { Content, Column } from './styles';
import Layout from '../../containers/Layout';
import Card from '../../components/Card';
import { useSearch } from '../../context/SearchContext';
import ListItem from '../../components/ListItem';
import NotFoundSearch from '../../components/NotFoundSearch';
import ModalSearch from '../../components/Modals';
import ModalOptions from '../../components/Modals/ModalOptions';
import { getWindowDimensions } from '../../utils/getDimensionsScreen';

const Search: React.FC = () => {
  const {
    handleSetVisibiltyModalSearch,
    handleSetVisibiltyModalOptions,
    handleSetItemSelected,
    handleSetShowCard,
    handleFindSeach,
    isLoading,
    animals,
    showCard,
    animalSelected,
    error,
    search,
    visibilityModalSearch,
    visibilityModalOptions,
  } = useSearch();

  const handleClickItem = useCallback(
    item => {
      const { width } = getWindowDimensions();
      handleSetItemSelected(item);

      if (width < 700) {
        return handleSetVisibiltyModalSearch(true);
      }

      return handleSetShowCard();
    },
    [handleSetItemSelected, handleSetShowCard, handleSetVisibiltyModalSearch],
  );

  const handleGetSearchStorage = useCallback(async () => {
    const searchStorage = await localStorage.getItem('search');

    handleFindSeach(searchStorage || '');
  }, [handleFindSeach]);

  useEffect(() => {
    handleGetSearchStorage();
  }, [handleGetSearchStorage]);

  if (isLoading) {
    return (
      <Layout page="search">
        <Content>
          <Column />
          <Column>
            <Loader />
          </Column>
          <Column />
        </Content>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout page="search" isError>
        <ModalOptions
          isOpen={visibilityModalOptions}
          onCloseModal={() => handleSetVisibiltyModalOptions(false)}
        />
        <Content>
          <Column />
          <Column>
            <NotFoundSearch value={search} />
          </Column>
          <Column />
        </Content>
      </Layout>
    );
  }

  return (
    <Layout page="search">
      <ModalSearch
        data={animalSelected}
        isOpen={visibilityModalSearch}
        onCloseModal={() => handleSetVisibiltyModalSearch(false)}
      />
      <ModalOptions
        isOpen={visibilityModalOptions}
        onCloseModal={() => handleSetVisibiltyModalOptions(false)}
      />
      <Content>
        <Column />
        <Column>
          <ListItem
            data={animals}
            onClickItem={item => handleClickItem(item)}
          />
        </Column>
        <Column isLast>{showCard && <Card item={animalSelected} />}</Column>
      </Content>
    </Layout>
  );
};

export default Search;
