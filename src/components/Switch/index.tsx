import { ToggleThemeContext } from 'contexts/ToggleThemeProvider';
import React, { useContext } from 'react';
import { AiOutlinePoweroff } from 'react-icons/ai';
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
          <AiOutlinePoweroff size={50} color={theme.colors.icons.ternary} />
        </Ball>
      </Wrapper>
    </Container>
  );
};

export default Switch;
