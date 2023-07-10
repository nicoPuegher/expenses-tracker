import yearHash from '../hash/year-hash';

const newExpenses = ({ expenses }, { year, month }, newMonth) => {
  const hash = yearHash(year);
  const clone = expenses;

  const updatedExpenses = {
    expenses: [
      ...clone,
      (clone[hash] = [...clone[hash], (clone[hash][month] = newMonth)]),
    ],
  };

  return updatedExpenses;
};

export default newExpenses;
