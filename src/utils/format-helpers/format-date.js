import dayjs from 'dayjs';
import monthName from './month-name';

const formatDate = ({ expense: { date } }) => {
  const month = dayjs(date).month();
  const year = dayjs(date).year().toString();

  return {
    month,
    monthName: monthName(month),
    year,
  };
};

export default formatDate;
