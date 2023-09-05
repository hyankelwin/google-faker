import { mount } from 'enzyme';
import NotFoundSearch from '../../components/NotFoundSearch';

describe('NotFoundSearch component', () => {
  describe('should be able to passed in all tests on index.tsx', () => {
    it('should be able to render NotFoundSearch component with success', () => {
      const props = {
        value: 'dog',
      };

      const wrapper = mount(<NotFoundSearch {...props} />);

      expect(wrapper.debug()).toMatchSnapshot();
    });
  });
});
