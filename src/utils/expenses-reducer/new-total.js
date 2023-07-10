import yearHash from '../hash/year-hash';

const newTotal = ({ total }, { year }, { amount }) => {
  const hash = yearHash(year);

  return {
    ...total,
    [hash]: Number(total[hash]) + Number(amount),
  };
};

export default newTotal;
