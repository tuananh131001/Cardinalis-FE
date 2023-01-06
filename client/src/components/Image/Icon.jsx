import PropTypes from 'prop-types';
import { StyledIcon } from './Icon.styled';

const Icon = ({ children, ...props }) => {
  return <StyledIcon {...props}>{children}</StyledIcon>;
};

Icon.propTypes = {
  children: PropTypes.node,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};
export default Icon;
