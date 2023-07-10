import dayjs from 'dayjs';

const formatDate = ({
  action: {
    expense: { date },
  },
}) => ({
  month: dayjs(date).month(),
  year: dayjs(date).year(),
});

export default formatDate;
