import dayjs from 'dayjs';

const checkDate = (date) => {
  const isValid = dayjs(date).isValid();
  if (!isValid) {
    return { name: 'date', value: '' };
  }

  const selectedYear = dayjs(date).year();
  if (selectedYear < 2021 || selectedYear > 2023) {
    return { name: 'date', value: '' };
  }

  const { $M: month, $D: day, $y: year } = dayjs(date);
  return { name: 'date', value: `${month + 1}-${day}-${year}` };
};

export default checkDate;
