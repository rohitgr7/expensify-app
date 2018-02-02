import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from './../actions/auth';

const LoginPage = ({ startLogin }) => {
  return (
    <div className="container">
      <br />
      <br />
      <h1>Welcome to Expensify</h1>
      <h3>Manage your expenses</h3>
      <button className="btn btn-danger" onClick={startLogin}>Login</button>
    </div>
  );
};

export default connect(undefined, { startLogin })(LoginPage);
