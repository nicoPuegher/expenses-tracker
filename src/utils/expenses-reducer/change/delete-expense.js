import yearHash from '../../hash/year-hash';
import subsTotal from './subs-total';

const deleteExpense = (state, { year, month }, { id, amount }) => {
  const hash = yearHash(year);
  const updatedExpenses = state.expenses[hash][month];

  const deleted = updatedExpenses.arr.filter((exp) => exp.id !== id);
  updatedExpenses.total = Number(updatedExpenses.total) - Number(amount);
  updatedExpenses.arr = deleted;

  subsTotal(state, hash, amount);
};

export default deleteExpense;
