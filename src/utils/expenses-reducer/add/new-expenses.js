import yearHash from '../../hash/year-hash';

const newExpenses = ({ expenses }, { year, month }, newMonth) => {
  const hash = yearHash(year);
  const updatedExpenses = expenses[hash];

  updatedExpenses[month] = newMonth;

  return updatedExpenses;
};

export default newExpenses;
