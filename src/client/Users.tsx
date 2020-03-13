import * as React from 'react';
import { UserCard } from './UserCard';

export const Users = props => {
  if (props.loaded) {
    return (
      <div className="row">
        {props.users.map((u, i) => (
          <UserCard key={i} {...u} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="row">
        {props.ghosts.map((g, i) => (
          <div className="col-3 ghost" key={i}></div>
        ))}
      </div>
    );
  }
};
