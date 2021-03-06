import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from './../actions/expenses';

const EditExpensePage = (props) => (
  <div className="container">
    <br />
    <ExpenseForm
      expense={props.expense}
      onSubmit={(expense) => {
        props.dispatch(startEditExpense(props.expense.id, expense));
        props.history.push('/');
      }}
    />
    <button
      className="btn btn-primary mt-2"
      onClick={() => {
      props.dispatch(startRemoveExpense({ id: props.expense.id }));
      props.history.push('/');
    }}>Remove</button>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);
