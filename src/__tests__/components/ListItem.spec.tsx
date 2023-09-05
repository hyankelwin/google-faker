import { fireEvent, render } from '@testing-library/react';
import { mount } from 'enzyme';
import ListItem from '../../components/ListItem';
import { mockAnimalList } from '../../__mocks__/animal.mock';

describe('ListItem component', () => {
  describe('should be able to passed in all tests on index.tsx', () => {
    it('should be able to render ListItem component with success', () => {
      const props = {
        data: mockAnimalList,
        onClickItem: jest.fn(),
      };

      const wrapper = mount(<ListItem {...props} />);

      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should be able to simulate click on title of ListItem component', () => {
      const props = {
        data: mockAnimalList,
        onClickItem: jest.fn(),
      };

      const { getAllByTestId } = render(<ListItem {...props} />);

      const title = getAllByTestId('title-list')[0];

      fireEvent.click(title);

      expect(title).toBeTruthy();
    });
  });
});
