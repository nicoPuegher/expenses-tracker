import dayjs from 'dayjs';
import { uniqueId } from 'lodash';
import defaultState from './expenses-default';

const expensesReducer = (state, action) => {
  if (action.type === 'ADD') {
    const { title, amount, date, type } = action.expense;
    const numAmount = Number(amount).toFixed(2);

    const year = dayjs(date).year();
    const month = dayjs(date).month();

    const newExpense = {
      id: uniqueId(`${year}-${month}_`),
      title,
      numAmount,
      date,
      type,
    };

    const newMonth = {
      total: state.expenses[year][month].total + Number(newExpense.numAmount),
      expensesArr: [...state.expenses[year][month].expensesArr, newExpense],
    };

    const newTotal = state.total[year] + Number(newExpense.numAmount);

    return {
      ...state,
      expenses: {
        ...state.expenses,
        [year]: {
          ...state.expenses[year],
          [month]: newMonth,
        },
      },
      total: {
        ...state.total,
        [year]: newTotal,
      },
    };
  }

  if (action.type === 'FILTER') {
    const { year } = action;
    return {
      ...state,
      currentFilter: Number(year),
    };
  }

  return defaultState;
};

export default expensesReducer;
