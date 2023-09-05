import { fireEvent, render, waitFor } from '@testing-library/react';
import { useSearch } from '../../context/SearchContext';
import Home from '../../pages/Home';

jest.mock('../../context/SearchContext');

describe('Home page', () => {
  it('should be able to render on Home page with success', async () => {
    (useSearch as unknown as jest.Mock).mockReturnValue({
      handleSetVisibiltyModalOptions: () => jest.fn(),
      visibilityModalOptions: false,
    });

    const { asFragment } = render(<Home />);

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should be able to simulate click close icon modal on Home page', async () => {
    (useSearch as unknown as jest.Mock).mockReturnValue({
      handleSetVisibiltyModalOptions: () => jest.fn(),
      visibilityModalOptions: true,
    });

    const { asFragment, getByTestId } = render(<Home />);

    const iconCloseModal = getByTestId('icon-close-modal');

    fireEvent.click(iconCloseModal);

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
