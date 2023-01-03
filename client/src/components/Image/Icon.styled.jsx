import styled, { css } from 'styled-components';
export const StyledIconContainer = styled.div`
  /* position */
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transform: ${({ transform }) => transform};
  /* z-index */
  z-index: ${({ zIndex }) => zIndex};
  background-color: ${({ backgroundColor }) => backgroundColor};
  /* color: ${({ color }) => color}; */
  opacity: ${({ opacity }) => opacity};
`;
export const StyledIcon = styled.span`
  /* style */
  color: ${({ theme, iconThemeName, color }) => theme[iconThemeName]?.color ?? color};
  background-color: ${({ theme, iconThemeName, backgroundColor }) =>
    theme[iconThemeName]?.backgroundColor ?? backgroundColor};

  justify-self: ${({ justifySelf }) => justifySelf};
  align-self: ${({ alignSelf }) => alignSelf};
  grid-area: ${({ gridArea }) => gridArea};
  /* position */
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transform: ${({ transform }) => transform};
  /* z-index */
  z-index: 1;
  /* display */
  ${({ display }) =>
    display &&
    css`
      display: ${display};
      justify-content: ${({ jc }) => jc};
      align-items: ${({ ai }) => ai};
      gap: ${({ gap }) => gap};
    `}
  /* size */
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  ${({ isHover }) =>
    isHover &&
    css`
      &:hover {
        cursor: pointer;
        background-color: ${({ theme, iconThemeName }) => theme[iconThemeName]?.hoverBckColor};
        filter: brightness(120%) saturate(120%);
      }
    `} /* & svg {
    
  } */
  aspect-ratio: ${({ aspectRatio }) => aspectRatio};
`;
StyledIconContainer.defaultProps = {
  position: 'unset',
  top: 'unset',
  left: 'unset',
  transform: 'unset',
  zIndex: 'unset',
  backgroundColor: 'transparent',
  opacity: '1'
};
StyledIcon.defaultProps = {
  color: 'inherit',
  width: 'auto',
  height: 'auto',
  justifySelf: 'unset',
  alignSelf: 'unset',
  jc: 'center',
  ai: 'center',
  gap: 'unset',
  gridArea: 'unset',
  position: 'unset',
  top: 'unset',
  left: 'unset',
  transform: 'unset',
  fontSize: 'inherit',
  borderRadius: '0',
  backgroundColor: 'transparent',
  padding: '0',
  aspectRatio: 'unset'
};
