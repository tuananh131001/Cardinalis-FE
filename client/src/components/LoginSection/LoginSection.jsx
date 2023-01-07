import React from 'react';
// import { LoginSectionStyled } from './LoginSection.styled';
import LoginContent from './LoginContent/LoginContent';
import { PageAnimation } from '@/styles/AnimationConstant';
// import { useMemo } from 'react';

function LoginSection() {
  return (
    // <LoginSectionStyled
    // variants={PageAnimation} initial="initial" animate="animate" exit="exit"
    // >
    // </LoginSectionStyled>
    <LoginContent variants={PageAnimation} initial="initial" animate="animate" exit="exit" />
  );
}

export default LoginSection;
