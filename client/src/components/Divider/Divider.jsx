import React from 'react';
import PropTypes from 'prop-types';
import { StyledDivider, StyledVerticalDivider } from './Divider.styled';

const Divider = ({ direction = 'horizontal', ...props }) => {
  if (direction == 'horizontal') {
    return <StyledDivider {...props} />;
  } else {
    return <StyledVerticalDivider {...props} />;
  }
};

Divider.propTypes = {
  direction: PropTypes.string
};

export default Divider;
