import Image from '@/components/Image/Image';
import PropTypes from 'prop-types';
import Icon from '@/assets/images/icon.png';
import { ThemeContext } from '@/hooks/ThemeContextProvider';
import { useContext } from 'react';

function LoginImage({ ...props }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Image {...props} className="image-container" themeName={theme} src={Icon} alt="Icon Display" />
  );
}
LoginImage.propTypes = {
  responsiveCondition: PropTypes.object,
  props: PropTypes.arrayOf(PropTypes.string)
};
export default LoginImage;
