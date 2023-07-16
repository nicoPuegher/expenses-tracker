import checkSubmit from '../validation/check-submit';
import validateSubmit from '../validation/validate-submit';
import formatExpense from '../format/format-expense';

const submitHelper = (form, [values, setValues], expData, context) => {
  checkSubmit(setValues);
  if (!validateSubmit(values)) return 'invalid';
  const expense = formatExpense(values, expData);
  if (form === 'Add') context.addExpense(expense);
  if (form === 'Edit') context.changeExpense(form, expData, expense);
  return 'valid';
};

export default submitHelper;
