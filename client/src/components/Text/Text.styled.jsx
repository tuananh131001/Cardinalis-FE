import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// reusable css styling for all headings
const StyledGeneralHeading = css`
  line-height: 1em;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  text-align: ${(props) => props.align};
  width: 100%;
  padding: ${(props) => props.padding};
  grid-area: ${(props) => props.gridarea};
`;
const StyledHeadingFlex = css`
  display: flex;
  gap: 0.2em;
`;

// Styled Components
export const StyledHeading1 = styled.h1`
  ${StyledGeneralHeading}
  ${StyledHeadingFlex}
  color: ${({ theme, textThemeName }) => theme[textThemeName]?.color ?? theme.text.color};
`;

export const StyledHeading2 = styled.h2`
  ${StyledGeneralHeading}
  ${StyledHeadingFlex}
  color: ${({ theme, textThemeName }) => theme[textThemeName]?.color ?? theme.subtext.color};
`;

export const StyledHeading3 = styled.h3`
  ${StyledGeneralHeading}
  color: ${({ theme, textThemeName }) => theme[textThemeName]?.color ?? theme.subtext.color};
`;
export const StyledParagraph = styled.p`
  ${StyledGeneralHeading}
  line-height: 1.7em;
  color: ${({ theme, textThemeName }) => theme[textThemeName]?.color ?? theme.subtext.color};
`;
export const StyledNavLink = styled(Link)`
  ${StyledGeneralHeading}
  color: ${({ theme, textThemeName }) => theme[textThemeName]?.color ?? theme.primaryColor};
  text-decoration: none;
  &:hover {
    filter: brightness(110%) contrast(1.7);
  }
`;

// default props
const generalDefaultProps = {
  align: 'center',
  padding: '0',
  gridarea: 'unset'
};
StyledHeading1.defaultProps = {
  ...generalDefaultProps,
  weight: 700,
  // size: 'clamp(1.8rem, 0.96rem + 4.2vw, 6rem)'
  size: 'var(--font-size-xxxl)'
};
StyledHeading2.defaultProps = {
  ...generalDefaultProps,
  weight: 600,
  // size: 'clamp(1.5rem, 0.7999999999999999rem + 3.5000000000000004vw, 5rem)'
  size: 'var(--font-size-xxl)'
};
StyledHeading3.defaultProps = {
  ...generalDefaultProps,
  weight: 600,
  // size: 'clamp(1rem, 0.8rem + 1vw, 2rem)',
  size: 'var(--font-size-xl)'
};
StyledParagraph.defaultProps = {
  ...generalDefaultProps,
  weight: 400,
  // size: 'clamp(0.8rem, 0.76rem + 0.19999999999999996vw, 1rem)'
  size: 'var(--font-size-base)'
};
StyledNavLink.defaultProps = {
  ...generalDefaultProps,
  size: 'var(--font-size-base)'
};
