import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import expensesReducer from './../reducers/expenses';
import filtersReducer from './../reducers/filters';
import authReducer from './../reducers/auth';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    composeEnhancer(applyMiddleware(reduxThunk))
  );

  return store;
}
