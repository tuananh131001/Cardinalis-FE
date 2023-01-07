import React, { useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FlexContainer } from '@/components/Container/Container.styled';
import { defaultTweetList } from '@/assets/data/Data';
import TweetSection from './TweetSection';
import { getPinnedTweet } from '@/helpers/HandleDisplayInfo';
import { useInView } from 'react-intersection-observer';
import { useGetAllTweetsByPage } from '@/hooks/useTweet';

function TweetList({ tweetList = defaultTweetList }) {
  const { ref, inView } = useInView();
  const {
    status,
    data,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage
  } = useGetAllTweetsByPage();
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (status == 'loading') {
    return <div>Loading</div>;
  }

  if (status == 'success') {
    console.log(data?.pages[0].data);
  }

  // const pinnedTweet = useMemo(() => getPinnedTweet(defaultTweetList), []);
  return (
    <FlexContainer gap="2em" fd="column" padding="2em 0">
      {/* {pinnedTweet && <TweetSection tweet={pinnedTweet} isPinned={true} />} */}
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
