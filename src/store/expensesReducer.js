import dayjs from 'dayjs';
import { uniqueId } from 'lodash';
import defaultState from './expenses-default';

const expensesReducer = (state, action) => {
  if (action.type === 'ADD') {
    const { title, amount, date, type } = action.expense;
    const numAmount = Number(amount).toFixed(2);

    const year = dayjs(date).year();
    const month = dayjs(date).month();
    const arr = state.expenses[year][month];

    arr.push({
      id: uniqueId(`${year}-${month}_`),
      title,
      numAmount,
      date,
      type,
    });
  }

  return defaultState;
};

export default expensesReducer;
