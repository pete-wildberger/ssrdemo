import * as React from 'react';
import axios from 'axios';

export class Users extends React.Component {
  state = {
    ghosts: new Array(12),
    users: [],
    loaded: false
  };

  async componentDidMount() {
    const { data } = await axios.get('https://randomuser.me/api/?results=10');
    const users = data.results;
    this.setState({ users, loaded: true });
  }

  render() {
    if (this.state.loaded) {
      return (
        <div className="row">
          {this.state.users.map((u, i) => (
            <div className="col-3 user" key={i}></div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="row">
          {this.state.ghosts.map((g, i) => (
            <div className="col-3 ghost" key={i}></div>
          ))}
        </div>
      );
    }
  }
}
