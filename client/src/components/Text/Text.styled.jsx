import styled, { css } from 'styled-components';

// reusable css styling for all headings
const StyledGeneralHeading = css`
  line-height: 1em;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
`;
const StyledHeadingFlex = css`
  display: flex;
  gap: 0.2em;
`;

// Styled Components
export const StyledHeading1 = styled.h1`
  ${StyledGeneralHeading}
  ${StyledHeadingFlex}
  color: ${({ theme }) => theme.text.color};
`;

export const StyledHeading2 = styled.h2`
  ${StyledGeneralHeading}
  ${StyledHeadingFlex}
  color: ${({ theme }) => theme.subtext.color};
`;

export const StyledHeading3 = styled.h3`
  ${StyledGeneralHeading}
  color: ${({ theme }) => theme.subtext.color};
`;
export const StyledParagraph = styled.p`
  ${StyledGeneralHeading}
  line-height: 1.7em;
  color: ${({ theme }) => theme.subtext.color};
`;

// default props
StyledHeading1.defaultProps = {
  weight: 700,
  size: 'clamp(1.8rem, 0.96rem + 4.2vw, 6rem)'
};
StyledHeading2.defaultProps = {
  weight: 600,
  size: 'clamp(1.5rem, 0.7999999999999999rem + 3.5000000000000004vw, 5rem)'
};
StyledHeading3.defaultProps = {
  weight: 500,
  size: 'clamp(1rem, 0.8rem + 1vw, 2rem)'
};
StyledParagraph.defaultProps = {
  weight: 400,
  size: 'clamp(0.8rem, 0.76rem + 0.19999999999999996vw, 1rem)'
};
