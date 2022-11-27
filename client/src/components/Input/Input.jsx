/* eslint-disable react/prop-types */
import { useResizeInput } from '@/hooks/useResizeInput';
import { useChange } from '@/hooks/useChange';
import { StyledTextArea, StyledInput } from './Input.styled';

function Input({ type, placeholder, ...props }) {
  let [textareaRef, onChange, inputValue] = [null];
  // for general props of all components rendering conditionally
  // for optional props only
  let generalPropsList = {
    placeholder: placeholder,
    ...props
  };

  switch (type) {
    case 'textarea':
      // 32 số tạm thời chưa bít
      [textareaRef, onChange, inputValue] = useResizeInput('', {
        name: 'height',
        minSize: 32
      });
      return (
        <StyledTextArea
          {...generalPropsList}
          cols={props.cols || '30'}
          ref={textareaRef}
          onChange={onChange}
          value={inputValue}></StyledTextArea>
      );
    case 'text':
      [inputValue, onChange] = useChange('');
      return <StyledInput {...generalPropsList} onChange={onChange} />
  }
}

export default Input;
