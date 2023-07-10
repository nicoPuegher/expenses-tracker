import yearHash from '../hash/year-hash';

const newExpenses = ({ expenses }, { year, month }, newMonth) => {
  const hash = yearHash(year);

  const updatedExpenses = expenses.map((arr, i) => {
    if (i === hash) {
      const updatedArr = [...arr];
      updatedArr[month] = newMonth;
      return updatedArr;
    }
    return arr;
  });

  return updatedExpenses;
};

export default newExpenses;
