import styled, { css } from 'styled-components';

interface ButtonProps {
  background?: string;
  color?: string;
}

export const Content = styled.button<ButtonProps>`
  background-color: ${props => props.background};
  color: ${props => props.color};
  width: 100%;
  border: none;
  border-radius: 2px;
  padding: 10px;
  font-size: 16px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  font-family: 'Roboto';
  display: flex;
  justify-content: center;
  align-items: center;

  ${props =>
    props.disabled &&
    css`
      opacity: 0.3;
      cursor: default;
    `}

  ${props =>
    !props.disabled &&
    css`
      :hover {
        opacity: 0.8;
      }
    `}
`;
