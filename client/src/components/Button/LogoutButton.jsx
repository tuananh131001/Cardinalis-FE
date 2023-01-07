import Button from '@/components/Button/Button';
import PropTypes from 'prop-types';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MOBILE_QUERY } from '@/assets/Constant';
import { MdLogout } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { logout } from '@/features/userSlice';
import { useNavigate } from 'react-router-dom';

function LogoutButton({ ...props }) {
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClick = (event) => {
    event.stopPropagation();
    dispatch(logout());
    navigate('/', { replace: true });
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
