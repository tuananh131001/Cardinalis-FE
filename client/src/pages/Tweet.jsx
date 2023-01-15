import React from 'react';
// import PropTypes from 'prop-types';
import TweetSection from '@/components/TweetSection/TweetSection';
import { useGetTweet } from '@/hooks/useTweet';
import { useParams } from 'react-router-dom';

const Tweet = () => {
  const params = useParams();

  const { data, isLoading, isError } = useGetTweet(params?.tweetId);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return <TweetSection tweet={data?.data}></TweetSection>;
};

Tweet.propTypes = {};

export default Tweet;
