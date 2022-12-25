import Image from '@/components/Image/Image';
import PropTypes from 'prop-types';

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

function AuthenImage({ theme, responsiveCondition, ...props }) {
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
AuthenImage.propTypes = {
  theme: PropTypes.string,
  responsiveCondition: PropTypes.object,
  props: PropTypes.arrayOf(PropTypes.string)
};
export default AuthenImage;
