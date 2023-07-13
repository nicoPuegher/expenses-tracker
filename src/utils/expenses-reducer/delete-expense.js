import formatDate from '../format-helpers/format-date';

const deleteExpense = (state, expense) => {
  const { month, year } = formatDate(expense);

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
