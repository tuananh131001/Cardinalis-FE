import Form from '@/components/Form/Form';
import { AuthenText } from '@/components/Sections/AuthenticationSection';
import { AuthenNav } from '@/components/Sections/AuthenticationSection';
import React from 'react';
import { StyledPage } from './Page.styled';

function Register() {
  return (
    <StyledPage>
      <AuthenNav gridArea="nav" />
      <Form type="register" gridArea="form" />
      {/* <img src="./icon.png" alt="Icon Display" /> */}
      <AuthenText gridArea="text" />
    </StyledPage>
  );
}

export default Register;
