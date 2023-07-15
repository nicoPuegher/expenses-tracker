import formatDate from '../format-helpers/format-date';
import yearHash from '../hash/year-hash';
import newExpenses from './add/new-expenses';

const deleteExpense = (state, expense) => {
  const { month, year } = formatDate(expense);
  const hash = yearHash(year);

  const copyExpenses = [...state.expenses];
  const copyMonth = copyExpenses[hash][month];
  const deleted = copyMonth.arr.filter((exp) => exp.id !== expense.id);

  const updatedMonth = {
    total: Number(copyMonth.total) - Number(expense.amount),
    arr: deleted,
  };

  const updatedExpenses = newExpenses(state, expense, updatedMonth);

  return {
    ...state,
    expenses: updatedExpenses,
  };
};

export default deleteExpense;
