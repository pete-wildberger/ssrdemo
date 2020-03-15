import * as React from 'react';
import { Users } from './Users';
import { Download } from './Download';
import { Header } from './Header';

export const Landing = props => {
  return (
    <div className="landing">
      <Header />
      <Users {...props} />
      <Download />
    </div>
  );
};
