import { uniqueId } from 'lodash';

const formatExpense = (expense) => ({
  id: uniqueId('expense_'),
  title: expense.title.value,
  amount: expense.amount.value,
  date: expense.date.value,
  type: expense.type.value,
});

export default formatExpense;
