import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function DateInput() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Pick a date"
        slotProps={{
          textField: { size: 'small', fullWidth: true },
        }}
      />
    </LocalizationProvider>
  );
}

export default DateInput;
