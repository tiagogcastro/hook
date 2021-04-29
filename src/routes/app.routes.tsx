import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Watch from 'pages/Watch';
import Profile from 'pages/Profile';
import Groups from 'pages/Groups';
import PrivateRoute from './private.routes';

const AppRoutes: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <PrivateRoute path="/watch" component={Watch} />
        <PrivateRoute path="/groups" component={Groups} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
