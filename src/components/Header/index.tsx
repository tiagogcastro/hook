import Switch from 'components/Switch';
import React from 'react';
import { Container, Wrapper } from './styles';

const Header: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Wrapper>
        <div />
        <Switch />
      </Wrapper>
    </Container>
  );
};

export default Header;
