import React from 'react';
import PropTypes from 'prop-types';
import { GridContainer } from '@/components/Container/Container.styled';
import Avatar from '@/components/Image/Avatar';
import Text from '@/components/Text/Text';
import { defaultTweet, defaultUser } from '@/assets/Data';
import { displayDuration, displayInlineLink } from '@/helpers/HandleDisplayInfo';
import { MdPushPin } from 'react-icons/md';
import Icon from '@/components/Image/Icon';
import { TweetButtons } from './TweetButtons';

const tabSpaces = '\u00A0\u00A0';
const TweetSection = ({ tweet = defaultTweet, isPinned = true, ...props }) => {
  // get user by username here (change later)
  const user = defaultUser;
  return (
    <GridContainer
      {...props}
      gridTemplateAreas={`
      "pinnedIcon pinned ." auto
    "avatar name subInfo" auto
    "avatar content content" auto
    ". buttons buttons"  auto /
    auto auto 1fr
    `}
      gap="0.1em 0.7em"
      width="100%"
      jc="flex-start">
      {isPinned && (
        <>
          <Icon gridArea="pinnedIcon" iconThemeName="subText" justifySelf="flex-end">
            {<MdPushPin />}
          </Icon>
          <Text
            type="callout"
            textThemeName="subText"
            text="Pinned Tweet"
            gridArea="pinned"
            weight="700"
          />
        </>
      )}
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
      <TweetButtons tweet={tweet} gridArea="buttons" />
    </GridContainer>
  );
};

TweetSection.propTypes = {};

export default TweetSection;
