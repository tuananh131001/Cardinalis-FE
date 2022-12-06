import React from 'react';
import StyledButton from '@/components/Button/Button.styled';
import PropTypes from 'prop-types';
import { StyledIconButton } from './Button.styled';

function Button({
  buttonType = 'primary',
  buttonThemeName = 'primaryButton',
  children,
  onClick,
  ...props
}) {
  /**
   * @description - This component for button
   * @param {string} buttonType - type of button: primary | icon
   * @param {string} buttonThemeName - name of theme for button: "primaryButton" | "secondaryButton" | "tertiaryButton"
   */
  // for general props of all components rendering conditionally
  // for optional props only
  let generalPropsList = {
    onClick: onClick,
    buttonThemeName: buttonThemeName,
    ...props
  };
  switch (buttonType) {
    case 'primary':
      return <StyledButton {...generalPropsList}>{children}</StyledButton>;
    case 'icon':
      return <StyledIconButton {...generalPropsList}>{children}</StyledIconButton>;
  }
}

Button.propTypes = {
  buttonType: PropTypes.string,
  buttonThemeName: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.any,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default Button;
