import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from './../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length > 0 ? <h2>Expense List</h2> : <p>No Expenses</p>}
    <div className="d-flex flex-wrap row-hl">
      {props.expenses.map(expense => (
        <ExpenseListItem key={expense.id} {...expense} />
      ))}
    </div>

  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
