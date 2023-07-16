const formatEditExp = (oldExp, newExp) => ({
  id: oldExp.id,
  title: newExp.title.value,
  amount: newExp.amount.value,
  date: newExp.date.value,
  type: newExp.type.value,
});

export default formatEditExp;
