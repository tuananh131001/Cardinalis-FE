import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { FlexContainer } from '@/components/Container/Container.styled';
import { defaultTweetList } from '@/assets/data/Data';
import TweetSection from './TweetSection';
import { getPinnedTweet } from '@/helpers/HandleDisplayInfo';
import uuid from 'react-uuid';

function TweetList({ tweetList = defaultTweetList }) {
  const pinnedTweet = useMemo(() => getPinnedTweet(defaultTweetList), []);
  return (
    <FlexContainer fd="column" padding="2em 0" gap="3em">
      {pinnedTweet && <TweetSection tweet={pinnedTweet} isPinned={true} />}
      {tweetList.map((tweet) => (
        <TweetSection key={uuid()} tweet={tweet} />
        // <FlexContainer fd="column" key={uuid()}>
        //   <TweetSection key={uuid()} tweet={tweet} />
        // </FlexContainer>
      ))}
    </FlexContainer>
  );
}

TweetList.propTypes = {
  tweetList: PropTypes.arrayOf(PropTypes.object)
};

export default TweetList;
