import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { FiX } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  isMedium?: boolean;
  isIconClose?: boolean;
  onClearInput: () => void;
  isEmpty?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  isMedium = false,
  isIconClose = false,
  onClearInput,
  isEmpty = true,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isMedium={isMedium}>
      {Icon && <Icon size={20} />}
      <input
        data-testid="input-container"
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {isIconClose && !isEmpty && (
        <FiX data-testid="icon-fix" onClick={() => onClearInput()} size={20} />
      )}
    </Container>
  );
};

export default Input;
