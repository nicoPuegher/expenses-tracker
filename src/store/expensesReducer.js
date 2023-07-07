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

    return {
      ...state,
      expenses: {
        ...state.expenses,
        [year]: {
          ...state.expenses[year],
          [month]: [...state.expenses[year][month], newExpense],
        },
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
