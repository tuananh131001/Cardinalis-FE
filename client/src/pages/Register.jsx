import Form from '@/components/Form/Form';
import { AuthenText } from '@/components/Sections/AuthenticationSection';
import { AuthenNav } from '@/components/Sections/AuthenticationSection';
import Image from '@/components/Image/Image';
import React from 'react';
import { StyledPage } from './Page.styled';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MOBILE_QUERY } from '@/styles/Constant';

function Register() {
  const isMobile = useMediaQuery(MOBILE_QUERY);
  return (
    <StyledPage
      gridTemplateAreas={
        isMobile
          ? `
    "text"
    "image"
    "nav"
    "form"
    `
          : `
    "nav . ."
    "form image text"
    `
      }>
      <AuthenNav gridArea="nav" />
      <Form type="register" gridArea="form" />
      <Image src="./icon.png" width="100%" alt="Icon Display" gridArea="image" />
      <AuthenText gridArea="text" />
    </StyledPage>
  );
}

export default Register;
