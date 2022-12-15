import React from 'react';
import PropTypes from 'prop-types';
import { StyledImage } from './Image.style';

const Image = ({ src, alt, ...props }) => {
  return <StyledImage src={src} alt={alt} {...props} loading="lazy" />;
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  props: PropTypes.arrayOf(PropTypes.string)
};
export default Image;
