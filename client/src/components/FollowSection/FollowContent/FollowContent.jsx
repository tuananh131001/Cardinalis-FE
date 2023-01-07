import React from 'react';
import { FollowContentStyled } from './FollowContent.styled';
import HeaderSection from '@/components/Sections/GeneralSection/HeaderSection';
import { youUser } from '@/assets/data/UserData';
import FollowList from '@/components/Sections/FollowSection/FollowList';
import { defaultFollowerList, defaultFollowingList } from '@/assets/data/UserData';
import PropTypes from 'prop-types';
import ProfileNav from '@/components/ProfileSection/ProfileContent/ProfileNav';

function FollowContent({ type }) {
  const user = youUser;
  const followList = type == 'followers' ? defaultFollowerList : defaultFollowingList;

  return (
    <FollowContentStyled>
      <HeaderSection
        content="Follow"
        subContent={`@${user.username}`}
        backDestination={`/${user.username}`}
      />
      <ProfileNav user={user} navType="followNav" />
      <FollowList followList={followList} />
    </FollowContentStyled>
  );
}
FollowContent.propTypes = {
  type: PropTypes.string.isRequired
};
export default FollowContent;
