const singleSort = (sortMe) => {
  sortMe.sort((a, b) => a.title.localeCompare(b.title));
};

export default singleSort;
