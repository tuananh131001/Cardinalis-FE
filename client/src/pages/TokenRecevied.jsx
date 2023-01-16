import Loading from '@/components/LoadingNothing/Loading';
import { useSignInOauth2 } from '@/hooks/useUser';
import { HOME_PATH } from '@/assets/Constant';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '@/features/userSlice';

function TokenRecevied() {
  const params = useParams();
  console.log(params);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  return (
    <div>
      <h1>siu</h1>
    </div>
  );
}

export default TokenRecevied;
