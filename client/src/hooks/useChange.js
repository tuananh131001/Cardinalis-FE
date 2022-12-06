import { useState } from 'react';

export const useChange = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  // event functions
  const onChange = (event) => setValue(event.target.value);
  const onReset = () => setValue(initialValue);
  // toggle
  const onToggle = (event) => {
    event.preventDefault();
    setValue(!value);
  };

  return { value, onChange, onReset, onToggle };
};
