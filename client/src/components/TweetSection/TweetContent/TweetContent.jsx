import React from 'react';
import PropTypes from 'prop-types';
import HeaderSection from '@/components/Sections/GeneralSection/HeaderSection';
import { defaultTweet } from '@/assets/data/Data';
import TweetCard from './TweetCard';
import { TweetContentStyled } from './TweetContent.style';

const TweetContent = ({ ...props }) => {
  const tweet = defaultTweet;
  return (
    <TweetContentStyled {...props}>
      <HeaderSection content="Tweet" />
      <TweetCard tweet={tweet} isDisableHover={true} />
    </TweetContentStyled>
  );
};

TweetContent.propTypes = {
  tweet: PropTypes.object,
  isPinned: PropTypes.bool,
  props: PropTypes.arrayOf(PropTypes.string)
};

export default TweetContent;
