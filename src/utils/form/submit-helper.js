import checkSubmit from '../submission-validation/check-submit';
import validateSubmit from '../submission-validation/validate-submit';
import formatExpense from '../format-helpers/format-expense';

const submitHelper = (form, [values, setValues], context) => {
  checkSubmit(setValues);
  if (!validateSubmit(values)) return 'invalid';
  const expense = formatExpense(values);
  if (form === 'Add') context.addExpense(expense);
  // if (form === 'Edit') context.editExpense();
  return 'valid';
};

export default submitHelper;
