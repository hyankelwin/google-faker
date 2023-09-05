import styled, { css } from 'styled-components';
import Color from '../../styles/color';

interface HeaderProps {
  page: string;
}

export const Content = styled.div<HeaderProps>`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Color.white};
  border-bottom: 1px solid #efefef;
  margin: 0 auto;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 20px;
    }

    img {
      margin-right: 20px;
      margin-left: 10px;
    }

    ${props =>
      props.page !== 'search' &&
      css`
        &:nth-child(1) {
          margin-left: 20px;
        }
      `}
  }

  @media (max-width: 600px) {
    form {
      margin-left: 10px;
    }
  }
`;

export const GoogleImage = styled.img`
  width: 100px;
  cursor: pointer;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const ContentIconOptionsMobile = styled.div<HeaderProps>`
  ${props =>
    props.page === 'search' &&
    css`
      svg {
        display: none;
        cursor: pointer;

        @media (max-width: 480px) {
          display: block;
        }
      }
    `}
`;

export const ContentIconOptionsWeb = styled.div<HeaderProps>`
  ${props =>
    props.page === 'search' &&
    css`
      svg {
        display: block;

        @media (max-width: 480px) {
          display: none;
        }
      }

      img {
        display: block;

        @media (max-width: 480px) {
          display: none;
        }
      }
    `}
`;

export const Title = styled.p`
  @media (max-width: 350px) {
    font-size: 14px;
  }
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid;
  border-color: ${Color.grey[200]};
`;
