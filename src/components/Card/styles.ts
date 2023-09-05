import styled from 'styled-components';
import Color from '../../styles/color';

export const Container = styled.div`
  border: 1px solid ${Color.grey[200]};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  max-width: 400px;
  border-radius: 4px;
`;

export const Caption = styled.p`
  font-size: 12px;
  padding-top: 10px;
`;
export const Title = styled.h3`
  padding-top: 5px;
  padding-bottom: 5px;
`;
export const Description = styled.p`
  font-size: 14px;
`;

export const Image = styled.img`
  width: 100%;
`;
