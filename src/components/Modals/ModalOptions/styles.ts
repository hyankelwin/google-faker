import styled from 'styled-components';
import Color from '../../../styles/color';

export const Content = styled.div``;

export const ContentOptions = styled.div``;

export const ContentIconClose = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  svg {
    cursor: pointer;
  }
`;

export const Column = styled.div`
  width: 100%;
  background: ${Color.grey[200]};
  margin-bottom: 5px;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: 1px solid;
  border-color: ${Color.grey[200]};
`;

export const GoogleImage = styled.img`
  width: 80px;
`;
