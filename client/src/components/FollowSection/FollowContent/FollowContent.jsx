import React from 'react';
import { FollowContentStyled } from './FollowContent.styled';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import FollowList from './FollowList';
import PropTypes from 'prop-types';
import SubNav from '@/components/NavSection/SubNav';
import { useGetUserFollowers, useGetUserFollowing } from '@/hooks/useUser';
import Loading from '@/components/LoadingNothing/Loading';
import Nothing from '@/components/LoadingNothing/Nothing';

function FollowContent({ type, user }) {
  const {
    data: followers,
    isLoading: isLoadingFollowers,
    isError: isErrorFollower
  } = useGetUserFollowers(user?.data?.id);
  const {
    data: following,
    isLoading: isLoadingFollowing,
    isError: isErrorFollowing
  } = useGetUserFollowing(user?.data?.id);
  if (isLoadingFollowers || isLoadingFollowing) return <Loading type="gif" />;
  if (isErrorFollower || isErrorFollowing) return <Nothing />;
  const followList = type == 'followers' ? followers?.data : following?.data;

  return (
    <FollowContentStyled>
      <HeaderSection
        content="Follow"
        subContent={`@${user?.data.username}`}
        backDestination={`/${user?.data.username}`}
        leftType="back"
      />
      <SubNav user={user?.data} navType="followNav" />
      <FollowList followList={followList} />
    </FollowContentStyled>
  );
}
FollowContent.propTypes = {
  type: PropTypes.string.isRequired,
  user: PropTypes.object
};
export default FollowContent;
