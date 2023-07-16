const updateTotal = ({ total }, { year }, { amount }) => {
  const updatedTotal = total;

  updatedTotal[year.hash] = Number(updatedTotal[year.hash]) + Number(amount);
};

export default updateTotal;
