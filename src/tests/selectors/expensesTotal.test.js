import selectExpensesTotal from './../../selectors/expensesTotal';
import expenses from './../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const total = selectExpensesTotal([]);
  expect(total).toBe(0);
});

test('should correctly add up a single expense', () => {
  const total = selectExpensesTotal([expenses[0]]);
  expect(total).toBe(195);
});

test('', () => {
  const total = selectExpensesTotal(expenses);
  expect(total).toBe(5695);
});
