import { mount } from 'enzyme';
import Card from '../../components/Card';
import { mockAnimal } from '../../__mocks__/animal.mock';

describe('Card component', () => {
  describe('should be able to passed in all tests on index.tsx', () => {
    it('should be able to render Card component with success', () => {
      const wrapper = mount(<Card item={mockAnimal} />);

      expect(wrapper.debug()).toMatchSnapshot();
    });
  });
});
