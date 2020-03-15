import * as React from 'react';

export const UserDetail = props => {
  return (
    <div onClick={e => console.log('hi')}>
      <img src={props.picture.large} alt={props.name.last} />
      <h2>
        {props.name.first} {props.name.last}
      </h2>
      <p>{props.email}</p>
      <p>{props.dob.date}</p>
      <p>
        {props.location.city}, {props.location.country}
      </p>
    </div>
  );
};
