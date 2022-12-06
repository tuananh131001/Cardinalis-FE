import React from 'react';
import StyledButton from '@/components/Button/Button.styled';
import PropTypes from 'prop-types';
import { StyledIconButton } from './Button.styled';

function Button({ type = 'primary', children, onClick, ...props }) {
  // for general props of all components rendering conditionally
  // for optional props only
  let generalPropsList = {
    onClick: onClick,
    ...props
  };
  switch (type) {
    case 'primary':
      return <StyledButton {...generalPropsList}>{children}</StyledButton>;
    case 'icon':
      return <StyledIconButton {...generalPropsList}>{children}</StyledIconButton>;
  }
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.any,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default Button;
