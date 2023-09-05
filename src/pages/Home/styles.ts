import styled from 'styled-components';

export const Content = styled.div`
  display: grid;
  justify-content: center;
  height: 100vh;
  align-content: center;
  position: relative;
  bottom: 50px;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

export const ImageGoogle = styled.img`
  width: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;

  @media (max-width: 600px) {
    width: 200px;
  }

  @media (max-width: 390px) {
    width: 150px;
  }
`;
