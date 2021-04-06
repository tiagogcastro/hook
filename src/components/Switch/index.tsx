import { ToggleThemeContext } from 'contexts/ToggleThemeProvider';
import React, { useContext } from 'react';
import Power from 'static/power.svg';
import dark from 'themes/dark';
import light from 'themes/light';
import { Ball, Container, Wrapper } from './styles';

const Switch: React.FC = (): JSX.Element => {
  const { toggleTheme, theme } = useContext(ToggleThemeContext);

  function handleClick({
    target,
  }: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    (target as HTMLElement).classList.toggle('active');
    toggleTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <Container>
      <Wrapper onClick={handleClick}>
        <Ball>
          <img src={Power} alt="" />
        </Ball>
      </Wrapper>
    </Container>
  );
};

export default Switch;
