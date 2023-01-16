// import PropTypes from 'prop-types'

import { FlexContainer } from '@/components/Container/Container.styled';
import Button from '@/components/Button/Button';
import { FaRegComment, FaRegHeart, FaHeart } from 'react-icons/fa';
import { AiOutlineRetweet } from 'react-icons/ai';
import PropTypes from 'prop-types';
import Text from '@/components/Text/Text';
import { displayCountNumber } from '@/helpers/HandleDisplayInfo';
import { useChange } from '@/hooks/useChange';
import TweetComposeModal from '@/components/TweetComposeSection/TweetComposeContent/TweetComposeModal';

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
        visibility="visible"
      />
    </FlexContainer>
  );
};
export const TweetButtons = ({ tweet, ...props }) => {
  const { value: isOpenTweet, onSetTrue: openTweet, onSetFalse: closeTweet } = useChange(false);
  const onCloseTweet = (event) => {
    closeTweet(event);
  };
  const onClick = (event, type) => {
    event.stopPropagation();
    switch (type) {
      case 'comment':
        console.log('comment');
        openTweet();
        break;
      case 'retweet':
        console.log('retweet');
        openTweet();
        break;
      case 'favorite':
        console.log('favorite');
        break;
    }
  };
  console.log(displayCountNumber(tweet.totalComment));
  return (
    <FlexContainer {...props}>
      <TweetButtonSection
        icon={<FaRegComment />}
        count={displayCountNumber(tweet.totalComment)}
        onClick={(event) => onClick(event, 'comment')}
      />
      <TweetButtonSection
        themeName="retweetButton"
        icon={<AiOutlineRetweet />}
        count={displayCountNumber(tweet.totalRetweet) ?? 0}
        onClick={(event) => onClick(event, 'retweet')}
        isActive={tweet.isRetweeted}
      />
      <TweetButtonSection
        themeName="favoriteButton"
        icon={tweet.isFavorited ? <FaHeart /> : <FaRegHeart />}
        count={displayCountNumber(tweet.totalFav) ?? 0}
        onClick={(event) => onClick(event, 'favorite')}
        isActive={tweet.isFavorited}
      />
      <TweetComposeModal isOpen={isOpenTweet} onClose={onCloseTweet} />
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
