import React from 'react';
import { RegisterSectionStyled } from './RegisterSection.styled';
import RegisterContent from './RegisterContent/RegisterContent';
import { PageAnimation } from '@/styles/AnimationConstant';
// import { useMemo } from 'react';

function RegisterSection() {
  return (
    // <RegisterSectionStyled >
    // </RegisterSectionStyled>
      <RegisterContent variants={PageAnimation} initial="initial" animate="animate" exit="exit"/>
  );
}

export default RegisterSection;
