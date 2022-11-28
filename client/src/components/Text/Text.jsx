// ref: https://stackoverflow.com/questions/57945969/conditional-rendering-of-components-with-same-props-in-reactjs
import { StyledHeading1, StyledHeading2, StyledHeading3, StyledParagraph } from './Text.styled';
import PropTypes from 'prop-types';

function Text({ type, text, ...props }) {
  // for general props of all components rendering conditionally
  // for optional props only
  let generalPropsList = {
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
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default Text;
