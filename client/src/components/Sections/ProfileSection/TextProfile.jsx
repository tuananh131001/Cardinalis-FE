import PropTypes from 'prop-types';
import Text from '@/components/Text/Text';

const flexContainer = {
  display: 'flex',
  jc: 'flex-start',
  ai: 'center',
  gap: '0.3em'
};
export const HeaderProfile = ({ text, ...props }) => {
  return (
    <Text
      type="h4"
      textThemeName="paragraphText"
      text={text}
      txtAlign="left"
      weight={700}
      {...props}
    />
  );
};
export const SubHeaderProfile = ({ text, ...props }) => {
  return (
    <Text
      type="p2"
      textThemeName="subText"
      text={text}
      txtAlign="left"
      {...flexContainer}
      {...props}
    />
  );
};
export const CaptionProfile = ({ text, textThemeName = 'paragraphText', ...props }) => {
  return (
    <Text
      type="p3"
      textThemeName={textThemeName}
      text={text}
      width="100%"
      txtAlign="left"
      {...flexContainer}
      {...props}
    />
  );
};
// span profile
export const SpanProfile = ({ text, textThemeName = 'paragraphText', ...props }) => {
  return (
    <Text
      type="span"
      textThemeName={textThemeName}
      text={text}
      width="100%"
      txtAlign="left"
      fontSize="calc(var(--font-size-base) - 2px)"
      {...flexContainer}
      {...props}
    />
  );
};
export const LinkProfile = ({ text, textThemeName = 'primaryText', ...props }) => {
  return (
    <Text
      type="a"
      textThemeName={textThemeName}
      text={text}
      width="100%"
      txtAlign="left"
      {...flexContainer}
      {...props}
    />
  );
};

const customOneOfType = [PropTypes.string, PropTypes.node, PropTypes.number];
const arrType = PropTypes.arrayOf(PropTypes.oneOfType(customOneOfType));
HeaderProfile.propTypes = {
  text: PropTypes.oneOfType([...customOneOfType, arrType]).isRequired
};
SubHeaderProfile.propTypes = {
  text: PropTypes.oneOfType([...customOneOfType, arrType]).isRequired
};
CaptionProfile.propTypes = {
  text: PropTypes.oneOfType([...customOneOfType, arrType]).isRequired,
  textThemeName: PropTypes.string
};
SpanProfile.propTypes = {
  text: PropTypes.oneOfType([...customOneOfType, arrType]).isRequired,
  textThemeName: PropTypes.string
};
LinkProfile.propTypes = {
  text: PropTypes.oneOfType([...customOneOfType, arrType]).isRequired,
  textThemeName: PropTypes.string
};
