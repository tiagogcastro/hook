import { ToggleThemeContext } from 'contexts/ToggleThemeProvider';
import { createBrowserHistory } from 'history';
import React, { useContext } from 'react';
import { Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from '../pages/Home';
import PrivateRoute from './private.routes';

export const history = createBrowserHistory();

const AppRoutes: React.FC = (): JSX.Element => {
  const { theme } = useContext(ToggleThemeContext);
  return (
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <Switch>
          <PrivateRoute path="/" component={Home} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default AppRoutes;
