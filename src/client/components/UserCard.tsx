import * as React from 'react';
import { Link } from 'react-router-dom';

export const UserCard = props => {
  return (
    <div className="col-3 user flex-center">
      <div className="user-card flex-center">
        <Link to={`/details/${props.login.uuid}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
          <div className="profile-pic flex-center">
            <div className="img-container">
              <img src={props.picture.large} alt={props.name.last} />
              <span className={`flag-icon flag-icon-${props.nat.toLowerCase()}`}></span>
            </div>
          </div>
          <h2 className="name">
            {props.name.first} {props.name.last}
          </h2>
          <p>{props.dob.age}</p>
        </Link>
      </div>
    </div>
  );
};
