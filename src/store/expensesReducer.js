import { cloneDeep } from 'lodash';
import formatDate from '../utils/format-helpers/format-date';
import newMonth from '../utils/expenses-reducer/add/new-month';
import newView from '../utils/expenses-reducer/add/new-view';
// import newExpenses from '../utils/expenses-reducer/add/new-expenses';
import newTotal from '../utils/expenses-reducer/add/new-total';
import addExpense from '../utils/expenses-reducer/add-expense';
import yearlyFilter from '../utils/expenses-reducer/filter/yearly-filter';
import monthlyFilter from '../utils/expenses-reducer/filter/monthly-filter';
import editExpense from '../utils/expenses-reducer/edit-expense';
import deleteExpense from '../utils/expenses-reducer/delete-expense';
import defaultState from './expenses-default';

const expensesReducer = (state, action) => {
  const newState = cloneDeep(state);

  if (action.type === 'ADD') {
    const { expense: newExpense } = action;
    const newDate = formatDate(newExpense);

    newMonth(newState, newDate, newExpense);
    newView(newState, newDate);

    // const updatedExpenses = newExpenses(newState, newDate, updatedMonth);
    // const isViewFilter = newState.currentView.filter.active;
    // const updatedView = isViewFilter
    //   ? yearlyFilter(newState, newDate.year)
    //   : monthlyFilter(newState, newDate.year, newDate.monthName);
    // const updatedTotal = newTotal(newState, newDate, newExpense);

    // return addExpense(state, updatedExpenses, updatedView, updatedTotal);
  }

  if (action.type === 'FILTER') {
    const { mode, value, name = null } = action;

    if (mode === 'Filter by year') return yearlyFilter(newState, value);
    if (mode === 'Filter by month') return monthlyFilter(newState, value, name);
  }

  if (action.type === 'CHANGE') {
    const { mode, expense } = action;

    if (mode === 'Edit') return editExpense(state, expense);
    if (mode === 'Delete') return deleteExpense(state, expense);
  }

  return defaultState;
};

export default expensesReducer;
