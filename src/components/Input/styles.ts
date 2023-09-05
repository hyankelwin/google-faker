import styled, { css } from 'styled-components';
import Color from '../../styles/color';

interface ContainerProps {
  isMedium: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 50px;
  border: 1px solid ${Color.grey[200]};
  padding: 16px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #666360;

  ${props =>
    props.isMedium &&
    css`
      width: 400px;
      height: 30px;

      @media (max-width: 700px) {
        width: 300px;
      }

      @media (max-width: 440px) {
        width: 250px;
      }
    `}

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  :hover {
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.04);
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #1c1c1c;
    width: 500px;
    &::placeholder {
      color: #666360;
    }

    @media (max-width: 600px) {
      width: 300px;
    }

    @media (max-width: 390px) {
      width: 200px;
    }
  }

  svg {
    margin-right: 16px;
    opacity: 0.5;

    :nth-child(3) {
      margin-right: 1px;
    }
  }
`;
