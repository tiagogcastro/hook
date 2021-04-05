import React, { ComponentType } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import IsAuthenticate from './auth.routes';

interface FilteredRouteProps extends RouteProps {
  component: ComponentType;
}

const PrivateRoute: React.FC<FilteredRouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() =>
        IsAuthenticate() ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
};

export default PrivateRoute;
