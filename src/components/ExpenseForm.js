import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calenderFocused: false,
      error: ''
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  };

  onSubmit = ((e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount' }));
    } else {
      this.setState(() => ({ error: ''}));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  });

  render() {
    return (
      <div>
        <br />
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <div className="form-group row">
            <label className="col-md-2 col-form-label">Description</label>
            <div className="col-md-10">
              <input
                className="form-control"
                type="text"
                placeholder="Description"
                autoFocus
                value={this.state.description}
                onChange={this.onDescriptionChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-2 col-form-label">Amount</label>
            <div className="col-md-10">
              <input
                className="form-control"
                type="text"
                placeholder="Amount"
                value={this.state.amount}
                onChange={this.onAmountChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-2 col-form-label">Note</label>
            <div className="col-md-10">
              <textarea
                className="form-control"
                placeholder="Add a note for your expense (optional)"
                value={this.state.note}
                onChange={this.onNoteChange}
              >
              </textarea>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-md-2 col-form-label">Date</label>
            <div className="col-md-10">
              <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-danger">Add Expense</button>
        </form>
      </div>
    );
  }
};
