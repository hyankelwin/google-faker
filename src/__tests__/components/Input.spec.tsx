import { fireEvent, render, waitFor } from '@testing-library/react';
import Input from '../../components/Input';

jest.mock('@unform/core', () => {
  return {
    useField() {
      return {
        fieldName: 'name',
        defaultValue: '',
        error: true,
        current: {
          value: 'dog',
        },
        registerField: jest.fn(),
      };
    },
  };
});

describe('Input component', () => {
  describe('should be able to passed in validation on all fields', () => {
    it('should be able to render Input component with success', () => {
      const props = {
        name: 'name',
        placeholder: 'Insert your name',
        onClearInput: jest.fn(),
      };

      const { getByPlaceholderText } = render(<Input {...props} />);
      expect(getByPlaceholderText('Insert your name')).toBeTruthy();
    });
  });

  describe('should be able to validate Icon on input', () => {
    it('should be able to render Icon when icon is exist', async () => {
      const props = {
        name: 'name',
        placeholder: 'Insert your name',
        onClearInput: jest.fn(),
        isIconClose: true,
        isEmpty: false,
      };

      const { getByTestId } = render(<Input {...props} />);

      const inputElement = getByTestId('input-container');

      fireEvent.change(inputElement, { target: { value: 'dog' } });

      await waitFor(() => {
        expect(getByTestId('icon-fix')).toBeInTheDocument();
      });
    });

    it('should be able to simulate click on fix icon', async () => {
      const props = {
        name: 'name',
        placeholder: 'Insert your name',
        onClearInput: jest.fn(),
        isIconClose: true,
        isEmpty: false,
      };

      const { getByTestId } = render(<Input {...props} />);

      const icon = getByTestId('icon-fix');

      fireEvent.click(icon);

      expect(icon).toBeTruthy();
    });
  });
});
