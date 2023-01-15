import React from 'react';
import RightSectionStyled from './RightSection.styled';
import RightCardInfo from '@/components/RightCardInfo/RightCardInfo';
import SearchSection from '@/components/SearchSection/SearchSection';
import { useGetUserFollowers, useGetUserFollowing } from '@/hooks/useUser';
import { useSelector } from 'react-redux';

function RightSection() {
  const { user } = useSelector((state) => state.user);
  const {
    data: FollowersData,
    isLoading: isLoadingFollower,
    isError: isErrorFollower,
    error: errorFollower
  } = useGetUserFollowers(user.id);
  const {
    data: FollowingData,
    isLoading: isLoadingFollowing,
    isError: isErrorFollowing,
    error: errorFollowing
  } = useGetUserFollowing(user.id);
  if (isLoadingFollower) {
    return <div>Loading ...</div>;
  }
  if (isLoadingFollowing) {
    return <div>Loading ...</div>;
  }
  if (isErrorFollower) {
    return <div>{errorFollower}</div>;
  }
  if (isErrorFollowing) {
    return <div>{errorFollowing}</div>;
  }
  return (
    <RightSectionStyled>
      <SearchSection />
      {FollowersData?.data ? <RightCardInfo data={FollowersData?.data} text="Followers:" /> : null}
      {FollowingData?.data ? <RightCardInfo data={FollowingData?.data} text="Following:" /> : null}
    </RightSectionStyled>
  );
}

export default RightSection;
