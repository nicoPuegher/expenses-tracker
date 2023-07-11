import dayjs from 'dayjs';

const combinedSort = (sortMe) => {
  sortMe.sort((a, b) => {
    const byDate = dayjs(b.date) - dayjs(a.date);
    const byTitle = a.title.localeCompare(b.title);
    return byDate || byTitle;
  });
};

export default combinedSort;
