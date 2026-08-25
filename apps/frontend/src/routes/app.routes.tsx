import Home from 'pages/Home';
import Groups from 'pages/Groups';
import Profile from 'pages/Profile';
import Watch from 'pages/Watch';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRoutes: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/groups" component={Groups} />
        <Route path="/profile" component={Profile} />
        <Route path="/watch" component={Watch} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRoutes;
