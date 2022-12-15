import { FlexContainer } from '@/components/Container/Container.styled';
import { LOGIN_PATH, REGISTER_PATH } from '@/assets/Constant';
import PropTypes from 'prop-types';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MOBILE_QUERY, TABLET_QUERY, DESKTOP_QUERY, SMALL_MOBILE_QUERY } from '@/assets/Constant';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button/Button';

const renderPropsResponsive = (propsName, queries) => {
  switch (propsName) {
    case 'width':
      if (queries.mobile) return '100%';
      else if (queries.desktop) return '66%';
      else return '70%';
    case 'padding':
      if (queries.smallMobile) return '2em 3em';
      if (queries.mobile) return '2em 5em';
      else if (queries.desktop) return '1em';
      else return '1em';
    case 'buttonSize':
      if (queries.mobile) return 'var(--font-size-base)';
      else return 'var(--font-size-sm)';
  }
};
const displayCurrentTab = (tabCompare, currentTab) => {
  return {
    pseudoAfterWidth: tabCompare == currentTab ? '100%' : '0',
    transform: tabCompare == currentTab ? 'scale(1.02)' : 'scale(1)'
  };
};
function AuthenNav({ currentTab = 'register', ...props }) {
  const navigate = useNavigate();
  const responsiveCondition = {
    smallMobile: useMediaQuery(SMALL_MOBILE_QUERY),
    mobile: useMediaQuery(MOBILE_QUERY),
    tablet: useMediaQuery(TABLET_QUERY),
    desktop: useMediaQuery(DESKTOP_QUERY)
  };
  return (
    <FlexContainer
      {...props}
      gap="2em"
      width={renderPropsResponsive('width', responsiveCondition)}
      padding={renderPropsResponsive('padding', responsiveCondition)}>
      <Button
        buttonType="link"
        fontSize={renderPropsResponsive('buttonSize', responsiveCondition)}
        onClick={() => navigate(`/${REGISTER_PATH}`)}
        pseudoAfter={1}
        {...displayCurrentTab('register', currentTab, responsiveCondition)}>
        Register
      </Button>
      <Button
        buttonType="link"
        fontSize={renderPropsResponsive('buttonSize', responsiveCondition)}
        onClick={() => navigate(`/${LOGIN_PATH}`)}
        pseudoAfter={1}
        {...displayCurrentTab('login', currentTab, responsiveCondition)}>
        Login
      </Button>
    </FlexContainer>
  );
}

AuthenNav.propTypes = {
  currentTab: PropTypes.string,
  props: PropTypes.arrayOf(PropTypes.string, PropTypes.number)
};
export default AuthenNav;
