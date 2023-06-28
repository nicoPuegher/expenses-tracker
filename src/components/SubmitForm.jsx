import React from 'react';
import { Dialog } from '@headlessui/react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import AmountInput from './AmountInput';
import DateInput from './DateInput';
import SelectInput from './SelectInput';
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
      <div className="mb-3 bg-white text-center">
        <Dialog.Title
          as="h3"
          className="mb-3 text-base font-semibold leading-6 text-gray-900"
        >
          New Expense
        </Dialog.Title>
        <div className="flex flex-col gap-3">
          <TitleInput />
          <AmountInput />
          <DateInput />
          <SelectInput />
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
