import dayjs from 'dayjs';
import defaultState from './expenses-default';

const expensesReducer = (state, action) => {
  if (action.type === 'ADD') {
    // console.log(action);
    const { title, amount, date, type } = action.expense;
    // console.log(Number(amount).toFixed(2));
    const year = dayjs(date).year();
    console.log(state.expenses[year]);
  }

  return defaultState;
};

export default expensesReducer;
