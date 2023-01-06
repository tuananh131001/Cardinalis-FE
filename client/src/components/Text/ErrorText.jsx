import Text from './Text';
import PropTypes from 'prop-types';

export function ErrorText({ padding = '0 0 0.7em 1em', errors }) {
  return (
    <Text
      type="callout"
      txtAlign="left"
      textThemeName="errorText"
      padding={padding}
      text={errors ?? <span>&nbsp;&nbsp;</span>}
    />
  );
}
ErrorText.propTypes = {
  padding: PropTypes.string,
  errors: PropTypes.string
};
