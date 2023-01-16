import styled from 'styled-components';

export const StyledModalBox = styled.div`
  /* position */
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transform: ${({ transform }) => transform};

  /* size */
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};

  /* styling */
  background-color: ${({ theme }) => theme.modal.backgroundColor};
  box-shadow: 3px 3px 10px 5px ${({ theme }) => theme.modal.boxShadow};
  /* background-color: ${({ theme }) => theme.mainBackgroundColor}; */
  /* box-shadow: 24px; */
  /* box-shadow: 100px; */
  border-radius: 30px;

  overflow: hidden;
`;
StyledModalBox.defaultProps = {
  width: '50vw',
  padding: '0',
  height: '60vh',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};
