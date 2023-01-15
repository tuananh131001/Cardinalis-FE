import Loading from '@/components/LoadingNothing/Loading';
import { useSignInOauth2 } from '@/hooks/useUser';
import { HOME_PATH } from '@/assets/Constant';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '@/features/userSlice';

function TokenRecevied() {
  const { type, token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate } = useSignInOauth2();
  useEffect(() => {
    mutate(
      { type, token },
      {
        onSuccess: () => {
          const userToken = localStorage.getItem('userToken');
          const username = localStorage.getItem('username');
          const authData = {
            user: {
              username: username
            },
            userToken: userToken
          };
          dispatch(login(authData));
          navigate(HOME_PATH, { replace: true });
        }
      }
    );
  }, []);

  console.log('Params token:', token);

  return (
    <div>
      <h1>Token Received</h1>
      <p>{token}</p>
      <Loading type="gif" />
    </div>
  );
}

export default TokenRecevied;
