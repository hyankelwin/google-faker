import React from 'react';
import { Container } from './styles';
import packageJson from '../../../package.json';

interface FooterProps {
  page: string;
  isError?: boolean;
}

const Footer: React.FC<FooterProps> = ({ page, isError }) => (
  <Container page={page} isError={isError}>
    <p>©Google 2021</p>
    <p>Version {packageJson.version}</p>
  </Container>
);

export default Footer;
