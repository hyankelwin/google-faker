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

jest.mock('../../utils/getDimensionsScreen', () => {
  return {
    getWindowDimensions: () => ({
      width: 600,
    }),
  };
});

describe('Search Dimensions page', () => {
  it('should be able to simulate click list item component on Search when dimensions < 700px', async () => {
    (useSearch as unknown as jest.Mock).mockReturnValue({
      handleSetVisibiltyModalOptions: () => jest.fn(),
      handleSetVisibiltyModalSearch: () => jest.fn(),
      handleSetItemSelected: () => jest.fn(),
      handleSetShowCard: () => jest.fn(),
      handleSetClearCard: () => jest.fn(),
      handleFindSeach: () => jest.fn(),
      isLoading: false,
      animals: mockAnimalList,
      showCard: true,
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
