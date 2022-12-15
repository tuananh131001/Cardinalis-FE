import Text from './Text';
import PropTypes from 'prop-types';

export function ErrorText({ errors }) {
  return (
    <Text
      type="caption"
      txtAlign="left"
      textThemeName="errorText"
      padding="0 0 0.7em 1em"
      text={errors ?? <span>&nbsp;&nbsp;</span>}
    />
  );
}
ErrorText.propTypes = {
  errors: PropTypes.string
};
