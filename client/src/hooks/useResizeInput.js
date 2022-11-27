// ref: https://codesandbox.io/s/react-textarea-auto-height-s96b2?file=/src/App.js
import { useLayoutEffect, useRef, useState } from 'react';

export const useResizeInput = (
  initalValue = '',
  resizeInfo = {
    name: 'height',
    minSize: 32
  }
) => {
  const ref = useRef(null);
  const [value, setValue] = useState(initalValue);

  // resize layout
  useLayoutEffect(() => {
    // Reset height - important to shrink on delete
    ref.current.style[resizeInfo.name] = 'inherit';
    ref.current.style[resizeInfo.name] = `${Math.max(
      ref.current.scrollHeight,
      resizeInfo.minSize
    )}px`;
  }, [value]);

  // hanlde event functions
  const onChange = (event) => setValue(event.target.value);

  return [ref, onChange, value];
};
