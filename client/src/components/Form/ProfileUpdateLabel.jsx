import React from 'react';
import PropTypes from 'prop-types';
import Text from '@/components/Text/Text';

const ProfileUpdateLabel = ({ text, htmlFor, ...props }) => (
  <Text
    {...props}
    type="label"
    textThemeName="subText"
    text={text}
    txtAlign="left"
    htmlFor={htmlFor}
  />
);

ProfileUpdateLabel.propTypes = {
  text: PropTypes.string,
  htmlFor: PropTypes.string
};

export default ProfileUpdateLabel;
