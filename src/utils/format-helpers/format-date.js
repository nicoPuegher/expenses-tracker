import dayjs from 'dayjs';

const formatDate = ({ expense: { date } }) => ({
  month: dayjs(date).month(),
  year: dayjs(date).year(),
});

export default formatDate;
