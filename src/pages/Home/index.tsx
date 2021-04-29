import Header from 'components/Header';
import React from 'react';
import { Body, Container } from './styles';

const Home: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Header isDefault />
      <Body>
        <div style={{ height: '1000vh' }} />
      </Body>
    </Container>
  );
};

export default Home;
