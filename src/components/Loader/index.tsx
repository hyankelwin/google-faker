import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Container } from './styles';

const Loader: React.FC = () => (
  <>
    <Container>
      <Skeleton count={1} height={20} width="30%" />
      <Skeleton count={1} height={30} width="60%" />
      <Skeleton count={1} height={20} width="90%" />
    </Container>
    <Container>
      <Skeleton count={1} height={20} width="30%" />
      <Skeleton count={1} height={30} width="60%" />
      <Skeleton count={1} height={20} width="90%" />
    </Container>
    <Container>
      <Skeleton count={1} height={20} width="30%" />
      <Skeleton count={1} height={30} width="60%" />
      <Skeleton count={1} height={20} width="90%" />
    </Container>
    <Container>
      <Skeleton count={1} height={20} width="30%" />
      <Skeleton count={1} height={30} width="60%" />
      <Skeleton count={1} height={20} width="90%" />
    </Container>
    <Container>
      <Skeleton count={1} height={20} width="30%" />
      <Skeleton count={1} height={30} width="60%" />
      <Skeleton count={1} height={20} width="90%" />
    </Container>
    <Container>
      <Skeleton count={1} height={20} width="30%" />
      <Skeleton count={1} height={30} width="60%" />
      <Skeleton count={1} height={20} width="90%" />
    </Container>
  </>
);

export default Loader;
