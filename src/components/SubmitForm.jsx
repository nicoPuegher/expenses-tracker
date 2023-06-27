import React from 'react';
import { Dialog } from '@headlessui/react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import PropTypes from 'prop-types';
import BasicDatePicker from './BasicDatePicker';
import types from '../utils/types-list';

import FormButtons from './FormButtons';

function SubmitForm({ onCloseModal }) {
  // const [formValues, setFormValues] = useState({
  //   title: {
  //     value: '',
  //     error: false,
  //     errorMessage: 'You must enter a title.',
  //   },
  //   amount: {
  //     value: '',
  //     error: false,
  //     errorMessage: 'You must enter an amount.',
  //   },
  //   date: {
  //     value: '',
  //     error: false,
  //     errorMessage: 'You must select a date.',
  //   },
  //   type: {
  //     value: '',
  //     error: false,
  //     errorMessage: 'You must select a type.',
  //   },
  // });

  // const cancelButtonRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    onCloseModal();
  };

  return (
    <form noValidate onSubmit={submitHandler}>
      <div className="mb-3 bg-white">
        <div className="text-center">
          <Dialog.Title
            as="h3"
            className="mb-3 text-base font-semibold leading-6 text-gray-900"
          >
            New Expense
          </Dialog.Title>
          <div className="flex flex-col gap-3">
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              size="small"
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Amount"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              fullWidth
            />
            <BasicDatePicker />
            <TextField
              id="outlined-basic"
              label="Type"
              variant="outlined"
              size="small"
              defaultValue=""
              fullWidth
              select
            >
              {types.map((type) => (
                <MenuItem key={type.value} value={type.value}>
                  {type.value}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
      </div>
      <FormButtons onCloseModal={() => onCloseModal()} />
    </form>
  );
}

SubmitForm.propTypes = {
  onCloseModal: PropTypes.func,
};

SubmitForm.defaultProps = {
  onCloseModal: () => {},
};

export default SubmitForm;
