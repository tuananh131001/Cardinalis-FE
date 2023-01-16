import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '@/features/userSlice';
import { useGetUserByEmailInfo } from '@/hooks/useUser';

import jwt from 'jwt-decode';

function TokenRecevied() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useParams();
  const user = jwt(token);
  const { isLoading, data, isError, error } = useGetUserByEmailInfo(user.sub);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  const username = data?.data?.username;
  localStorage.setItem('userToken', token);
  localStorage.setItem('username', username);
  const authData = {
    user: {
      username: username
    },
    userToken: token
  };
  dispatch(login(authData));

  if (username) {
    navigate('/home', { replace: true });
  }
  // navigate(HOME_PATH, { replace: true });

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  return (
    <div>
      <p>Loading</p>
    </div>
  );
}

export default TokenRecevied;
