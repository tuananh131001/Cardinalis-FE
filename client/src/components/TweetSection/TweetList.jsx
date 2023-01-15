import React from 'react';
import PropTypes from 'prop-types';
import { FlexContainer } from '@/components/Container/Container.styled';
import TweetCard from './TweetContent/TweetCard';
import { useNavigate } from 'react-router-dom';

function TweetList({ tweetList }) {
  // Handle Event
  const navigate = useNavigate();
  const onClick = (event, tweet) => {
    navigate(`/${tweet.username}/status/${tweet.id}`);
  };
  return (
    <FlexContainer fd="column" padding="1em 0 2em" gap="2em">
      {tweetList?.map((tweet) => (
        <TweetCard key={tweet.id} tweet={tweet} onClick={(event) => onClick(event, tweet)} />
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
