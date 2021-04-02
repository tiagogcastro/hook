import React, { ComponentType } from 'react'
import { Route, RouteProps, Redirect } from 'react-router'
import { IsAuthenticate } from './auth.routes'

interface FilteredRouteProps extends RouteProps {
   component: ComponentType
}
const PrivateRoute: React.FC<FilteredRouteProps> = ({
   component: Component,
   ...rest
}) => {
   console.log(IsAuthenticate())
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
   )
}

export default PrivateRoute
