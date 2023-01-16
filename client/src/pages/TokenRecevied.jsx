import Loading from '@/components/LoadingNothing/Loading';
import { useSignInOauth2 } from '@/hooks/useUser';
import { HOME_PATH } from '@/assets/Constant';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '@/features/userSlice';

function TokenRecevied() {
  const { token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { mutate } = useSignInOauth2();
  console.log('Oauth2 page', token);
  // useEffect(() => {
  //   mutate(
  //     { token },
  //     {
  //       onSuccess: () => {
  //         const userToken = localStorage.getItem('userToken');
  //         const username = localStorage.getItem('username');
  //         const authData = {
  //           user: {
  //             username: username
  //           },
  //           userToken: userToken
  //         };
  //         dispatch(login(authData));
  //         console.log("Oauth2 page: ", userToken, username);
  //         // navigate(`/${HOME_PATH}`, { replace: true });
  //       }
  //     }
  //   );
  // }, []);
  useEffect(() => {
    console.log("Oauth2 fdsfsd");
  })
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  console.log("Oatuh2", urlParams);

  return (
    <div>
      <h1>Token Received</h1>
      <p>{token}</p>
    </div>
  );
}

export default TokenRecevied;
