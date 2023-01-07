import { FlexContainer } from '@/components/Container/Container.styled';
import { NavButtonProfile } from './ButtonProfile';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  PROFILE_TWEET_PATH,
  PROFILE_REPLIES_PATH,
  PROFILE_MEDIA_PATH,
  PROFILE_FOLLOWERS_PATH,
  PROFILE_FOLLOWING_PATH
} from '@/assets/Constant';
import PropTypes from 'prop-types';
import { extractPath } from '@/helpers/HandleDisplayInfo';

const ProfileNav = ({ user, navType = 'tweetNav', ...props }) => {
  /**
   * @param {string} navType: 'tweet' or 'follow'
   */
  const navigate = useNavigate();
  let location = extractPath(useLocation().pathname);

  const changePath = (path) => {
    switch (path) {
      case 'tweets':
        navigate(`/${user.username + PROFILE_TWEET_PATH}`);
        break;
      case 'tweetsAndReplies':
        navigate(`/${user.username + PROFILE_REPLIES_PATH}`);
        break;
      case 'media':
        navigate(`/${user.username + PROFILE_MEDIA_PATH}`);
        break;
      case 'followers':
        navigate(`/${user.username + PROFILE_FOLLOWERS_PATH}`);
        break;
      case 'following':
        navigate(`/${user.username + PROFILE_FOLLOWING_PATH}`);
        break;
    }
  };
  return (
    <FlexContainer overflow="visible" {...props}>
      {navType == 'tweetNav' ? (
        <>
          <NavButtonProfile
            text={'Tweets'}
            isCurrentTab={location == user.username}
            onClick={() => changePath('tweets')}
          />
          <NavButtonProfile
            text={'Tweets & replies'}
            isCurrentTab={location == extractPath(PROFILE_REPLIES_PATH)}
            onClick={() => changePath('tweetsAndReplies')}
          />
          <NavButtonProfile
            text={'Media'}
            isCurrentTab={location == extractPath(PROFILE_MEDIA_PATH)}
            onClick={() => changePath('media')}
          />
        </>
      ) : (
        <>
          <NavButtonProfile
            text={'Followers'}
            isCurrentTab={location == extractPath(PROFILE_FOLLOWERS_PATH)}
            onClick={() => changePath('followers')}
          />
          <NavButtonProfile
            text={'Following'}
            isCurrentTab={location == extractPath(PROFILE_FOLLOWING_PATH)}
            onClick={() => changePath('following')}
          />
        </>
      )}
    </FlexContainer>
  );
};

ProfileNav.propTypes = {
  user: PropTypes.object,
  navType: PropTypes.string,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};
export default ProfileNav;
