import * as React from 'react';
import { format } from 'date-fns';

export const UserDetail = (props) => {
  return (
    <div className="user-container">
      <div className="user-content row" onClick={(e) => console.log('hi')}>
        <div className="col-6">
          <img src={props.picture.large} alt={props.name.last} />
          <h2 className="name">
            {props.name.first} {props.name.last}
          </h2>
          <p className="email">{props.email}</p>
          <p className="birthday">DOB: {format(new Date(props.dob.date), 'MM/dd/yyyy')}</p>
          <p className="stree">
            {props.location.street.number} {props.location.street.name}
          </p>
          <p className="city">
            {props.location.city}, {props.location.country}
          </p>
        </div>
        <div className="col-6">
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};
