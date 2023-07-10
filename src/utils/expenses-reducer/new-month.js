import yearHash from '../hash/year-hash';

const newMonth = ({ expenses }, { year, month }, newExpense) => {
  const hash = yearHash(year);

  return {
    total: Number(expenses[hash][month].total) + Number(newExpense.amount),
    arr: [...expenses[hash][month].arr, newExpense],
  };
};

export default newMonth;
