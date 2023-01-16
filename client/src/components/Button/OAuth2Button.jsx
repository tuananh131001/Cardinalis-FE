import React from 'react';
import PropTypes from 'prop-types';
import Text from '@/components/Text/Text';

const OAuth2Button = ({ href, text, ...props }) => {
  console.log(href);
  return (
    <Text
      {...props}
      type="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      textThemeName="primaryText"
      style={{ textDecoration: 'none', fontWeight: '600' }}
      gap="0.7em"
      display="flex"
      jc="center"
      ai="center"
      text={text}
    />
  );
};

OAuth2Button.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.node]))
  ])
};

export default OAuth2Button;
