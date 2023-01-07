import Button from '@/components/Button/Button';
import PropTypes from 'prop-types';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MOBILE_QUERY } from '@/assets/Constant';
import { MdLogout } from 'react-icons/md';

function LogoutButton({ ...props }) {
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const onClick = (event) => {
    event.stopPropagation();
    console.log('logout');
  };
  return (
    <Button
      {...props}
      width="auto"
      buttonType="link"
      buttonThemeName="thirdButton"
      fontSize={`var(--font-size-${isMobile ? 'md' : 'md'})`}
      padding={isMobile ? '0' : '0'}
      onClick={onClick}>
      {<MdLogout />}
    </Button>
  );
}

LogoutButton.propTypes = {
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
};
export default LogoutButton;
