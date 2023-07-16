import dayjs from 'dayjs';
import formatMonth from './format-month';

const formatDate = (format) => {
  const date = dayjs(format);

  const day = {
    name: date.$d.toLocaleString('en-US', { day: '2-digit' }),
    num: date.$D,
  };

  const month = {
    num: date.month(),
    short: formatMonth('short', date.month()),
    long: formatMonth('long', date.month()),
  };

  const year = date.year().toString();
  const isValid = date.isValid();

  return {
    day,
    month,
    year,
    isValid,
  };
};

export default formatDate;
