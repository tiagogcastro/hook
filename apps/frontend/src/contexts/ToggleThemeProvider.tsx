import usePersistedState from 'hooks/usePersistedState';
import React, { createContext } from 'react';
import { DefaultTheme } from 'styled-components';
import dark from 'themes/dark';

interface IToggleThemeContext {
  setTheme: (themes: DefaultTheme) => void;
  theme: DefaultTheme;
}
export const ToggleThemeContext = createContext<IToggleThemeContext>(
  {} as IToggleThemeContext
);

const ToggleThemeProvider: React.FC = ({ children }): JSX.Element => {
  const [theme, setTheme] = usePersistedState('theme', dark);

  return (
    <ToggleThemeContext.Provider value={{ setTheme, theme }}>
      {children}
    </ToggleThemeContext.Provider>
  );
};

export default ToggleThemeProvider;
