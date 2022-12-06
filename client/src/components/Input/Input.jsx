// https://stackoverflow.com/questions/62935533/how-to-fix-react-forwardrefmenu-material-ui
import { useResizeInput } from '@/hooks/useResizeInput';
import { StyledTextArea, StyledInput } from '@/components/Input/Input.styled';
import { StyledInputContainer, StyledInputIcon } from './Input.styled';
import PropTypes from 'prop-types';
import Button from '@/components/Button/Button';
import { forwardRef } from 'react';

export const Input = forwardRef(function Input(
  { inputType, inputName, type = 'text', cols, onClick, children, ...props },
  ref
) {
  /**
   * @description - This component for input and textarea
   * @param {string} inputType - type of input element - normal input | special input textarea | special input with icon
   * @param {string} inputName - name of input: for choosing "loginInput" or "homeInput" input
   * @param {string} type - type of input: text | password | email | number
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
    type: type,
    ...props
  };
  // const buttonPropsList = {

  switch (inputType) {
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
      return <StyledInput {...generalPropsList} onChange={onChange} ref={ref} />;
    case 'textIcon':
      return (
        <StyledInputContainer {...generalPropsList}>
          <StyledInputIcon {...generalPropsList} ref={ref} />
          <Button buttonType="icon" onClick={onClick}>
            {children}
          </Button>
        </StyledInputContainer>
      );
  }
});

Input.propTypes = {
  inputType: PropTypes.string,
  inputName: PropTypes.string,
  type: PropTypes.string,
  cols: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  children: PropTypes.element,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};
