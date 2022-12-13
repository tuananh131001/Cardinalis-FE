// ref: https://stackoverflow.com/questions/57945969/conditional-rendering-of-components-with-same-props-in-reactjs
import {
  StyledHeading1,
  StyledHeading2,
  StyledHeading3,
  StyledNavLink,
  StyledParagraph
} from './Text.styled';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

function Text({ type, text, textThemeName, to, ...props }) {
  /**
   * @description - This component for text
   * @param {string} type - type of text: h1 | h2 | h3 | p
   * @param {string | [string | object]} text - text to display
   * @param {string} textThemeName - name of theme for text
   * @param {string} to - link to navigate
   * @param {[string]} props - props for styled component
   */
  // for general props of all components rendering conditionally
  // for optional props only
  let generalPropsList = {
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
    case 'link':
      return (
        <StyledNavLink {...generalPropsList} to={to}>
          {text}
        </StyledNavLink>
      );
    case 'span':
      return (
        <StyledParagraph {...generalPropsList}>
          {text.map((item) => {
            if (typeof item === 'string') {
              return item;
            } else {
              return (
                <StyledNavLink key={uuid()} {...item}>
                  {item.text}
                </StyledNavLink>
              );
            }
          })}
        </StyledParagraph>
      );
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
  to: PropTypes.string,
  props: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default Text;
