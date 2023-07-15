import yearHash from '../../hash/year-hash';

const newMonth = ({ expenses }, { year, month }, newExpense) => {
  const hash = yearHash(year);
  const updatedMonth = expenses[hash][month];

  updatedMonth.total = Number(updatedMonth.total) + Number(newExpense.amount);
  updatedMonth.arr = [...updatedMonth.arr, newExpense];
};

export default newMonth;
