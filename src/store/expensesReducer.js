import formatDate from '../utils/format-helpers/format-date';
import newMonth from '../utils/expenses-reducer/new-month';
import newExpenses from '../utils/expenses-reducer/new-expenses';
import newView from '../utils/expenses-reducer/new-view';
import newTotal from '../utils/expenses-reducer/new-total';
import addExpense from '../utils/expenses-reducer/add-expense';
import yearlyFilter from '../utils/expenses-reducer/yearly-filter';
import monthlyFilter from '../utils/expenses-reducer/monthly-filter';
import editExpense from '../utils/expenses-reducer/edit-expense';
import deleteExpense from '../utils/expenses-reducer/delete-expense';
import defaultState from './expenses-default';

const expensesReducer = (state, action) => {
  if (action.type === 'ADD') {
    const { expense: newExpense } = action;
    const newDate = formatDate(newExpense);

    const updatedMonth = newMonth(state, newDate, newExpense);
    const updatedExpenses = newExpenses(state, newDate, updatedMonth);
    const updatedView = newView(state, newDate);
    const updatedTotal = newTotal(state, newDate, newExpense);

    return addExpense(state, updatedExpenses, updatedView, updatedTotal);
  }

  if (action.type === 'FILTER') {
    const { mode, value, name = null } = action;

    if (mode === 'Filter by year') return yearlyFilter(state, value);
    if (mode === 'Filter by month') return monthlyFilter(state, value, name);
  }

  if (action.type === 'CHANGE') {
    const { mode, expense } = action;

    if (mode === 'Edit') return editExpense(state, expense);
    if (mode === 'Delete') return deleteExpense(state, expense);
  }

  return defaultState;
};

export default expensesReducer;
