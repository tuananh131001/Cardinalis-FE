import React from 'react';
import PropTypes from 'prop-types';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import TweetComposeCard from './TweetComposeCard';
import { TweetComposeContentStyled } from './TweetContent.style';

const TweetComposeContent = ({ ...props }) => {
  return (
    <TweetComposeContentStyled {...props}>
      <HeaderSection content="Tweet Compose" leftType="back" />
      <TweetComposeCard isDisableHover={true} />
    </TweetComposeContentStyled>
  );
};

TweetComposeContent.propTypes = {
  tweetCompose: PropTypes.object,
  props: PropTypes.arrayOf(PropTypes.string)
};

export default TweetComposeContent;
