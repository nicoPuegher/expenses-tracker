import dayjs from 'dayjs';

const getMonthName = (type, month) => {
  const date = dayjs().month(month).$d;
  const short = date.toLocaleString('en-US', { month: 'short' });
  const long = date.toLocaleString('en-US', { month: 'long' });
  const name = type === 'short' ? short : long;

  return name;
};

export default getMonthName;
