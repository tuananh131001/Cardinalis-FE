import styled from 'styled-components';

export const StyledIcon = styled.span`
  /* style */
  color: ${({ theme, iconThemeName, color }) => theme[iconThemeName]?.color ?? color};
  background-color: ${({ theme, iconThemeName, backgroundColor }) => theme[iconThemeName]?.backgroundColor ?? backgroundColor};
  border-radius: ${({borderRadius}) => borderRadius};

  justify-self: ${({ justifySelf }) => justifySelf};
  align-self: ${({ alignSelf }) => alignSelf};
  grid-area: ${({ gridArea }) => gridArea};
  /* position */
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transform: ${({ transform }) => transform};

  font-size: ${({ fontSize }) => fontSize};
  & svg {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  }
`;
StyledIcon.defaultProps = {
  color: 'inherit',
  width: 'auto',
  height: 'auto',
  justifySelf: 'unset',
  alignSelf: 'unset',
  gridArea: 'unset',
  position: 'unset',
  top: 'unset',
  left: 'unset',
  transform: 'unset',
  fontSize: 'inherit',
  borderRadius: '0',
  backgroundColor: 'transparent'
};
