import Image from './Image';
import PropTypes from 'prop-types';
import Blank from '@/assets/images/blank.png';

const Avatar = ({ src, size, ...props }) => {
  return (
    <Image
      {...props}
      src={src || <Blank />}
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
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};
export default Avatar;
