/* eslint-disable react/prop-types */
import { useResizeInput } from '@/hooks/useResizeInput';
import { StyledTextArea } from './Input.styled';

function Input({ ...props }) {
  const [textareaRef, onChange, inputValue] = useResizeInput('', { name: 'height', minSize: 32 });

  // for general props of all components rendering conditionally
  let generalPropsList = {
    ...props
  };

  return (
    <StyledTextArea
      {...generalPropsList}
      cols={props.cols || '30'}
      ref={textareaRef}
      onChange={onChange}
      value={inputValue}></StyledTextArea>
  );
}

export default Input;
