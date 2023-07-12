import dayjs from 'dayjs';
import getMonthName from './get-month-name';

const formatDate = ({ date }) => {
  const formatMe = dayjs(date);

  const day = formatMe.$d.toLocaleString('en-US', { day: '2-digit' });
  const month = formatMe.month();
  const monthName = getMonthName(month);
  const year = formatMe.year().toString();

  return {
    day,
    month,
    monthName,
    year,
  };
};

export default formatDate;
