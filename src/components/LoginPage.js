import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from './../actions/auth';

const LoginPage = ({ startLogin }) => {
  return (
    <div>
      <button onClick={startLogin}>Login</button>
    </div>
  );
};

export default connect(undefined, { startLogin })(LoginPage);
