import { cloneDeep } from 'lodash';
import yearHash from '../../hash/year-hash';

const newExpenses = ({ expenses }, { year, month }, newMonth) => {
  const hash = yearHash(year);
  const updatedExpenses = cloneDeep(expenses);

  updatedExpenses[hash][month] = newMonth;

  return updatedExpenses;
};

export default newExpenses;
