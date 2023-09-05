import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { useSearch } from '../../../../context/SearchContext';
import FormSearch from '../../../../containers/Form/FormSearch';
import Input from '../../../../components/Input';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../../../context/SearchContext');

describe('FormSearch container', () => {
  it('should be able to find on FormSearch container with success', async () => {
    (useSearch as unknown as jest.Mock).mockReturnValue({
      handleFindSeach: () => jest.fn(),
      handleSetEmptyInputValue: () => jest.fn(),

      search: 'dog',
    });

    const { getByTestId, asFragment } = render(<FormSearch />);

    const searchField = getByTestId('input-search');
    const buttonElement = getByTestId('button-submit');

    fireEvent.change(searchField, { target: { value: 'dog' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should be able to find on FormSearch container when page is home', async () => {
    (useSearch as unknown as jest.Mock).mockReturnValue({
      handleFindSeach: () => jest.fn(),
      handleSetEmptyInputValue: () => jest.fn(),
      search: 'dog',
    });

    const props = {
      page: 'home',
    };

    const { getByTestId, asFragment } = render(<FormSearch {...props} />);

    const searchField = getByTestId('input-search');
    const buttonElement = getByTestId('button-submit');

    fireEvent.change(searchField, { target: { value: 'dog' } });

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should be able to simulate click on FormSearch container', async () => {
    (useSearch as unknown as jest.Mock).mockReturnValue({
      handleFindSeach: () => jest.fn(),
      handleSetEmptyInputValue: () => jest.fn(),
      search: '',
      inputIsEmpty: false,
    });

    const props = {
      page: 'search',
      onClearInput: jest.fn(),
    };

    const propsInput = {
      name: 'search',
      isEmpty: false,
      onClearInput: jest.fn(),
      isIconClose: true,
    };
    const { getByTestId, asFragment } = render(
      <FormSearch {...props}>
        <Input {...propsInput} />
      </FormSearch>,
    );

    const searchField = getByTestId('input-search');
    const iconClearField = getByTestId('icon-fix');

    fireEvent.change(searchField, { target: { value: 'dog' } });

    fireEvent.click(iconClearField);

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
