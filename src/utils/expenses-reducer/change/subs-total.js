import yearHash from '../../hash/year-hash';

const subsTotal = ({ total }, { year }, { amount }) => {
  const hash = yearHash(year);
  const updatedTotal = total;

  updatedTotal[hash] = Number(updatedTotal) - Number(amount);
};

export default subsTotal;