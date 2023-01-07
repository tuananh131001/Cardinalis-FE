import Image from '@/components/Image/Image';
import PropTypes from 'prop-types';
import Icon from '@/assets/images/icon.png';
import { ThemeContext } from '@/hooks/ThemeContextProvider';
import { useContext } from 'react';

const renderPropsResponsive = (propsName, queries) => {
  switch (propsName) {
    case 'width':
      if (queries.mobile) return '65%';
      else if (queries.desktop) return '100%';
      else return '50%';
    case 'alignSelf':
      if (queries.tablet && !queries.desktop) return 'flex-end';
      else return 'center';
  }
};

function AuthenImage({ responsiveCondition, ...props }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Image
      {...props}
      themeName={theme}
      src={Icon}
      width={renderPropsResponsive('width', responsiveCondition)}
      alt="Icon Display"
      alignSelf={renderPropsResponsive('alignSelf', responsiveCondition)}
    />
  );
}
AuthenImage.propTypes = {
  responsiveCondition: PropTypes.object,
  props: PropTypes.arrayOf(PropTypes.string)
};
export default AuthenImage;
