const updateMonth = ({ expenses }, { year, month }, expense) => {
  const updatedMonth = expenses[year.hash][month.num];

  updatedMonth.total = Number(updatedMonth.total) + Number(expense.amount);
  updatedMonth.arr = [...updatedMonth.arr, expense];
};

export default updateMonth;
