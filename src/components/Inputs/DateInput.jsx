import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { ThemeProvider } from '@mui/material';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import theme from '../../utils/form/date-theme';
import { StyledDatePicker } from './StyledInput';
import checkDate from '../../utils/validation/check-date';

dayjs.extend(customParseFormat);

function DateInput({ value, onChange, error, helperText }) {
  let formatted = null;
  const len = value.length;
  if (len === 10) formatted = dayjs(value, 'MM-DD-YYYY');
  if (len === 9) formatted = dayjs(value, 'M-DD-YYYY');

  const currValue = value !== '' ? formatted : null;
  const min = dayjs(new Date(2022, 0, 1));
  const max = dayjs(new Date(2023, 11, 31));

  const validateHandler = (date) => onChange(checkDate(date));

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledDatePicker
          label="Pick a date"
          minDate={min}
          maxDate={max}
          views={['year', 'month', 'day']}
          slotProps={{
            textField: {
              value: currValue,
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
    </ThemeProvider>
  );
}

DateInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
};

export default DateInput;
