import { useState } from 'react';

export const useChange = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  // event functions
  const onChange = (event) => setValue(event.target.value);
  const onSetNewValue = (newValue) => setValue(newValue);
  const onSetFalse = (event) => {
    if (event) event.preventDefault();
    setValue(false);
  };
  const onSetTrue = (event) => {
    if (event) event.preventDefault();
    setValue(true);
  };
  const onReset = () => setValue(initialValue);
  // toggle
  const onToggle = (event) => {
    if (event) event.preventDefault();
    setValue(!value);
  };

  return { value, onChange, onSetNewValue, onReset, onToggle, onSetFalse, onSetTrue };
};
