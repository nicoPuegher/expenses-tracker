import { cloneDeep } from 'lodash';
import formatDate from '../utils/format-helpers/format-date';
import updateMonth from '../utils/reducer/add/update-month';
import updateView from '../utils/reducer/add/update-view';
import updateTotal from '../utils/reducer/add/update-total';
import yearlyFilter from '../utils/reducer/filter/yearly-filter';
import monthlyFilter from '../utils/reducer/filter/monthly-filter';
import editExpense from '../utils/reducer/change/edit-expense';
import deleteExpense from '../utils/reducer/change/delete-expense';
import defaultState from './expenses-default';

const expensesReducer = (oldState, action) => {
  const state = cloneDeep(oldState);

  if (action.type === 'ADD') {
    const { expense } = action;
    const date = formatDate(expense);

    updateMonth(state, date, expense);
    updateView(state, date);
    updateTotal(state, date, expense);

    return state;
  }

  if (action.type === 'FILTER') {
    const { mode, value, name = null, long = null } = action;

    if (mode === 'Filter by year') yearlyFilter(newState, value);
    if (mode === 'Filter by month') monthlyFilter(newState, value, name, long);

    return newState;
  }

  if (action.type === 'CHANGE') {
    const { mode, expense, newExpense = null } = action;
    const newDate = formatDate(expense);

    if (mode === 'Edit') editExpense(newState, newDate, expense, newExpense);
    if (mode === 'Delete') deleteExpense(newState, newDate, expense);

    console.log(newState);

    return newState;
  }

  return defaultState;
};

export default expensesReducer;
