import { cloneDeep } from 'lodash';
import formatDate from '../utils/format-helpers/format-date';
import newMonth from '../utils/expenses-reducer/add/new-month';
import newView from '../utils/expenses-reducer/add/new-view';
import newTotal from '../utils/expenses-reducer/add/new-total';
import yearlyFilter from '../utils/expenses-reducer/filter/yearly-filter';
import monthlyFilter from '../utils/expenses-reducer/filter/monthly-filter';
// import editExpense from '../utils/expenses-reducer/edit-expense';
import deleteExpense from '../utils/expenses-reducer/change/delete-expense';
import defaultState from './expenses-default';

const expensesReducer = (state, action) => {
  const newState = cloneDeep(state);

  if (action.type === 'ADD') {
    const { expense: newExpense } = action;
    const newDate = formatDate(newExpense);

    newMonth(newState, newDate, newExpense);
    newView(newState, newDate);
    newTotal(newState, newDate, newExpense);

    return newState;
  }

  if (action.type === 'FILTER') {
    const { mode, value, name = null } = action;

    if (mode === 'Filter by year') return yearlyFilter(newState, value);
    if (mode === 'Filter by month') return monthlyFilter(newState, value, name);
  }

  if (action.type === 'CHANGE') {
    const { mode, expense: newExpense } = action;
    const newDate = formatDate(newExpense);

    if (mode === 'Delete') deleteExpense(newState, newDate, newExpense);
    // if (mode === 'Edit') return editExpense(newState, newDate);
    // if (mode === 'Delete') return deleteExpense(newState, newDate, newExpense);
  }

  return defaultState;
};

export default expensesReducer;
