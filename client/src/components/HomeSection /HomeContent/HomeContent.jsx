import React from 'react';
import { HomeContentStyled } from './HomeContent.styled';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import TweetList from '@/components/TweetSection/TweetList';
import { useQuery } from '@tanstack/react-query';
import { getTweetsTimeLine } from '@/api/Tweet.js';
import Loading from '@/components/LoadingNothing/Loading';
import Nothing from '@/components/LoadingNothing/Nothing';
import PropTypes from 'prop-types';
import TweetComposeCard from '@/components/TweetComposeSection/TweetComposeContent/TweetComposeCard';

function HomeContent({ user }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['timeline/tweets'],
    queryFn: getTweetsTimeLine
  });
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Nothing />;
  }
  console.log(data);

  return (
    <HomeContentStyled>
      <HeaderSection content="Home" leftType="none" />
      <TweetComposeCard user={user} />
      <TweetList tweetList={data} />
    </HomeContentStyled>
  );
}
HomeContent.propTypes = {
  currentTab: PropTypes.string,
  user: PropTypes.object
};
export default HomeContent;
