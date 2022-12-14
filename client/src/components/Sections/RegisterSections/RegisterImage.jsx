import Image from '@/components/Image/Image';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MOBILE_QUERY, TABLET_QUERY, DESKTOP_QUERY } from '@/assets/Constant';
import PropTypes from 'prop-types';
import useTheme from '@/hooks/useTheme';

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

function RegisterImage({ ...props }) {
  const [theme] = useTheme();
  const responsiveCondition = {
    mobile: useMediaQuery(MOBILE_QUERY),
    tablet: useMediaQuery(TABLET_QUERY),
    desktop: useMediaQuery(DESKTOP_QUERY)
  };
  return (
    <Image
      {...props}
      themeName={theme}
      src="./icon.png"
      width={renderPropsResponsive('width', responsiveCondition)}
      alt="Icon Display"
      alignSelf={renderPropsResponsive('alignSelf', responsiveCondition)}
    />
  );
}
RegisterImage.propTypes = {
  props: PropTypes.arrayOf(PropTypes.string)
};
export default RegisterImage;
