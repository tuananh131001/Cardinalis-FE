import { useState } from 'react';

export const useChange = ({ initialValue = '' }) => {
  const [value, setValue] = useState(initialValue);

  // event functions
  const onChange = (event) => setValue(event.target.value);
  // toggle
  const toggle = () => setValue(!value);

  return [value, onChange, toggle];
};
