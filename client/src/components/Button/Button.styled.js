// https://stackoverflow.com/questions/66372725/conditionally-show-after-pseudo-element-react-and-styled-components
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
  grid-area: ${({ gridArea }) => gridArea};
  /* border + size */
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
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
  &:hover {
    opacity: 1;
    filter: brightness(140%) contrast(110%);
  }
`;
export const StyledLink = styled.button`
  ${StyledGeneralButton}
  background-color: transparent;
  color: ${({ theme, buttonThemeName }) => theme[buttonThemeName]?.color ?? theme.primaryColor};
  transform: ${({ transform }) => transform};
  &:hover {
    opacity: 1;
    filter: brightness(140%) contrast(110%);
  }
  ${({ pseudoAfter }) =>
    pseudoAfter == 1 &&
    // có thể có after block kiểu style khác nên pseudoAfter == 1
    css`
      position: relative;
      &:after {
        content: '';
        display: block;
        width: ${({ pseudoAfterWidth }) => pseudoAfterWidth};
        height: 3px;
        border-radius: 3px;
        background: ${({ theme, buttonThemeName }) =>
          theme[buttonThemeName]?.color ?? theme.primaryColor};
        transition: width 0.3s;
        position: absolute;
        bottom: -7px;
      }
      &:hover:after {
        width: 105%;
      }
    `}
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
  height: "auto",
  fontWeight: 600,
  textTransform: 'uppercase',
  fontSize: 'var(--font-size-sm)',
  gridArea: 'unset'
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
  ...generalDefaultProps,
  pseudoAfterWidth: '0',
  transform: 'translateY(0)'
};

export default StyledButton;
