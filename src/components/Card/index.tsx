import React from 'react';
import { Animal } from '../../api/google-faker-api/search/interfaces/animal.interface';
import { Container, Image, Description, Caption, Title } from './styles';

interface CardProps {
  item: Animal;
}

const Card: React.FC<CardProps> = ({ item }) => (
  <Container>
    <Image src={item.image} />
    <Caption>{item.site}</Caption>
    <Title>{item.name}</Title>
    <Description>{item.description}</Description>
  </Container>
);

export default Card;
