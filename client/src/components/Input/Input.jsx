// https://stackoverflow.com/questions/62935533/how-to-fix-react-forwardrefmenu-material-ui
import { useResizeInput } from '@/hooks/useResizeInput';
import {
  StyledInputContainer,
  StyledInputIcon,
  StyledFileInputContainer,
  StyledTextArea,
  StyledInput
} from './Input.styled';
import PropTypes from 'prop-types';
import Button from '@/components/Button/Button';
import { forwardRef } from 'react';

export const Input = forwardRef(function Input(
  {
    inputType,
    inputThemeName,
    type = 'text',
    cols,
    onClick,
    children,
    isDisplay = true,
    register,
    registerName,
    ...props
  },
  ref
) {
  /**
   * @param {string} inputType - type of input element - normal input | special input textarea | special input with icon
   * @param {string} inputThemeName - name of input: for choosing "loginInput" or "homeInput" input
   * @param {string} type - type of input: text | password | email | number
   * @param {string} cols - number of cols for textarea
   * @param {function} onClick - function for external onClick event
   */
  let [textareaRef, onChange, inputValue] = [null];
  // for general props of all components rendering conditionally
  // for optional props only
  let generalPropsList = {
    inputThemeName: inputThemeName,
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
    case 'image':
      return (
        <StyledFileInputContainer {...generalPropsList}>
          <StyledInput
            {...register(registerName)}
            {...generalPropsList}
            onChange={onChange}
            accept="image/*"
            ref={ref}
            multiple
            type="file"
            style={{ display: !isDisplay && 'none' }}
          />
          {children}
        </StyledFileInputContainer>
      );
  }
});

Input.propTypes = {
  inputType: PropTypes.string,
  inputThemeName: PropTypes.string,
  type: PropTypes.string,
  cols: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  register: PropTypes.func,
  registerName: PropTypes.string,
  isDisplay: PropTypes.bool,
  children: PropTypes.element,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};
