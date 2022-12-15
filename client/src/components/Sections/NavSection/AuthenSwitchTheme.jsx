import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import Button from '@/components/Button/Button';
import PropTypes from 'prop-types';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MOBILE_QUERY } from '@/assets/Constant';

function AuthenSwitchTheme({ theme, themeToggler, ...props }) {
  const isMobile = useMediaQuery(MOBILE_QUERY);
  return (
    <Button
      {...props}
      buttonType="link"
      fontSize={`var(--font-size-${isMobile ? 'xl' : 'lg'})`}
      jc="flex-end"
      padding={isMobile ? '0.7em' : '0'}
      onClick={themeToggler}>
      {theme == 'lightTheme' ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
    </Button>
  );
}

AuthenSwitchTheme.propTypes = {
  theme: PropTypes.string,
  themeToggler: PropTypes.func,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
};
export default AuthenSwitchTheme;
