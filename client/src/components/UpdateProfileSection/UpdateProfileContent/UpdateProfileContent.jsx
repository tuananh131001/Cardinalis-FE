import React from 'react';
import { UpdateProfileContentStyled } from './UpdateProfileContent.styled';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import PropTypes from 'prop-types';
import UpdateProfileForm from '@/components/Form/UpdateProfileForm';

function UpdateProfileContent({ user }) {
  return (
    <UpdateProfileContentStyled>
      <HeaderSection backDestination="/home" content="Update Profile" user={user} leftType="back" />
      <UpdateProfileForm user={user} height="auto" />
    </UpdateProfileContentStyled>
  );
}
UpdateProfileContent.propTypes = {
  user: PropTypes.object
};
export default UpdateProfileContent;
