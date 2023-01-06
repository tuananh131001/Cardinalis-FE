import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import Button from '@/components/Button/Button';
import PropTypes from 'prop-types';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MOBILE_QUERY } from '@/assets/Constant';
import { ThemeContext } from '@/hooks/ThemeContextProvider';
import { useContext } from 'react';

function AuthenSwitchTheme({ ...props }) {
  const { theme, themeTogglers } = useContext(ThemeContext);
  const isMobile = useMediaQuery(MOBILE_QUERY);
  return (
    <Button
      {...props}
      width="auto"
      buttonType="link"
      fontSize={`var(--font-size-${isMobile ? 'md' : 'md'})`}
      jc="flex-end"
      padding={isMobile ? '0' : '0'}
      onClick={themeTogglers}>
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
