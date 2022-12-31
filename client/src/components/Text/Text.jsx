// ref: https://stackoverflow.com/questions/57945969/conditional-rendering-of-components-with-same-props-in-reactjs
import {
  StyledCallout,
  StyledCaption,
  StyledHeading1,
  StyledHeading2,
  StyledHeading3,
  StyledHeading4,
  StyledParagraph,
  StyledParagraph2,
  StyledParagraph3,
  StyledTextLink
} from './Text.styled';
import PropTypes from 'prop-types';

function Text({ type, text, textThemeName, ...props }) {
  // for general props of all components rendering conditionally
  // for optional props only
  // let generalPropsList = {
  //   ...props
  // };
  const generalPropsList = {
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
    case 'h4':
      return <StyledHeading4 {...generalPropsList}>{text}</StyledHeading4>;
    case 'p':
      return <StyledParagraph {...generalPropsList}>{text}</StyledParagraph>;
    case 'p2':
      return <StyledParagraph2 {...generalPropsList}>{text}</StyledParagraph2>;
    case 'p3':
      return <StyledParagraph3 {...generalPropsList}>{text}</StyledParagraph3>;
    case 'callout':
      return <StyledCallout {...generalPropsList}>{text}</StyledCallout>;
    case 'caption':
      return <StyledCaption {...generalPropsList}>{text}</StyledCaption>;
    case 'a':
      return <StyledTextLink {...generalPropsList}>{text}</StyledTextLink>;
  }
}

Text.propTypes = {
  type: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
  ]),
  textThemeName: PropTypes.string,
  to: PropTypes.string
};

export default Text;
