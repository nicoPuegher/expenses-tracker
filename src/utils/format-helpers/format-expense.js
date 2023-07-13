import { uniqueId } from 'lodash';

const formatExpense = (formatMe) => ({
  id: uniqueId('expense_'),
  title: formatMe.title.value,
  amount: formatMe.amount.value,
  date: formatMe.date.value,
  type: formatMe.type.value,
});

export default formatExpense;
