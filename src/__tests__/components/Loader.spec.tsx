import { mount } from 'enzyme';
import Loader from '../../components/Loader';

jest.mock(
  '../../../node_modules/react-loading-skeleton/dist/skeleton.css',
  () => {
    return {};
  },
);

describe('Loader component', () => {
  describe('should be able to passed in all tests on index.tsx', () => {
    it('should be able to render Loader component with success', () => {
      const wrapper = mount(<Loader />);

      expect(wrapper.debug()).toMatchSnapshot();
    });
  });
});
