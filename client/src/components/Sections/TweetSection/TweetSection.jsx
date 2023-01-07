import React from 'react';
import PropTypes from 'prop-types';
import { GridContainer } from '@/components/Container/Container.styled';
import Avatar from '@/components/Image/Avatar';
import Text from '@/components/Text/Text';
import { displayDuration, displayInlineLink } from '@/helpers/HandleDisplayInfo';
import { TweetButtons } from './TweetButtons';
import TweetCaption from './TweetCaption';
import { defaultUser } from '@/assets/data/UserData';

const tabSpaces = '\u00A0\u00A0';
const TweetSection = ({ tweet, isPinned = false, ...props }) => {
  /**
   * @param {isPinned} if this tweet "is pinned" display type
   */
  // get user by username stored in tweet here (change later)
  const tweetUser = defaultUser;
  // user who retweeted this tweet (change later) (if this tweet is displayed in that user's profile)
  const retweetUser = defaultUser;
  // const displayCaption = () => {
  //   if (isPinned) return <TweetCaption displayType="pinned" />;
  //   else if (tweet.isRetweeted)
  //     return (
  //       <TweetCaption
  //         displayType="retweeted"
  //         isYou={retweetUser.isYou}
  //         username={retweetUser.username}
  //       />
  //     );
  // };
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
      {/* {displayCaption()} */}
      <Avatar size="3em" gridArea="avatar" src={tweetUser.avatar} alignSelf="flex-start" />
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
      {/* <iframe src="http://www.youtube.com/watch?v=ZCEiAf-k-sg" width="400" height="400"></iframe> */}
      {/* <img src={"https://img.youtube.com/vi/ZCEiAf-k-sg/0.jpg"} alt="YouTube thumbnail" />
      <iframe src="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" width={640} height={360} /> */}
      <TweetButtons tweet={tweet} gridArea="buttons" />
    </GridContainer>
  );
};

TweetSection.propTypes = {
  tweet: PropTypes.object,
  isPinned: PropTypes.bool,
  props: PropTypes.arrayOf(PropTypes.string)
};

export default TweetSection;
