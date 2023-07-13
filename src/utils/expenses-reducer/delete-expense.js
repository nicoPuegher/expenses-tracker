import formatDate from '../format-helpers/format-date';
import yearHash from '../hash/year-hash';

const deleteExpense = (state, expense) => {
  const { month, year } = formatDate(expense);
  const hash = yearHash(year);

  return {
    ...state,
  };
};

export default deleteExpense;

/**
 * ALL STRINGS
 * id
 * title
 * amount
 * date
 * type
 */
