import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div className="item-hl m-1">
    <div className="card" style={{width: '22rem'}}>
      <Link to={`/edit/${id}`} className="btn text-primary">
      <div className="card-header">
        {description}
      </div>
      <div className="card-body">
        <h5 className="card-title d-inline">{numeral(amount / 100).format('$0,0.00')}</h5>
      </div>
      <div className="card-footer text-muted">
        {moment(createdAt).format('MMMM Do, YYYY')}
      </div>
      </Link>
    </div>
  </div>

);

export default ExpenseListItem;
