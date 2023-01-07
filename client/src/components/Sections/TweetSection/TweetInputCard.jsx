import React from 'react';
import PropTypes from 'prop-types';
import { FlexContainer } from '@/components/Container/Container.styled';
import Avatar from '@/components/Image/Avatar';
import TweetInput from './TweetInput';
import { useSelector } from 'react-redux';

const TweetInputCard = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <FlexContainer padding={`0.7em var(--horizontal-spaces)`}>
      <Avatar alignSelf="flex-start" src={user?.avatar} size="3em" />
      <TweetInput />
    </FlexContainer>
  );
};

TweetInputCard.propTypes = {
  user: PropTypes.object
};

export default TweetInputCard;
