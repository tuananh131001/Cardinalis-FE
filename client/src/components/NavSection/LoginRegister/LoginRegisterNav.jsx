import { FlexContainer } from '@/components/Container/Container.styled';
import { LOGIN_PATH, REGISTER_PATH } from '@/assets/Constant';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button/Button';

const displayCurrentTab = (tabCompare, currentTab) => {
  return {
    pseudoAfterWidth: tabCompare == currentTab ? '100%' : '0',
    transform: tabCompare == currentTab ? 'scale(1.01)' : 'scale(1)'
  };
};
function LoginRegisterNav({ currentTab = 'register', ...props }) {
  const navigate = useNavigate();
  return (
    <FlexContainer {...props} className="nav-container">
      <Button
        buttonType="link"
        padding="0.7em 0"
        onClick={() => navigate(`/${REGISTER_PATH}`)}
        pseudoAfter={1}
        {...displayCurrentTab(REGISTER_PATH, currentTab)}>
        Register
      </Button>
      <Button
        buttonType="link"
        padding="0.7em 0"
        onClick={() => navigate(`/${LOGIN_PATH}`)}
        pseudoAfter={1}
        {...displayCurrentTab(LOGIN_PATH, currentTab)}>
        Login
      </Button>
    </FlexContainer>
  );
}

LoginRegisterNav.propTypes = {
  currentTab: PropTypes.string,
  responsiveCondition: PropTypes.object,
  props: PropTypes.arrayOf(PropTypes.string, PropTypes.number)
};
export default LoginRegisterNav;
