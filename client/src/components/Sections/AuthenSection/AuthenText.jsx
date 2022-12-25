// https://stackoverflow.com/questions/68761707/add-read-more-at-end-of-paragraph
// https://ishadeed.com/article/learn-css-centering/
import Text from '@/components/Text/Text';
import { FlexContainer } from '@/components/Container/Container.styled';
import PropTypes from 'prop-types';
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
    case 'minHeight':
      return queries.mobile ? '5em' : '0';
  }
};

function AuthenText({ mainText, subText, linkText, linkPath, responsiveCondition, ...props }) {
  const navigate = useNavigate();
  return (
    <FlexContainer
      fd="column"
      alignSelf={renderPropsResponsive('alignSelf', responsiveCondition)}
      gap="0.7em"
      minHeight={renderPropsResponsive('minHeight', responsiveCondition)}
      {...props}>
      <Text
        type={responsiveCondition.mobile ? 'h3' : 'h4'}
        textThemeName="headingText1"
        text={mainText}
        txtAlign={renderPropsResponsive('txtAlignChildren', responsiveCondition)}
      />
      {!responsiveCondition.mobile && (
        <InlineContainer txtAlign={!responsiveCondition.desktop && 'center'}>
          <Text type="p" text={subText} textThemeName="headingText1" txtAlign="right" />
          <Button
            onClick={() => navigate(linkPath)}
            buttonType="link"
            jc="flex-start"
            width="auto"
            fontSize="var(--font-size-base)"
            textTransform="normal">
            {linkText}
          </Button>
        </InlineContainer>
      )}
    </FlexContainer>
  );
}

AuthenText.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  linkText: PropTypes.string,
  linkPath: PropTypes.string,
  responsiveCondition: PropTypes.object,
  props: PropTypes.arrayOf(PropTypes.string)
};
export default AuthenText;
