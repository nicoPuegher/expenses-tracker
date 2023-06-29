import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

function DateInput({ onChange, error, helperText }) {
  const min = dayjs(new Date(2021, 0, 1));
  const max = dayjs(new Date(2023, 11, 31));

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
            onBlur: (e) => onChange({ name: 'date', value: e.target.value }),
            error,
            helperText,
            minDate: min,
            fullWidth: true,
            required: true,
          },
        }}
        onChange={(e) => onChange({ name: 'date', value: e ? e.$d : '' })}
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
