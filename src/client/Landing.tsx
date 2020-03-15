import * as React from 'react';
import { Users } from './Users';
import { Download } from './Download';

export const Landing = props => {
  return (
    <div className="landing">
      <Users {...props} />
      <Download />
    </div>
  );
};
