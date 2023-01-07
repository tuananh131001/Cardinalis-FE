import React from 'react';
import PropTypes from 'prop-types';
import SwitchThemeButton from '@/components/Button/SwitchThemeButton';

const HeaderContentRight = ({ type }) => {
  if (type == 'theme') return <SwitchThemeButton />;
  else return null;
};

HeaderContentRight.propTypes = {
  type: PropTypes.oneOf(['theme', 'none'])
};

export default HeaderContentRight;
