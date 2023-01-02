import TweetList from '@/components/Sections/GeneralSection/TweetList';
import { defaultTweetList } from '@/assets/data/Data';
import { useOutletContext } from 'react-router-dom';
import Proptypes from 'prop-types';
import { getMediaTweeters } from '@/helpers/HandleDisplayInfo';

const ProfileSubpage = ({ type }) => {
  // defaultTweetList is a temporary solution for now. It will be replaced by the tweetList of the user
  // use user to get tweet list later
  const { user } = useOutletContext();
  switch (type) {
    case 'tweets':
      return <TweetList tweetList={defaultTweetList} />;
    case 'tweetsAndReplies':
      return <TweetList tweetList={defaultTweetList} />;
    case 'media':
      return <TweetList tweetList={getMediaTweeters(defaultTweetList)} />;
  }
};

ProfileSubpage.propTypes = {
  type: Proptypes.string
};

export default ProfileSubpage;
