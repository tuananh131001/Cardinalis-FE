import React from 'react';
// import PropTypes from 'prop-types';
import { FlexContainer } from '@/components/Container/Container.styled';
import { NavButtonProfile } from './ButtonProfile';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  PROFILE_PATH,
  PROFILE_TWEET_PATH,
  PROFILE_REPLIES_PATH,
  PROFILE_MEDIA_PATH,
  PROFILE_LIKE_PATH
} from '@/assets/Constant';

const ProfileNav = () => {
  const navigate = useNavigate();
  const location = /[^/]*$/.exec(useLocation().pathname)[0];
  const changePath = (path) => {
    console.log(path);
    switch (path) {
      case 'tweets':
        navigate(`/${PROFILE_PATH + '/' + PROFILE_TWEET_PATH}`);
        break;
      case 'replies':
        navigate(`/${PROFILE_PATH + '/' + PROFILE_REPLIES_PATH}`);
        break;
      case 'media':
        navigate(`/${PROFILE_PATH + '/' + PROFILE_MEDIA_PATH}`);
        break;
      case 'likes':
        navigate(`/${PROFILE_PATH + '/' + PROFILE_LIKE_PATH}`);
        break;
    }
  };
  return (
    <FlexContainer overflow="visible">
      <NavButtonProfile
        text={'Tweets'}
        isCurrentTab={location == PROFILE_TWEET_PATH}
        onClick={() => changePath('tweets')}
      />
      <NavButtonProfile
        text={'Tweets & replies'}
        isCurrentTab={location == PROFILE_REPLIES_PATH}
        onClick={() => changePath('replies')}
      />
      <NavButtonProfile
        text={'Media'}
        isCurrentTab={location == PROFILE_MEDIA_PATH}
        onClick={() => changePath('media')}
      />
      <NavButtonProfile
        text={'Likes'}
        isCurrentTab={location == PROFILE_LIKE_PATH}
        onClick={() => changePath('likes')}
      />
    </FlexContainer>
  );
};

ProfileNav.propTypes = {};
export default ProfileNav;
