import AccessibilityGroup from 'components/AccessibilityGroup';
import Header from 'components/Header';
import React from 'react';
import { Container, ContentContainer, Content } from './styles';

const Home: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <AccessibilityGroup />
        <Content>
          <div style={{ height: '1000vh' }} />
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default Home;
