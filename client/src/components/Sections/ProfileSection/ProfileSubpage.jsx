import TweetList from '@/components/Sections/GeneralSection/TweetList';
import { defaultTweetList } from '@/assets/data/Data';
import { useOutletContext } from 'react-router-dom';
import Proptypes from 'prop-types';
import { getMediaTweeters } from '@/helpers/HandleDisplayInfo';
import ProfileNav from './ProfileNav';

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
const ProfileSubpage = ({ type }) => {
  // defaultTweetList is a temporary solution for now. It will be replaced by the tweetList of the user
  // use user to get tweet list later
  const { user } = useOutletContext();
  const renderContent = () => {
    switch (type) {
      case 'tweets':
        return <TweetList tweetList={defaultTweetList} />;
      case 'tweetsAndReplies':
        return <TweetList tweetList={defaultTweetList} />;
      case 'media':
        return <TweetList tweetList={getMediaTweeters(defaultTweetList)} />;
      case 'followers':
        return <h1>Follower</h1>;
      case 'following':
        return <h1>Following</h1>;
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
  type: Proptypes.string
};

export default ProfileSubpage;
