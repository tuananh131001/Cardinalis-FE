// ref: https://stackoverflow.com/questions/57945969/conditional-rendering-of-components-with-same-props-in-reactjs
import { StyledHeading1, StyledHeading2, StyledHeading3, StyledParagraph } from './Text.styled';
import PropTypes from 'prop-types';

function Text({ type, text, textThemeName, ...props }) {
  /**
   * @description - This component for text
   * @param {string} type - type of text: h1 | h2 | h3 | p
   * @param {string} text - text to display
   * @param {string} textThemeName - name of theme for text
   * @param {[string]} props - props for styled component
   */
  // for general props of all components rendering conditionally
  // for optional props only
  let generalPropsList = {
    type: type,
    textThemeName: textThemeName,
    ...props
  };

  switch (type) {
    case 'h1':
      return <StyledHeading1 {...generalPropsList}>{text}</StyledHeading1>;
    case 'h2':
      return <StyledHeading2 {...generalPropsList}>{text}</StyledHeading2>;
    case 'h3':
      return <StyledHeading3 {...generalPropsList}>{text}</StyledHeading3>;
    case 'p':
      return <StyledParagraph {...generalPropsList}>{text}</StyledParagraph>;
  }
}

Text.propTypes = {
  type: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  textThemeName: PropTypes.string,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default Text;
