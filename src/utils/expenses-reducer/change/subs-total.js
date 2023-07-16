const subsTotal = (total, hash, amount) => {
  const updatedTotal = total;

  updatedTotal[hash] = Number(updatedTotal[hash]) - Number(amount);
};

export default subsTotal;
