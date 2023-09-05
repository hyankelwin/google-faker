import { fireEvent, render, waitFor } from '@testing-library/react';
import { mount } from 'enzyme';
import React from 'react';
import { useSearch } from '../../../context/SearchContext';
import Layout from '../../../containers/Layout';

const mockedHistoryGoBack = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      goBack: mockedHistoryGoBack,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../../context/SearchContext');

describe('Layout container', () => {
  it('should be able to render Layout container with success', () => {
    (useSearch as unknown as jest.Mock).mockReturnValue({
      handleSetVisibiltyModalOptions: () => jest.fn(),
    });

    const props = {
      page: 'home',
    };

    const wrapper = mount(<Layout {...props} />);

    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should be able to simulate click on OptionsIcon on Layout container', async () => {
    (useSearch as unknown as jest.Mock).mockReturnValue({
      handleSetVisibiltyModalOptions: () => jest.fn(),
    });

    const props = {
      page: 'search',
    };

    const { getByTestId, asFragment } = render(<Layout {...props} />);

    const iconOptions = getByTestId('options-icon');

    fireEvent.click(iconOptions);

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });

  it('should be able to simulate click on GoogleImage on Layout container', async () => {
    (useSearch as unknown as jest.Mock).mockReturnValue({
      handleSetVisibiltyModalOptions: () => jest.fn(),
    });

    const props = {
      page: 'search',
    };

    const { getByTestId, asFragment } = render(<Layout {...props} />);

    const googleImage = getByTestId('google-image');

    fireEvent.click(googleImage);

    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
