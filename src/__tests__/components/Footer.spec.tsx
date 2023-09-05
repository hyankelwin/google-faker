import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('Footer component', () => {
  describe('should be able to passed in all tests on index.tsx', () => {
    it('should be able to render Footer component with success', () => {
      const props = {
        page: 'home',
      };

      const wrapper = mount(<Footer {...props} />);

      expect(wrapper.debug()).toMatchSnapshot();
    });

    it('should be able to render Footer component when isError is false', () => {
      const props = {
        page: 'search',
        isError: false,
      };

      const wrapper = mount(<Footer {...props} />);

      expect(wrapper.debug()).toMatchSnapshot();
    });
  });
});
