import yearHash from '../hash/year-hash';

const newTotal = ({
  state: { total },
  newDate: { year },
  newExpense: { amount },
}) => {
  const hash = yearHash(year);

  return Number(total[hash]) + Number(amount);
};

export default newTotal;
