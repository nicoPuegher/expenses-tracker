import dayjs from 'dayjs';
import monthName from './month-name';

const formatDate = ({ expense: { date } }) => {
  const month = dayjs(date).month();

  return {
    month,
    monthName: monthName(month),
    year: dayjs(date).year(),
  };
};

export default formatDate;
