// https://stackoverflow.com/questions/66372725/conditionally-show-after-pseudo-element-react-and-styled-components
import styled, { css } from 'styled-components';

// General reusable buttons styles
const StyledGeneralButton = css`
  /* position */
  justify-self: ${({ justifySelf }) => justifySelf};
  align-self: ${({ alignSelf }) => alignSelf};
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
  aspect-ratio: ${({ aspectRatio }) => aspectRatio};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  /* font */
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-transform: ${({ textTransform }) => textTransform};
  letter-spacing: 2;
  line-height: 1.3;
  transform: ${({ transform }) => transform};
  &:hover {
    cursor: pointer;
  }
`;

// Styled Component
// Button with background and shape
const StyledButton = styled.button`
  ${StyledGeneralButton}
  background-color: ${({ theme, buttonThemeName }) => theme[buttonThemeName].backgroundColor};
  color: ${({ theme, buttonThemeName }) => theme[buttonThemeName].color};
  border: ${({ theme, buttonThemeName }) =>
    `2px solid ${theme[buttonThemeName].borderColor}` ?? 'none'};
  &:hover {
    filter: brightness(90%);
    background-color: ${({ theme, buttonThemeName }) => theme[buttonThemeName].hoverBckColor};
  }
`;
// Styled Icon Button
export const StyledIconButton = styled.button`
  flex: 0 0;
  ${StyledGeneralButton}
  border: none;
  background-color: transparent;
  color: inherit;
  &:hover {
    filter: brightness(140%) contrast(110%);
  }
`;
// Styled Link
export const StyledLink = styled.button`
  ${StyledGeneralButton}
  background-color: transparent;
  color: ${({ theme, buttonThemeName }) => theme[buttonThemeName]?.color ?? theme.primaryColor};

  ${({ hoverType }) => {
    switch (hoverType) {
      case 1:
        // only change color in text
        return css`
          &:hover {
            filter: brightness(140%) contrast(110%);
            text-decoration: ${({ textDecoration }) => textDecoration};
          }
        `;
      case 2:
        // have background color when hovering
        return css`
          &:hover {
            filter: none;
            background: ${({ theme, buttonThemeName }) => theme[buttonThemeName].hoverBckColor};
          }
        `;
      case 3:
        // have background and text color when hovering
        return css`
          &:hover {
            filter: none;
            background: ${({ theme, buttonThemeName }) => theme[buttonThemeName].hoverBckColor};
            color: ${({ theme, buttonThemeName }) => theme[buttonThemeName].hoverColor};
          }
          ${({ isActive }) =>
            isActive &&
            css`
              color: ${({ theme, buttonThemeName }) => theme[buttonThemeName].activeColor};
            `}
        `;
    }
  }}
  ${({ pseudoAfter }) => {
    switch (pseudoAfter) {
      case 1:
        // có thể có after block kiểu style khác nên pseudoAfter == 1
        // 1 for login and register nav
        return css`
          position: relative;
          &:after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%)
              ${({ pseudoAfterTransform }) => pseudoAfterTransform && pseudoAfterTransform};
            width: ${({ pseudoAfterWidth }) => pseudoAfterWidth};
            height: 4px;
            border-radius: 3px;
            background: ${({ theme, buttonThemeName }) =>
              theme[buttonThemeName]?.hoverColor ?? theme.primaryColor};
            transition: width 0.3s;
          }
          &:hover:after {
            width: ${({ hoverPseudoAfterWidth }) => hoverPseudoAfterWidth};
          }
        `;
    }
  }}
`;

// Default Props
const generalDefaultProps = {
  justifySelf: 'unset',
  alignSelf: 'unset',
  direction: 'row',
  gap: '0',
  jc: 'center',
  ai: 'center',
  wrap: 'nowrap',
  borderRadius: '10px',
  width: '100%',
  height: 'auto',
  fontWeight: 600,
  textTransform: 'uppercase',
  fontSize: 'var(--font-size-sm)',
  gridArea: 'unset',
  transform: 'none',
  aspectRatio: 'unset'
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
  pseudoAfterBorderRadius: '0',
  pseudoAfterTransform: 'scale(1)',
  hoverPseudoAfterWidth: '103%',
  hoverTransform: 'none',
  transform: 'translateY(0)',
  padding: '0',
  textDecoration: 'none',
  hoverType: 1
};

export default StyledButton;
