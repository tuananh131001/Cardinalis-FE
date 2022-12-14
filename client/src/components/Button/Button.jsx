import React from 'react';
import StyledButton from '@/components/Button/Button.styled';
import PropTypes from 'prop-types';
import { StyledLink } from './Button.styled';

function Button({ buttonType = 'primary', children, onClick, ...props }) {
  /**
   * @param {string} buttonType - type of button: primary | link
   * @param {string} buttonThemeName - name of theme for button: "primaryButton" | "secondaryButton" | "tertiaryButton"
   */
  let generalPropsList = {
    onClick: onClick,
    ...props
  };
  switch (buttonType) {
    case 'primary':
      return <StyledButton {...generalPropsList}>{children}</StyledButton>;
    case 'link':
      return <StyledLink {...generalPropsList}>{children}</StyledLink>;
  }
}

Button.propTypes = {
  buttonType: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.any,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default Button;
