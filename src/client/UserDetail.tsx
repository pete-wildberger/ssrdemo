import * as React from 'react';

export const UserDetail = props => {
  return (
    <div>
      <img src={props.picture.medium} alt="" />
      <h2>
        {props.name.first} {props.name.last}
      </h2>
      <p>{props.email}</p>
    </div>
  );
};
