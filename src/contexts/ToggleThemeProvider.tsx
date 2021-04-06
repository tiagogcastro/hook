import React, { createContext, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import light from 'themes/light';

interface IToggleThemeContext {
  toggleTheme: (colortheme: DefaultTheme) => void;
  theme: DefaultTheme;
}
export const ToggleThemeContext = createContext<IToggleThemeContext>(
  {} as IToggleThemeContext,
);

const ToggleThemeProvider: React.FC = ({ children }): JSX.Element => {
  const [theme, setTheme] = useState(light);

  function toggleTheme(colortheme: DefaultTheme) {
    setTheme(colortheme);
  }

  return (
    <ToggleThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ToggleThemeContext.Provider>
  );
};

export default ToggleThemeProvider;
