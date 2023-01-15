import React from 'react';
import { ExploreContentStyled } from './ExploreContent.styled';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import TweetList from '@/components/TweetSection/TweetList';
import PropTypes from 'prop-types';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getExploreTweets } from '@/api/Tweet.js';

function ExploreContent() {
  const { fetchNextPage, hasNextPage, isFetchingNextPage, isFetching, error, data, status } =
    useInfiniteQuery({
      queryKey: ['explore/tweets'],
      queryFn: getExploreTweets,
      getNextPageParam: (lastPage) => {
        if (lastPage.data.hasNext) {
          return lastPage.data.currentPage + 1;
        }
      }
    });
  if (status === 'loading') {
    <p>Loading...</p>;
  }
  if (status === 'error') {
    <p>{error.message}</p>;
  }
  console.log(data?.pages);
  return (
    <ExploreContentStyled>
      <HeaderSection content="Explore" leftType="none" />
      {data?.pages.map((group, i) => (
        <React.Fragment key={i}>
          <TweetList tweetList={group.data?.data} />
        </React.Fragment>
      ))}
      <div>
        <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </ExploreContentStyled>
  );
}
ExploreContent.propTypes = {
  currentTab: PropTypes.string
};
export default ExploreContent;
