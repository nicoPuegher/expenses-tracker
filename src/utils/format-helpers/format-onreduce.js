import { uniqueId } from 'lodash';

const formatExpense = ({ expense }) => ({
  id: uniqueId('expense_'),
  title: expense.title,
  amount: expense.amount,
  date: expense.date,
  type: expense.type,
});

export default formatExpense;
