import dayjs from 'dayjs';

const formatMonth = (type, month) => {
  const date = dayjs().month(month).$d;

  const short = date.toLocaleString('en-US', { month: 'short' });
  const long = date.toLocaleString('en-US', { month: 'long' });

  return type === 'short' ? short : long;
};

export default formatMonth;
