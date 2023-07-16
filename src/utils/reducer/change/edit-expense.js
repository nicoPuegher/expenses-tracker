import yearHash from '../../hash/year-hash';
import updateTotal from './update-total';

const editExpense = (state, { year, month }, oldExpense, newExpense) => {
  const hash = yearHash(year);
  const updatedExps = state.expenses[hash][month];
  const updatedArr = updatedExps.arr;

  const index = updatedArr.findIndex((exp) => exp.id === oldExpense.id);

  updatedExps.total = Number(updatedExps.total) - Number(oldExpense.amount);
  updatedExps.total = Number(updatedExps.total) + Number(newExpense.amount);
  updatedArr[index] = newExpense;

  updateTotal(state.total, hash, oldExpense, newExpense);
};

export default editExpense;
