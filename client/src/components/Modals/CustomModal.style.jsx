import styled from 'styled-components';

export const StyledModalBox = styled.div`
  /* position */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* size */
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};

  /* styling */
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  box-shadow: 24px;
  border-radius: 7%;

  overflow: hidden;
`;
StyledModalBox.defaultProps = {
  width: '50vw',
  padding: '0',
  height: '60vh'
};