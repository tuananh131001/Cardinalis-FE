import Icon from '@/components/Image/Icon';
import PropTypes from 'prop-types';

const NavElementIcon = ({ children }) => {
  return (
    <Icon width="1.5rem" height="1.5rem">
      {children}
    </Icon>
  );
};

NavElementIcon.propTypes = {
  children: PropTypes.node
};
export default NavElementIcon;
