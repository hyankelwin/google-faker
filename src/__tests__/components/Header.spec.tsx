import { mount } from 'enzyme';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../../components/Header';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Header component', () => {
  it('should be able to render Header component with success', () => {
    const props = {
      page: 'home',
      onClickOptions: jest.fn(),
      onClickNavigate: jest.fn(),
    };

    const wrapper = mount(<Header {...props} />);

    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should be able to render Header component when page is search', () => {
    const props = {
      page: 'search',
      onClickOptions: jest.fn(),
      onClickNavigate: jest.fn(),
    };

    const wrapper = mount(<Header {...props} />);

    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should be able to simulate click options icon on Header component', () => {
    const props = {
      page: 'search',
      onClickOptions: jest.fn(),
      onClickNavigate: jest.fn(),
    };

    const { getAllByTestId } = render(<Header {...props} />);

    const optionsIcon = getAllByTestId('options-icon')[0];

    fireEvent.click(optionsIcon);

    expect(optionsIcon).toBeTruthy();
  });

  it('should be able to simulate click google image on Header component', () => {
    const props = {
      page: 'search',
      onClickOptions: jest.fn(),
      onClickNavigate: jest.fn(),
    };

    const { getAllByTestId } = render(<Header {...props} />);

    const googleImage = getAllByTestId('google-image')[0];

    fireEvent.click(googleImage);

    expect(googleImage).toBeTruthy();
  });
});
