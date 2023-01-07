import React from 'react';
import PropTypes from 'prop-types';
import { FlexContainer } from '@/components/Container/Container.styled';
import Avatar from '@/components/Image/Avatar';
import ShortInfoProfile from '@/components/ProfileSection/ProfileContent/ShortInfoProfile';

const ProfileInfoSummary = ({ user, avatarSize = '5em', subSection }) => {
  return (
    <FlexContainer>
      <Avatar size={avatarSize} src={user.avatar} />
      <ShortInfoProfile name={user.name} username={user.username} />
      {subSection}
    </FlexContainer>
  );
};

ProfileInfoSummary.propTypes = {
  user: PropTypes.object,
  avatarSize: PropTypes.string,
  subSection: PropTypes.node
};

export default ProfileInfoSummary;
