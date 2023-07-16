import formatDate from '../format-helpers/format-date';

const checkDate = (date) => {
  const { day, month, year, isValid } = formatDate(date);

  if (!isValid) {
    return { name: 'date', value: '' };
  }

  if (Number(year.num) < 2022 || Number(year.num) > 2023) {
    return { name: 'date', value: '' };
  }

  return { name: 'date', value: `${month.num + 1}-${day.two}-${year.num}` };
};

export default checkDate;
