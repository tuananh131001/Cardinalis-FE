import React from 'react';
import { LoginContentStyled } from './LoginContent.styled';
import LoginRegisterNav from '@/components/NavSection/LoginRegister/LoginRegisterNav';
import SwitchThemeButton from '@/components/Button/SwitchThemeButton';
import useMediaQuery from '@/hooks/useMediaQuery';
import {
  SMALL_MOBILE_QUERY,
  MOBILE_QUERY,
  TABLET_QUERY,
  DESKTOP_QUERY,
  LOGIN_PATH
} from '@/assets/Constant';
import LoginForm from '@/components/Form/LoginForm';
import LoginText from './LoginText';
import LoginImage from './LoginImage';
import { Link } from 'react-router-dom';

function LoginContent({ ...props }) {
  const responsiveCondition = {
    smallMobile: useMediaQuery(SMALL_MOBILE_QUERY),
    mobile: useMediaQuery(MOBILE_QUERY),
    tablet: useMediaQuery(TABLET_QUERY),
    desktop: useMediaQuery(DESKTOP_QUERY)
  };

  return (
    <LoginContentStyled {...props}>
      <LoginRegisterNav gridArea="nav" currentTab={LOGIN_PATH} />
      <LoginImage gridArea="image" />
      <SwitchThemeButton gridArea="theme" />
      <LoginText gridArea="text" responsiveCondition={responsiveCondition} />
      <LoginForm gridArea="form" />
      <a href={"https://cardinalis-be.live/oauth2/authorization/google"}>Login with Google</a>
      <a href={"https://cardinalis-be.live/oauth2/authorization/facebook"}>Login with Facebook</a>

    </LoginContentStyled>
  );
}

export default LoginContent;
