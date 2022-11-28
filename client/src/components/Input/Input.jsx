import { useResizeInput } from '@/hooks/useResizeInput';
import { useChange } from '@/hooks/useChange';
import { StyledTextArea, StyledInput } from '@/components/Input/Input.styled';
import PropTypes from 'prop-types';

function Input({ type, placeholder, cols, ...props }) {
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
          cols={cols || 30}
          ref={textareaRef}
          onChange={onChange}
          value={inputValue}></StyledTextArea>
      );
    case 'text':
      [inputValue, onChange] = useChange('');
      return <StyledInput {...generalPropsList} onChange={onChange} />;
  }
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  cols: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default Input;
