import styled, { css } from 'styled-components';

// General reusable buttons styles
const StyledGeneralButton = css`
  /* position */
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  justify-content: ${({ jc }) => jc};
  align-items: ${({ ai }) => ai};
  flex-wrap: ${({ wrap }) => wrap};
  /* border */
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius};
  width: ${({ width }) => width};
  padding: ${({ padding }) => padding};
  /* font */
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-transform: ${({ textTransform }) => textTransform};
  letter-spacing: 2;
  line-height: 1.3;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

// Styled Componeny
const StyledButton = styled.button`
  ${StyledGeneralButton}
  background-color: ${({ theme, buttonThemeName }) => theme[buttonThemeName].backgroundColor};
  color: ${({ theme, buttonThemeName }) => theme[buttonThemeName].color};
  border: ${({ theme, buttonThemeName }) =>
    `2px solid ${theme[buttonThemeName].borderColor}` ?? 'none'};
`;
export const StyledIconButton = styled.button`
  flex: 0 0;
  ${StyledGeneralButton}
  border: none;
  background-color: transparent;
`;
export const StyledLink = styled.button`
  ${StyledGeneralButton}
  background-color: transparent;
  color: ${({ theme, buttonThemeName }) => theme[buttonThemeName]?.color ?? theme.primaryColor};
`;

// Default Props
const generalDefaultProps = {
  direction: 'row',
  gap: '0',
  jc: 'center',
  ai: 'center',
  wrap: 'nowrap',
  borderRadius: '10px',
  width: '100%',
  fontWeight: 600,
  textTransform: 'uppercase',
  fontSize: 'var(--font-size-sm)'
};
StyledButton.defaultProps = {
  ...generalDefaultProps,
  padding: '1.2em 4em'
};
StyledIconButton.defaultProps = {
  ...generalDefaultProps,
  padding: '0.5em'
};
StyledLink.defaultProps = {
  ...generalDefaultProps
};

export default StyledButton;
