import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Users } from './Users';

function FourOhFour(): JSX.Element {
  return <h1>Oh no 404</h1>;
}

export const App = () => (
  <div className="app">
    <Switch>
      <Route path="/users" component={() => <Users />} />
      <Route component={FourOhFour} />
    </Switch>
  </div>
);
