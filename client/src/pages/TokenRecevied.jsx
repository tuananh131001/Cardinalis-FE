import React from 'react';
import { useParams } from 'react-router-dom';

function TokenRecevied() {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Token Received</h1>
      <p>{params.token}</p>
    </div>
  );
}

export default TokenRecevied;
