import styled from 'styled-components';

export const StyledIcon = styled.span`
  color: ${({ theme, iconThemeName, color }) => theme[iconThemeName]?.color ?? color};
  justify-self: ${({ justifySelf }) => justifySelf};
  align-self: ${({ alignSelf }) => alignSelf};
  grid-area: ${({ gridArea }) => gridArea};
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
  gridArea: 'unset'
};
