import styled, { css } from 'styled-components';

interface ColumnProps {
  isLast?: boolean;
}

export const Content = styled.div`
  display: grid;
  grid-template-columns: 10% 50% auto;
  grid-gap: 10px;
  position: relative;
  bottom: 0px;
`;

export const Column = styled.div<ColumnProps>`
  ${props =>
    props.isLast &&
    css`
      margin-top: 20px;
    `}
`;

export const ImageGoogle = styled.img`
  width: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
`;
