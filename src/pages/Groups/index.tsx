import Header from 'components/Header';
import React from 'react';
import { Body, Container } from './styles';

const Groups: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <Body>
        <div style={{ height: '1000vh' }} />
      </Body>
    </Container>
  );
};

export default Groups;
