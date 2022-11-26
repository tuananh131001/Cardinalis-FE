import { login } from 'features/userSlice';
import React from 'react';
import { useDispatch } from 'react-redux';

function Login() {
  const user = { name: 'John', email: 'jonh@gmail' };
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(login(user));
  };
  return <button onClick={handleOnClick}>Login</button>;
}

export default Login;
