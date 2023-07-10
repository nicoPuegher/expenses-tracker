import { uniqueId } from 'lodash';

const formatExpense = ({ action: { expense } }) => ({
  id: uniqueId('expense_'),
  title: expense.title,
  amount: expense.amount,
  date: expense.date,
  type: expense.type,
});

export default formatExpense;
