import { fireEvent, render, waitFor } from '@testing-library/react';
import { useSearch } from '../../context/SearchContext';
import Search from '../../pages/Search';
import { mockAnimal, mockAnimalList } from '../../__mocks__/animal.mock';

jest.mock('../../context/SearchContext');

jest.mock(
  '../../../node_modules/react-loading-skeleton/dist/skeleton.css',
  () => {
    return {};
  },
);

describe('Search page', () => {
  it('should be able to render on Search page with success', async () => {
    (useSearch as unknown as jest.Mock).mockReturnValue({
      handleSetVisibiltyModalOptions: () => jest.fn(),
      handleSetVisibiltyModalSearch: () => jest.fn(),
      handleSetItemSelected: () => jest.fn(),
      handleSetShowCard: () => jest.fn(),
      handleSetClearCard: () => jest.fn(),
      handleFindSeach: () => jest.fn(),
      isLoading: false,
      animals: mockAnimalList,
      showCard: false,
      animalSelected: mockAnimal,
      error: false,
      search: 'cat',
      visibilityModalSearch: false,
      visibilityModalOptions: false,
    });

    const { asFragment } = render(<Search />);

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should be able to render on Loading when isLoading is true', async () => {
    (useSearch as unknown as jest.Mock).mockReturnValue({
      handleSetVisibiltyModalOptions: () => jest.fn(),
      handleSetVisibiltyModalSearch: () => jest.fn(),
      handleSetItemSelected: () => jest.fn(),
      handleSetShowCard: () => jest.fn(),
      handleSetClearCard: () => jest.fn(),
      handleFindSeach: () => jest.fn(),
      isLoading: true,
      animals: mockAnimalList,
      showCard: false,
      animalSelected: mockAnimal,
      error: false,
      search: 'cat',
      visibilityModalSearch: false,
      visibilityModalOptions: false,
    });

    const { asFragment } = render(<Search />);

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should be able to render on Error when error is true', async () => {
    (useSearch as unknown as jest.Mock).mockReturnValue({
      handleSetVisibiltyModalOptions: () => jest.fn(),
      handleSetVisibiltyModalSearch: () => jest.fn(),
      handleSetItemSelected: () => jest.fn(),
      handleSetShowCard: () => jest.fn(),
      handleSetClearCard: () => jest.fn(),
      handleFindSeach: () => jest.fn(),
      isLoading: false,
      animals: mockAnimalList,
      showCard: false,
      animalSelected: mockAnimal,
      error: true,
      search: 'cat',
      visibilityModalSearch: false,
      visibilityModalOptions: true,
    });

    const { asFragment, getByTestId } = render(<Search />);

    const iconCloseModal = getByTestId('icon-close-modal');

    fireEvent.click(iconCloseModal);

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should be able to simulate click close modal search on Search page with success', async () => {
    (useSearch as unknown as jest.Mock).mockReturnValue({
      handleSetVisibiltyModalOptions: () => jest.fn(),
      handleSetVisibiltyModalSearch: () => jest.fn(),
      handleSetItemSelected: () => jest.fn(),
      handleSetShowCard: () => jest.fn(),
      handleSetClearCard: () => jest.fn(),
      handleFindSeach: () => jest.fn(),
      isLoading: false,
      animals: mockAnimalList,
      showCard: false,
      animalSelected: mockAnimal,
      error: false,
      search: 'cat',
      visibilityModalSearch: true,
      visibilityModalOptions: false,
    });

    const { asFragment, getByTestId } = render(<Search />);

    const iconCloseModal = getByTestId('icon-close-modal');

    fireEvent.click(iconCloseModal);

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should be able to simulate click close modal options on Search page with success', async () => {
    (useSearch as unknown as jest.Mock).mockReturnValue({
      handleSetVisibiltyModalOptions: () => jest.fn(),
      handleSetVisibiltyModalSearch: () => jest.fn(),
      handleSetItemSelected: () => jest.fn(),
      handleSetShowCard: () => jest.fn(),
      handleSetClearCard: () => jest.fn(),
      handleFindSeach: () => jest.fn(),
      isLoading: false,
      animals: mockAnimalList,
      showCard: false,
      animalSelected: mockAnimal,
      error: false,
      search: 'cat',
      visibilityModalSearch: false,
      visibilityModalOptions: true,
    });

    const { asFragment, getByTestId } = render(<Search />);

    const iconCloseModal = getByTestId('icon-close-modal');

    fireEvent.click(iconCloseModal);

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should be able to simulate click list item component on Search page with success', async () => {
    (useSearch as unknown as jest.Mock).mockReturnValue({
      handleSetVisibiltyModalOptions: () => jest.fn(),
      handleSetVisibiltyModalSearch: () => jest.fn(),
      handleSetItemSelected: () => jest.fn(),
      handleSetShowCard: () => jest.fn(),
      handleSetClearCard: () => jest.fn(),
      handleFindSeach: () => jest.fn(),
      isLoading: false,
      animals: mockAnimalList,
      showCard: false,
      animalSelected: mockAnimal,
      error: false,
      search: 'cat',
      visibilityModalSearch: false,
      visibilityModalOptions: false,
    });

    const { asFragment, getAllByTestId } = render(<Search />);

    const titleItem = getAllByTestId('title-list')[0];

    fireEvent.click(titleItem);

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
