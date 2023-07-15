import { cloneDeep } from 'lodash';
import yearHash from '../../hash/year-hash';

const newMonth = ({ expenses }, { year, month }, newExpense) => {
  const hash = yearHash(year);
  const updatedMonth = cloneDeep(expenses[hash][month]);

  updatedMonth.total = Number(updatedMonth.total) + Number(newExpense.amount);
  updatedMonth.arr = [...updatedMonth.arr, newExpense];

  return updatedMonth;
};

export default newMonth;
