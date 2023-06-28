import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PropTypes from 'prop-types';
// import dayjs from 'dayjs';

function DateInput({ onChange }) {
  // const defaultDate = dayjs(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Pick a date"
        // defaultValue={defaultDate}
        slotProps={{
          textField: {
            size: 'small',
            fullWidth: true,
            required: true,
          },
        }}
        onChange={(e) => onChange({ name: 'date', value: e.$d })}
      />
    </LocalizationProvider>
  );
}

DateInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default DateInput;
