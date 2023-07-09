import { uniqueId } from 'lodash';

const formatExpense = (formatMe) => ({
  id: uniqueId('expense_'),
  title: formatMe.title,
  amount: formatMe.amount,
  date: formatMe.date,
  type: formatMe.type,
});

export default formatExpense;
