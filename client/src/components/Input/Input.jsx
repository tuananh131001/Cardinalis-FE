import { useResizeInput } from '@/hooks/useResizeInput';
import { useChange } from '@/hooks/useChange';
import { StyledTextArea, StyledInput } from '@/components/Input/Input.styled';
import { StyledInputContainer, StyledInputIcon } from './Input.styled';
import PropTypes from 'prop-types';
import Button from '@/components/Button/Button';

function Input({ type, inputName, inputType = 'text', cols, onClick, children, ...props }) {
  /**
   * @description - This component for input and textarea
   * @param {string} type - type of input element - normal input | special input textarea | special input with icon
   * @param {string} inputName - name of input: for choosing "login" or "home" input
   * @param {string} inputType - type of input: text | password | email | number
   * @param {string} cols - number of cols for textarea
   * @param {function} onClick - function for onClick event
   * @param {string} children - icon for input
   * @param {[string | number]} props - other props for styled components
   */
  let [textareaRef, onChange, inputValue] = [null];
  // for general props of all components rendering conditionally
  // for optional props only
  let generalPropsList = {
    inputName: inputName,
    type: inputType,
    ...props
  };
  // const buttonPropsList = {

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
    case 'textIcon':
      [inputValue, onChange] = useChange('');
      return (
        <StyledInputContainer {...generalPropsList}>
          <StyledInputIcon {...generalPropsList} />
          <Button type="icon" onClick={onClick}>
            {children}
          </Button>
        </StyledInputContainer>
      );
  }
}

Input.propTypes = {
  type: PropTypes.string,
  cols: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  children: PropTypes.element,
  inputName: PropTypes.string,
  inputType: PropTypes.string,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default Input;
