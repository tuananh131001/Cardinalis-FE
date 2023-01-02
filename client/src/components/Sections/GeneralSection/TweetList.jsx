import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FlexContainer } from '@/components/Container/Container.styled';
import { defaultTweetList } from '@/assets/data/Data';
import TweetSection from '../TweetSection/TweetSection';
import { getPinnedTweet } from '@/helpers/HandleDisplayInfo';

function TweetList({ tweetList = defaultTweetList }) {
  const pinnedTweet = useMemo(() => getPinnedTweet(defaultTweetList), []);
  return (
    <FlexContainer fd="column" padding="2em 0">
      {pinnedTweet && <TweetSection tweet={pinnedTweet} isPinned={true} />}
      {tweetList.map((tweet) => (
        <TweetSection key={tweet.id} tweet={tweet} />
      ))}
    </FlexContainer>
  );
}

TweetList.propTypes = {
  tweetList: PropTypes.arrayOf(PropTypes.object)
};

export default TweetList;
