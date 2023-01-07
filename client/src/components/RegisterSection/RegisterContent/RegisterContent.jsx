import React from 'react';
import { RegisterContentStyled } from './RegisterContent.styled';
import LoginRegisterNav from '@/components/NavSection/LoginRegister/LoginRegisterNav';
import SwitchThemeButton from '@/components/Button/SwitchThemeButton';
import useMediaQuery from '@/hooks/useMediaQuery';
import {
  SMALL_MOBILE_QUERY,
  MOBILE_QUERY,
  TABLET_QUERY,
  DESKTOP_QUERY,
  REGISTER_PATH
} from '@/assets/Constant';
import RegisterForm from '@/components/Form/RegisterForm';
import RegisterText from './RegisterText';
import RegisterImage from './RegisterImage';

function RegisterContent({ ...props }) {
  const responsiveCondition = {
    smallMobile: useMediaQuery(SMALL_MOBILE_QUERY),
    mobile: useMediaQuery(MOBILE_QUERY),
    tablet: useMediaQuery(TABLET_QUERY),
    desktop: useMediaQuery(DESKTOP_QUERY)
  };

  return (
    <RegisterContentStyled {...props}>
      <LoginRegisterNav gridArea="nav" currentTab={REGISTER_PATH} />
      <RegisterImage gridArea="image" />
      <SwitchThemeButton gridArea="theme" />
      <RegisterText gridArea="text" responsiveCondition={responsiveCondition} />
      <RegisterForm gridArea="form" />
    </RegisterContentStyled>
  );
}

export default RegisterContent;
