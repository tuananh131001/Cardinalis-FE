import Text from '@/components/Text/Text';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MOBILE_QUERY } from '@/styles/Constant';
import { VerticalLeftContainer } from '@/components/Container/Container.styled';
import { HorizontalBetweenContainer } from '@/components/Container/Container.styled';
import { LOGIN_PATH, REGISTER_PATH } from '@/styles/Constant';
import PropTypes from 'prop-types';

const additionalTextStyle = (checkCondition) => {
  return {
    align: checkCondition ? 'center' : 'left'
  };
};
export const AuthenText = ({ ...props }) => {
  const isMobile = useMediaQuery(MOBILE_QUERY);
  return (
    <VerticalLeftContainer {...props}>
      <Text
        type="h3"
        textThemeName="headingText1"
        text="Register to access our service"
        {...additionalTextStyle(isMobile)}
      />
      {!isMobile && (
        <Text
          type="span"
          textThemeName="paragraphText"
          text={[
            'If you already had an account you can',
            { text: ' login here', type: 'link', to: `/${LOGIN_PATH}` }
          ]}
          {...additionalTextStyle(isMobile)}
        />
      )}
    </VerticalLeftContainer>
  );
};

export const AuthenNav = ({ ...props }) => {
  return (
    <HorizontalBetweenContainer {...props}>
      <Text type="link" to={`/${REGISTER_PATH}`} text="Register" />
      <Text type="link" to={`/${LOGIN_PATH}`} text="Sign In" />
    </HorizontalBetweenContainer>
  );
};

AuthenText.propTypes = {
  props: PropTypes.arrayOf(PropTypes.string)
};
AuthenNav.propTypes = {
  props: PropTypes.arrayOf(PropTypes.string)
};
