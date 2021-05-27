import AccessibilityGroup from 'components/AccessibilityGroup';
import Header from 'components/Header';
import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { useTheme } from 'styled-components';
import {
  Container,
  Content,
  Group,
  GroupNest,
  GroupsContainer,
  GroupSettings
} from './styles';

const Home: React.FC = (): JSX.Element => {
  const { colors } = useTheme();
  return (
    <Container>
      <Header />
      <GroupsContainer>
        <GroupNest>
          <Group />
          <Group />
        </GroupNest>
        <GroupSettings>
          <button type="button">
            <FiPlus size={50} color={colors.icons.ternary} />
          </button>
        </GroupSettings>
      </GroupsContainer>
      <AccessibilityGroup type="group" />
      <Content>
        <div style={{ height: '1000vh' }} />
      </Content>
    </Container>
  );
};

export default Home;
