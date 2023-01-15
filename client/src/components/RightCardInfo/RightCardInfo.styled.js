import styled from 'styled-components';

const RightCardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  gap: 1em;
  justify-content: center;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.homeInput.backgroundColor};
  border-radius: 4px;
  overflow: scroll;
`;

export default RightCardInfoWrapper;
