import PropTypes from 'prop-types';
import React from 'react';
import Button from '@/components/Button/Button';
import { useGetUserInfo } from '@/hooks/useUser';
import { useSelector } from 'react-redux';

function Home({ themeToggler }) {
  const { user } = useSelector((state) => state.user);
  const { data: UserInfo, isError, isLoading, error } = useGetUserInfo(user.username);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  console.log(UserInfo?.data);
  return (
    <div>
      <Button onClick={themeToggler} buttonThemeName="secondaryButton">
        Click
      </Button>
      <h1>HOME NE </h1>
    </div>
  );
}

Home.propTypes = {
  themeToggler: PropTypes.func
};

export default Home;
