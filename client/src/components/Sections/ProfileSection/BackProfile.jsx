import { FlexContainer } from '@/components/Container/Container.styled';
import Text from '@/components/Text/Text';
import { displayCountNumber } from '@/helpers/HandleDisplayInfo';
import PropTypes from 'prop-types';

const BackProfile = ({ name, numTweets = 3 }) => {
  return (
    <FlexContainer fd="column">
      <Text
        type="p"
        textThemeName="paragraphText"
        text={name}
        width="100%"
        txtAlign="left"
        weight="700"
      />
      <Text
        type="p"
        textThemeName="paragraphText"
        text={displayCountNumber(numTweets, 'Tweet')}
        txtAlign="left"
        width="100%"
      />
    </FlexContainer>
  );
};
BackProfile.propTypes = {
  name: PropTypes.string,
  numTweets: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default BackProfile;
