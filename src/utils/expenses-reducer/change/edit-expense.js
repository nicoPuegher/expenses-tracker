import yearHash from '../../hash/year-hash';
import updateTotal from './update-total';

const editExpense = (state, { year, month }, newExpense) => {
  const hash = yearHash(year);
  const updatedExpenses = state.expenses[hash][month];
  const updatedArr = updatedExpenses.arr;
  const updatedTotal = updatedExpenses.total;

  const index = updatedArr.findIndex((exp) => exp.id === newExpense.id);
  const oldExpense = updatedArr[index];

  updatedExpenses.total = Number(updatedTotal) - Number(oldExpense.amount);
  updatedExpenses.total = Number(updatedTotal) + Number(newExpense.amount);
  updateTotal(state.total, hash, oldExpense, newExpense);
  updatedArr[index] = newExpense;
};

export default editExpense;
