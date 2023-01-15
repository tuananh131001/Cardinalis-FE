import styled from 'styled-components';

export const ProfileContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 1em 0;
  & > :last-child {
    flex: 1;
  }
`;
