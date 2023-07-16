import updateTotal from './update-total';

const editExpense = (state, { year, month }, oldExp, newExp) => {
  const updatedExps = state.expenses[year.hash][month.num];
  const updatedArr = updatedExps.arr;

  const index = updatedArr.findIndex((exp) => exp.id === oldExp.id);

  updatedExps.total = Number(updatedExps.total) - Number(oldExp.amount);
  updatedExps.total = Number(updatedExps.total) + Number(newExp.amount);
  updatedArr[index] = newExp;

  updateTotal(state.total, year.hash, oldExp, newExp);
};

export default editExpense;
