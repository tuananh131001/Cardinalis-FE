import React, { Fragment } from 'react';
import { ExploreContentStyled } from './ExploreContent.styled';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import TweetList from '@/components/TweetSection/TweetList';
import PropTypes from 'prop-types';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getExploreTweets } from '@/api/Tweet.js';
import Loading from '@/components/LoadingNothing/Loading';
import ErrorDisplay from '@/components/LoadingNothing/ErrorDisplay';
import Footer from '@/components/Footer/Footer';
import Button from '@/components/Button/Button';

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
    <Loading />;
  }
  if (status === 'error') {
    <ErrorDisplay />;
  }
  const renderLoading = () => {
    return (
      <Fragment>
        {!isFetching && hasNextPage && (
          <Button
            width="fit-content"
            buttonType="link"
            jc="flex-end"
            padding="1em var(--horizontal-spaces)"
            onClick={() => fetchNextPage()}>
            Load More
          </Button>
        )}
        <div>{isFetching || isFetchingNextPage ? <Loading /> : null}</div>
        {!hasNextPage && <Footer />}
      </Fragment>
    );
  };
  console.log(data?.pages);
  return (
    <ExploreContentStyled>
      <HeaderSection content="Explore" leftType="none" />
      {data?.pages.map((group, i) => (
        <Fragment key={i}>
          <TweetList tweetList={group.data?.data} />
        </Fragment>
      ))}
      {renderLoading()}
    </ExploreContentStyled>
  );
}
ExploreContent.propTypes = {
  currentTab: PropTypes.string
};
export default ExploreContent;
