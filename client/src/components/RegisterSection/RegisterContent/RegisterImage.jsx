import Image from '@/components/Image/Image';
import PropTypes from 'prop-types';
import Icon from '@/assets/images/icon.png';
import { ThemeContext } from '@/hooks/ThemeContextProvider';
import { useContext } from 'react';

function RegisterImage({ ...props }) {
  const { theme } = useContext(ThemeContext);
  return <Image {...props} themeName={theme} src={Icon} alt="Icon Display" />;
}
RegisterImage.propTypes = {
  responsiveCondition: PropTypes.object,
  props: PropTypes.arrayOf(PropTypes.string)
};
export default RegisterImage;
