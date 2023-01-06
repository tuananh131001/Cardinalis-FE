// https://bobbyhadz.com/blog/react-import-image
import Image from '@/components/Image/Image';
import PropTypes from 'prop-types';
import Icon from '@/assets/images/icon.png';

const NavImage = ({ theme, horizontalMargin }) => {
  return (
    <Image
      src={Icon}
      alt="Small Icon"
      themeName={theme}
      width="2.5em"
      alignSelf="flex-start"
      margin={`0 ${horizontalMargin}`}
    />
  );
};

NavImage.propTypes = {
  theme: PropTypes.string,
  horizontalMargin: PropTypes.string
};

export default NavImage;
