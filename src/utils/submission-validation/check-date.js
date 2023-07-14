import formatDate from '../format-helpers/format-date';

const checkDate = (date) => {
  const { dayNum, month, year, isValid } = formatDate({ date });

  if (!isValid) {
    return { name: 'date', value: '' };
  }

  if (Number(year) < 2022 || Number(year) > 2023) {
    return { name: 'date', value: '' };
  }

  return { name: 'date', value: `${month + 1}-${dayNum}-${year}` };
};

export default checkDate;
