import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import formatMonth from './format-month';
import yearHash from '../hash/year-hash';

dayjs.extend(customParseFormat);

const formatDate = (format) => {
  let date;
  if (typeof format === 'object') date = dayjs(format);
  if (typeof format === 'string') {
    const len = format.length;
    if (len === 10) date = dayjs(format, 'MM-DD-YYYY');
    if (len === 9) date = dayjs(format, 'M-DD-YYYY');
  }

  const day = {
    one: date.$D,
    two: date.$d.toLocaleString('en-US', { day: '2-digit' }),
  };

  const month = {
    num: date.month(),
    short: formatMonth('short', date.month()),
    long: formatMonth('long', date.month()),
  };

  const year = {
    num: date.year().toString(),
    hash: yearHash(date.year().toString()),
  };

  const isValid = date.isValid();

  return {
    day,
    month,
    year,
    isValid,
  };
};

export default formatDate;
