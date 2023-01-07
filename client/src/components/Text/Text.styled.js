import styled, { css } from 'styled-components';

// reusable css styling for all headings
const StyledGeneralHeading = css`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  text-align: ${({ txtAlign }) => txtAlign};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  grid-area: ${(props) => props.gridArea};
  display: ${({ display }) => display};
  gap: ${({ gap }) => gap};
  justify-content: ${({ jc }) => jc};
  align-items: ${({ ai }) => ai};
  line-height: ${(props) => props.lineHeight};
  visibility: ${({ visibility }) => visibility};
  white-space: pre-line;
  word-wrap: break-word;
  ${({ isDisableHover }) =>
    !isDisableHover &&
    css`
      &:hover {
        text-decoration-line: underline;
        cursor: pointer;
      }
    `}
`;
const ActiveStyling = css`
  color: ${({ theme, textThemeName }) => theme[textThemeName]?.activeColor ?? theme.text.color};
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
  ${({ isActive }) => isActive && ActiveStyling}
`;

export const StyledHeading2 = styled.h2`
  ${StyledGeneralHeading}
  ${StyledHeadingFlex}
  color: ${({ theme, textThemeName }) => theme[textThemeName]?.color ?? theme.subtext.color};
  ${({ isActive }) => isActive && ActiveStyling}
`;

export const StyledHeading3 = styled.h3`
  ${StyledGeneralHeading}
  color: ${({ theme, textThemeName }) => theme[textThemeName]?.color ?? theme.subtext.color};
  ${({ isActive }) => isActive && ActiveStyling}
`;
export const StyledHeading4 = styled.h4`
  ${StyledGeneralHeading}
  color: ${({ theme, textThemeName }) => theme[textThemeName]?.color ?? theme.subtext.color};
  ${({ isActive }) => isActive && ActiveStyling}
`;
export const StyledParagraph = styled.p`
  ${StyledGeneralHeading}
  color: ${({ theme, textThemeName }) => theme[textThemeName]?.color ?? theme.subtext.color};
  ${({ isActive }) => isActive && ActiveStyling}
`;
export const StyledParagraph2 = styled.p`
  ${StyledGeneralHeading}
  color: ${({ theme, textThemeName }) => theme[textThemeName]?.color ?? theme.subtext.color};
  ${({ isActive }) => isActive && ActiveStyling}
`;
export const StyledParagraph3 = styled.p`
  ${StyledGeneralHeading}
  color: ${({ theme, textThemeName }) => theme[textThemeName]?.color ?? theme.subtext.color};
  ${({ isActive }) => isActive && ActiveStyling}
`;
export const StyledCallout = styled.p`
  ${StyledGeneralHeading}
  color: ${({ theme, textThemeName }) => theme[textThemeName]?.color ?? theme.subtext.color};
  ${({ isActive }) => isActive && ActiveStyling}
`;
export const StyledCaption = styled.p`
  ${StyledGeneralHeading}
  color: ${({ theme, textThemeName }) => theme[textThemeName]?.color ?? theme.subtext.color};
  ${({ isActive }) => isActive && ActiveStyling}
`;
export const StyledTextLink = styled.a`
  ${StyledGeneralHeading}
  color: ${({ theme, textThemeName }) => theme[textThemeName]?.color ?? theme.subtext.color};
  ${({ isActive }) => isActive && ActiveStyling}
  &:hover {
    filter: brightness(1.2);
  }
`;
export const StyledLabel = styled.label`
  ${StyledGeneralHeading}
  color: ${({ theme, textThemeName }) => theme[textThemeName]?.color ?? 'inherit'};
  font-family: var(--font-family);
  ${({ isActive }) => isActive && ActiveStyling}
`;
// span
export const StyledSpan = styled.span`
  ${StyledGeneralHeading}
  color: ${({ theme, textThemeName }) => theme[textThemeName]?.color ?? theme.subtext.color};
  ${({ isActive }) => isActive && ActiveStyling}
`;

// default props
const generalDefaultProps = {
  txtAlign: 'center',
  padding: '0',
  gridArea: 'unset',
  display: 'flex',
  width: '100%',
  gap: '0',
  jc: 'auto',
  ai: 'auto',
  visibility: 'visible',
  isDisableHover: true
};

StyledHeading1.defaultProps = {
  ...generalDefaultProps,
  weight: 700,
  size: 'var(--font-size-xxxl)',
  lineHeight: '1em'
};
StyledHeading2.defaultProps = {
  ...generalDefaultProps,
  weight: 600,
  size: 'var(--font-size-xxl)',
  lineHeight: '1em'
};
StyledHeading3.defaultProps = {
  ...generalDefaultProps,
  weight: 600,
  size: 'var(--font-size-xl)',
  lineHeight: '1em'
};
StyledHeading4.defaultProps = {
  ...generalDefaultProps,
  weight: 600,
  size: 'var(--font-size-lg)',
  lineHeight: '1em'
};
StyledParagraph.defaultProps = {
  ...generalDefaultProps,
  weight: 400,
  size: 'var(--font-size-base)',
  lineHeight: '1.7em'
};
StyledParagraph2.defaultProps = {
  ...generalDefaultProps,
  weight: 400,
  size: 'calc(var(--font-size-base) - 2px)',
  lineHeight: '1em'
};
StyledParagraph3.defaultProps = {
  ...generalDefaultProps,
  weight: 400,
  size: 'calc(var(--font-size-base) - 3px)',
  lineHeight: '1em'
};
StyledCallout.defaultProps = {
  ...generalDefaultProps,
  weight: 400,
  size: 'var(--font-size-sm)',
  lineHeight: '1.3em'
};
StyledCaption.defaultProps = {
  ...generalDefaultProps,
  weight: 400,
  size: 'var(--font-size-ssm)',
  lineHeight: '1em'
};
StyledLabel.defaultProps = {
  ...generalDefaultProps,
  weight: 400,
  size: 'var(--font-size-base)',
  lineHeight: '1em'
};
// StyledTextLink.defaultProps = {
//   ...generalDefaultProps,
//   weight: 400,
//   size: 'var(--font-size-base)',
//   lineHeight: '1em'
// };
StyledSpan.defaultProps = {
  ...generalDefaultProps,
  weight: 400,
  size: 'var(--font-size-base)',
  lineHeight: '1em'
};
