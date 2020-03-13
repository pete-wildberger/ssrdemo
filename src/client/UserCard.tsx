import * as React from 'react';
import { Link } from 'react-router-dom';

export const UserCard = props => {
  return (
    <div className="col-3 user">
      <Link to={`/details/${props.login.uuid}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <img src={props.picture.medium} alt="" />
        <h2>
          {props.name.first} {props.name.last}
        </h2>
        <p>{props.dob.age}</p>
      </Link>
    </div>
  );
};
