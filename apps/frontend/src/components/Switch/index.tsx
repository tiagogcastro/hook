import { ToggleThemeContext } from 'contexts/ToggleThemeProvider';
import React, { useContext } from 'react';
import { RiMoonClearLine, FiSun } from 'react-icons/all';
import dark from 'themes/dark';
import light from 'themes/light';
import { Ball, Container, Wrapper } from './styles';

const Switch: React.FC = (): JSX.Element => {
  const { theme, setTheme } = useContext(ToggleThemeContext);

  function handleClick(
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    setTheme(theme.title === 'dark' ? light : dark);
  }

  return (
    <Container title="Mudar tema">
      <Wrapper onClick={handleClick}>
        <Ball>
          {theme.title === 'dark' ? (
            <FiSun size={50} color={theme.colors.icons.ternary} />
          ) : (
            <RiMoonClearLine size={60} color={theme.colors.icons.ternary} />
          )}
        </Ball>
      </Wrapper>
    </Container>
  );
};

export default Switch;
