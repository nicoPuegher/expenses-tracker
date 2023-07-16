const validateSubmit = ({ title, amount, date, type }) => {
  const validTitle = title.value.length > 0 && !title.error;
  const validAmount = amount.value.length > 0 && !amount.error;
  const validDate = date.value.length > 0 && !date.error;
  const validType = type.value.length > 0 && !type.error;

  if (validTitle && validAmount && validDate && validType) return true;
  return false;
};

export default validateSubmit;
