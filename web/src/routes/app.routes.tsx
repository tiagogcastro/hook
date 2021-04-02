import React from 'react'

import { Router, Switch } from 'react-router-dom'
import PrivateRoute from './private.routes'

import { createBrowserHistory } from 'history'

import Home from '@pages/home/Home'

export const history = createBrowserHistory()

const AppRoutes = () => {
   return (
      <Router history={history}>
         <Switch>
            <PrivateRoute path="/" component={Home} />
         </Switch>
      </Router>
   )
}

export default AppRoutes
