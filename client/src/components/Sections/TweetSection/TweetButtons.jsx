// import PropTypes from 'prop-types'

import { FlexContainer } from '@/components/Container/Container.styled';
import Button from '@/components/Button/Button';
import { FaRegComment, FaRegHeart } from 'react-icons/fa';
import { AiOutlineRetweet, AiOutlineShareAlt } from 'react-icons/ai';
import PropTypes from 'prop-types';
import Text from '@/components/Text/Text';
import { displayCountNumber } from '@/helpers/HandleDisplayInfo';

const TweetButtonSection = ({
  isActive = false,
  themeName = 'forthButton',
  icon,
  count,
  onClick,
  ...props
}) => {
  return (
    <FlexContainer {...props} gap="0.4em">
      <Button
        onClick={onClick}
        buttonThemeName={themeName}
        buttonType="link"
        hoverType={3}
        borderRadius="50%"
        fontSize="var(--font-size-base)"
        width="2.6em"
        aspectRatio="1/1"
        isActive={isActive}>
        {icon}
      </Button>
      <Text
        type="p3"
        textThemeName={themeName}
        text={count}
        isActive={isActive}
        visibility={count != 0 ? 'visible' : 'hidden'}
      />
    </FlexContainer>
  );
};
export const TweetButtons = ({ tweet, ...props }) => {
  const onClick = (type) => {
    switch (type) {
      case 'comment':
        console.log('comment');
        break;
      case 'retweet':
        console.log('retweet');
        break;
      case 'favorite':
        console.log('favorite');
        break;
      case 'share':
        console.log('share');
        break;
    }
  };
  return (
    <FlexContainer {...props}>
      <TweetButtonSection
        icon={<FaRegComment />}
        count={displayCountNumber(tweet.numComments)}
        onClick={() => onClick('comment')}
      />
      <TweetButtonSection
        themeName="retweetButton"
        icon={<AiOutlineRetweet />}
        count={displayCountNumber(tweet.numRetweets)}
        onClick={() => onClick('retweet')}
        isActive={tweet.isRetweeted}
      />
      <TweetButtonSection
        themeName="favoriteButton"
        icon={<FaRegHeart />}
        count={displayCountNumber(tweet.numFavorites)}
        onClick={() => onClick('favorite')}
        isActive={tweet.isFavorited}
      />
      <TweetButtonSection icon={<AiOutlineShareAlt />} onClick={() => onClick('share')} />
    </FlexContainer>
  );
};

TweetButtonSection.propTypes = {
  isActive: PropTypes.bool,
  themeName: PropTypes.string,
  icon: PropTypes.node,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};
TweetButtons.propTypes = {
  tweet: PropTypes.object,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};
