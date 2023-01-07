// https://stackoverflow.com/questions/68761707/add-read-more-at-end-of-paragraph
// https://ishadeed.com/article/learn-css-centering/
import Text from '@/components/Text/Text';
import { FlexContainer } from '@/components/Container/Container.styled';
import PropTypes from 'prop-types';
import { InlineContainer } from '@/components/Container/Container.styled';
import Button from '@/components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { REGISTER_PATH } from '@/assets/Constant';

const renderPropsResponsive = (propsName, queries) => {
  switch (propsName) {
    case 'txtAlignChildren':
      return queries.desktop ? 'left' : 'center';
  }
};

function RegisterText({ responsiveCondition, ...props }) {
  const navigate = useNavigate();
  return (
    <FlexContainer className="text-container" {...props}>
      <Text
        className="text"
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
            onClick={() => navigate(`/${REGISTER_PATH}`)}
            buttonType="link"
            jc="flex-start"
            width="auto"
            fontSize="var(--font-size-base)"
            textTransform="normal">
            login here
          </Button>
        </InlineContainer>
      )}
    </FlexContainer>
  );
}

RegisterText.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  linkText: PropTypes.string,
  linkPath: PropTypes.string,
  responsiveCondition: PropTypes.object,
  props: PropTypes.arrayOf(PropTypes.string)
};
export default RegisterText;
