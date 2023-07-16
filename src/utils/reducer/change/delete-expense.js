import subsTotal from './subs-total';

const deleteExpense = (state, { year, month }, { id, amount }) => {
  const updatedExpenses = state.expenses[year.hash][month.num];

  const deleted = updatedExpenses.arr.filter((exp) => exp.id !== id);
  updatedExpenses.total = Number(updatedExpenses.total) - Number(amount);
  updatedExpenses.arr = deleted;

  subsTotal(state.total, year.hash, amount);
};

export default deleteExpense;
