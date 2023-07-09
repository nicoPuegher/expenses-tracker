import dayjs from 'dayjs';

const formatDate = (date) => ({
  month: dayjs(date).month(),
  year: dayjs(date).year(),
});

export default formatDate;
