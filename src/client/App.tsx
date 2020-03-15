import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { Users } from './Users';
import { UserDetail } from './UserDetail';
const { results } = require('../../users.json');

function FourOhFour(): JSX.Element {
  return <h1>Oh no 404</h1>;
}
// console.log(results);
export class App extends React.Component {
  state = {
    users: results
  };

  render() {
    return (
      <Switch>
        <Route exact path="/" component={() => <Users {...this.state} />} />
        <Route
          path="/details/:id"
          component={(props: { match }) => {
            const selectedUser = this.state.users.find((user: any) => props.match.params.id === user.login.uuid);
            return <UserDetail {...selectedUser} />;
          }}
        />
        <Route component={FourOhFour} />
      </Switch>
    );
  }
}
