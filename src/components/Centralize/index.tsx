import React from 'react';
import { Container } from './styles';

const Centralize: React.FC = ({ children }): JSX.Element => {
  return <Container>{children}</Container>;
};

export default Centralize;
