/* eslint-disable react/prop-types */
// ref: https://stackoverflow.com/questions/57945969/conditional-rendering-of-components-with-same-props-in-reactjs
import { StyledHeading1, StyledHeading2, StyledHeading3, StyledParagraph } from './Text.styled';

function Text({ type, themeToggler = null, text, ...props }) {
  let generalPropsList = {
    themeToggler: themeToggler,
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

export default Text;
