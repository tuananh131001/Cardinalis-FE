import React from 'react';
import RightCardInfoWrapper from './RightCardInfo.styled';
import PropTypes from 'prop-types';
import UserCardSection from '@/components/UserCard/UserCardSection';
import Text from '@/components/Text/Text';
import Button from '@/components/Button/Button';

function RightCardInfo({ text, data }) {
  return (
    <RightCardInfoWrapper>
      <Text type="p" textThemeName="subText" text={text} weight="700" />
      {data?.map((user) => (
        <UserCardSection key={data.id} user={user} sz="medium" />
      ))}
      <Button buttonType="link" fontSize={`var(--font-size-sm)`}>
        Show More
      </Button>
    </RightCardInfoWrapper>
  );
}

RightCardInfo.propTypes = {
  text: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
};

export default RightCardInfo;
