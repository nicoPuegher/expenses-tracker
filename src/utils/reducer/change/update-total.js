import subsTotal from './subs-total';

const updateTotal = (total, hash, oldExp, newExp) => {
  const updatedTotal = total;

  subsTotal(total, hash, oldExp.amount);
  updatedTotal[hash] = Number(updatedTotal[hash]) + Number(newExp.amount);
};

export default updateTotal;
