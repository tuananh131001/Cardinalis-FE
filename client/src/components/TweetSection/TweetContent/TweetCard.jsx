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

const tabSpaces = '\u00A0\u00A0';
const TweetCard = ({ tweet, isPinned = false, ...props }) => {
  /**
   * @param {isPinned} if this tweet "is pinned" display type
   */
  // get user by username stored in tweet here (change later)
  const tweetUser = defaultUser;
  // user who retweeted this tweet (change later) (if this tweet is displayed in that user's profile)
  const retweetUser = defaultUser;

  // Render component inside content
  const displayCaption = () => {
    if (isPinned) return <TweetCaption displayType="pinned" />;
    else if (tweet.isRetweeted)
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
      <Avatar size="5em" gridArea="avatar" src={tweetUser.avatar} alignSelf="flex-start" />
      <Text
        type="p"
        textThemeName="paragraphText"
        weight="700"
        text={tweet.username}
        gridArea="name"
      />
      <Text
        type="p3"
        textThemeName="subText"
        text={`@${tweet.username}${tabSpaces}•${tabSpaces}${displayDuration(tweet.createdAt)}`}
        gridArea="subInfo"
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
