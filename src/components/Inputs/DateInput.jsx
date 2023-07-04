import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import checkDate from '../../utils/submission-validation/check-date';

function DateInput({ onChange, error, helperText }) {
  const min = dayjs(new Date(2022, 0, 1));
  const max = dayjs(new Date(2023, 11, 31));

  const validateHandler = (date) => onChange(checkDate(date));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Pick a date"
        minDate={min}
        maxDate={max}
        views={['year', 'month', 'day']}
        slotProps={{
          textField: {
            size: 'small',
            onBlur: (e) => validateHandler(e.target.value),
            error,
            helperText,
            fullWidth: true,
            required: true,
          },
        }}
        onChange={(e) => validateHandler(e ? e.$d : '')}
      />
    </LocalizationProvider>
  );
}

DateInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
};

export default DateInput;
