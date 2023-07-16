import { uniqueId } from 'lodash';

const formatExpense = (expense, edit) => ({
  id: Object.keys(edit).length > 0 ? edit.id : uniqueId('expense_'),
  title: expense.title.value,
  amount: expense.amount.value,
  date: expense.date.value,
  type: expense.type.value,
});

export default formatExpense;
