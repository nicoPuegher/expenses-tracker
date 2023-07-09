const formatExpense = (formatMe) => ({
  title: formatMe.title.value,
  amount: formatMe.amount.value,
  date: formatMe.date.value,
  type: formatMe.type.value,
});

export default formatExpense;
