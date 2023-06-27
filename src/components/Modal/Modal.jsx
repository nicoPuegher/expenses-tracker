import React, { Fragment, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Dialog, Transition } from '@headlessui/react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import BasicDatePicker from '../BasicDatePicker/BasicDatePicker';
import types from './types-list';

function Modal({ isOpen, onCloseModal }) {
  const [formValues, setFormValues] = useState({
    title: {
      value: '',
      error: false,
      errorMessage: 'You must enter a title.',
    },
    amount: {
      value: '',
      error: false,
      errorMessage: 'You must enter an amount.',
    },
    date: {
      value: '',
      error: false,
      errorMessage: 'You must select a date.',
    },
    type: {
      value: '',
      error: false,
      errorMessage: 'You must select a type.',
    },
  });

  const cancelButtonRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();
    onCloseModal();
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => {
          onCloseModal();
        }}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10">
          <div className="flex min-h-full items-center justify-center p-2 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full overflow-hidden rounded bg-white px-2 py-3 shadow-xl transition-all">
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
                              <InputAdornment position="start">
                                $
                              </InputAdornment>
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
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
