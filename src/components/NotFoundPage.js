import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="container">
    <br />
    <br />
    <div className="col">
      <h2>404 Page not found</h2>
      <button to="/" className="btn btn-danger">Go home</button>
    </div>
  </div>
);

export default NotFoundPage;
