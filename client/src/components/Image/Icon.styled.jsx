import styled from 'styled-components';

export const StyledIcon = styled.span`
  color: ${({ color }) => color};
  & svg {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
  }
`;
StyledIcon.defaultProps = {
  color: 'inherit',
  width: 'auto',
  height: 'auto'
};
