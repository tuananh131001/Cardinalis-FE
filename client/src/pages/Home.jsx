import PropTypes from 'prop-types';
import React from 'react';
import { useGetUserInfo } from '@/hooks/useUser';
import { useSelector } from 'react-redux';
import HomeSection from '@/components/HomeSection /HomeSection';

function Home() {
  // const { user } = useSelector((state) => state.user);
  // const { data: UserInfo, isError, isLoading, error } = useGetUserInfo(user.username);
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error: {error.message}</div>;
  // console.log(UserInfo?.data);

  // testing only

  return <HomeSection></HomeSection>;
}

export default Home;
