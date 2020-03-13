import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { Users } from './Users';
import { UserDetail } from './UserDetail';

function FourOhFour(): JSX.Element {
  return <h1>Oh no 404</h1>;
}

export class App extends React.Component {
  state = {
    ghosts: new Array(12),
    users: [],
    loaded: false
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get('https://randomuser.me/api/?results=12');
      const users = data.results;
      this.setState({ users, loaded: true });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={() => <Users {...this.state} />} />
        <Route
          path="/details/:id"
          component={(props: { match }) => {
            const selectedUser = this.state.users.find(user => props.match.params.id === user.login.uuid);
            return <UserDetail {...selectedUser} />;
          }}
        />
        <Route component={FourOhFour} />
      </Switch>
    );
  }
}
