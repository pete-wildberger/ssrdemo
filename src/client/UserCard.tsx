import * as React from 'react';
import { Link } from 'react-router-dom';

export const UserCard = props => {
  return (
    <div className="col-3 user flex-center">
      <div className="user-card flex-center">
      <Link to={`/details/${props.login.uuid}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
        <div className="profile-pic">
          <img src={props.picture.medium} alt={props.name.last} />
        </div>
        <h2>
          {props.name.first} {props.name.last}
        </h2>
        <p>{props.dob.age}</p>
      </Link>
      </div>
    </div>
  );
};
