import styled, { css } from 'styled-components';
import Color from '../../../styles/color';

interface ContainerProps {
  isMedium: boolean;
}

export const ContentForm = styled.div<ContainerProps>`
  background-color: ${Color.white};
  padding: 20px 40px;
  border-radius: 8px;

  ${props =>
    props.isMedium &&
    css`
      padding: 0px 0px;
    `}
`;

export const ContentButton = styled.div`
  width: 100px;
  margin: auto;
  padding-top: 10px;
`;
