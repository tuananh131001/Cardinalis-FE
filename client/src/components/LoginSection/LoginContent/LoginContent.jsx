import React, { useMemo } from 'react';
import { LoginContentStyled } from './LoginContent.styled';
import AuthenImage from '@/components/Sections/AuthenSection/AuthenImage';
import AuthenNav from '@/components/Sections/NavSection/AuthenNav';
import AuthenSwitchTheme from '@/components/Sections/NavSection/AuthenSwitchTheme';
import useMediaQuery from '@/hooks/useMediaQuery';
import {
  SMALL_MOBILE_QUERY,
  MOBILE_QUERY,
  TABLET_QUERY,
  DESKTOP_QUERY,
  LOGIN_PATH
} from '@/assets/Constant';
import { findDisplayText } from '@/helpers/AuthenticationDisplay';
import LoginForm from '@/components/Form/LoginForm';
import AuthenText from '@/components/Sections/AuthenSection/AuthenText';

function LoginContent({ ...props }) {
  const responsiveCondition = {
    smallMobile: useMediaQuery(SMALL_MOBILE_QUERY),
    mobile: useMediaQuery(MOBILE_QUERY),
    tablet: useMediaQuery(TABLET_QUERY),
    desktop: useMediaQuery(DESKTOP_QUERY)
  };
  const { displayedText } = useMemo(() => {
    const displayedText = findDisplayText(LOGIN_PATH);
    return displayedText;
  }, [responsiveCondition]);

  return (
    <LoginContentStyled {...props}>
      <AuthenNav gridArea="nav" currentTab={LOGIN_PATH} responsiveCondition={responsiveCondition} />
      <AuthenImage gridArea="image" responsiveCondition={responsiveCondition} />
      <AuthenSwitchTheme gridArea="theme" />
      <AuthenText gridArea="text" {...displayedText} responsiveCondition={responsiveCondition} />
      <LoginForm gridArea="form" />
    </LoginContentStyled>
  );
}

export default LoginContent;
