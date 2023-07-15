import inputStateGenerator from '../submission-validation/input-state';

const formatEdit = (expData) => {
  const inputState = inputStateGenerator();
  const { title, amount, date, type } = inputState;

  title.value = expData.title;
  amount.value = expData.amount;
  date.value = expData.date;
  type.value = expData.type;

  return inputState;
};

export default formatEdit;
