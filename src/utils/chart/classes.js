const classes = (month, current) => {
  let radius = '';
  if (month === 0) radius = 'rounded-tl lg:rounded-l';
  if (month === 1) radius = 'rounded-tr lg:rounded-none';
  if (month === 10) radius = 'rounded-bl lg:rounded-none';
  if (month === 11) radius = 'rounded-br lg:rounded-r';

  const btnSelected =
    current === month
      ? 'bg-primary-200 hover:bg-primary-300 text-primary-500 font-semibold'
      : '';

  const barSelected = current === month ? 'bg-primary-400' : '';

  return { radius, btnSelected, barSelected };
};

export default classes;
