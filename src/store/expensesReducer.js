import defaultState from './expenses-default';
import yearlyFilter from '../utils/expenses-reducer/yearly-filter';
import monthlyFilter from '../utils/expenses-reducer/monthly-filter';

import formatExpense from '../utils/format-helpers/format-onreduce';
import formatDate from '../utils/format-helpers/format-date';
import newMonth from '../utils/expenses-reducer/new-month';
import newTotal from '../utils/expenses-reducer/new-total';
import newView from '../utils/expenses-reducer/new-view';
import newExpenses from '../utils/expenses-reducer/new-expenses';

const expensesReducer = (state, action) => {
  if (action.type === 'ADD') {
    // const { title, amount, date, type } = action.expense;
    // const year = dayjs(date).year();
    // const month = dayjs(date).month();

    const newExpense = formatExpense(action);
    const newDate = formatDate(action);

    const updatedMonth = newMonth(state, newDate, newExpense);
    const updatedExpenses = newExpenses(state, newDate, updatedMonth);
    const updatedView = newView(state, newDate);
    const updatedTotal = newTotal(state, newDate, newExpense);

    const newState = {
      ...state,
      expenses: updatedExpenses,
      currentView: updatedView,
      total: updatedTotal,
    };

    return newState;
  }

  // if (action.type === 'ADD') {
  //   const { title, amount, date, type } = action.expense;
  //   const numAmount = Number(amount).toFixed(2);

  //   const year = dayjs(date).year();
  //   const month = dayjs(date).month();

  //   const newExpense = {
  //     id: uniqueId(`${year}-${month}_`),
  //     title,
  //     numAmount,
  //     date,
  //     type,
  //   };

  //   const newMonth = {
  //     total: state.expenses[year][month].total + Number(newExpense.numAmount),
  //     expensesArr: [...state.expenses[year][month].expensesArr, newExpense],
  //   };

  //   const newTotal = state.total[year] + Number(newExpense.numAmount);

  //   const { filter: isFilter, month: isMonth } = state.currentView;

  //   if (isMonth) {
  //     return {
  //       ...state,
  //       expenses: {
  //         ...state.expenses,
  //         [year]: {
  //           ...state.expenses[year],
  //           [month]: newMonth,
  //         },
  //       },
  //       displayMonth: {
  //         visibility: true,
  //         current: month,
  //       },
  //       total: {
  //         ...state.total,
  //         [year]: newTotal,
  //       },
  //     };
  //   }

  //   if (isFilter) {
  //     return {
  //       ...state,
  //       expenses: {
  //         ...state.expenses,
  //         [year]: {
  //           ...state.expenses[year],
  //           [month]: newMonth,
  //         },
  //       },
  //       displayMonth: {
  //         visibility: false,
  //         current: null,
  //       },
  //       total: {
  //         ...state.total,
  //         [year]: newTotal,
  //       },
  //     };
  //   }
  // }

  if (action.type === 'FILTER') {
    const { mode, value } = action;

    if (mode === 'Filter by year') return yearlyFilter(state, value);
    if (mode === 'Filter by month') return monthlyFilter(state, value);
  }

  return defaultState;
};

export default expensesReducer;
