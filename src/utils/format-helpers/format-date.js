import dayjs from 'dayjs';
import getMonthName from './get-month-name';

const formatDate = ({ date }) => {
  const formatMe = dayjs(date);

  const day = formatMe.$d.toLocaleString('en-US', { day: '2-digit' });
  const dayNum = formatMe.$D;
  const month = formatMe.month();
  const monthShort = getMonthName('short', month);
  const monthLong = getMonthName('long', month);
  const year = formatMe.year().toString();
  const isValid = formatMe.isValid();

  return {
    day,
    dayNum,
    month,
    monthShort,
    monthLong,
    year,
    isValid,
  };
};

export default formatDate;
