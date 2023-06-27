import React from 'react';
import { Dialog } from '@headlessui/react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import PropTypes from 'prop-types';
import BasicDatePicker from './BasicDatePicker';
import types from '../utils/types-list';

function Form({ onCloseModal }) {
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
      <div className="bg-gray-50">
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
        >
          Add
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={() => onCloseModal()}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  onCloseModal: PropTypes.func,
};

Form.defaultProps = {
  onCloseModal: () => {},
};

export default Form;
