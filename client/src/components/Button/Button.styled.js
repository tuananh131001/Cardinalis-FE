import styled, { css } from 'styled-components';
import { BORDER_RADIUS_LOGIN_BUTTON } from '@/styles/Constant';

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
  font-weight: ${({ fontWeight }) => fontWeight};
  text-transform: ${({ textTransform }) => textTransform};
  letter-spacing: 1.2;

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

// Default Props
const generalDefaultProps = {
  direction: 'row',
  gap: '0',
  jc: 'center',
  ai: 'center',
  wrap: 'nowrap',
  borderRadius: BORDER_RADIUS_LOGIN_BUTTON,
  width: '100%',
  fontWeight: 500,
  textTransform: 'uppercase'
};
StyledButton.defaultProps = {
  ...generalDefaultProps,
  padding: '1.2em 4em'
};
StyledIconButton.defaultProps = {
  ...generalDefaultProps,
  padding: '0.5em'
};

export default StyledButton;
