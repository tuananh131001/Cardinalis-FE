// https://stackoverflow.com/questions/68761707/add-read-more-at-end-of-paragraph
// https://ishadeed.com/article/learn-css-centering/
import Text from '@/components/Text/Text';
import useMediaQuery from '@/hooks/useMediaQuery';
import { MOBILE_QUERY } from '@/styles/Constant';
import { FlexContainer } from '@/components/Container/Container.styled';
import { LOGIN_PATH } from '@/styles/Constant';
import PropTypes from 'prop-types';
import { DESKTOP_QUERY } from '@/styles/Constant';
import { TABLET_QUERY } from '@/styles/Constant';
import { InlineContainer } from '@/components/Container/Container.styled';
import Button from '@/components/Button/Button';
import { useNavigate } from 'react-router-dom';

const renderPropsResponsive = (propsName, queries) => {
  switch (propsName) {
    case 'alignSelf':
      if (queries.tablet && !queries.desktop) return 'flex-start';
      else return 'center';
    case 'txtAlignChildren':
      return queries.desktop ? 'left' : 'center';
  }
};

function RegisterText({ ...props }) {
  const responsiveCondition = {
    mobile: useMediaQuery(MOBILE_QUERY),
    tablet: useMediaQuery(TABLET_QUERY),
    desktop: useMediaQuery(DESKTOP_QUERY)
  };
  const navigate = useNavigate();
  return (
    <FlexContainer
      fd="column"
      alignSelf={renderPropsResponsive('alignSelf', responsiveCondition)}
      {...props}>
      <Text
        type={responsiveCondition.mobile ? 'h3' : 'h4'}
        textThemeName="headingText1"
        text="Register to access our service"
        txtAlign={renderPropsResponsive('txtAlignChildren', responsiveCondition)}
      />
      {!responsiveCondition.mobile && (
        <InlineContainer txtAlign={!responsiveCondition.desktop && 'center'}>
          <Text
            type="p"
            text="If you already had an account you can "
            textThemeName="headingText1"
            txtAlign="right"
          />
          <Button
            onClick={() => navigate(`/${LOGIN_PATH}`)}
            buttonType="link"
            jc="flex-start"
            width="auto"
            fontSize="var(--font-size-base)"
            textTransform="normal">
            Login Here!
          </Button>
        </InlineContainer>
      )}
    </FlexContainer>
  );
}

RegisterText.propTypes = {
  props: PropTypes.arrayOf(PropTypes.string)
};
export default RegisterText;
