import React from 'react';
import { useGetUserInfo } from '@/hooks/useUser';
import { useSelector, useDispatch } from 'react-redux';
import HomeSection from '@/components/HomeSection /HomeSection';
import { getUserInfo } from '@/features/userSlice';
import Loading from '@/components/LoadingNothing/Loading';

function Home() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(user);
  const { data: UserInfo, isLoading, status } = useGetUserInfo(user.username);
  if (status === 'success') {
    dispatch(getUserInfo(UserInfo.data));
  }
  if (isLoading) return <Loading type="gif" />;

  return <HomeSection></HomeSection>;
}

export default Home;
