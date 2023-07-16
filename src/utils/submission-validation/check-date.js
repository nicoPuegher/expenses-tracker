import formatDate from '../format-helpers/format-date';

const checkDate = (date) => {
  const { day, month, year, isValid } = formatDate(date);

  if (!isValid) {
    return { name: 'date', value: '' };
  }

  if (Number(year) < 2022 || Number(year) > 2023) {
    return { name: 'date', value: '' };
  }

  return { name: 'date', value: `${month.num + 1}-${day.num}-${year}` };
};

export default checkDate;
