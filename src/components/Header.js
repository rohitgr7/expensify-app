import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from './../actions/auth';

const Header = ({ startLogout }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <NavLink className="navbar-brand" to="/dashboard">Expensify</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard">Dashboard<span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/create">Create Expense</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/help">Help</NavLink>
        </li>
        <li className="nav-item">
          <Link to="#" onClick={startLogout} className="nav-link">Logout</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default connect(undefined, { startLogout })(Header);
