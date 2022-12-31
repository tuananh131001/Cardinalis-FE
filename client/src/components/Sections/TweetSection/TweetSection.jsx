import React from 'react';
import PropTypes from 'prop-types';
import { GridContainer } from '@/components/Container/Container.styled';
import Avatar from '@/components/Image/Avatar';
import Text from '@/components/Text/Text';
import { defaultTweet, defaultUser } from '@/assets/Data';
import { displayDuration, displayInlineLink } from '@/helpers/HandleDisplayInfo';
import { TweetButtons } from './TweetButtons';
import TweetCaption from './TweetCaption';

const tabSpaces = '\u00A0\u00A0';
const TweetSection = ({ tweet = defaultTweet, isPinned = false, isRetweeted = true, ...props }) => {
  // isPinned: if this tweet is pinned, isRetweeted: if this tweet is retweeted from any other post
  // get user by username here (change later)
  const user = defaultUser;
  const displayCaption = () => {
    if (isPinned) return <TweetCaption displayType="pinned" />;
    else if (isRetweeted) return <TweetCaption displayType="retweeted" />;
  };
  return (
    <GridContainer
      {...props}
      gridTemplateAreas={`
      "captionIcon caption ." auto
    "avatar name subInfo" auto
    "avatar content content" auto
    ". buttons buttons"  auto /
    auto auto 1fr
    `}
      gap="0.1em 0.7em"
      width="100%"
      jc="flex-start">
      {displayCaption()}
      <Avatar size="5em" gridArea="avatar" src={user.avatar} alignSelf="flex-start" />
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
      {/* {displayInlineLink(tweet.content)} */}
      <TweetButtons tweet={tweet} gridArea="buttons" />
    </GridContainer>
  );
};

TweetSection.propTypes = {
  tweet: PropTypes.object,
  isPinned: PropTypes.bool,
  isRetweeted: PropTypes.bool,
  props: PropTypes.arrayOf(PropTypes.string)
};

export default TweetSection;
