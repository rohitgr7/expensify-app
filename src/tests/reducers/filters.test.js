import moment from 'moment';
import filtersReducer from './../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });

  expect(state.sortBy).toBe('amount');
});

test('should setup sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };

  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });

  expect(state.sortBy).toBe('date');
});

test('should setup text filter', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'bill'
  };

  const state = filtersReducer(undefined, action);

  expect(state.text).toBe('bill');
});

test('should setup startDate filter', () => {
  const action = {
    type: 'SET_START_DATE',
    startDate: 4
  };

  const state = filtersReducer(undefined, action);

  expect(state.startDate).toBe(4);
});

test('should setup endDate filter', () => {
  const action = {
    type: 'SET_END_DATE',
    endDate: 4
  };

  const state = filtersReducer(undefined, action);

  expect(state.endDate).toBe(4);
});
