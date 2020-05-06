import * as React from 'react';
import { UserCard } from './UserCard';

export const Users = ({ users }) => {
  return (
    <div className="row">
      {users.map((u, i) => (
        <UserCard key={i} {...u} />
      ))}
    </div>
  );
};
