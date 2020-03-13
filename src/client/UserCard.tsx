import * as React from 'react';
import { Link } from 'react-router-dom';

export const UserCard = props => {
  return (
    <Link to={`/details/${props.id.value}`}>
      <div className="col-3 user">
        <img src={props.picture.medium} alt="" />
        <h2>
          {props.name.first} {props.name.last}
        </h2>
        <p>{props.email}</p>
      </div>
    </Link>
  );
};
