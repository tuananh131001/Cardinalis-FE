import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@/components/Image/Avatar';
import Text from '@/components/Text/Text';
import { displayDuration, displayInlineLink } from '@/helpers/HandleDisplayInfo';
import { TweetButtons } from '../TweetButtons';
import TweetCaption from '../TweetCaption';
import { defaultUser } from '@/assets/data/UserData';
import Divider from '@/components/Divider/Divider';
import { TweetCardStyled } from './TweetContent.style';
import { useNavigate } from 'react-router-dom';

const tabSpaces = '\u00A0\u00A0';
const TweetCard = ({ tweet, ...props }) => {
  // get user by username stored in tweet here (change later)
  const tweetUser = defaultUser;
  // user who retweeted this tweet (change later) (if this tweet is displayed in that user's profile)
  const retweetUser = defaultUser;

  // handle event
  const navigate = useNavigate();
  const navigateProfile = (event) => {
    event.stopPropagation();
    navigate(`/${tweet.username}`);
  };

  // Render component inside content
  const displayCaption = () => {
    if (tweet.isRetweeted)
      return (
        <TweetCaption
          displayType="retweeted"
          isYou={retweetUser.isYou}
          username={retweetUser.username}
        />
      );
  };

  return (
    <TweetCardStyled {...props}>
      {displayCaption()}
      <Avatar
        size="3.6em"
        gridArea="avatar"
        src={tweetUser.avatar}
        alignSelf="flex-start"
        onClick={(event) => navigateProfile(event)}
      />
      <Text
        type="p3"
        textThemeName="subText"
        text={`@${tweet.username}${tabSpaces}•${tabSpaces}${displayDuration(tweet.createdAt)}`}
        gridArea="name"
        isDisableHover={false}
        onClick={(event) => navigateProfile(event)}
      />
      <Text
        type="p3"
        textThemeName="paragraphText"
        text={displayInlineLink(tweet.content)}
        txtAlign="left"
        lineHeight="1.5em"
        gridArea="content"
      />
      <TweetButtons tweet={tweet} gridArea="buttons" />
      <Divider gridArea="bottomDivider" />
    </TweetCardStyled>
  );
};

TweetCard.propTypes = {
  tweet: PropTypes.object,
  isPinned: PropTypes.bool,
  props: PropTypes.arrayOf(PropTypes.string)
};

export default TweetCard;
