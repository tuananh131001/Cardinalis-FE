import Image from './Image';
import PropTypes from 'prop-types';

const Avatar = ({ avatar, size, ...props }) => {
  return (
    <Image
      {...props}
      src={avatar}
      alt="Profile Avatar"
      borderRadius="100%"
      width={size}
      aspectRatio="1/1"
      borderWidth="4.5px"
      borderStyle="solid"
    />
  );
};

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};
export default Avatar;
