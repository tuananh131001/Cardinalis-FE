import React, { useMemo } from 'react';
import { RegisterContentStyled } from './RegisterContent.styled';
import AuthenImage from '@/components/Sections/AuthenSection/AuthenImage';
import AuthenNav from '@/components/Sections/NavSection/AuthenNav';
import AuthenSwitchTheme from '@/components/Sections/NavSection/AuthenSwitchTheme';
import useMediaQuery from '@/hooks/useMediaQuery';
import {
  SMALL_MOBILE_QUERY,
  MOBILE_QUERY,
  TABLET_QUERY,
  DESKTOP_QUERY,
  REGISTER_PATH
} from '@/assets/Constant';
import { findDisplayText } from '@/helpers/AuthenticationDisplay';
import RegisterForm from '@/components/Form/RegisterForm';
import AuthenText from '@/components/Sections/AuthenSection/AuthenText';

function RegisterContent({ ...props }) {
  const responsiveCondition = {
    smallMobile: useMediaQuery(SMALL_MOBILE_QUERY),
    mobile: useMediaQuery(MOBILE_QUERY),
    tablet: useMediaQuery(TABLET_QUERY),
    desktop: useMediaQuery(DESKTOP_QUERY)
  };
  const { displayedText } = useMemo(() => {
    const displayedText = findDisplayText(REGISTER_PATH);
    return displayedText;
  }, [responsiveCondition]);

  return (
    <RegisterContentStyled {...props}>
      <AuthenNav gridArea="nav" currentTab={REGISTER_PATH} responsiveCondition={responsiveCondition} />
      <AuthenImage gridArea="image" responsiveCondition={responsiveCondition} />
      <AuthenSwitchTheme gridArea="theme" />
      <AuthenText gridArea="text" {...displayedText} responsiveCondition={responsiveCondition} />
      <RegisterForm gridArea="form" />
    </RegisterContentStyled>
  );
}

export default RegisterContent;
