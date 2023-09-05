import React, { useRef, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import { ContentForm, ContentButton } from './styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Color from '../../../styles/color';
import { useSearch } from '../../../context/SearchContext';
import Paths from '../../../constants/paths.constant';

interface FormSearchProps {
  showButton?: boolean;
  isMedium?: boolean;
  page?: string;
}

const FormSearch: React.FC<FormSearchProps> = ({
  showButton = true,
  isMedium = false,
  page,
}) => {
  const history = useHistory();
  const { handleFindSeach, search, handleSetEmptyInputValue, inputIsEmpty } =
    useSearch();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async values => {
      handleFindSeach(values.search);
      if (page === 'home') {
        history.push(Paths.Search);
      }
    },
    [handleFindSeach, history, page],
  );

  const handleClearInput = useCallback(() => {
    handleSetEmptyInputValue(true);
    formRef.current?.reset();
  }, [handleSetEmptyInputValue]);

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <ContentForm isMedium={isMedium}>
        <Input
          name="search"
          icon={FiSearch}
          data-testid="input-search"
          onChange={data => handleSetEmptyInputValue(!data.target.value)}
          isMedium={isMedium}
          defaultValue={page === 'search' ? search : ''}
          isIconClose={page === 'search'}
          onClearInput={() => handleClearInput()}
          isEmpty={inputIsEmpty}
        />
        {showButton && (
          <ContentButton>
            <Button
              type="submit"
              data-testid="button-submit"
              color={Color.black.text}
              background={Color.grey[200]}
              disabled={inputIsEmpty}
            >
              Buscar
            </Button>
          </ContentButton>
        )}
      </ContentForm>
    </Form>
  );
};

export default FormSearch;
