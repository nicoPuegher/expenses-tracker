import subsTotal from './subs-total';

const updateTotal = (total, hash, oldExpense, newExpense) => {
  const updatedTotal = total;

  subsTotal(total, hash, oldExpense.amount);
  updatedTotal[hash] = Number(updatedTotal[hash]) - Number(newExpense.amount);
};

export default updateTotal;
