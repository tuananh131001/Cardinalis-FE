import React from 'react';
import { ChangePasswordContentStyled } from './ChangePasswordContent.styled';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import PropTypes from 'prop-types';
import ChangePasswordForm from './ChangePasswordForm';

function ChangePasswordContent() {
  return (
    <ChangePasswordContentStyled>
      <HeaderSection content="Change Password" leftType="back" />
      <ChangePasswordForm />
    </ChangePasswordContentStyled>
  );
}
ChangePasswordContent.propTypes = {
  user: PropTypes.object
};
export default ChangePasswordContent;
