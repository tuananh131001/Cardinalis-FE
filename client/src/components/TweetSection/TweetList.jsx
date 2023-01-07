import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FlexContainer } from '@/components/Container/Container.styled';
import { defaultTweetList } from '@/assets/data/Data';
import TweetCard from './TweetContent/TweetCard';
import { getPinnedTweet } from '@/helpers/HandleDisplayInfo';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';

function TweetList({ tweetList = defaultTweetList }) {
  const pinnedTweet = useMemo(() => getPinnedTweet(defaultTweetList), []);
  // Handle Event
  const navigate = useNavigate();
  const onClick = (event, tweet) => {
    console.log('Tweet', tweet);
    navigate(`/${tweet.username}/status/${tweet.id}`);
  };
  return (
    <FlexContainer fd="column" padding="2em 0" gap="3em">
      {pinnedTweet && (
        <TweetCard
          tweet={pinnedTweet}
          isPinned={true}
          onClick={(event) => onClick(event, pinnedTweet)}
        />
      )}
      {tweetList.map((tweet) => (
        <TweetCard key={uuid()} tweet={tweet} onClick={(event) => onClick(event, tweet)} />
        // <FlexContainer fd="column" key={uuid()}>
        //   <TweetCard key={uuid()} tweet={tweet} />
        // </FlexContainer>
      ))}
    </FlexContainer>
  );
}

TweetList.propTypes = {
  tweetList: PropTypes.arrayOf(PropTypes.object)
};

export default TweetList;
