import * as React from 'react';
import { UserCard } from './UserCard';

export const Users = props => {
  return (
    <div className="row">
      {props.users.map((u, i) => (
        <UserCard key={i} {...u} />
      ))}
    </div>
  );
};
