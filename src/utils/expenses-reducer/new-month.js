import yearHash from '../hash/year-hash';

const newMonth = ({ expenses }, { year, month }, newExpense) => {
  const hash = yearHash(year);
  console.log(year);
  console.log(hash);

  return {
    total: Number(expenses[hash][month].total) + Number(newExpense.amount),
    arr: [...expenses[hash][month].arr, newExpense],
  };
};

export default newMonth;

// FOLLOW HERE, THIS AND NEW EXPENSES SEEM TO ADD DOUBLE THE NUMBER
// WHEN IN RESTRICT MODE, NOT GOOD
