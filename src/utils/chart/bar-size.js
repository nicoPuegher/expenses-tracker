const barSize = (expenses, yearlyExpenses) => {
  let size = '0%';

  if (yearlyExpenses > 0) {
    size = `${Math.floor((expenses / yearlyExpenses) * 100)}%`;
  }

  return size;
};

export default barSize;
