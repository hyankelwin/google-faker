import { fireEvent, render } from '@testing-library/react';
import { mount } from 'enzyme';
import ModalSearch from '../../components/Modals';
import { mockAnimal } from '../../__mocks__/animal.mock';

describe('ModalSearch component', () => {
  describe('should be able to passed in all tests on index.tsx', () => {
    it('should be able to render ModalSearch component with success', () => {
      const props = {
        data: mockAnimal,
        isOpen: true,
        onCloseModal: jest.fn(),
      };

      const wrapper = mount(<ModalSearch {...props} />);

      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should be able to simulate click on IconClose on ModalSearch component', () => {
      const props = {
        data: mockAnimal,
        isOpen: true,
        onCloseModal: jest.fn(),
      };

      const { getAllByTestId } = render(<ModalSearch {...props} />);

      const iconCloseModal = getAllByTestId('icon-close-modal')[0];

      fireEvent.click(iconCloseModal);

      expect(iconCloseModal).toBeTruthy();
    });
  });
});
