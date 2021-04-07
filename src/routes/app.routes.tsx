import { ToggleThemeContext } from 'contexts/ToggleThemeProvider';
import React, { useContext } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import Home from '../pages/Home';
import PrivateRoute from './private.routes';

const AppRoutes: React.FC = (): JSX.Element => {
  const { theme } = useContext(ToggleThemeContext);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <PrivateRoute path="/" component={Home} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
