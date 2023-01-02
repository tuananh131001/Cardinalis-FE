import styled from 'styled-components';

export const StyledModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => width};
  max-height: ${({ maxHeight }) => maxHeight};
`;
StyledModalBox.defaultProps = {
  width: '400px',
  maxHeight: '70vh'
};
