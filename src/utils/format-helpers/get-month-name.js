import dayjs from 'dayjs';

const getMonthName = (month) => {
  const date = dayjs().month(month).$d;
  const name = date.toLocaleString('en-US', { month: 'short' });

  return name;
};

export default getMonthName;
