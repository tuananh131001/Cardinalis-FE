import React from 'react';
import PropTypes from 'prop-types';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import TweetCard from './TweetCard';
import { useNavigate } from 'react-router-dom';
import StyledButton from '@/components/Button/Button.styled';
import { TweetContentStyled } from './TweetContent.style';
import TweetComposeCard from '@/components/TweetComposeSection/TweetComposeContent/TweetComposeCard';
import { useSelector } from 'react-redux';
import { useDeleteTweet } from '@/hooks/useTweet';

const TweetContent = ({ params, tweet, ...props }) => {
  const { user } = useSelector((state) => state.user);
  const { mutate } = useDeleteTweet();

  const navigate = useNavigate();
  console.log(params);
  return (
    <TweetContentStyled {...props}>
      <HeaderSection content="Tweet" leftType="back" />
      <TweetCard tweet={tweet} isDisableHover={true} />
      <TweetComposeCard />
      {user?.username == params.username ? (
        <StyledButton
          alignSelf="flex-end"
          width="fit-content"
          onClick={() => {
            mutate(params.tweetId, {
              onSuccess: () => {
                console.log('delete success');
                navigate(-1);
              }
            });
          }}
          borderRadius="25px"
          type="submit"
          padding="0.75em 1.5em"
          cursor="pointer"
          buttonThemeName="primaryButton">
          Delete
        </StyledButton>
      ) : null}
    </TweetContentStyled>
  );
};

TweetContent.propTypes = {
  tweet: PropTypes.object,
  isPinned: PropTypes.bool,
  params: PropTypes.object,
  props: PropTypes.arrayOf(PropTypes.string)
};

export default TweetContent;
