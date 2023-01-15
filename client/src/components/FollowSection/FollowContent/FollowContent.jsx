import React from 'react';
import { FollowContentStyled } from './FollowContent.styled';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import FollowList from './FollowList';
import PropTypes from 'prop-types';
import SubNav from '@/components/NavSection/SubNav';
import { useParams } from 'react-router-dom';
import { useGetUserFollowers, useGetUserFollowing } from '@/hooks/useUser';

function FollowContent({ type, user }) {
  const params = useParams();
  console.log(params);
  console.log(user);
  const {
    data: followers,
    isLoading: isLoadingFollowers,
    isError: isErrorFollower
  } = useGetUserFollowers(user.id);
  const {
    data: following,
    isLoading: isLoadingFollowing,
    isError: isErrorFollowing
  } = useGetUserFollowing(user.id);
  if (isLoadingFollowers || isLoadingFollowing) return <div>Loading...</div>;
  if (isErrorFollower || isErrorFollowing) return <div>Error</div>;
  const followList = type == 'followers' ? followers?.data : following?.data;

  return (
    <FollowContentStyled>
      <HeaderSection
        content="Follow"
        subContent={`@${user.username}`}
        backDestination={`/${user.username}`}
        leftType="back"
      />
      <SubNav user={user} navType="followNav" />
      <FollowList followList={followList} />
    </FollowContentStyled>
  );
}
FollowContent.propTypes = {
  type: PropTypes.string.isRequired,
  user: PropTypes.object
};
export default FollowContent;
