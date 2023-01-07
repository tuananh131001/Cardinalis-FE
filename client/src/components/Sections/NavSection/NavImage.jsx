// https://bobbyhadz.com/blog/react-import-image
import Image from '@/components/Image/Image';
import PropTypes from 'prop-types';
import Icon from '@/assets/images/icon.png';

const NavImage = ({ theme }) => {
  return (
    <Image
      className="nav-image"
      src={Icon}
      alt="Small Icon"
      themeName={theme}
      width="3em"
      alignSelf="flex-start"
    />
  );
};

NavImage.propTypes = {
  theme: PropTypes.string
};

export default NavImage;
