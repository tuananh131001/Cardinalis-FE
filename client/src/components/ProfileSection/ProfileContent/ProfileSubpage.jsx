import { defaultTweetList } from '@/assets/data/Data';
import { defaultFollowerList, defaultFollowingList } from '@/assets/data/UserData';
import Proptypes from 'prop-types';
import { getMediaTweeters } from '@/helpers/HandleDisplayInfo';
import ProfileNav from './ProfileNav';
import FollowList from '../../Sections/FollowSection/FollowList';
import TweetList from '../../Sections/TweetSection/TweetList';

const getNavType = (type) => {
  switch (type) {
    case 'tweets':
    case 'tweetsAndReplies':
    case 'media':
      return 'tweetNav';
    case 'followers':
    case 'following':
      return 'followNav';
  }
};
const ProfileSubpage = ({ type, user }) => {
  // defaultTweetList is a temporary solution for now. It will be replaced by the tweetList of the user
  // use user to get tweet list later
  const renderContent = () => {
    switch (type) {
      case 'tweets':
        return <TweetList tweetList={defaultTweetList} />;
      case 'tweetsAndReplies':
        return <TweetList tweetList={defaultTweetList} />;
      case 'media':
        return <TweetList tweetList={getMediaTweeters(defaultTweetList)} />;
      case 'followers':
        return <FollowList followList={defaultFollowerList} />;
      case 'following':
        return <FollowList followList={defaultFollowingList} />;
    }
  };
  return (
    <>
      <ProfileNav user={user} navType={getNavType(type)} />
      {renderContent()}
    </>
  );
};

ProfileSubpage.propTypes = {
  type: Proptypes.string,
  user: Proptypes.object
};

export default ProfileSubpage;
