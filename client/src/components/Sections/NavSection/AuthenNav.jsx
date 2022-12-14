import { FlexContainer } from '@/components/Container/Container.styled';
import { LOGIN_PATH, REGISTER_PATH } from '@/styles/Constant';
import PropTypes from 'prop-types';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MOBILE_QUERY, TABLET_QUERY, DESKTOP_QUERY } from '@/styles/Constant';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button/Button';

const renderPropsResponsive = (propsName, queries) => {
  switch (propsName) {
    case 'width':
      if (queries.mobile) return '100%';
      else if (queries.desktop) return '63%';
      else return '70%';
    case 'padding':
      if (queries.mobile) return '2em 3em';
      else if (queries.desktop) return '1em';
      else return '1em';
    case 'buttonSize':
      if (queries.mobile) return 'var(--font-size-base)';
      else return 'var(--font-size-sm)';
  }
};
function AuthenNav({ ...props }) {
  const navigate = useNavigate();
  const responsiveCondition = {
    mobile: useMediaQuery(MOBILE_QUERY),
    tablet: useMediaQuery(TABLET_QUERY),
    desktop: useMediaQuery(DESKTOP_QUERY)
  };
  return (
    <FlexContainer
      {...props}
      gap={responsiveCondition.mobile && '2em'}
      width={renderPropsResponsive('width', responsiveCondition)}
      padding={renderPropsResponsive('padding', responsiveCondition)}>
      <Button buttonType="link" onClick={() => navigate(`/${REGISTER_PATH}`)}>
        Register
      </Button>
      <Button buttonType="link" onClick={() => navigate(`/${LOGIN_PATH}`)}>
        Login
      </Button>
    </FlexContainer>
  );
}

AuthenNav.propTypes = {
  props: PropTypes.arrayOf(PropTypes.string)
};
export default AuthenNav;
