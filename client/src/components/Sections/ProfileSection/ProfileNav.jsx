import React from 'react';
// import PropTypes from 'prop-types';
import { FlexContainer } from '@/components/Container/Container.styled';
import { NavButtonProfile } from './ButtonProfile';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  PROFILE_TWEET_PATH,
  PROFILE_REPLIES_PATH,
  PROFILE_MEDIA_PATH,
  PROFILE_LIKE_PATH
} from '@/assets/Constant';
import PropTypes from 'prop-types';

const ProfileNav = ({ user }) => {
  const navigate = useNavigate();
  const location = /[^/]*$/.exec(useLocation().pathname)[0];
  const changePath = (path) => {
    const defaultPath = user.username + '/';
    switch (path) {
      case 'tweets':
        navigate(`/${defaultPath + PROFILE_TWEET_PATH}`);
        break;
      case 'replies':
        navigate(`/${defaultPath + PROFILE_REPLIES_PATH}`);
        break;
      case 'media':
        navigate(`/${defaultPath + PROFILE_MEDIA_PATH}`);
        break;
      case 'likes':
        navigate(`/${defaultPath + PROFILE_LIKE_PATH}`);
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

ProfileNav.propTypes = {
  user: PropTypes.object
};
export default ProfileNav;
