import React from 'react';
import PropTypes from 'prop-types';
import Button from '@/components/Button/Button';
import { CaptionProfile } from './TextProfile';

export const EditButtonProfile = () => {
  return (
    <Button
      buttonType="primary"
      buttonThemeName="thirdButton"
      borderRadius="30%/110%"
      width="auto"
      padding="0.8em 1.3em">
      Edit Profile
    </Button>
  );
};

export const FollowButtonProfile = ({ count, text }) => {
  return (
    <Button
      buttonType="link"
      width="auto"
      jc="flex-start"
      textTransform="none"
      textDecoration="underline">
      {<CaptionProfile text={count} weight={600} />}
      {<CaptionProfile text={<span>&nbsp;{text}</span>} textThemeName="subText" />}
    </Button>
  );
};

FollowButtonProfile.propTypes = {
  count: PropTypes.number,
  text: PropTypes.string
};
