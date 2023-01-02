import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@/components/Image/Icon';
import Text from '@/components/Text/Text';
import { MdPushPin } from 'react-icons/md';
import { AiOutlineRetweet } from 'react-icons/ai';

const TweetCaption = ({ username, isYou, displayType }) => {
  switch (displayType) {
    case 'pinned':
      return (
        <>
          <Icon gridArea="captionIcon" iconThemeName="subText" justifySelf="flex-end">
            {<MdPushPin />}
          </Icon>
          <Text
            type="callout"
            textThemeName="subText"
            text="Pinned Tweet"
            gridArea="caption"
            weight="700"
          />
        </>
      );
    case 'retweeted':
      return (
        <>
          <Icon gridArea="captionIcon" iconThemeName="subText" justifySelf="flex-end">
            {<AiOutlineRetweet />}
          </Icon>
          <Text
            type="callout"
            textThemeName="subText"
            text={`${isYou ? 'You' : username} Retweeted`}
            gridArea="caption"
            weight="700"
          />
        </>
      );
  }
};

TweetCaption.propTypes = {
  username: PropTypes.string,
  isYou: PropTypes.bool,
  displayType: PropTypes.string
};

export default TweetCaption;
