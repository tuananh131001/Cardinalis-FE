import React from 'react';
import Proptypes from 'prop-types';
import { getMediaTweeters } from '@/helpers/HandleDisplayInfo';
import SubNav from '../../NavSection/SubNav';
import TweetList from '@/components/TweetSection/TweetList';
import { getUserTweets } from '@/api/Tweet.js';
import { useInfiniteQuery } from '@tanstack/react-query';

const getNavType = (type) => {
  switch (type) {
    case 'tweets':
    case 'tweetsAndReplies':
    case 'media':
      return 'tweetNav';
  }
};
const ProfileSubpage = ({ type, user }) => {
  const { fetchNextPage, hasNextPage, isFetchingNextPage, isFetching, error, data, status } =
    useInfiniteQuery({
      queryKey: ['tweet/user', user?.email],
      queryFn: getUserTweets,
      getNextPageParam: (lastPage) => {
        if (lastPage.data.hasNext) {
          return lastPage.data.currentPage + 1;
        }
      },
      enabled: Boolean(user?.email)
    });
  if (status === 'loading') {
    <p>Loading...</p>;
  }
  if (status === 'error') {
    <p>{error.message}</p>;
  }
  const renderContent = () => {
    switch (type) {
      case 'tweets':
        return (
          <div>
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
          </div>
        );
      case 'tweetsAndReplies':
        return <TweetList tweetList={data?.pages[0]?.data?.data} />;
      case 'media':
        return <TweetList tweetList={getMediaTweeters(data?.pages[0]?.data?.data)} />;
    }
  };
  return (
    <>
      <SubNav user={user} navType={getNavType(type)} />
      {renderContent()}
    </>
  );
};

ProfileSubpage.propTypes = {
  type: Proptypes.string,
  user: Proptypes.object
};

export default ProfileSubpage;
