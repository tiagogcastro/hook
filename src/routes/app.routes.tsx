import { createBrowserHistory } from 'history';
import React from 'react';
import { Router, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import PrivateRoute from './private.routes';

export const history = createBrowserHistory();

const AppRoutes: React.FC = (): JSX.Element => {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
