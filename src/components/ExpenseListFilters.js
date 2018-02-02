import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { sortByDate, sortByAmount, setTextFilter, setStartDate, setEndDate } from './../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calenderFocused) => {
    this.setState(() => ({ calenderFocused }));
  };

  render() {
    return (
      <div>
        <br />
        <form className="form-inline">
        <input
          className="form-control form-control-lg mb-2 mr-sm-2"
          placeholder="Enter Text"
          type="text" value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          className="form-control form-control-lg mb-2 mr-sm-2"
          value={this.props.filters.sortBy}
          onChange={(e) => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === 'amount') {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        </form>
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
