import React, { Fragment } from 'react';
import Proptypes from 'prop-types';
import { getMediaTweeters, haveMediaTweeters } from '@/helpers/HandleDisplayInfo';
import SubNav from '../../NavSection/SubNav';
import TweetList from '@/components/TweetSection/TweetList';
import { getUserTweets } from '@/api/Tweet.js';
import { useInfiniteQuery } from '@tanstack/react-query';
import Loading from '@/components/LoadingNothing/Loading';
import ErrorDisplay from '@/components/LoadingNothing/ErrorDisplay';
import Footer from '@/components/Footer/Footer';
import Button from '@/components/Button/Button';
import Nothing from '@/components/LoadingNothing/Nothing';

const getNavType = (type) => {
  switch (type) {
    case 'tweets':
    case 'tweetsAndReplies':
    case 'media':
      return 'tweetNav';
  }
};
const ProfileSubpage = ({ type, user }) => {
  const { fetchNextPage, hasNextPage, isFetchingNextPage, isFetching, data, status } =
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
    <Loading />;
  }
  if (status === 'error') {
    <ErrorDisplay />;
  }
  console.log(`Profile @${user?.username} Sub Page: `, data);
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
  // data.pages
  const renderContent = () => {
    switch (type) {
      // Tweets
      case 'tweets':
        return data?.pages[0].data.data.length === 0 ? (
          <Nothing hasImage={false} />
        ) : (
          <div>
            {data?.pages.map((group, i) => (
              <Fragment key={i}>
                <TweetList tweetList={group.data?.data} />
              </Fragment>
            ))}
            {renderLoading()}
          </div>
        );
      // Tweet and replies
      case 'tweetsAndReplies':
        return data?.pages[0].data.data.length === 0 ? (
          <Nothing hasImage={false} />
        ) : (
          <div>
            <TweetList tweetList={data?.pages[0]?.data?.data} />
            {renderLoading()}
          </div>
        );
      ///////////////////////////////////////////////////// Chú ý kỹ logic media
      // Media
      case 'media':
        return !haveMediaTweeters(data?.pages[0]?.data?.data) ? (
          <Nothing hasImage={false} />
        ) : (
          <div>
            <TweetList tweetList={getMediaTweeters(data?.pages[0]?.data?.data)} />
            {renderLoading()}
          </div>
        );
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
