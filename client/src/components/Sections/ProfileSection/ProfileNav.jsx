import React from 'react';
// import PropTypes from 'prop-types';
import { FlexContainer } from '@/components/Container/Container.styled';
import { NavButtonProfile } from './ButtonProfile';
import { useNavigate, useLocation } from 'react-router-dom';
import { PROFILE_TWEET_PATH, PROFILE_REPLIES_PATH, PROFILE_MEDIA_PATH } from '@/assets/Constant';
import PropTypes from 'prop-types';

const ProfileNav = ({ user, ...props }) => {
  const navigate = useNavigate();
  const location = /[^/]*$/.exec(useLocation().pathname)[0];
  const changePath = (path) => {
    const defaultPath = user.username + '/';
    switch (path) {
      case 'tweets':
        navigate(`/${defaultPath + PROFILE_TWEET_PATH}`);
        break;
      case 'tweetsAndReplies':
        navigate(`/${defaultPath + PROFILE_REPLIES_PATH}`);
        break;
      case 'media':
        navigate(`/${defaultPath + PROFILE_MEDIA_PATH}`);
        break;
    }
  };
  return (
    <FlexContainer overflow="visible" {...props}>
      <NavButtonProfile
        text={'Tweets'}
        isCurrentTab={location == PROFILE_TWEET_PATH}
        onClick={() => changePath('tweets')}
      />
      <NavButtonProfile
        text={'Tweets & replies'}
        isCurrentTab={location == PROFILE_REPLIES_PATH}
        onClick={() => changePath('tweetsAndReplies')}
      />
      <NavButtonProfile
        text={'Media'}
        isCurrentTab={location == PROFILE_MEDIA_PATH}
        onClick={() => changePath('media')}
      />
    </FlexContainer>
  );
};

ProfileNav.propTypes = {
  user: PropTypes.object,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};
export default ProfileNav;
