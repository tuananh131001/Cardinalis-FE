import Image from '@/components/Image/Image';
import PropTypes from 'prop-types';

const NavImage = ({ theme, horizontalMargin }) => {
  return (
    <Image
      src="./icon.png"
      alt="Small Icon"
      themeName={theme}
      width="5em"
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
