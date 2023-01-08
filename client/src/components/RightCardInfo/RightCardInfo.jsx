import React, { Fragment } from 'react';
import RightCardInfoWrapper from './RightCardInfo.styled';
import PropTypes from 'prop-types';
import UserCardSection from '@/components/UserCard/UserCardSection';

function RightCardInfo({ text, data }) {
  console.log(data);
  return (
    <RightCardInfoWrapper>
      <h2>{text}</h2>
      {data?.map((user) => (
        <Fragment key={user.id}>
          <UserCardSection key={user.id} user={user} sz="medium" />
        </Fragment>
      ))}
      <button>Show more</button>
    </RightCardInfoWrapper>
  );
}

RightCardInfo.propTypes = {
  text: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default RightCardInfo;
