import { fireEvent, render } from '@testing-library/react';
import { mount } from 'enzyme';
import ModalOptions from '../../components/Modals/ModalOptions';

describe('ModalOptions component', () => {
  describe('should be able to passed in all tests on index.tsx', () => {
    it('should be able to render ModalOptions component with success', () => {
      const props = {
        isOpen: true,
        onCloseModal: jest.fn(),
      };

      const wrapper = mount(<ModalOptions {...props} />);

      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should be able to simulate click on IconClose on ModalSearch component', () => {
      const props = {
        isOpen: true,
        onCloseModal: jest.fn(),
      };

      const { getAllByTestId } = render(<ModalOptions {...props} />);

      const iconCloseModal = getAllByTestId('icon-close-modal')[0];

      fireEvent.click(iconCloseModal);

      expect(iconCloseModal).toBeTruthy();
    });
  });
});
