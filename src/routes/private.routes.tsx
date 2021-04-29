import React, { ComponentType } from 'react';
import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps
} from 'react-router-dom';

interface FilteredRouteProps extends ReactDOMRouteProps {
  component: ComponentType;
}

const PrivateRoute: React.FC<FilteredRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const user = {
    token: 'e25r44e1xehtg'
  };
  return (
    <ReactDOMRoute
      {...rest}
      render={() =>
        user ? <Component /> : <Redirect to={{ pathname: '/signin' }} />
      }
    />
  );
};

export default PrivateRoute;
