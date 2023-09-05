import styled, { css } from 'styled-components';
import Color from '../../styles/color';

interface FooterProps {
  page?: string;
  isError?: boolean;
}

export const Container = styled.div<FooterProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${Color.grey[200]};
  height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  position: absolute;
  bottom: 0px;
  width: 100%;

  ${props =>
    props.page === 'search' &&
    !props.isError &&
    css`
      position: relative;
      bottom: 0px;
      width: 100%;
      margin-top: 20px;
    `}

  p {
    font-size: 14px;
    text-align: center;
    color: #666360;
  }
`;
